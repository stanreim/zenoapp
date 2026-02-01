import { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface AudioPlayerProps {
  src: string | null;
  isPlaying: boolean;
  moodKey: number;
  volume?: number;
}

export function AudioPlayer({ src, isPlaying, moodKey, volume: externalVolume = 0.7 }: AudioPlayerProps) {
  // Web Audio API refs (for generated audio)
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);
  const masterGainRef = useRef<GainNode | null>(null);
  
  // ReactPlayer state
  const [volume, setVolume] = useState(0);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [playerKey, setPlayerKey] = useState(0);

  // Reset player ready state and force remount when src changes
  useEffect(() => {
    setPlayerReady(false);
    setVolume(0);
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
    setPlayerKey(prev => prev + 1); // Force ReactPlayer to remount
  }, [src]);

  // Start fade in when player becomes ready and we're supposed to be playing
  useEffect(() => {
    if (src && playerReady && isPlaying && volume === 0) {
      fadeIn();
    }
  }, [playerReady, src]);

  // Handle play/pause and fading for External Audio (ReactPlayer)
  useEffect(() => {
    if (src === null) return;
    
    // Only start fading in if player is ready
    if (isPlaying && playerReady) {
      fadeIn();
    } else if (!isPlaying) {
      fadeOut();
    }
  }, [isPlaying, src, playerReady]);

  // Handle volume changes
  useEffect(() => {
    if (src === null) return;
    // ReactPlayer volume is handled via prop
  }, [volume, src]);

  // Update internal volume when external volume changes (if playing)
  useEffect(() => {
    if (isPlaying && !fadeIntervalRef.current) {
      setVolume(externalVolume);
    }
  }, [externalVolume, isPlaying]);

  const fadeIn = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    let vol = 0;
    setVolume(vol);

    fadeIntervalRef.current = setInterval(() => {
      vol += 0.02;
      if (vol >= externalVolume) {
        vol = externalVolume;
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
        }
      }
      setVolume(vol);
    }, 50);
  };

  const fadeOut = (callback?: () => void) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    let vol = volume;

    fadeIntervalRef.current = setInterval(() => {
      vol -= 0.02;
      if (vol <= 0) {
        vol = 0;
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
        }
        if (callback) callback();
      }
      setVolume(vol);
    }, 50);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      
      oscillatorsRef.current.forEach(osc => {
        try {
          osc.stop();
        } catch (e) {
          // Ignore if already stopped
        }
      });
    };
  }, []);

  // For generated audio playback - initialize audio context
  useEffect(() => {
    if (src !== null) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      masterGainRef.current = audioContextRef.current.createGain();
      masterGainRef.current.connect(audioContextRef.current.destination);
      masterGainRef.current.gain.value = 0;
    }
  }, [src]);

  // For generated audio playback - create oscillators
  useEffect(() => {
    if (src !== null) return;
    if (!audioContextRef.current || !masterGainRef.current) return;

    // Stop existing oscillators
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Ignore if already stopped
      }
    });
    oscillatorsRef.current = [];
    gainNodesRef.current = [];

    // Define mood frequencies and characteristics
    const moodConfigs = [
      // Mood 0: Blue ocean calm - deep, flowing tones
      [
        { freq: 110, gain: 0.15, detune: 0 },
        { freq: 165, gain: 0.12, detune: 2 },
        { freq: 220, gain: 0.08, detune: -2 },
      ],
      // Mood 1: Green forest - earthy, balanced
      [
        { freq: 130, gain: 0.14, detune: 0 },
        { freq: 195, gain: 0.11, detune: 3 },
        { freq: 260, gain: 0.07, detune: -3 },
      ],
      // Mood 2: Red sunset warmth - rich, warm tones
      [
        { freq: 98, gain: 0.16, detune: 0 },
        { freq: 147, gain: 0.13, detune: -2 },
        { freq: 196, gain: 0.09, detune: 2 },
      ],
      // Mood 3: Purple night - mysterious, deeper
      [
        { freq: 87, gain: 0.17, detune: 0 },
        { freq: 130, gain: 0.14, detune: 4 },
        { freq: 174, gain: 0.10, detune: -4 },
      ],
    ];

    const config = moodConfigs[moodKey];

    // Create oscillators for current mood
    config.forEach(({ freq, gain, detune }) => {
      const osc = audioContextRef.current!.createOscillator();
      const gainNode = audioContextRef.current!.createGain();

      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.detune.value = detune;

      gainNode.gain.value = 0;
      osc.connect(gainNode);
      gainNode.connect(masterGainRef.current!);

      osc.start();

      oscillatorsRef.current.push(osc);
      gainNodesRef.current.push(gainNode);

      // Fade in individual oscillator
      if (isPlaying) {
        gainNode.gain.linearRampToValueAtTime(
          gain,
          audioContextRef.current!.currentTime + 2
        );
      }
    });
    
    // Cleanup function: stop oscillators when this effect re-runs (e.g. mood change or src change)
    return () => {
        oscillatorsRef.current.forEach(osc => {
            try { osc.stop(); } catch(e) {}
        });
        oscillatorsRef.current = [];
    };
  }, [moodKey, src, isPlaying]);

  // For generated audio playback - handle play/pause
  useEffect(() => {
    if (src !== null) return;
    if (!audioContextRef.current || !masterGainRef.current) return;

    const currentTime = audioContextRef.current.currentTime;

    if (isPlaying) {
      // Resume audio context if suspended
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      // Fade in master gain
      masterGainRef.current.gain.cancelScheduledValues(currentTime);
      masterGainRef.current.gain.setValueAtTime(
        masterGainRef.current.gain.value,
        currentTime
      );
      masterGainRef.current.gain.linearRampToValueAtTime(1, currentTime + 2);
    } else {
      // Fade out master gain
      masterGainRef.current.gain.cancelScheduledValues(currentTime);
      masterGainRef.current.gain.setValueAtTime(
        masterGainRef.current.gain.value,
        currentTime
      );
      masterGainRef.current.gain.linearRampToValueAtTime(0, currentTime + 2);
    }
  }, [isPlaying, src]);

  return (
    <>
      {src && (
        <div style={{ position: 'fixed', bottom: 0, right: 0, opacity: 0, pointerEvents: 'none', width: '1px', height: '1px', zIndex: -1000, overflow: 'hidden' }}>
          <ReactPlayer
            key={playerKey}
            url={src}
            playing={isPlaying && playerReady}
            volume={volume}
            width="100%"
            height="100%"
            loop={true}
            onReady={() => {
              console.log("ReactPlayer ready, URL:", src);
              setPlayerReady(true);
            }}
            onError={(e) => {
              console.error("ReactPlayer Error:", e, "URL:", src);
              setPlayerReady(false);
            }}
            onPlay={() => console.log("ReactPlayer playing")}
            onPause={() => console.log("ReactPlayer paused")}
            config={{
              file: {
                forceAudio: true,
                attributes: {
                  crossOrigin: 'anonymous'
                }
              },
              soundcloud: {
                options: { 
                    auto_play: true,
                    buying: false,
                    sharing: false,
                    download: false,
                    show_artwork: false,
                    show_playcount: false,
                    show_user: false,
                    visual: false 
                }
              },
              youtube: {
                playerVars: { showinfo: 0, controls: 0 }
              }
            }}
          />
        </div>
      )}
    </>
  );
}
