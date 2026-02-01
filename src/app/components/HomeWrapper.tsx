import { ReactNode, cloneElement, isValidElement } from 'react';

interface HomeWrapperProps {
  onTimerClick: () => void;
  isTimerActive: boolean;
  isPlaying: boolean;
  volume: number;
  onVolumePlayPause: () => void;
  onVolumeChange: (volume: number) => void;
  onVolumeLongPress?: () => void;
  children: ReactNode;
}

export function HomeWrapper({ onTimerClick, isTimerActive, isPlaying, volume, onVolumePlayPause, onVolumeChange, onVolumeLongPress, children }: HomeWrapperProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if the click was on the Timer button or its children
    const timerButton = target.closest('[data-name="Timer"]');
    
    if (timerButton) {
      e.stopPropagation();
      onTimerClick();
    }
  };

  // Clone children and inject all the props
  const childrenWithProps = isValidElement(children)
    ? cloneElement(children, { 
        isTimerActive,
        isPlaying,
        volume,
        onVolumePlayPause,
        onVolumeChange,
        onVolumeLongPress
      } as any)
    : children;

  return (
    <div onClick={handleClick} className="w-full h-full relative" style={{ zIndex: 10 }}>
      {childrenWithProps}
    </div>
  );
}
