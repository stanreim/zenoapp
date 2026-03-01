# Vercel deployment checklist

If the live site (focusapp-v1.vercel.app) shows an **old UI** (no "Focus", no "Today", no music player widget, no "v2.0"), the project is likely building from the wrong repo or an old deployment is still set as Production.

## 1. Confirm GitHub has the latest code

- Open: **https://github.com/stanreim/focusapp**
- Check that the default branch shows recent commits, e.g.:
  - "Silence chunk size warning (limit 3000 kB)"
  - "Make build tag and tab title show v2.0 for deployment verification"
- Open **src/app/App.tsx** and confirm you see `const BUILD_ID = '2.0'`.
- Open **src/imports/Home-7-86.tsx** and confirm you see "Today" and `AudioPlayerUI`.

If any of this is missing, the code wasn’t pushed. Push from your local repo to `main` and/or `focusapp-v1`.

## 2. Confirm which Vercel project serves focusapp-v1.vercel.app

- Go to **https://vercel.com/dashboard**
- Find the project whose **production URL** is **focusapp-v1.vercel.app** (or the one you open when you go to that URL).
- Open that project (not a different one).

## 3. Check Git connection for that project

- In the project: **Settings → Git**
- **Repository** must be: **`stanreim/focusapp`** (or your fork of it).
- **Production Branch** is often **main** or **focusapp-v1**. Both branches in this repo have the same latest code.

If the repository is different (e.g. another fork or an old repo), click **Disconnect** and **Connect Git Repository** again, then choose **stanreim/focusapp**.

## 4. Make the latest deployment Production

- Go to **Deployments**.
- Find the **latest** deployment (top of the list). Its commit message should be something like "Silence chunk size warning" or "Make build tag and tab title show v2.0".
- If that deployment is **not** marked as Production (no production badge/alias):
  - Open the **⋮** menu on that deployment.
  - Click **Promote to Production** (or **Set as Production** / **Assign to Production**).
- Wait until the promotion finishes.

## 5. Confirm the live site

- Open **https://focusapp-v1.vercel.app/** in an **incognito/private** window (or hard refresh: Cmd+Shift+R / Ctrl+Shift+R).
- You should see:
  - Browser tab title: **Focus App — v2.0**
  - Small **v2.0** label in the bottom-left of the page
  - **"Focus"** at the top center
  - **"Today"** above the to-do list
  - Music player with track name and progress bar

If you still see the old UI, the domain may be pointing at a different project: repeat step 2 and 3 for the project that actually owns **focusapp-v1.vercel.app**.
