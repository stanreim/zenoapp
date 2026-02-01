import svgPaths from "./svg-15n52fh203";
import imgEllipse57 from "figma:asset/32381d75538068783c2e05556c75a5dde805ec3e.png";
import imgEllipse58 from "figma:asset/be3772dd574aa8fa0f22e8a523cdc140178675c9.png";

function Frame() {
  return (
    <div className="h-[32px] relative rounded-[1px] shrink-0 w-[6px]" style={{ backgroundImage: "linear-gradient(119.642deg, rgb(102, 102, 102) 12.392%, rgb(0, 0, 0) 98.075%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[1px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[32px] relative rounded-[1px] shrink-0 w-[6px]" style={{ backgroundImage: "linear-gradient(119.642deg, rgb(102, 102, 102) 12.392%, rgb(0, 0, 0) 98.075%)" }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[1px]" />
    </div>
  );
}

function Play() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[48px]" data-name="Play">
      <Frame />
      <Frame1 />
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
        <div className="absolute inset-[-0.46%_-0.46%_14.63%_-0.36%]">
          <img alt="" className="block max-w-none size-full" height="182.824" src={imgEllipse57} width="214.755" />
        </div>
      </div>
      <div className="absolute left-[38px] size-[213px] top-[36px]">
        <div className="absolute inset-[57.39%_0.12%_13.1%_83.15%]">
          <img alt="" className="block max-w-none size-full" height="62.85" src={imgEllipse58} width="35.632" />
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