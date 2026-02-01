# Project Structure Overview

This document shows the complete file structure of the focus experience.

## Core Application Files

```
src/
├── app/
│   ├── App.tsx                          # Main application component
│   └── components/
│       ├── AudioPlayer.tsx              # Handles audio playback and crossfading
│       ├── BackgroundVideo.tsx          # Manages video display and visual effects
│       ├── TimerSelector.tsx            # Radial timer selection interface
│       └── FirstUsePulse.tsx            # Initial hint animation
├── styles/
│   ├── index.css                        # Main styles + animations
│   ├── tailwind.css                     # Tailwind imports
│   ├── theme.css                        # Theme variables
│   └── fonts.css                        # Font imports
└── main.tsx                             # Application entry point
```

## Asset Files (You Need to Add These)

```
public/
└── assets/
    ├── mood-0.mp4      # Video for mood 0 (REQUIRED)
    ├── mood-0.mp3      # Audio for mood 0 (REQUIRED)
    ├── mood-1.mp4      # Video for mood 1 (REQUIRED)
    ├── mood-1.mp3      # Audio for mood 1 (REQUIRED)
    ├── mood-2.mp4      # Video for mood 2 (REQUIRED)
    ├── mood-2.mp3      # Audio for mood 2 (REQUIRED)
    ├── mood-3.mp4      # Video for mood 3 (REQUIRED)
    └── mood-3.mp3      # Audio for mood 3 (REQUIRED)
```

## Documentation Files

```
/
├── README.md                    # Main documentation
├── ASSET-GUIDE.md              # Guide for replacing assets
├── SETUP-ASSETS.md             # How to create/find placeholder assets
├── INTERACTIONS.md             # User interaction guide
└── PROJECT-STRUCTURE.md        # This file
```

## Configuration Files

```
/
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
└── postcss.config.mjs         # PostCSS configuration
```

## Key Files Explained

### `/src/app/App.tsx`
- Main application logic
- Manages state for playback, moods, timer
- Handles all user interactions (click, long press)
- Coordinates between components

### `/src/app/components/BackgroundVideo.tsx`
- Controls video playback
- Applies visual effects based on time remaining
- Handles crossfading between mood videos
- Manages fade to white on session end

### `/src/app/components/AudioPlayer.tsx`
- Manages audio playback
- Handles volume fading for play/pause
- Implements crossfading between mood audio
- Hidden audio element

### `/src/app/components/TimerSelector.tsx`
- Radial progress ring for timer selection
- Detects hold duration
- Snaps to nearest duration (15/30/45/60)
- Shows selected duration while holding

### `/src/app/components/FirstUsePulse.tsx`
- Shows subtle hint on first load
- Fades in and out automatically
- Pulsing animation
- Only visible before initialization

## State Flow

```
Initial State (White Screen)
         ↓ [click]
    Timer Selector
         ↓ [hold & release]
  Session Active (Playing)
         ↓ [click]
    Paused
         ↓ [click]
  Session Active (Playing)
         ↓ [long press]
  Switch Mood (with crossfade)
         ↓ [timer expires]
    Session End (Fade to White)
         ↓ [click]
    Initial State
```

## Component Hierarchy

```
App
├── BackgroundVideo
│   ├── <video> element
│   └── White overlay
├── AudioPlayer
│   └── <audio> element (hidden)
├── TimerSelector (conditional)
│   └── SVG circle with progress
└── FirstUsePulse (conditional)
    └── Pulsing circle hint
```

## Data Flow

1. **User Interaction** → App component
2. **State Changes** → App state updates
3. **Props** → Child components
4. **Visual/Audio Updates** → BackgroundVideo & AudioPlayer

## Asset Loading

Assets are loaded from `/public/assets/` and referenced as:
- `/assets/mood-0.mp4`
- `/assets/mood-0.mp3`
- etc.

The `public` folder is served at the root URL, so `/assets/...` resolves correctly.

## Styling Approach

- **Tailwind CSS v4** for utility classes
- **Inline styles** for dynamic values (opacity, filters)
- **CSS animations** for pulse effect
- **Transitions** for smooth state changes

## Build Output

When you run `npm run build`, Vite creates:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── assets/           # Your media files are copied here
    ├── mood-0.mp4
    ├── mood-0.mp3
    └── ...
```

## Browser Compatibility

- Modern browsers with ES6+ support
- HTML5 video/audio support
- Pointer Events API support
- CSS3 filters and transitions

## Performance Considerations

- Videos should be optimized (< 10MB each)
- Audio should be compressed (128-192kbps MP3)
- Canvas-free (no rendering overhead)
- Minimal React re-renders
- RequestAnimationFrame for smooth animations

## Development Workflow

1. **Development**: `npm run dev` → http://localhost:5173
2. **Build**: `npm run build` → Creates `dist/` folder
3. **Preview**: `npm run preview` → Preview production build
4. **Deploy**: Upload `dist/` folder to hosting service

## Customization Points

1. **Session Durations**: Edit `durations` array in `TimerSelector.tsx`
2. **Long Press Time**: Edit timeout in `App.tsx` (default: 600ms)
3. **Visual Effects**: Edit formulas in `BackgroundVideo.tsx`
4. **Fade Durations**: Edit transition times in components
5. **Number of Moods**: Add more entries to `moods` array in `App.tsx`

## Testing Checklist

Before deploying, verify:

- [ ] All 8 asset files present in `/public/assets/`
- [ ] Videos play and loop smoothly
- [ ] Audio plays and loops without gaps
- [ ] Click toggles play/pause
- [ ] Long press switches moods
- [ ] Timer selector appears on first click
- [ ] Session ends with fade to white
- [ ] Works in full-screen mode
- [ ] Mobile responsive
- [ ] No console errors
