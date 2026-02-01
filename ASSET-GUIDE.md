# Focus Experience - Asset Replacement Guide

This minimal focus web experience uses video and audio files that you can easily replace.

## Asset Structure

All assets should be placed in the `/public/assets` directory:

```
/public/assets/
  ├── mood-0.mp4  (video for mood 0)
  ├── mood-0.mp3  (audio for mood 0)
  ├── mood-1.mp4  (video for mood 1)
  ├── mood-1.mp3  (audio for mood 1)
  ├── mood-2.mp4  (video for mood 2)
  ├── mood-2.mp3  (audio for mood 2)
  ├── mood-3.mp4  (video for mood 3)
  └── mood-3.mp3  (audio for mood 3)
```

## Video Requirements

- **Format:** MP4 (H.264 codec recommended)
- **Aspect Ratio:** Any (will be cropped to fill screen)
- **Length:** 30 seconds to 2 minutes recommended
- **Loop:** Videos should loop seamlessly (match first and last frames)
- **Resolution:** 1920x1080 or higher recommended
- **Optimization:** Keep file size under 10MB for best performance

## Audio Requirements

- **Format:** MP3
- **Length:** Should match or exceed video length for seamless looping
- **Loop:** Audio should loop seamlessly
- **Quality:** 128-192 kbps recommended
- **Type:** Ambient, atmospheric sounds work best

## Mood Recommendations

Create 4 distinct moods with different visual and audio atmospheres:

- **Mood 0:** Calm, gentle (e.g., slow waves, soft clouds)
- **Mood 1:** Focused, steady (e.g., forest, rain)
- **Mood 2:** Energetic, flowing (e.g., city lights, rivers)
- **Mood 3:** Deep, meditative (e.g., night sky, ocean depths)

## How to Replace Assets

1. Prepare your video and audio files
2. Rename them to match the structure above (mood-0.mp4, mood-0.mp3, etc.)
3. Place them in `/public/assets/`
4. The application will automatically use your new files

## Interactions

- **Click:** Play/Pause
- **Long press (>600ms):** Cycle through moods
- **First use:** Hold to select session length (15/30/45/60 minutes)

## Technical Notes

- Videos and audio crossfade over 2-3 seconds when switching moods
- Visual effects (saturation, contrast, blur) gradually change as time runs out
- Session ends with fade to white and silence
