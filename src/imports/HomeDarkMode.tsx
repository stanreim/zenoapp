import svgPaths from "./svg-hpqoj9lnas";
import imgEllipse57 from "figma:asset/b9be0b0d8a1343ad5fba72acb72557cca3957f6a.png";
import imgEllipse58 from "figma:asset/b412d764fc285d03b9f6686f28ddc2cd172d776d.png";

function Greeting() {
  return (
    <div className="content-stretch flex items-start p-[24px] relative shrink-0 w-[321px]" data-name="Greeting">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-none relative shrink-0 text-[64px] text-white w-[273px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Good Morning
      </p>
    </div>
  );
}

function Focus1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[89px]" data-name="Focus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 48">
        <g filter="url(#filter0_ii_47_421)" id="Focus">
          <g clipPath="url(#clip0_47_421)">
            <path d={svgPaths.p9367000} fill="var(--fill-0, #272727)" />
            <g filter="url(#filter1_d_47_421)" id="Toggle">
              <rect fill="var(--fill-0, #4F4F4F)" height="40" rx="20" width="40" x="44" y="4" />
              <rect height="38" rx="19" stroke="url(#paint0_linear_47_421)" strokeWidth="2" width="38" x="45" y="5" />
            </g>
            <circle cx="23.5" cy="24" id="Ellipse 36" opacity="0.2" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_ii_47_421" width="91" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="dilate" radius="7" result="effect1_innerShadow_47_421" />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_47_421" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="effect2_innerShadow_47_421" />
            <feOffset dx="2" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="effect1_innerShadow_47_421" mode="normal" result="effect2_innerShadow_47_421" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter1_d_47_421" width="50" x="39" y="3">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology in="SourceAlpha" operator="erode" radius="3" result="effect1_dropShadow_47_421" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.54 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_47_421" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_47_421" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_47_421" x1="64" x2="64" y1="4" y2="44">
            <stop stopColor="#8C8C8C" />
            <stop offset="1" stopColor="#2A2A2A" />
          </linearGradient>
          <clipPath id="clip0_47_421">
            <path d={svgPaths.p9367000} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Focus() {
  return (
    <div className="content-stretch flex h-[208px] items-start justify-center p-[24px] relative shrink-0 w-[342px]" data-name="Focus">
      <Focus1 />
    </div>
  );
}

function Push() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#4f4f4f] left-[4px] rounded-[88px] size-[40px] top-1/2" data-name="Push">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[88px] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)]" />
    </div>
  );
}

function ChangeTheme() {
  return (
    <div className="bg-[#272727] overflow-clip relative rounded-[112px] shrink-0 size-[48px]" data-name="Change Theme">
      <Push />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_0px_12px_-3px_rgba(0,0,0,0.12),inset_0px_8px_9px_-7px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex items-start justify-end p-[24px] relative shrink-0 w-[321px]" data-name="Toggle">
      <ChangeTheme />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1600px]" data-name="Top">
      <Greeting />
      <Focus />
      <Toggle />
    </div>
  );
}

