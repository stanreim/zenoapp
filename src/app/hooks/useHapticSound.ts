/**
 * useHapticSound - Mechanical UI sound feedback
 * 
 * Generates subtle, physical-feeling sounds using Web Audio API.
 * Designed to feel like a real mechanical device: radio knobs, switches, dials.
 * 
 * Sound types:
 * - click: soft mechanical click (play/pause, todo complete)
 * - tick: dial tick (volume changes)
 * - thud: soft confirmation (enter focus mode)
 * - pop: light pop (add todo)
 */

// Singleton AudioContext to avoid browser limitations
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
      return null;
    }
  }
  
  // Resume if suspended (browser autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  
  return audioContext;
};

type SoundType = 'click' | 'tick' | 'thud' | 'pop';

interface SoundConfig {
  type: OscillatorType;
  frequency: number;
  frequencyEnd?: number;
  attack: number;
  decay: number;
  gain: number;
}

const soundConfigs: Record<SoundType, SoundConfig> = {
  click: {
    type: 'triangle',
    frequency: 800,
    attack: 0,
    decay: 0.015,
    gain: 0.1,
  },
  tick: {
    type: 'sine',
    frequency: 1200,
    attack: 0,
    decay: 0.008,
    gain: 0.05,
  },
  thud: {
    type: 'sine',
    frequency: 200,
    frequencyEnd: 100,
    attack: 0.005,
    decay: 0.08,
    gain: 0.15,
  },
  pop: {
    type: 'sine',
    frequency: 600,
    frequencyEnd: 400,
    attack: 0,
    decay: 0.03,
    gain: 0.08,
  },
};

const playSound = (soundType: SoundType): void => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const config = soundConfigs[soundType];
  const now = ctx.currentTime;

  // Create oscillator
  const oscillator = ctx.createOscillator();
  oscillator.type = config.type;
  oscillator.frequency.setValueAtTime(config.frequency, now);
  
  // Apply pitch bend if configured
  if (config.frequencyEnd) {
    oscillator.frequency.exponentialRampToValueAtTime(
      config.frequencyEnd,
      now + config.attack + config.decay
    );
  }

  // Create gain envelope
  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, now);
  
  // Attack
  if (config.attack > 0) {
    gainNode.gain.linearRampToValueAtTime(config.gain, now + config.attack);
  } else {
    gainNode.gain.setValueAtTime(config.gain, now);
  }
  
  // Decay
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    now + config.attack + config.decay
  );

  // Connect nodes
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  // Play and cleanup
  oscillator.start(now);
  oscillator.stop(now + config.attack + config.decay + 0.01);
};

// Throttle helper for volume dial ticks
let lastTickVolume = -1;
const TICK_THRESHOLD = 0.05; // 5% volume change

const playTickIfThreshold = (currentVolume: number): void => {
  if (lastTickVolume === -1) {
    lastTickVolume = currentVolume;
    return;
  }
  
  const delta = Math.abs(currentVolume - lastTickVolume);
  if (delta >= TICK_THRESHOLD) {
    playSound('tick');
    lastTickVolume = currentVolume;
  }
};

const resetTickThreshold = (): void => {
  lastTickVolume = -1;
};

// Export individual sound functions for clean API
export const hapticSounds = {
  click: () => playSound('click'),
  tick: () => playSound('tick'),
  thud: () => playSound('thud'),
  pop: () => playSound('pop'),
  
  // Special throttled tick for volume dial
  volumeTick: playTickIfThreshold,
  resetVolumeTick: resetTickThreshold,
};

// Hook version for components that prefer hooks
export function useHapticSound() {
  return hapticSounds;
}

export default useHapticSound;
