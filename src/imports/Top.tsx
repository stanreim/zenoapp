import svgPaths from "./svg-s3q89le1fv";

function Greeting() {
  return (
    <div className="content-stretch flex items-start p-[24px] relative shrink-0 w-[321px]" data-name="Greeting">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-none relative shrink-0 text-[#c3c3c3] text-[64px] w-[273px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Good Morning
      </p>
    </div>
  );
}

function Focus1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[89px]" data-name="Focus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 48">
        <g filter="url(#filter0_ii_29_58)" id="Focus">
          <g clipPath="url(#clip0_29_58)">
            <path d={svgPaths.p9367000} fill="var(--fill-0, #DCDCDC)" />
            <g filter="url(#filter1_d_29_58)" id="Toggle">
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
    <div className="-translate-y-1/2 absolute bg-white left-[4px] rounded-[88px] size-[40px] top-1/2" data-name="Push">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[88px] shadow-[0px_4px_8px_-3px_rgba(0,0,0,0.54)]" />
    </div>
  );
}

function ChangeTheme() {
  return (
    <div className="bg-[#dcdcdc] overflow-clip relative rounded-[112px] shrink-0 size-[48px]" data-name="Change Theme">
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

export default function Top() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full" data-name="Top">
      <Greeting />
      <Focus />
      <Toggle />
    </div>
  );
}