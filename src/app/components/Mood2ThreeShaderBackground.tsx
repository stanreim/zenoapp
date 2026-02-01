import { useRef, useEffect } from 'react';

interface Mood2ThreeShaderBackgroundProps {
  timeProgress: number;
}

export function Mood2ThreeShaderBackground({ timeProgress }: Mood2ThreeShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const blur = Math.min(timeProgress * 8, 12);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;
      const maxDimension = Math.max(width, height);

      // Apply time-based desaturation and brightness changes
      const saturation = Math.max(70, 100 - (timeProgress * 30));
      const brightness = 45 + Math.sin(time * 0.1) * 8;

      // Create flowing radial gradient
      const gradient1 = ctx.createRadialGradient(
        centerX + Math.sin(time * 0.5) * (width * 0.15),
        centerY + Math.cos(time * 0.3) * (height * 0.15),
        0,
        centerX,
        centerY,
        maxDimension * 0.7
      );

      // Sunset color palette - reds to oranges with subtle variations
      const hue1 = 0 + Math.sin(time * 0.2) * 8; // Deep red
      const hue2 = 15 + Math.cos(time * 0.3) * 12; // Orange-red
      const hue3 = 8 + Math.sin(time * 0.15) * 15; // Mid-tone

      gradient1.addColorStop(0, `hsl(${hue1}, ${saturation}%, ${brightness + 10}%)`);
      gradient1.addColorStop(0.3, `hsl(${hue2}, ${saturation - 5}%, ${brightness + 5}%)`);
      gradient1.addColorStop(0.6, `hsl(${hue3}, ${saturation - 10}%, ${brightness}%)`);
      gradient1.addColorStop(1, `hsl(${hue1 + 5}, ${saturation - 15}%, ${brightness - 8}%)`);

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // Add secondary gradient layer for depth
      const gradient2 = ctx.createRadialGradient(
        centerX - Math.sin(time * 0.4) * (width * 0.2),
        centerY - Math.cos(time * 0.25) * (height * 0.2),
        0,
        centerX,
        centerY,
        maxDimension * 0.85
      );

      gradient2.addColorStop(0, `hsla(${hue2}, ${saturation - 10}%, ${brightness + 5}%, 0.3)`);
      gradient2.addColorStop(0.5, `hsla(${hue3}, ${saturation - 15}%, ${brightness}%, 0.2)`);
      gradient2.addColorStop(1, 'hsla(0, 0%, 0%, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Add animated noise overlay for texture
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      // Add subtle noise (only process every 4th pixel for performance)
      for (let i = 0; i < data.length; i += 16) {
        const noise = (Math.random() - 0.5) * 10 * (1 - timeProgress * 0.3);
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }
      
      ctx.putImageData(imageData, 0, 0);

      // Add flowing particles overlay
      ctx.globalCompositeOperation = 'lighter';
      const particleCount = Math.floor(20 + Math.sin(time * 0.5) * 10);
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (time * 0.3 + i * 0.5) % (Math.PI * 2);
        const radius = (width * 0.3) + Math.sin(time * 0.2 + i) * (width * 0.1);
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius * 0.6;
        const size = 2 + Math.sin(time + i) * 1;
        
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        particleGradient.addColorStop(0, `hsla(${hue2}, ${saturation}%, ${brightness + 20}%, ${0.4 - timeProgress * 0.2})`);
        particleGradient.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
        
        ctx.fillStyle = particleGradient;
        ctx.fillRect(x - size * 3, y - size * 3, size * 6, size * 6);
      }
      
      ctx.globalCompositeOperation = 'source-over';

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, [timeProgress]);

  return (
    <div 
      className="absolute inset-0 w-full h-full"
      style={{
        filter: `blur(${blur}px) saturate(${Math.max(0.7, 1 - timeProgress * 0.3)})`,
        transition: 'filter 0.5s ease-out',
        willChange: 'filter',
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: '#1a0000' }}
      />
    </div>
  );
}
