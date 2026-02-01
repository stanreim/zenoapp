# 🧘 Ultra-Minimal Focus Experience

A single-page, gesture-driven focus web application with no visible UI. The entire viewport is the interface.

## ✨ Features

- **Full-screen ambient video** that loops seamlessly
- **Immersive audio** that crossfades between moods
- **Gesture-based controls** - no buttons or menus
- **Visual timer** that represents time through gradual visual changes
- **4 ambient moods** to choose from
- **Responsive** and works on desktop and mobile

## 🎮 Interactions

### First Click
- Shows a subtle pulsing hint
- Opens the timer selector

### Timer Selection
- **Hold** anywhere to select session length
- A radial ring fills as you hold
- Release to select: 15, 30, 45, or 60 minutes
- The duration snaps to the nearest option

### During Session
- **Click**: Toggle play/pause (smooth audio/video fades)
- **Long press (>600ms)**: Switch to next mood
  - Both video and audio crossfade over 2-3 seconds
  - Cycles through 4 different moods

### Time Progression
As time runs out, the experience gradually:
- Reduces saturation (from 100% to 50%)
- Reduces contrast (from 100% to 70%)
- Adds subtle blur (from 0px to 3px)
- Reduces opacity slightly

### Session End
- Audio fades to silence over 3 seconds
- Video fades to pure white over 3 seconds
- Click anywhere to reset and start again

## 🎨 Mood System

The app cycles through 4 different audio-visual moods:

- **Mood 0**: Default ambiance
- **Mood 1**: Alternative atmosphere
- **Mood 2**: Another variation
- **Mood 3**: Final mood option

Each mood has its own video and audio file that can be customized.

## 📁 Asset Structure

Place your video and audio files in `/public/assets/`:

```
/public/assets/
  ├── mood-0.mp4  (video for mood 0)
  ├── mood-0.mp3  (audio for mood 0)
  ├── mood-1.mp4
  ├── mood-1.mp3
  ├── mood-2.mp4
  ├── mood-2.mp3
  ├── mood-3.mp4
  └── mood-3.mp3
```

## 🎬 Video Requirements

- **Format**: MP4 (H.264 codec recommended)
- **Length**: 30 seconds to 2 minutes
- **Resolution**: 1920x1080 or higher
- **Loop**: Should loop seamlessly (match first/last frames)
- **Optimization**: Keep under 10MB per file

### Recommended Video Styles
- Slow-moving abstract gradients
- Gentle nature scenes (clouds, water, aurora)
- Minimal motion graphics
- Particle systems
- Ambient light patterns

## 🎵 Audio Requirements

- **Format**: MP3
- **Length**: Should match or exceed video length
- **Quality**: 128-192 kbps
- **Loop**: Should loop seamlessly
- **Type**: Ambient, atmospheric, non-intrusive

### Recommended Audio Styles
- White noise variations
- Nature sounds (rain, ocean, forest)
- Ambient drones
- Meditation soundscapes
- Binaural beats

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Assets
Follow the guide in `SETUP-ASSETS.md` to add your video and audio files.

Quick option: Download free ambient loops from:
- [Pexels](https://pexels.com) - Search "ambient loop"
- [Pixabay](https://pixabay.com) - Search "meditation background"
- [Freesound](https://freesound.org) - For audio

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 🎯 Design Philosophy

### No UI
The interface is completely invisible. Everything is controlled through gestures and timing. This creates an immersive, distraction-free experience.

### Visual Communication
Instead of numbers and text, time is communicated through gradual visual changes. Users develop an intuitive sense of how much time remains.

### Smooth Transitions
All state changes happen gradually:
- Audio fades in/out over 1 second
- Video opacity changes over 1-3 seconds
- Mood transitions crossfade over 2-3 seconds
- Session end fades over 3 seconds

### Touch-First
The interface works equally well on desktop and mobile, with pointer events handling both mouse and touch interactions.

## 🛠 Technical Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **HTML5 Video/Audio** - Media playback
- **Pointer Events API** - Cross-device interaction

## 📖 Usage Tips

1. **First time**: Click anywhere, then hold to set your focus time
2. **Switching moods**: Hold for >600ms during a session
3. **Pausing**: Quick click to pause/resume
4. **Ending early**: Let the timer run out, or refresh the page
5. **Best experience**: Use headphones and full-screen mode

## 🎨 Customization

### Changing Session Durations
Edit `/src/app/components/TimerSelector.tsx`:
```typescript
const durations = [15, 30, 45, 60]; // Modify these values (in minutes)
```

### Changing Visual Effects Over Time
Edit `/src/app/components/BackgroundVideo.tsx`:
```typescript
const saturation = 100 - (1 - progress) * 50; // Adjust multiplier
const contrast = 100 - (1 - progress) * 30;   // Adjust multiplier
const blur = (1 - progress) * 3;              // Adjust max blur
```

### Changing Long Press Duration
Edit `/src/app/App.tsx`:
```typescript
pressTimerRef.current = setTimeout(() => {
  isLongPressRef.current = true;
  handleLongPress();
}, 600); // Change from 600ms
```

### Adding More Moods
Edit the `moods` array in `/src/app/App.tsx`:
```typescript
const moods = [
  { video: '/assets/mood-0.mp4', audio: '/assets/mood-0.mp3' },
  { video: '/assets/mood-1.mp4', audio: '/assets/mood-1.mp3' },
  // Add more...
];
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 90+)

## 🐛 Troubleshooting

### Videos won't play
- Check that files are in `/public/assets/`
- Ensure files are named correctly (mood-0.mp4, etc.)
- Check browser console for errors
- Try converting videos to H.264 codec

### Audio doesn't fade smoothly
- Ensure audio files are high enough quality
- Check that audio files loop seamlessly
- Try different browsers

### Timer doesn't start
- Make sure you're holding, not just clicking
- Check that the radial ring appears
- Try refreshing the page

### Long press triggers too easily (or too slowly)
- Adjust the timeout in App.tsx (default: 600ms)
- Check that you're using pointer events (not mouse events)

## 📄 License

Free to use and modify for personal or commercial projects.

## 🙏 Credits

Created as an ultra-minimal focus tool for distraction-free work and meditation sessions.
