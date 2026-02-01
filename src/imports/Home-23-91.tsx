import svgPaths from "./svg-dp7a730csy";
import imgEllipse57 from "@/assets/b9be0b0d8a1343ad5fba72acb72557cca3957f6a.png";
import imgEllipse58 from "@/assets/b412d764fc285d03b9f6686f28ddc2cd172d776d.png";

function Greeting() {
  return (
    <div className="content-stretch flex items-start p-[24px] relative shrink-0 w-[321px]" data-name="Greeting">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-none relative shrink-0 text-[#c3c3c3] text-[64px] w-[273px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Good Morning
      </p>
    </div>
  );
}

function Timer() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[21px] py-[12px] relative rounded-[8px] shrink-0 w-[87px]" data-name="Timer">
      <div aria-hidden="true" className="absolute border border-[rgba(40,40,40,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Timer
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_24px_0px_rgba(0,0,0,0.16)]" />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex items-center justify-center p-[24px] relative shrink-0" data-name="Toggle">
      <Timer />
    </div>
  );
}

function On() {
  return (
    <div className="bg-[#282828] relative rounded-[88px] shrink-0 size-[44px]" data-name="On">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[88px] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54),3px_28px_27px_5px_rgba(0,0,0,0.22)]" />
    </div>
  );
}

function Toggle2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#eaeaea] h-[48px] items-center overflow-clip px-[3px] py-[2px] relative rounded-[48px] shrink-0 to-white w-[80px]" data-name="Toggle">
      <On />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_2px_0px_12px_-3px_rgba(0,0,0,0.22),inset_0px_15px_9px_-7px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex items-start justify-end p-[24px] relative shrink-0 w-[321px]" data-name="Toggle">
      <Toggle2 />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1600px]" data-name="Top">
      <Greeting />
      <Toggle />
      <Toggle1 />
    </div>
  );
}

function Ticker2() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-[#666] left-1/2 rounded-[88px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.54),3px_12px_27px_0px_rgba(0,0,0,0.22)] size-[42.793px] to-black top-1/2" data-name="Ticker" />;
}

function Ticker1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-[#666] left-[calc(50%+4.37px)] rounded-[88px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[42.793px] to-black top-[calc(50%+5.03px)]" data-name="Ticker">
      <div className="absolute flex h-[88.794px] items-center justify-center left-[15.93px] top-[-63.4px] w-[217.76px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[68.29deg]">
          <div className="bg-black h-[233.321px] w-[2.675px]" />
        </div>
      </div>
      <div className="absolute flex h-[87.491px] items-center justify-center left-[-76.8px] top-[-65.93px] w-[93.773px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-47.07deg]">
          <div className="bg-black h-[125.582px] w-[2.675px]" />
        </div>
      </div>
      <Ticker2 />
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
            <path d={svgPaths.p1a77dd80} id="Ellipse 57" stroke="var(--stroke-0, black)" strokeDasharray="1 48" strokeWidth="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[551px] p-[10px] top-[213px] w-[529px]">
      <Time />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Play">
          <path d={svgPaths.p1e2fb00} fill="url(#paint0_linear_18_39)" id="Play_2" stroke="url(#paint1_linear_18_39)" strokeWidth="0.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_18_39" x1="37.5" x2="8.94961" y1="24" y2="31.9373">
            <stop stopColor="#666666" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_18_39" x1="37.5" x2="10.5" y1="24" y2="24">
            <stop />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Knob() {
  return (
    <div className="absolute bg-white h-[127px] left-[23px] rounded-[88px] top-[29.01px] w-[128px]" data-name="Knob">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[22px] py-[25px] relative rounded-[inherit] size-full">
        <Play />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[88px] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54),3px_12px_27px_5px_rgba(0,0,0,0.22)]" />
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
              <g filter="url(#filter0_ii_18_44)">
                <ellipse cx="88" cy="91" fill="url(#paint0_linear_18_44)" fillOpacity="0.4" rx="87" ry="90" />
              </g>
              <path d={svgPaths.p5f01380} stroke="url(#paint1_linear_18_44)" strokeOpacity="0.6" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="184" id="filter0_ii_18_44" width="176" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_innerShadow_18_44" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_18_44" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0.937667 0 0 0 0 1 0 0 0 0.8 0" />
                <feBlend in2="effect1_innerShadow_18_44" mode="normal" result="effect2_innerShadow_18_44" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_18_44" x1="88" x2="88" y1="1" y2="181">
                <stop stopColor="#CECECE" />
                <stop offset="1" stopColor="#EFEFEF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_18_44" x1="29.8765" x2="151.784" y1="22.311" y2="153.766">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#BDBDBD" />
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

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[198px]" data-name="List">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
        <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkmark" style={{ backgroundImage: "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)" }}>
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Finish Landler Cadastre
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
        <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkmark" style={{ backgroundImage: "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)" }}>
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Add prototype
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
        <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkmark" style={{ backgroundImage: "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)" }}>
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Play around with Cursor
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Task">
        <Plus />
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[#bdbdbd] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Add to-do
        </p>
      </div>
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

function Tasks({ className }: { className?: string }) {
  return (
    <div className={className || "h-[255px] relative rounded-[24px] shrink-0 w-full"} data-name="Tasks" style={{ backgroundImage: "linear-gradient(137.459deg, rgb(255, 255, 255) 1.842%, rgb(237, 237, 237) 96.132%)" }}>
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

export default function Home() {
  return (
    <div className="bg-[#ededed] relative size-full" data-name="Home">
      <Top />
      <Ticker />
      <Frame />
      <BottomBar />
    </div>
  );
}