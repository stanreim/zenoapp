# Creating Placeholder Assets

Since this environment cannot generate video/audio files directly, you'll need to create placeholder assets for development.

## Quick Setup with Placeholder Assets

### Option 1: Download Free Stock Footage (Recommended)

Download free ambient video loops from these sites:

**Pexels.com** (search for):
- "abstract gradient loop"
- "slow motion clouds"
- "ocean waves loop"
- "aurora borealis"
- "particles floating"

**Pixabay.com** (search for):
- "ambient background loop"
- "nature loop 4k"
- "minimal motion background"

**Videezy.com** (search for):
- "seamless loop background"
- "meditation background"

Download 4 different videos, rename them to `mood-0.mp4` through `mood-3.mp4`, and place in `/public/assets/`

### Option 2: Use solid color videos (for quick testing)

Create simple test videos using video editing software or online tools like:
- Kapwing.com
- Canva.com (Pro has video templates)
- Any video editor (export 10-30 second clips with solid colors)

### Option 3: Generate with code

You can use FFmpeg to create placeholder videos:

```bash
# Solid color video (blue)
ffmpeg -f lavfi -i color=c=0x4A90E2:s=1920x1080:d=10 -pix_fmt yuv420p public/assets/mood-0.mp4

# Gradient video (purple)
ffmpeg -f lavfi -i color=c=0x9B59B6:s=1920x1080:d=10 -pix_fmt yuv420p public/assets/mood-1.mp4

# Gradient video (green)
ffmpeg -f lavfi -i color=c=0x2ECC71:s=1920x1080:d=10 -pix_fmt yuv420p public/assets/mood-2.mp4

# Gradient video (orange)
ffmpeg -f lavfi -i color=c=0xE67E22:s=1920x1080:d=10 -pix_fmt yuv420p public/assets/mood-3.mp4
```

## Audio Files

For placeholder audio, you can:

### Option 1: Use silence (for testing)

```bash
# Generate 10 seconds of silence
ffmpeg -f lavfi -i anullsrc=r=44100:cl=stereo -t 10 -acodec mp3 public/assets/mood-0.mp3
ffmpeg -f lavfi -i anullsrc=r=44100:cl=stereo -t 10 -acodec mp3 public/assets/mood-1.mp3
ffmpeg -f lavfi -i anullsrc=r=44100:cl=stereo -t 10 -acodec mp3 public/assets/mood-2.mp3
ffmpeg -f lavfi -i anullsrc=r=44100:cl=stereo -t 10 -acodec mp3 public/assets/mood-3.mp3
```

### Option 2: Use ambient sounds

Download free ambient audio from:
- Freesound.org
- YouTube Audio Library
- Incompetech.com

Search for: "ambient", "atmosphere", "meditation", "background"

## Directory Structure

After adding files, your structure should look like:

```
/public/
  └── assets/
      ├── mood-0.mp4
      ├── mood-0.mp3
      ├── mood-1.mp4
      ├── mood-1.mp3
      ├── mood-2.mp4
      ├── mood-2.mp3
      ├── mood-3.mp4
      └── mood-3.mp3
```

## Testing Without Assets

If you want to test without assets immediately:

1. The app will show errors in the console but will still function
2. The timer selector and interaction logic will work
3. Just add the assets later for the complete experience
