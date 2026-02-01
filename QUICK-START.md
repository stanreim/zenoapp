# ✅ Quick Start Checklist

Follow these steps to get your focus experience running:

## Step 1: Install Dependencies

```bash
npm install
```

Wait for installation to complete.

## Step 2: Create Assets Folder

Create the directory structure:
```
public/
└── assets/
```

## Step 3: Add Media Files

You need 8 files total (4 videos + 4 audio files):

### Download Sources:

**For Videos** (search these terms):
- [Pexels.com](https://pexels.com): "abstract gradient", "slow clouds", "calm ocean"
- [Pixabay.com](https://pixabay.com): "ambient loop", "meditation background"
- [Videezy.com](https://videezy.com): "seamless background loop"

**For Audio**:
- [Freesound.org](https://freesound.org): "ambient", "white noise", "nature sounds"
- [YouTube Audio Library](https://youtube.com/audiolibrary): Filter by "ambient"

### File Names (EXACTLY):
```
✓ mood-0.mp4
✓ mood-0.mp3
✓ mood-1.mp4
✓ mood-1.mp3
✓ mood-2.mp4
✓ mood-2.mp3
✓ mood-3.mp4
✓ mood-3.mp3
```

### Place all files in:
```
/public/assets/
```

## Step 4: Verify Setup

Check that your structure looks like:
```
your-project/
├── public/
│   └── assets/
│       ├── mood-0.mp4 ✓
│       ├── mood-0.mp3 ✓
│       ├── mood-1.mp4 ✓
│       ├── mood-1.mp3 ✓
│       ├── mood-2.mp4 ✓
│       ├── mood-2.mp3 ✓
│       ├── mood-3.mp4 ✓
│       └── mood-3.mp3 ✓
├── src/
└── package.json
```

## Step 5: Start Development Server

```bash
npm run dev
```

Open browser to `http://localhost:5173`

## Step 6: Test Interactions

1. **Click anywhere** → Should show timer selector
2. **Hold** → Ring should fill, numbers appear
3. **Release** → Video and audio should start
4. **Quick click** → Pause/resume
5. **Long press (>600ms)** → Switch moods

## Troubleshooting

### "Cannot find videos"
- Check file names match exactly (lowercase, hyphens)
- Verify files are in `/public/assets/` not `/src/assets/`
- Refresh browser hard (Cmd+Shift+R / Ctrl+Shift+R)

### "Videos won't play"
- Check video format is MP4 (H.264)
- Try a different browser
- Check browser console for errors

### "No audio"
- Check audio files are MP3
- Verify browser autoplay policy (some browsers block autoplay)
- Check system volume

### "Timer selector doesn't appear"
- Try clicking in center of screen
- Check browser console for errors
- Refresh page

## Quick FFmpeg Commands (Optional)

If you need to convert videos to MP4:
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 22 mood-0.mp4
```

If you need to convert audio to MP3:
```bash
ffmpeg -i input.wav -codec:a libmp3lame -qscale:a 2 mood-0.mp3
```

Create 10-second colored placeholder videos:
```bash
ffmpeg -f lavfi -i color=c=blue:s=1920x1080:d=10 mood-0.mp4
ffmpeg -f lavfi -i color=c=purple:s=1920x1080:d=10 mood-1.mp4
ffmpeg -f lavfi -i color=c=green:s=1920x1080:d=10 mood-2.mp4
ffmpeg -f lavfi -i color=c=orange:s=1920x1080:d=10 mood-3.mp4
```

## Recommended First Assets

Start with these searches for good results:

1. **Mood 0**: "slow motion clouds blue sky"
2. **Mood 1**: "ocean waves calm aerial"
3. **Mood 2**: "abstract gradient purple"
4. **Mood 3**: "night sky stars milky way"

Download ~30 second clips, export as MP4.

For audio:
1. **Mood 0**: Rain sounds
2. **Mood 1**: Ocean waves
3. **Mood 2**: White noise
4. **Mood 3**: Forest ambience

## Build for Production

When ready to deploy:

```bash
npm run build
```

Upload the `dist/` folder to your hosting service (Netlify, Vercel, etc.)

## Done! 🎉

Your focus experience should now be working. Press `F11` for full-screen and enjoy!

---

**Need help?** Check:
- `README.md` - Full documentation
- `INTERACTIONS.md` - How to use the app
- `ASSET-GUIDE.md` - Asset specifications
- `SETUP-ASSETS.md` - Detailed asset setup
