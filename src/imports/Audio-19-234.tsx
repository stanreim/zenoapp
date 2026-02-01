import svgPaths from "./svg-4pi4cjtd6l";
import imgEllipse57 from "figma:asset/b9be0b0d8a1343ad5fba72acb72557cca3957f6a.png";
import imgEllipse58 from "figma:asset/b412d764fc285d03b9f6686f28ddc2cd172d776d.png";

function Play() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Play">
          <path d={svgPaths.p1e2fb00} fill="url(#paint0_linear_19_113)" id="Play_2" stroke="url(#paint1_linear_19_113)" strokeWidth="0.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_113" x1="37.5" x2="8.94961" y1="24" y2="31.9373">
            <stop stopColor="#666666" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_19_113" x1="37.5" x2="10.5" y1="24" y2="24">
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
              <g filter="url(#filter0_ii_19_128)">
                <ellipse cx="88" cy="91" fill="url(#paint0_linear_19_128)" fillOpacity="0.4" rx="87" ry="90" />
              </g>
              <path d={svgPaths.p5f01380} stroke="url(#paint1_linear_19_128)" strokeOpacity="0.6" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="184" id="filter0_ii_19_128" width="176" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect1_innerShadow_19_128" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_19_128" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.929167 0 0 0 0 0.937667 0 0 0 0 1 0 0 0 0.8 0" />
                <feBlend in2="effect1_innerShadow_19_128" mode="normal" result="effect2_innerShadow_19_128" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_128" x1="88" x2="88" y1="1" y2="181">
                <stop stopColor="#CECECE" />
                <stop offset="1" stopColor="#EFEFEF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_19_128" x1="29.8765" x2="151.784" y1="22.311" y2="153.766">
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

export default function Audio() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center px-[40px] py-[17px] relative size-full" data-name="Audio">
      <Audio1 />
      <VolumeOutline />
    </div>
  );
}