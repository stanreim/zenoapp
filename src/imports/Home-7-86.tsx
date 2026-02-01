// Home component with 3-mode theme system (light/dark/color)
import svgPaths from "./svg-e0ybop1bd5";
import svgPathsNew from "./svg-s3q89le1fv";
import { LiveClock } from "@/app/components/LiveClock";
import { DynamicGreeting } from "@/app/components/DynamicGreeting";
import { VolumeControl } from "@/app/components/VolumeControl";
import { TodoList } from "@/app/components/TodoList";

function Greeting({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="content-stretch flex items-start p-[24px] relative shrink-0 w-[321px]" data-name="Greeting">
      <div className="relative shrink-0 w-[273px]">
        <DynamicGreeting themeMode={themeMode} />
      </div>
    </div>
  );
}

function Focus1({ isOn }: { isOn?: boolean }) {
  // Knob animation: Left (0) to Right (41px)
  // 89 (width) - 40 (knob) - 4 (left margin) - 4 (right margin) = 41px travel
  const knobStyle = {
    transform: isOn ? 'translateX(41px)' : 'translateX(0)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
  };

  return (
    <div className="h-[48px] relative shrink-0 w-[89px]" data-name="Focus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 48">
        <g filter="url(#filter0_ii_29_58)" id="Focus">
          <g clipPath="url(#clip0_29_58)">
            <path d={svgPathsNew.p9367000} fill="var(--fill-0, #DCDCDC)" />
            <g 
              filter="url(#filter1_d_29_58)" 
              id="Toggle" 
              style={knobStyle}
            >
              <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" x="4" y="4" />
              <rect height="38" rx="19" stroke="url(#paint0_linear_29_58)" strokeWidth="2" width="38" x="5" y="5" />
            </g>
            <circle cx="66.5" cy="24" id="Ellipse 36" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_ii_29_58" width="91" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="dilate" radius="7" result="effect1_innerShadow_29_58" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_29_58" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="effect2_innerShadow_29_58" />
            <feOffset dx="2" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="effect1_innerShadow_29_58" mode="normal" result="effect2_innerShadow_29_58" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter1_d_29_58" width="50" x="-1" y="3">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="erode" radius="3" result="effect1_dropShadow_29_58" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.54 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_29_58" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_29_58" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_29_58" x1="24" x2="24" y1="4" y2="44">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#C4C4C4" />
          </linearGradient>
          <clipPath id="clip0_29_58">
            <path d={svgPathsNew.p9367000} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimerSwitch({ isTimerActive }: { isTimerActive?: boolean }) {
  // data-name="Timer" allows HomeWrapper to capture clicks and trigger the timer
  return (
    <div className="content-stretch flex h-[208px] items-start justify-center p-[24px] relative shrink-0 w-[342px] cursor-pointer" data-name="Timer">
      <Focus1 isOn={isTimerActive} />
    </div>
  );
}

function Push({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  // Animate button position: light (left) -> dark/color (left, stays)
  const buttonStyle = {
    transform: 'translateX(0)', // Always stays left
    transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)'
  };

  return (
    <div 
      className={`-translate-y-1/2 absolute left-[4px] rounded-[88px] size-[40px] top-1/2 transition-all duration-500 ${
        themeMode === 'light' ? 'bg-white shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)]' : 
        themeMode === 'color' ? 'bg-[#a079ed] border-2 border-white shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)]' : 
        'bg-[#4f4f4f] border-2 border-[#8c8c8c] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)]'
      }`} 
      data-name="Push"
      style={buttonStyle}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function ChangeTheme({ themeMode, onToggle }: { themeMode?: 'light' | 'dark' | 'color'; onToggle?: () => void }) {
  return (
    <div 
      onClick={onToggle}
      className={`overflow-clip relative rounded-[112px] shrink-0 size-[48px] cursor-pointer hover:opacity-80 transition-all duration-500 ${
        themeMode === 'dark' ? 'bg-[#272727]' : 'bg-[#dcdcdc]'
      }`} 
      data-name="Change Theme"
    >
      <Push themeMode={themeMode} />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_0px_12px_-3px_rgba(0,0,0,0.12),inset_0px_8px_9px_-7px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ThemeToggle({ themeMode, onToggle }: { themeMode?: 'light' | 'dark' | 'color'; onToggle?: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-end p-[24px] relative shrink-0 w-[321px]" data-name="Toggle">
      <ChangeTheme themeMode={themeMode} onToggle={onToggle} />
    </div>
  );
}

function Top({ isTimerActive, themeMode, onToggleDarkMode }: { isTimerActive?: boolean; themeMode?: 'light' | 'dark' | 'color'; onToggleDarkMode?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-full" data-name="Top">
      <div style={{ opacity: isTimerActive ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}>
        <Greeting themeMode={themeMode} />
      </div>
      <TimerSwitch isTimerActive={isTimerActive} />
      <ThemeToggle themeMode={themeMode} onToggle={onToggleDarkMode} />
    </div>
  );
}

function Ticker2({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return <div className={`-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[88px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.54),3px_12px_27px_0px_rgba(0,0,0,0.22)] w-[30px] h-[30px] sm:size-[42.793px] top-1/2 transition-colors duration-500 ${themeMode === 'light' ? 'bg-gradient-to-b from-[#666] to-black' : 'bg-gradient-to-b from-[#888] to-[#555]'}`} data-name="Ticker" />;
}

function Ticker1({ isTimerActive, timeRemaining, onClockClick, themeMode }: { isTimerActive?: boolean; timeRemaining?: number | null; onClockClick?: () => void; themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div 
      onClick={(e) => {
        if (isTimerActive && onClockClick) {
          e.stopPropagation(); // Prevent toggling play/pause from global click
          onClockClick();
        }
      }}
      className={`-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+3px)] sm:left-[calc(50%+4.37px)] rounded-[88px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[30px] h-[30px] sm:size-[42.793px] top-[calc(50%+3.5px)] sm:top-[calc(50%+5.03px)] transition-colors duration-500 ${isTimerActive ? 'cursor-pointer hover:scale-110 transition-transform' : ''} ${themeMode === 'light' ? 'bg-gradient-to-b from-[#666] to-black' : 'bg-gradient-to-b from-[#888] to-[#555]'}`} 
      data-name="Ticker"
    >
      <LiveClock isTimerActive={isTimerActive} timeRemaining={timeRemaining} />
      <Ticker2 themeMode={themeMode} />
    </div>
  );
}

function Ticker({ isTimerActive, timeRemaining, onClockClick, themeMode }: { isTimerActive?: boolean; timeRemaining?: number | null; onClockClick?: () => void; themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="absolute h-[250px] sm:h-[350px] lg:h-[411px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[434px]" data-name="Ticker">
      <Ticker1 isTimerActive={isTimerActive} timeRemaining={timeRemaining} onClockClick={onClockClick} themeMode={themeMode} />
    </div>
  );
}

function Time({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="relative shrink-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:size-[509px]" data-name="Time">
      <div className="absolute inset-[-0.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 517">
          <g id="Time">
            <path 
              d={svgPaths.p1a77dd80} 
              id="Ellipse 57" 
              stroke={themeMode === 'light' ? "black" : "rgba(255, 255, 255, 0.3)"} 
              strokeDasharray="1 48" 
              strokeWidth="8"
              className="transition-all duration-500"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 -translate-x-1/2 p-2 sm:p-[10px] top-1/2 -translate-y-1/2 w-auto">
      <Time themeMode={themeMode} />
    </div>
  );
}

function Volume({ isPlaying, volume, onPlayPauseClick, onVolumeChange, onLongPress, themeMode }: {
  isPlaying?: boolean;
  volume?: number;
  onPlayPauseClick?: () => void;
  onVolumeChange?: (volume: number) => void;
  onLongPress?: () => void;
  themeMode?: 'light' | 'dark' | 'color';
}) {
  if (isPlaying !== undefined && volume !== undefined && onPlayPauseClick && onVolumeChange) {
    return (
      <VolumeControl
        isPlaying={isPlaying}
        volume={volume}
        onPlayPauseClick={onPlayPauseClick}
        onVolumeChange={onVolumeChange}
        onLongPress={onLongPress}
        themeMode={themeMode}
      />
    );
  }

  return (
    <div className="absolute left-4 sm:left-[24px] w-[110px] h-[110px] sm:size-[130px] lg:size-[158px] top-2 sm:top-[13px]" data-name="Volume">
      <div className="absolute inset-[-0.55%_-0.54%_0_-0.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.858 158.87">
          <g id="Volume">
            <path 
              d={svgPaths.p67dad80} 
              id="Ellipse 57" 
              stroke={themeMode === 'light' ? "black" : "rgba(255, 255, 255, 0.3)"} 
              strokeDasharray="1 16" 
              strokeWidth="2"
              className="transition-all duration-500"
            />
            <path 
              d={svgPaths.p191d0100} 
              id="Ellipse 58" 
              stroke={themeMode === 'light' ? "#B5B5B5" : "rgba(255, 255, 255, 0.2)"} 
              strokeDasharray="1 16" 
              strokeWidth="2"
              className="transition-all duration-500"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Music({ isPlaying, volume, onVolumePlayPause, onVolumeChange, onVolumeLongPress, themeMode }: {
  isPlaying?: boolean;
  volume?: number;
  onVolumePlayPause?: () => void;
  onVolumeChange?: (volume: number) => void;
  onVolumeLongPress?: () => void;
  themeMode?: 'light' | 'dark' | 'color';
}) {
  return (
    <div className="content-stretch flex gap-[10px] h-[275px] items-center justify-center px-[40px] py-[17px] relative shrink-0 w-[285px]" data-name="Music">
      <Volume 
        isPlaying={isPlaying}
        volume={volume}
        onPlayPauseClick={onVolumePlayPause}
        onVolumeChange={onVolumeChange}
        onLongPress={onVolumeLongPress}
        themeMode={themeMode}
      />
    </div>
  );
}

function Table({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Table">
      <TodoList themeMode={themeMode} />
    </div>
  );
}

function Tasks({ className, themeMode }: { className?: string; themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div 
      className={className || "h-[200px] sm:h-[230px] lg:h-[255px] relative rounded-[16px] sm:rounded-[24px] shrink-0 w-full transition-all duration-500"} 
      data-name="Tasks" 
      style={{ 
        backgroundImage: themeMode === 'light'
          ? "linear-gradient(137.459deg, rgb(255, 255, 255) 1.842%, rgb(237, 237, 237) 96.132%)"
          : "linear-gradient(137.459deg, rgba(255, 255, 255, 0.1) 1.842%, rgba(237, 237, 237, 0.1) 96.132%)"
      }}
    >
      <div 
        aria-hidden="true" 
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] sm:rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.16)] transition-colors duration-500 ${themeMode === 'light' ? 'border-[#e9e9e9]' : 'border-[#333]'}`}
      />
      <div className="content-stretch flex items-start p-3 sm:p-4 lg:p-[16px] relative size-full">
        <Table themeMode={themeMode} />
      </div>
    </div>
  );
}

function Frame2({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[285px]">
      <Tasks themeMode={themeMode} />
    </div>
  );
}

function Frame3({ isPlaying, volume, onVolumePlayPause, onVolumeChange, onVolumeLongPress, isTimerActive, themeMode }: {
  isPlaying?: boolean;
  volume?: number;
  onVolumePlayPause?: () => void;
  onVolumeChange?: (volume: number) => void;
  onVolumeLongPress?: () => void;
  isTimerActive?: boolean;
  themeMode?: 'light' | 'dark' | 'color';
}) {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-between left-0 w-full">
      <div style={{ opacity: isTimerActive ? 0 : 1, transition: 'opacity 0.8s ease-in-out', pointerEvents: isTimerActive ? 'none' : 'auto' }}>
        <Music 
          isPlaying={isPlaying}
          volume={volume}
          onVolumePlayPause={onVolumePlayPause}
          onVolumeChange={onVolumeChange}
          onVolumeLongPress={onVolumeLongPress}
          themeMode={themeMode}
        />
      </div>
      <div style={{ opacity: isTimerActive ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}>
        <Frame2 themeMode={themeMode} />
      </div>
    </div>
  );
}

export default function Home({ 
  isTimerActive,
  isPlaying,
  volume,
  onVolumePlayPause,
  onVolumeChange,
  onVolumeLongPress,
  timeRemaining,
  onClockClick,
  themeMode,
  onToggleDarkMode
}: { 
  isTimerActive?: boolean;
  isPlaying?: boolean;
  volume?: number;
  onVolumePlayPause?: () => void;
  onVolumeChange?: (volume: number) => void;
  onVolumeLongPress?: () => void;
  timeRemaining?: number | null;
  onClockClick?: () => void;
  themeMode?: 'light' | 'dark' | 'color';
  onToggleDarkMode?: () => void;
}) {
  return (
    <div className="bg-transparent overflow-clip relative w-full h-full min-h-screen" data-name="Home">
      <Top isTimerActive={isTimerActive} themeMode={themeMode} onToggleDarkMode={onToggleDarkMode} />
      <Ticker isTimerActive={isTimerActive} timeRemaining={timeRemaining} onClockClick={onClockClick} themeMode={themeMode} />
      <Frame themeMode={themeMode} />
      <Frame3 
        isPlaying={isPlaying}
        volume={volume}
        onVolumePlayPause={onVolumePlayPause}
        onVolumeChange={onVolumeChange}
        onVolumeLongPress={onVolumeLongPress}
        isTimerActive={isTimerActive}
        themeMode={themeMode}
      />
    </div>
  );
}
