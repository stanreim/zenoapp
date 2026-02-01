import { useEffect, useRef } from 'react';

interface Mood2ShaderBackgroundProps {
  isActive: boolean;
  timeProgress: number;
  fadeOpacity: number;
}

export function Mood2ShaderBackground({ 
  isActive, 
  timeProgress, 
  fadeOpacity 
}: Mood2ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isActive) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let particleCount = 50;
    let gradientScale = 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance

      // Set actual canvas size with pixel ratio for sharp rendering
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      
      // Set display size
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      // Scale context to account for pixel ratio
      ctx.scale(pixelRatio, pixelRatio);

      // Responsive optimizations based on screen size
      if (width >= 2560) {
        // 4K and ultra-wide displays
        particleCount = 80;
        gradientScale = 1.2;
      } else if (width >= 1920) {
        // Large desktop (1080p+)
        particleCount = 60;
        gradientScale = 1.1;
      } else if (width >= 1440) {
        // Medium desktop
        particleCount = 50;
        gradientScale = 1;
      } else if (width >= 1024) {
        // Small desktop / tablet landscape
        particleCount = 40;
        gradientScale = 0.9;
      } else if (width >= 768) {
        // Tablet portrait
        particleCount = 30;
        gradientScale = 0.8;
      } else {
        // Mobile
        particleCount = 20;
        gradientScale = 0.7;
      }
    };
    
    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    
    const animate = () => {
      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;
      const maxDimension = Math.max(width, height);

      // Main animated gradient - optimized for large screens
      const gradient1 = ctx.createRadialGradient(
        centerX + Math.sin(time * 0.5) * (width * 0.15 * gradientScale),
        centerY + Math.cos(time * 0.3) * (height * 0.15 * gradientScale),
        0,
        centerX,
        centerY,
        maxDimension * 0.7 * gradientScale
      );

      // Apply time-based visual changes
      const saturation = Math.max(70, 100 - (timeProgress * 30));
      const brightness = 45 + Math.sin(time * 0.1) * 8;

      // Warm sunset palette - deep reds to oranges
      const hue1 = 0 + Math.sin(time * 0.2) * 8;   // Deep red
      const hue2 = 15 + Math.cos(time * 0.3) * 12; // Red-orange
      const hue3 = 8 + Math.sin(time * 0.15) * 15; // Orange-red

      gradient1.addColorStop(0, `hsl(${hue1}, ${saturation}%, ${brightness + 10}%)`);
      gradient1.addColorStop(0.3, `hsl(${hue2}, ${saturation - 5}%, ${brightness + 5}%)`);
      gradient1.addColorStop(0.6, `hsl(${hue3}, ${saturation - 10}%, ${brightness}%)`);
      gradient1.addColorStop(1, `hsl(${hue1 + 5}, ${saturation - 15}%, ${brightness - 8}%)`);

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // Secondary flowing gradient layer
      const gradient2 = ctx.createRadialGradient(
        centerX + Math.cos(time * 0.6) * (width * 0.2 * gradientScale),
        centerY + Math.sin(time * 0.4) * (height * 0.2 * gradientScale),
        0,
        centerX + Math.sin(time * 0.3) * (width * 0.1),
        centerY + Math.cos(time * 0.5) * (height * 0.1),
        maxDimension * 0.5 * gradientScale
      );

      gradient2.addColorStop(0, `hsla(${20 + Math.cos(time * 0.25) * 10}, ${saturation}%, ${brightness + 15}%, 0.4)`);
      gradient2.addColorStop(0.5, `hsla(${10 + Math.sin(time * 0.35) * 15}, ${saturation - 5}%, ${brightness + 8}%, 0.25)`);
      gradient2.addColorStop(1, 'hsla(0, 70%, 40%, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Floating particles for depth - scaled by screen size
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = 0.08;

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = (width * 0.35 * gradientScale) + Math.sin(time * 0.8 + i * 0.5) * (width * 0.15);
        
        const x = centerX + Math.cos(angle + time * 0.3) * radius;
        const y = centerY + Math.sin(angle + time * 0.2) * radius * 0.8; // Elliptical motion
        
        const size = (30 + Math.sin(time * 2 + i) * 20) * gradientScale;
        const particleAlpha = 0.6 + Math.sin(time * 3 + i * 0.3) * 0.4;

        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        particleGradient.addColorStop(0, `rgba(255, 180, 150, ${particleAlpha})`);
        particleGradient.addColorStop(0.5, `rgba(255, 120, 100, ${particleAlpha * 0.5})`);
        particleGradient.addColorStop(1, 'rgba(200, 50, 50, 0)');
        
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;

      // Add subtle noise texture - more subtle on large screens
      if (Math.random() > 0.95) {
        ctx.globalAlpha = 0.02;
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = (Math.random() * 80 + 40) * gradientScale;
          
          const noiseGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          noiseGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
          noiseGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = noiseGradient;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [isActive, timeProgress]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        opacity: fadeOpacity,
        filter: `blur(${Math.min(timeProgress * 8, 12)}px) saturate(${Math.max(0.7, 1 - timeProgress * 0.3)})`,
        transition: 'opacity 1s ease-in-out, filter 0.5s ease-out',
        willChange: 'filter, opacity',
      }}
    />
  );
}
