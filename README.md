# Programming Portfolio (static site)

This repository contains a simple, static programming portfolio intended for GitHub Pages.

Quick start (local preview):

```powershell
python -m http.server 8000
# open http://localhost:8000
```

Where to edit
- `index.html` — Home page (bio, mission, languages)
- `resume.html` — Resume page; download button points to `assets/resume.pdf`
- `projects.html` — Project cards; add images to `assets/projects/`
- `contact.html` — Contact form; replace the `action` with your Formspree or other endpoint
- `css/styles.css` — Central styles
- `js/contact.js` — Client-side contact form helpers

Publishing to GitHub Pages
1. Push this repository to GitHub.
2. In GitHub > Settings > Pages, pick the branch (`main`/`master`) and root `/` as source.

Notes
- Replace `assets/resume.pdf` with your actual resume PDF file to enable the download button.
- The contact form currently uses a placeholder Formspree URL — update `contact.html` to a real endpoint.
