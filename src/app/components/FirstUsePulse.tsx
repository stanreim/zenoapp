import { useEffect, useState } from 'react';

export function FirstUsePulse() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in
    const fadeInTimer = setTimeout(() => setOpacity(1), 100);

    // Fade out after 3 seconds
    const fadeOutTimer = setTimeout(() => setOpacity(0), 3000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-white/20"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      />
    </div>
  );
}
