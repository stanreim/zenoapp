import svgPaths from "./svg-8dn7ashjpm";
import imgRectangle5 from "@/assets/636fae99185154669553f6ac4f39d2a03a2c256c.png";

function Greeting() {
  return (
    <div className="content-stretch flex items-start p-[24px] relative shrink-0 w-[321px]" data-name="Greeting">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-none relative shrink-0 text-[#c3c3c3] text-[64px] w-[273px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select Sound
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[23.48%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.728 12.728">
        <g id="Group">
          <path d={svgPaths.p1eba9480} fill="var(--fill-0, #F5F5F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RemixIconsLineSystemCloseLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remix-icons/line/system/close-line">
      <Group />
    </div>
  );
}

function On() {
  return (
    <div className="bg-[#282828] relative rounded-[88px] shrink-0 size-[48px]" data-name="On">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[9px] relative rounded-[inherit] size-full">
        <RemixIconsLineSystemCloseLine />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[88px]" />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex items-start justify-end p-[24px] relative shrink-0 w-[321px]" data-name="Toggle">
      <On />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1600px]" data-name="Top">
      <Greeting />
      <Toggle />
    </div>
  );
}

function ImageSong() {
  return (
    <div className="overflow-clip pointer-events-none relative rounded-[4px] shrink-0 size-[56px]" data-name="Image / Song">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[8px] size-[56px] top-1/2">
        <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle5} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#d8d8d8] border-solid inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_8px_4px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.02),inset_2px_2px_4px_1px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-[454px] whitespace-pre-wrap" data-name="Title">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#111] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Song name
      </p>
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#bdbdbd] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        07:24
      </p>
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Play">
          <rect height="54" rx="27" stroke="var(--stroke-0, #E0E0E0)" strokeWidth="2" width="54" x="1" y="1" />
          <g id="Play_2">
            <g filter="url(#filter0_i_17_433)">
              <path d={svgPaths.p157b8080} fill="url(#paint0_linear_17_433)" />
            </g>
            <path d={svgPaths.pec34000} stroke="url(#paint1_linear_17_433)" strokeWidth="0.5" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4314" id="filter0_i_17_433" width="12.71" x="23.5" y="19.7843">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_17_433" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_433" x1="37" x2="18.01" y1="28" y2="33.3632">
            <stop stopColor="#666666" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_17_433" x1="37" x2="19" y1="28" y2="28">
            <stop />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Audio() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Audio">
      <ImageSong />
      <Title />
      <Play />
    </div>
  );
}

function Line() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="Line" />;
}

function ImageSong1() {
  return (
    <div className="overflow-clip pointer-events-none relative rounded-[4px] shrink-0 size-[56px]" data-name="Image / Song">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[8px] size-[56px] top-1/2">
        <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle5} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#d8d8d8] border-solid inset-0 rounded-[8px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_8px_4px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.02),inset_2px_2px_4px_1px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-[454px] whitespace-pre-wrap" data-name="Title">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#111] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Song name
      </p>
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#bdbdbd] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        07:24
      </p>
    </div>
  );
}

function Play1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Play">
          <rect height="54" rx="27" stroke="var(--stroke-0, #E0E0E0)" strokeWidth="2" width="54" x="1" y="1" />
          <g id="Play_2">
            <g filter="url(#filter0_i_17_433)">
              <path d={svgPaths.p157b8080} fill="url(#paint0_linear_17_433)" />
            </g>
            <path d={svgPaths.pec34000} stroke="url(#paint1_linear_17_433)" strokeWidth="0.5" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4314" id="filter0_i_17_433" width="12.71" x="23.5" y="19.7843">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_17_433" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_433" x1="37" x2="18.01" y1="28" y2="33.3632">
            <stop stopColor="#666666" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_17_433" x1="37" x2="19" y1="28" y2="28">
            <stop />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Audio1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Audio">
      <ImageSong1 />
      <Title1 />
      <Play1 />
    </div>
  );
}

function Line1() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="Line" />;
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[normal] min-h-px min-w-px relative" data-name="Title">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#111] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add your own
      </p>
      <a className="block cursor-pointer font-['SF_Pro:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[#bdbdbd] text-[20px] text-ellipsis w-full whitespace-nowrap" href="https://open.spotify.com/playlist/0OwiVGOybyTo3ZgNOCFbiQ?si=29e736ddb2134d6a" style={{ fontVariationSettings: "'wdth' 100" }}>
        Paste your link here
      </a>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[17.657px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.657 17.657">
        <g id="Group">
          <path d={svgPaths.p2c58ed00} fill="var(--fill-0, #BDBDBD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Play2() {
  return (
    <div className="relative rounded-[48px] shrink-0 size-[56px]" data-name="Play">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Audio2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Audio">
      <Title2 />
      <Play2 />
    </div>
  );
}

function Table() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-end left-[calc(50%+0.5px)] top-1/2 w-[615px]" data-name="Table">
      <Audio />
      <Line />
      <Audio1 />
      <Line1 />
      <Audio2 />
    </div>
  );
}

export default function ModalPickSound() {
  return (
    <div className="bg-[#ededed] relative size-full" data-name="Modal / Pick Sound">
      <Top />
      <Table />
    </div>
  );
}