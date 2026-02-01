import { useState, useEffect } from 'react';

export function DynamicGreeting({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setGreeting('Good\nMorning');
      } else if (hour >= 12 && hour < 17) {
        setGreeting('Good\nAfternoon');
      } else if (hour >= 17 && hour < 21) {
        setGreeting('Good\nEvening');
      } else {
        setGreeting('Good\nNight');
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <p 
      className={`font-['SF_Pro:Medium',sans-serif] font-[510] leading-none relative shrink-0 text-3xl sm:text-5xl lg:text-[64px] w-auto max-w-[273px] whitespace-pre-wrap transition-colors duration-500 ${
        themeMode === 'dark' ? 'text-white' : 
        themeMode === 'color' ? 'text-[#c3c3c3]' : 
        'text-[#c3c3c3]'
      }`} 
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      {greeting}
    </p>
  );
}
