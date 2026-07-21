# Developer Portfolio

A modern, animated, fully responsive developer portfolio built with React, Tailwind CSS, and Framer Motion.

## Tech Stack
- React 18 + Vite
- Tailwind CSS (dark/light theme via CSS variables)
- Framer Motion (animations, page transitions)
- React Router-style scroll navigation (`react-scroll`)
- EmailJS (contact form)
- tsParticles (animated background)
- react-type-animation (hero typing effect)

## Project Structure
```
portfolio/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── profile-placeholder.jpg   ← add your photo here
│   ├── resume.pdf                ← add your resume here
│   ├── projects/                 ← project screenshots
│   └── certificates/             ← certificate images
├── src/
│   ├── components/               ← all UI sections
│   ├── context/ThemeContext.jsx  ← dark/light mode logic
│   ├── data/portfolioData.js     ← ALL editable content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                    ← SEO meta tags + structured data
├── tailwind.config.js
└── vite.config.js
```

## 1. Edit Your Content
Open `src/data/portfolioData.js` — this single file drives the entire site:
name, bio, skills, **projects** (already ordered per your request: IELTS AI Platform → Auth System →
Free Fire Project → AI/ML Mini Projects → Medical AI/Robotics Research → future placeholders),
experience, education, certifications, and achievements.

## 2. Add Your Assets
Place these in `public/`:
- `profile-placeholder.jpg` — your photo (falls back to initials if missing)
- `resume.pdf` — your resume
- `projects/*.jpg` — project screenshots (referenced in portfolioData.js)
- `certificates/*.jpg` — certificate images (or use the in-app upload button)

## 3. Set Up EmailJS (Contact Form)
1. Create a free account at https://www.emailjs.com/
2. Create an Email Service (e.g. Gmail) → copy the **Service ID**
3. Create an Email Template with fields `name`, `email`, `subject`, `message` → copy the **Template ID**
4. Go to Account → API Keys → copy your **Public Key**
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```

## 4. Run Locally
```bash
npm install
npm run dev
```
Visit `http://localhost:5173`

## 5. Build for Production
```bash
npm run build
npm run preview   # test the production build locally
```
Output goes to `dist/`.

---

## Deployment

### Deploy to GitHub Pages (via GitHub repo)
1. Push this project to a new GitHub repository.
2. Commit and push all files (`git add . && git commit -m "Initial portfolio" && git push`).
3. Use Vercel or Netlify (below) connected to that repo for the actual hosting — GitHub itself just stores the code.

### Deploy to Vercel (recommended)
1. Push your code to GitHub.
2. Go to https://vercel.com → **New Project** → import your GitHub repo.
3. Framework Preset: **Vite**. Build Command: `npm run build`. Output Directory: `dist`.
4. Click **Deploy**. Vercel gives you a live URL instantly and redeploys on every push.

### Deploy to Netlify
1. Push your code to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import an existing project**.
3. Connect your repo. Build Command: `npm run build`. Publish Directory: `dist`.
4. Click **Deploy site**.

### Before going live
- Replace all placeholder URLs (`yourdomain.com`, `yourusername`) in `index.html`, `portfolioData.js`, `robots.txt`, and `sitemap.xml`.
- Add your real Open Graph image (`public/og-image.jpg`, ~1200×630px).
- Update `sitemap.xml` with your real domain and date.

## Features Included
- Dark/Light mode toggle (persisted via CSS class)
- Animated hero with typing effect, social links, resume download
- Animated skill progress bars
- Project filtering by category + live search
- Timeline-style Experience & Education sections
- Certification cards with client-side upload preview
- EmailJS-powered contact form with toast notifications
- Scroll progress bar, back-to-top button, custom animated cursor, particle background
- Smooth section transitions and on-scroll reveal animations throughout
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD structured data, robots.txt, sitemap.xml
- Fully responsive (mobile, tablet, desktop)
