import { useEffect, useState } from 'react';
import { Mood2ThreeShaderBackground } from '@/app/components/Mood2ThreeShaderBackground';

interface BackgroundVideoProps {
  src: string;
  isVisible: boolean;
  isPlaying: boolean;
  progress: number; // 0-1, representing time remaining
}

export function BackgroundVideo({
  src,
  isVisible,
  isPlaying,
  progress,
}: BackgroundVideoProps) {
  const [opacity, setOpacity] = useState(0);
  const [currentMood, setCurrentMood] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Determine mood from src
  useEffect(() => {
    const moodMatch = src.match(/mood-(\d+)/);
    if (moodMatch) {
      const newMood = parseInt(moodMatch[1]);
      if (newMood !== currentMood) {
        setIsTransitioning(true);
        setCurrentMood(newMood);
        setTimeout(() => setIsTransitioning(false), 2000);
      }
    }
  }, [src, currentMood]);

  // Handle visibility fade
  useEffect(() => {
    if (isVisible) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [isVisible]);

  // Mood-specific color overlays
  const moods = [
    {
      // Mood 0: Calm Ocean Blues
      overlay: 'rgba(15, 52, 96, 0.3)',
    },
    {
      // Mood 1: Forest Greens
      overlay: 'rgba(45, 106, 79, 0.3)',
    },
    {
      // Mood 2: Sunset Warmth
      overlay: 'rgba(208, 0, 0, 0.25)',
    },
    {
      // Mood 3: Purple Night
      overlay: 'rgba(90, 24, 154, 0.3)',
    },
  ];

  const mood = moods[currentMood];

  // Calculate visual effects based on progress
  const saturation = 100 - (1 - progress) * 50; // 100% to 50%
  const contrast = 100 - (1 - progress) * 30; // 100% to 70%
  const blur = (1 - progress) * 3; // 0px to 3px

  return (
    <>
      {/* Mood 2 Three.js Shader Background */}
      {currentMood === 2 && isVisible && (
        <div
          className="absolute inset-0"
          style={{
            opacity: opacity,
            transition: isTransitioning
              ? 'opacity 2s ease-in-out'
              : 'opacity 1s ease-in-out',
          }}
        >
          <Mood2ThreeShaderBackground timeProgress={1 - progress} />
        </div>
      )}
      
      {/* Base background image for other moods */}
      {currentMood !== 2 && (
        <img
          src="https://images.unsplash.com/photo-1762154401156-b8bbfa9d5ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNhbG0lMjBncmFkaWVudCUyMGJsdXJ8ZW58MXx8fHwxNzY5NzY4NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: opacity,
            filter: `saturate(${saturation}%) contrast(${contrast}%) blur(${blur}px)`,
            transition: isTransitioning
              ? 'opacity 2s ease-in-out'
              : 'opacity 1s ease-in-out, filter 0.5s ease-out',
          }}
        />
      )}

      {/* Color overlay for mood (only for non-shader moods) */}
      {currentMood !== 2 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: mood.overlay,
            opacity: opacity,
            transition: 'background-color 2s ease-in-out, opacity 1s ease-in-out',
          }}
        />
      )}

      {/* White overlay for session end */}
      <div
        className="absolute inset-0 bg-white pointer-events-none"
        style={{
          opacity: isVisible ? 0 : 1,
          transition: 'opacity 3s ease-in-out',
        }}
      />
    </>
  );
}
