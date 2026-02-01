import { useState, useEffect } from 'react';

interface LiveClockProps {
  isTimerActive?: boolean;
  timeRemaining?: number | null; // in milliseconds
}

export function LiveClock({ isTimerActive, timeRemaining }: LiveClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (isTimerActive) return; // Don't update internal time if timer is active

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerActive]);

  let hours, minutes, seconds;

  if (isTimerActive && timeRemaining !== null && timeRemaining !== undefined) {
    // Countdown logic
    const totalSeconds = Math.ceil(timeRemaining / 1000);
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = totalSeconds % 60;
  } else {
    // Standard clock logic
    hours = time.getHours() % 12;
    minutes = time.getMinutes();
    seconds = time.getSeconds();
  }

  // Calculate angles (0 degrees = 12 o'clock position)
  // For countdown:
  // Minute hand: 0-60 minutes map to 0-360 degrees
  // Hour hand: 0-12 hours map to 0-360 degrees (usually not used much for short timers but good to have)
  
  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = (minutes * 6) + (seconds * 0.1);

  // Center is at the center of the Ticker component (responsive)
  // For mobile: 30px / 2 = 15px, for desktop: 42.793 / 2 = 21.3965px
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const centerX = isMobile ? 15 : 21.3965;
  const centerY = isMobile ? 15 : 21.3965;

  // Responsive hand sizes
  const hourHandWidth = isMobile ? 43.75 : 62.5;
  const minuteHandWidth = isMobile ? 81.66 : 116.66;
  const handHeight = isMobile ? 1.875 : 2.675;

  return (
    <>
      {/* Hour hand */}
      <div 
        className="absolute origin-left"
        style={{ 
          left: `${centerX}px`,
          top: `${centerY}px`,
          transform: `rotate(${hourAngle}deg)`,
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth transition
        }}
      >
        <div className="bg-black" style={{ height: `${handHeight}px`, width: `${hourHandWidth}px` }} />
      </div>
      
      {/* Minute hand */}
      <div 
        className="absolute origin-left"
        style={{ 
          left: `${centerX}px`,
          top: `${centerY}px`,
          transform: `rotate(${minuteAngle}deg)`,
          transition: 'transform 1s linear', // Linear for seconds/continuous movement
        }}
      >
        <div className="bg-black" style={{ height: `${handHeight}px`, width: `${minuteHandWidth}px` }} />
      </div>
    </>
  );
}
