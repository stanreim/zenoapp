import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import svgPaths from "@/imports/svg-8dn7ashjpm";

interface Song {
  id: string;
  name: string;
  duration: string;
  audioUrl: string;
  imageUrl?: string;
  isCustom?: boolean;
}

interface SoundPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  songs: Song[];
  onAddSong: (song: Song) => void;
  onSelectSong: (songId: string) => void;
  selectedSongId?: string;
}

export function SoundPickerModal({ 
  isOpen, 
  onClose, 
  songs, 
  onAddSong, 
  onSelectSong,
  selectedSongId 
}: SoundPickerModalProps) {
  const [customLink, setCustomLink] = useState('');
  const [linkError, setLinkError] = useState('');
  const [showPlayIcon, setShowPlayIcon] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCustomLink('');
      setLinkError('');
      setShowPlayIcon(false);
    }
  }, [isOpen]);

  // Clean the URL to remove tracking params and whitespace
  const cleanUrl = (url: string): string => {
    try {
        const urlObj = new URL(url.trim());
        // Return origin + pathname (strips query params like utm_source)
        // We keep hash if it exists just in case, but usually not needed for audio
        return urlObj.origin + urlObj.pathname;
    } catch (e) {
        return url.trim();
    }
  };

  const validateAudioLink = (url: string): boolean => {
    const cleaned = cleanUrl(url);
    return ReactPlayer.canPlay(cleaned);
  };

  const handleLinkPaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const cleaned = cleanUrl(pastedText);
    
    setCustomLink(cleaned);
    setLinkError('');
    
    if (cleaned) {
      const isValid = validateAudioLink(cleaned);
      
      if (isValid) {
        setShowPlayIcon(true);
        setLinkError('');
      } else {
        setShowPlayIcon(false);
        setLinkError('Unable to load audio from this link');
      }
    }
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setCustomLink(newVal);
    setLinkError('');
    
    if (!newVal.trim()) {
      setShowPlayIcon(false);
      return;
    }

    // Check if it looks like a URL before validating
    try {
      new URL(newVal.trim());
      const isValid = validateAudioLink(newVal);
      if (isValid) {
        setShowPlayIcon(true);
      } else {
        setShowPlayIcon(false);
      }
    } catch {
      // Not a valid URL yet, don't show error while typing
      setShowPlayIcon(false);
    }
  };

  const handleAddCustomSong = () => {
    if (!customLink.trim()) {
      setLinkError('Please enter a URL');
      return;
    }

    const finalUrl = cleanUrl(customLink);
    
    if (!validateAudioLink(finalUrl)) {
      setLinkError('This link is not supported. Try SoundCloud, YouTube, or direct audio links.');
      setShowPlayIcon(false);
      return;
    }
    
    const newSong: Song = {
      id: `custom-${Date.now()}`,
      name: 'Custom Audio',
      duration: 'Custom • Live',
      audioUrl: finalUrl,
      isCustom: true,
    };
    
    onAddSong(newSong);
    
    // Reset input
    setCustomLink('');
    setShowPlayIcon(false);
    setLinkError('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#ededed] size-full overflow-hidden"
      style={{ animation: 'fadeIn 0.4s ease-in-out' }}
    >
      {/* Top Bar */}
      <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-full p-[24px]">
        <div className="relative shrink-0 w-[321px]">
          <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-none relative shrink-0 text-[#c3c3c3] text-[40px] md:text-[64px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select Sound
          </p>
        </div>
        
        <div className="relative shrink-0 flex justify-end w-[321px]">
          <button 
            onClick={onClose}
            className="bg-[#282828] relative rounded-[88px] shrink-0 size-[48px] cursor-pointer hover:bg-[#333] transition-colors"
          >
            <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[9px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[23.48%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.728 12.728">
                    <g id="Group">
                      <path d={svgPaths.p1eba9480} fill="var(--fill-0, #F5F5F3)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[88px]" />
          </button>
        </div>
      </div>

      {/* Main Table Content */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-end left-1/2 top-1/2 w-full max-w-[615px] px-4 md:px-0 max-h-[70vh] overflow-y-auto scrollbar-hide">
        {songs.map((song, index) => (
          <div key={song.id} className="w-full">
            <SongItem 
              song={song} 
              onSelect={() => onSelectSong(song.id)}
              isSelected={selectedSongId === song.id}
            />
            {/* Separator */}
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full mt-[24px]" />
          </div>
        ))}

        {/* Add Custom Section */}
        <div className="w-full">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[normal] min-h-px min-w-px relative">
              <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#111] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add your own
              </p>
              
              <div className="relative w-full">
                <input
                  type="text"
                  value={customLink}
                  onChange={handleLinkChange}
                  onPaste={handleLinkPaste}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && showPlayIcon) {
                      handleAddCustomSong();
                    }
                  }}
                  placeholder="Paste your link here"
                  className={`block cursor-text font-['SF_Pro:Regular',sans-serif] font-normal overflow-hidden relative shrink-0 text-[16px] md:text-[20px] text-ellipsis w-full whitespace-nowrap bg-transparent border-none outline-none ${linkError ? 'text-[#ff4444]' : 'text-[#bdbdbd] placeholder:text-[#bdbdbd]'}`}
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
                {linkError && (
                  <p className="absolute top-full left-0 mt-2 text-[#ff4444] text-[12px] font-['SF_Pro:Regular',sans-serif]">{linkError}</p>
                )}
              </div>
            </div>

            <button
               onClick={handleAddCustomSong}
               disabled={!showPlayIcon}
               className={`relative rounded-[48px] shrink-0 size-[56px] group cursor-pointer transition-all ${!showPlayIcon ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[17.657px]">
                  {showPlayIcon ? (
                     <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                        <path d="M4 2 L16 9 L4 16 Z" fill="#666" />
                     </svg>
                  ) : (
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.657 17.657">
                      <g id="Group">
                        <path d={svgPaths.p2c58ed00} fill="var(--fill-0, #BDBDBD)" />
                      </g>
                    </svg>
                  )}
                </div>
              </div>
              <div aria-hidden="true" className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[48px] ${showPlayIcon ? 'border-[#666]' : 'border-[#e0e0e0]'}`} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1760346738721-235e811f573d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsby1maSUyMGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njk4MDYxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1736176421274-546a4eaf57d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG11c2ljJTIwd2F2ZWZvcm1zJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY5ODA2MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc291bmQlMjB3YXZlc3xlbnwxfHx8fDE3Njk4MDYxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1682943827405-6261f5540d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGF1ZGlvJTIwc3BlY3RydW18ZW58MXx8fHwxNzY5ODA2MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

function SongItem({ song, onSelect, isSelected }: { song: Song; onSelect: () => void; isSelected: boolean }) {
  const [imageError, setImageError] = useState(false);
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    if (!song.imageUrl || imageError) {
      let hash = 0;
      const str = song.id || song.name || 'default';
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
      }
      const index = Math.abs(hash) % FALLBACK_IMAGES.length;
      setRandomImageUrl(FALLBACK_IMAGES[index]);
    }
  }, [song.imageUrl, song.id, song.name, imageError]);

  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full group cursor-pointer" onClick={onSelect}>
      {/* Image */}
      <div className="overflow-clip pointer-events-none relative rounded-[4px] shrink-0 size-[56px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[8px] size-[56px] top-1/2">
          <div aria-hidden="true" className="absolute inset-0 rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            {song.imageUrl && !imageError ? (
              <img 
                alt="" 
                className="absolute max-w-none object-cover rounded-[8px] size-full" 
                src={song.imageUrl}
                onError={() => setImageError(true)}
              />
            ) : (
              <img 
                alt="" 
                className="absolute max-w-none object-cover rounded-[8px] size-full" 
                src={randomImageUrl}
              />
            )}
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#d8d8d8] border-solid inset-0 rounded-[8px]" />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_4px_8px_4px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.02),inset_2px_2px_4px_1px_rgba(0,0,0,0.08)]" />
      </div>

      {/* Title */}
      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-[454px] flex-1 whitespace-pre-wrap">
        <p className="font-['SF_Pro:Regular',sans-serif] font-normal relative shrink-0 text-[#111] text-[20px] w-full truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
          {song.name}
        </p>
        <p className="font-['SF_Pro:Medium',sans-serif] font-[510] relative shrink-0 text-[#bdbdbd] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          {song.duration}
        </p>
      </div>

      {/* Play Button */}
      <div className="relative shrink-0 size-[56px] group-hover:scale-105 transition-transform">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g id="Play">
            <rect 
                height="54" 
                rx="27" 
                stroke={isSelected ? "#666" : "var(--stroke-0, #E0E0E0)"} 
                strokeWidth={isSelected ? "3" : "2"} 
                width="54" 
                x="1" 
                y="1" 
            />
            <g id="Play_2">
              <g filter="url(#filter0_i_40_108)">
                <path d={svgPaths.p157b8080} fill="url(#paint0_linear_40_108)" />
              </g>
              <path d={svgPaths.pec34000} stroke="url(#paint1_linear_40_108)" strokeWidth="0.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4314" id="filter0_i_40_108" width="12.71" x="23.5" y="19.7843">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_40_108" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_40_108" x1="37" x2="18.01" y1="28" y2="33.3632">
              <stop stopColor="#666666" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_40_108" x1="37" x2="19" y1="28" y2="28">
              <stop />
              <stop offset="1" stopColor="#666666" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
