import { useState, useEffect, useRef } from 'react';
import { AudioPlayer } from '@/app/components/AudioPlayer';
import { TimerSelector } from '@/app/components/TimerSelector';
import { HomeWrapper } from '@/app/components/HomeWrapper';
import { SoundPickerModal } from '@/app/components/SoundPickerModal';
import { Waves } from '@/components/ui/wave-background';
import BlurTextAnimation from '@/components/ui/blur-text-animation';
import Home from '@/imports/Home-7-86';
import mood2Image from '@/assets/d0fce7ad287e0b2ca22377f22ff629fcdd4a6726.png';
import { hapticSounds } from '@/app/hooks/useHapticSound';

interface Song {
  id: string;
  name: string;
  duration: string;
  audioUrl: string;
  imageUrl?: string;
  isCustom?: boolean;
}

// Define the structure for mood themes
type MoodTheme = 
  | { type: 'waves'; bg: string; stroke: string }
  | { type: 'image'; src: string; bg: string };

export default function App() {
  // Loading State
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMood, setCurrentMood] = useState(0); // 0-3
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'color'>('light');
  const [sessionLength, setSessionLength] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [showTimerSelector, setShowTimerSelector] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);
  const [volume, setVolume] = useState(0.7); // Default volume 70%
  const [showSoundPicker, setShowSoundPicker] = useState(false);
  const [customSongs, setCustomSongs] = useState<Song[]>([]);
  const [selectedSongId, setSelectedSongId] = useState<string>('mood-0');
  const [showVolumeFeedback, setShowVolumeFeedback] = useState(false);
  const volumeFeedbackTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Gestures
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressRef = useRef(false);

  const handleLoadingComplete = () => {
    // Start fading out loader
    setIsLoading(false);
    // Start fading in content slightly after
    setTimeout(() => {
        setShowContent(true);
    }, 500);
  };

  // Background Theme Configurations based on Mood
  const moodThemes: MoodTheme[] = [
    { type: 'waves', bg: "#fcfcfc", stroke: "rgba(90, 90, 90, 0.18)" }, // Mood 0: Default White/Gray
    { type: 'waves', bg: "#f0fdf4", stroke: "rgba(22, 163, 74, 0.15)" }, // Mood 1: Green/Nature
    { type: 'image', src: mood2Image, bg: "#f5f5f5" },                   // Mood 2: Custom Image (Fog/Cloud)
    { type: 'waves', bg: "#faf5ff", stroke: "rgba(147, 51, 234, 0.15)" }  // Mood 3: Purple/Night
  ];

  const moods = [
    {
      video: '/assets/mood-0.mp4',
      audio: 'https://www.dropbox.com/scl/fi/s6jert3fai3mhx8jio2e3/mood-0.mp3?rlkey=lthz8hr75wqb7ektd49eg62vz&st=mf5lpabu&dl=1',
    },
    {
      video: '/assets/mood-1.mp4',
      audio: null, // Generated
    },
    {
      video: '/assets/mood-2.mp3',
      audio: null, // Generated
    },
    {
      video: '/assets/mood-3.mp4',
      audio: null, // Generated
    },
  ];

  // Create song list for picker
  const allSongs: Song[] = [
    {
      id: 'mood-0',
      name: 'Ambient Focus',
      duration: '∞',
      audioUrl: moods[0].audio || '',
    },
    {
      id: 'mood-1',
      name: 'Deep Concentration',
      duration: '∞',
      audioUrl: moods[1].audio || '',
    },
    {
      id: 'mood-2',
      name: 'Calm Clarity',
      duration: '∞',
      audioUrl: moods[2].audio || '',
    },
    {
      id: 'mood-3',
      name: 'Night Flow',
      duration: '∞',
      audioUrl: moods[3].audio || '',
    },
    ...customSongs,
  ];

  // Update time remaining
  useEffect(() => {
    if (!isPlaying || !startTime || !sessionLength) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = sessionLength - elapsed;

      if (remaining <= 0) {
        setTimeRemaining(0);
        setSessionEnded(true);
        setIsPlaying(false);
        clearInterval(interval);
      } else {
        setTimeRemaining(remaining);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, startTime, sessionLength]);

  // Background opacity removed - no backgrounds in focus mode

  const handleTimerButtonClick = () => {
    if (!isTimerActive) {
      setIsTimerActive(true);
      setShowTimerSelector(true);
    } else {
      // Stop button - reset everything
      setIsTimerActive(false);
      setIsPlaying(false);
      setSessionLength(null);
      setStartTime(null);
      setTimeRemaining(null);
      setSessionEnded(false);
    }
  };

  const handleClockClick = () => {
    if (!isTimerActive) return;
    
    // Cycle to next mood (0-3)
    const nextMood = (currentMood + 1) % moods.length;
    setCurrentMood(nextMood);
    
    // Only update song if currently on a mood song (not custom)
    if (selectedSongId.startsWith('mood-')) {
      setSelectedSongId(`mood-${nextMood}`);
    }
  };

  const handlePointerDown = () => {
    if (!isTimerActive) return;
    isLongPressRef.current = false;
    if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = setTimeout(() => {
      isLongPressRef.current = true;
      hapticSounds.click();
      setShowSoundPicker(true);
    }, 800); // 800ms for long press
  };

  const handlePointerUp = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
    }
  };

  const handleScreenClick = (e: React.MouseEvent) => {
    if (isLoading) return; // Ignore clicks during loading

    // Don't toggle play/pause if clicking on UI elements or timer selector
    if (showTimerSelector) return;
    
    // Ignore click if it was a long press
    if (isLongPressRef.current) {
       isLongPressRef.current = false;
       return;
    }
    
    const target = e.target as HTMLElement;
    
    if (target.closest('[data-name="Ticker"]')) return;

    if (target.closest('[data-name="Timer"]') || 
        target.closest('[data-name="Toggle"]') ||
        target.closest('[data-name="Greeting"]')) {
      return;
    }
    
    // Also ignore clicks on mood switcher
    if (target.closest('.mood-switcher')) return;

    if (isTimerActive && sessionLength) {
      // Toggle play/pause
      setIsPlaying(!isPlaying);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isLoading) return;
    if (!isTimerActive || showTimerSelector) return;
    
    // Normalize delta
    const delta = e.deltaY * -0.001; 
    const newVolume = Math.min(1, Math.max(0, volume + delta));
    
    setVolume(newVolume);
    setShowVolumeFeedback(true);
    
    if (volumeFeedbackTimerRef.current) clearTimeout(volumeFeedbackTimerRef.current);
    volumeFeedbackTimerRef.current = setTimeout(() => setShowVolumeFeedback(false), 1500);
  };

  const handleTimerSelected = (minutes: number) => {
    setSessionLength(minutes * 60 * 1000);
    setStartTime(Date.now());
    setTimeRemaining(minutes * 60 * 1000);
    setShowTimerSelector(false);
    setIsPlaying(true);
  };

  const handleVolumePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleToggleDarkMode = () => {
    // Cycle through: light -> dark -> color -> light
    setThemeMode(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'color';
      return 'light';
    });
  };

  const handleOpenSoundPicker = () => {
    hapticSounds.click();
    setShowSoundPicker(true);
  };

  const handleCloseSoundPicker = () => {
    setShowSoundPicker(false);
  };

  const handleAddSong = (song: Song) => {
    setCustomSongs([...customSongs, song]);
    setSelectedSongId(song.id);
    setShowSoundPicker(false);
  };

  const handleSelectSong = (songId: string) => {
    setSelectedSongId(songId);
    setShowSoundPicker(false);
  };

  // Get current audio source based on selected song
  const getCurrentAudioSource = () => {
    const selectedSong = allSongs.find(song => song.id === selectedSongId);
    if (selectedSong) {
      // If audioUrl is empty or null, return null for generative audio
      if (!selectedSong.audioUrl || selectedSong.audioUrl.trim() === '') {
        console.log('Using generative audio for:', selectedSong.name);
        return null;
      }
      // Return the audioUrl
      console.log('Playing audio URL:', selectedSong.audioUrl, 'for song:', selectedSong.name);
      return selectedSong.audioUrl;
    }
    // Fallback to current mood audio
    console.log('Fallback to mood audio:', moods[currentMood].audio);
    return moods[currentMood].audio;
  };

  return (
    <div 
      className={`fixed inset-0 overflow-hidden transition-colors duration-500 ${
        themeMode === 'dark' ? 'bg-[#111]' : 
        themeMode === 'color' ? 'bg-[#56329d]' : 
        'bg-[#ededed]'
      }`} 
      onClick={handleScreenClick}
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      onWheel={handleWheel}
    >
      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 z-[100] transition-opacity duration-1000 ease-in-out ${
          themeMode === 'dark' ? 'bg-[#111]' : 
          themeMode === 'color' ? 'bg-[#56329d]' : 
          'bg-[#ededed]'
        } ${isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {isLoading && (
            <BlurTextAnimation 
                text="Where attention goes, energy flows." 
                loop={false}
                onComplete={handleLoadingComplete}
                className={
                  themeMode === 'dark' ? 'bg-[#111]' : 
                  themeMode === 'color' ? 'bg-[#56329d]' : 
                  'bg-[#ededed]'
                }
                textColor={themeMode === 'light' ? 'text-black/80' : 'text-white/80'}
                fontSize="text-2xl md:text-3xl font-light tracking-widest"
            />
        )}
      </div>

      {/* Main Content Container - Fades in after loading */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Background Layer - Hidden in focus mode */}

        <AudioPlayer
          src={getCurrentAudioSource()}
          isPlaying={isPlaying}
          moodKey={currentMood}
          volume={volume}
        />

        {/* Home UI - always visible */}
        <div
          style={{
            opacity: showSoundPicker ? 0 : 1,
            transition: 'opacity 0.4s ease-in-out',
            pointerEvents: showSoundPicker ? 'none' : 'auto',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <HomeWrapper 
          onTimerClick={handleTimerButtonClick} 
          isTimerActive={isTimerActive}
          isPlaying={isPlaying}
          volume={volume}
          onVolumePlayPause={handleVolumePlayPause}
          onVolumeChange={handleVolumeChange}
          onVolumeLongPress={handleOpenSoundPicker}
        >
          <Home 
            isTimerActive={isTimerActive}
            isPlaying={isPlaying}
            volume={volume}
            onVolumePlayPause={handleVolumePlayPause}
            onVolumeChange={handleVolumeChange}
            onVolumeLongPress={handleOpenSoundPicker}
            timeRemaining={timeRemaining}
            onClockClick={handleClockClick}
            themeMode={themeMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
        </HomeWrapper>
        </div>

        {/* Timer selector overlay */}
        {showTimerSelector && (
          <TimerSelector
            onSelect={handleTimerSelected}
            onCancel={() => {
              setShowTimerSelector(false);
              setIsTimerActive(false);
            }}
          />
        )}

        {/* Sound picker modal */}
        {showSoundPicker && (
          <SoundPickerModal
            isOpen={showSoundPicker}
            onClose={handleCloseSoundPicker}
            songs={allSongs}
            onAddSong={handleAddSong}
            onSelectSong={handleSelectSong}
            selectedSongId={selectedSongId}
          />
        )}

        {/* Click feedback ripple - removed for simplicity */}

        {/* Play/Pause indicator - removed for simplicity */}

        {/* Volume Feedback Indicator */}
        {showVolumeFeedback && isTimerActive && !sessionEnded && (
          <div 
             className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300 z-50"
             style={{ opacity: showVolumeFeedback ? 1 : 0 }}
          >
             <div className={`backdrop-blur-md px-6 py-2 rounded-full shadow-sm text-sm font-medium tracking-wide transition-colors duration-500 ${themeMode === 'light' ? 'bg-white/80 text-gray-600' : 'bg-white/20 text-white'}`}>
               VOLUME {Math.round(volume * 100)}%
             </div>
          </div>
        )}

        {/* Mood Switcher - removed for simplicity */}
      </div>


    </div>
  );
}
