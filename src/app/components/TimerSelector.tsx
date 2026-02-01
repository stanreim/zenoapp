import { useState, useEffect } from 'react';

interface TimerSelectorProps {
  onSelect: (minutes: number) => void;
  onCancel: () => void;
}

export function TimerSelector({ onSelect, onCancel }: TimerSelectorProps) {
  const durations = [15, 30, 45, 60]; // minutes

  // Responsive sizing
  const getButtonSize = () => {
    if (typeof window !== 'undefined') {
      const vw = window.innerWidth;
      
      if (vw < 640) {
        return 'text-3xl sm:text-4xl'; // Mobile
      } else if (vw < 1024) {
        return 'text-5xl'; // Tablet
      }
      return 'text-6xl'; // Desktop
    }
    return 'text-6xl';
  };

  const [buttonSize, setButtonSize] = useState(getButtonSize());

  useEffect(() => {
    const handleResize = () => {
      setButtonSize(getButtonSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCancel();
        }
      }}
      style={{
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
        zIndex: 9999,
      }}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
        <div className="text-white/60 text-xs sm:text-sm tracking-widest font-light mb-2 sm:mb-4">
          SELECT DURATION
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {durations.map((duration) => (
            <button
              key={duration}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(duration);
              }}
              className={`${buttonSize} font-extralight text-white/80 hover:text-white hover:scale-110 transition-all duration-200 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5`}
              style={{
                backdropFilter: 'blur(10px)',
              }}
            >
              {duration}
            </button>
          ))}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCancel();
          }}
          className="mt-4 sm:mt-6 text-white/40 hover:text-white/60 text-xs sm:text-sm tracking-widest font-light transition-colors duration-200"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
