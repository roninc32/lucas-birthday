# Deployment & Sharing Guide ✈️

Complete guide to deploy Captain Lucas's 1st Birthday Invitation and share it professionally.

---

## 1. Free Deployment with Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Captain Lucas 1st Birthday Invitation"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/lucas-birthday.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New Project"**
3. **Import** your `lucas-birthday` repository
4. Vercel auto-detects Vite - just click **"Deploy"**
5. Wait ~1 minute for deployment
6. Get your live URL: `https://lucas-birthday.vercel.app`

### Auto-Updates
- Every `git push` to `main` triggers a new deployment automatically!

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain (e.g., `lucas-birthday.com`)
3. Follow DNS instructions provided

---

## 2. Link Preview Image

### Create the OG Image
Create a **1200x630px** image for link previews:
- Save as `public/assets/og-image.jpg`
- Include: Lucas's photo, "Captain Lucas is Turning One!", airplane graphics

### After Deployment
Update `index.html` - replace `your-domain.vercel.app` with your actual Vercel URL.

### Test Your Preview
Use [opengraph.xyz](https://www.opengraph.xyz/) to preview how your link looks on social platforms.

---

## 3. Email Template

The file `email-template.html` contains a ready-to-use responsive email.

### To Use:
1. Open `email-template.html`
2. Replace `https://your-domain.vercel.app/` with your actual URL
3. Update phone number
4. Copy the HTML and paste into your email client (Gmail, Outlook)

### Alternative: Plain Text Version

```
✈️ YOU'RE INVITED! ✈️

Captain Lucas Gabbrione is turning ONE!

Come fly with us for this special celebration!

📅 Date: January 20, 2026
⏰ Time: 3:00 PM onwards  
📍 Location: Pangasinan City
🎫 Flight: LUCAS-01 (First Class!)

View the full invitation here:
👉 https://your-domain.vercel.app/

We hope to see you there!

With love,
The Gabbrione Family 💙

RSVP: Reply to this email or call +63 XXX XXX XXXX
```

---

## Quick Checklist

- [ ] Push code to GitHub
- [ ] Deploy on Vercel
- [ ] Update URLs in `index.html` (OG tags)
- [ ] Create and upload `og-image.jpg` (1200x630px)
- [ ] Add your photos to `public/assets/`
- [ ] Update email template with real URL
- [ ] Test link preview on opengraph.xyz
- [ ] Send invitations! 🎉