function Push1() {
  return (
    <div className="-translate-y-1/2 absolute left-[1.4px] rounded-[88px] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)] size-[40px] top-1/2" data-name="Push" style={{ backgroundImage: "linear-gradient(138.865deg, rgb(255, 255, 255) 17.086%, rgb(198, 198, 198) 110.01%)" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Ticker1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-[#666] left-[calc(50%+4.37px)] rounded-[88px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[42.793px] to-black top-[calc(50%+5.03px)]" data-name="Ticker">
      <div className="absolute flex h-[88.794px] items-center justify-center left-[15.93px] top-[-63.4px] w-[217.76px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[68.29deg]">
          <div className="bg-white h-[233.321px] w-[2.675px]" />
        </div>
      </div>
      <div className="absolute flex h-[87.491px] items-center justify-center left-[-76.8px] top-[-65.93px] w-[93.773px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-47.07deg]">
          <div className="bg-white h-[125.582px] w-[2.675px]" />
        </div>
      </div>
      <Push1 />
    </div>
  );
}

function Ticker() {
  return (
    <div className="absolute h-[411px] left-[579px] top-[267px] w-[434px]" data-name="Ticker">
      <Ticker1 />
    </div>
  );
}

function Time() {
  return (
    <div className="relative shrink-0 size-[509px]" data-name="Time">
      <div className="absolute inset-[-0.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 517 517">
          <g id="Time">
            <path d={svgPaths.p1a77dd80} id="Ellipse 57" stroke="var(--stroke-0, white)" strokeDasharray="1 48" strokeWidth="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-[calc(50%+0.5px)] p-[10px] top-[213px] w-[529px]">
      <Time />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Play">
          <path d={svgPaths.p132c8280} fill="var(--fill-0, white)" id="Play_2" />
        </g>
      </svg>
    </div>
  );
}

function Knob() {
  return (
    <div className="absolute bg-[#4f4f4f] h-[127px] left-[23px] rounded-[88px] top-[29.01px] w-[128px]" data-name="Knob">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[22px] py-[25px] relative rounded-[inherit] size-full">
        <Play />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[88px] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)]" />
    </div>
  );
}

function Audio1() {
  return (
    <div className="h-[179px] relative shrink-0 w-[174px]" data-name="Audio">
      <div className="absolute h-[180px] left-0 top-[2px] w-[174px]">
        <div className="absolute inset-[-0.56%_-0.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176 182">
            <g id="Ellipse 52">
              <g filter="url(#filter0_ii_47_428)">
                <ellipse cx="88" cy="91" fill="var(--fill-0, #272727)" rx="87" ry="90" />
              </g>
              <path d={svgPaths.p5f01380} stroke="url(#paint0_linear_47_428)" strokeOpacity="0.6" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="184" id="filter0_ii_47_428" width="176" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_innerShadow_47_428" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_47_428" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0.937667 0 0 0 0 1 0 0 0 0.8 0" />
                <feBlend in2="effect1_innerShadow_47_428" mode="normal" result="effect2_innerShadow_47_428" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_47_428" x1="29.8765" x2="151.784" y1="22.311" y2="153.766">
                <stop stopColor="#4B4B4B" />
                <stop offset="1" stopColor="#292828" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Knob />
    </div>
  );
}

function VolumeOutline() {
  return (
    <div className="absolute contents left-[38px] top-[36px]" data-name="Volume Outline">
      <div className="absolute left-[38px] size-[213px] top-[36px]">
        <div className="absolute inset-[14.31%_84.36%_14.31%_-0.47%]">
          <img alt="" className="block max-w-none size-full" height="152.028" src={imgEllipse57} width="34.314" />
        </div>
      </div>
      <div className="absolute left-[38px] size-[213px] top-[36px]">
        <div className="absolute inset-[-0.46%_-0.38%_13.1%_20.32%]">
          <img alt="" className="block max-w-none size-full" height="186.068" src={imgEllipse58} width="170.523" />
        </div>
      </div>
    </div>
  );
}

function Audio() {
  return (
    <div className="content-stretch flex gap-[10px] h-[275px] items-center justify-center px-[40px] py-[17px] relative shrink-0 w-[285px]" data-name="Audio">
      <Audio1 />
      <VolumeOutline />
    </div>
  );
}

function Checkmark() {
  return (
    <div className="opacity-20 relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkmark" style={{ backgroundImage: "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)" }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Task() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
      <Checkmark />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Finish Landler Cadastre
      </p>
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="opacity-20 relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkmark" style={{ backgroundImage: "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)" }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Task1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
      <Checkmark1 />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add prototype
      </p>
    </div>
  );
}

function Checkmark2() {
  return (
    <div className="opacity-20 relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkmark" style={{ backgroundImage: "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)" }}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Task2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
      <Checkmark2 />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Play around with Cursor
      </p>
    </div>
  );
}

function Plus1() {
  return (
    <div className="absolute contents left-[4px] top-[4px]" data-name="Plus">
      <div className="absolute bg-[#bdbdbd] h-[8px] left-[7px] top-[4px] w-[1.5px]" />
      <div className="absolute flex h-[1.5px] items-center justify-center left-[4px] top-[7px] w-[8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#bdbdbd] h-[8px] w-[1.5px]" />
        </div>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="Plus">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Plus1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Task3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
      <Plus />
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#bdbdbd] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add to-do
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[198px]" data-name="List">
      <Task />
      <Task1 />
      <Task2 />
      <Task3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Table">
      <List />
    </div>
  );
}

function Tasks() {
  return (
    <div className="h-[255px] relative rounded-[24px] shrink-0 w-full" data-name="Tasks" style={{ backgroundImage: "linear-gradient(137.459deg, rgba(255, 255, 255, 0.1) 1.842%, rgba(237, 237, 237, 0.1) 96.132%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.16)]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <Table />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[285px]">
      <Tasks />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-between left-0 w-[1600px]" data-name="Bottom Bar">
      <Audio />
      <Frame1 />
    </div>
  );
}

export default function HomeDarkMode() {
  return (
    <div className="bg-[#111] relative size-full" data-name="Home / Dark Mode">
      <Top />
      <Ticker />
      <Frame />
      <BottomBar />
    </div>
  );
}