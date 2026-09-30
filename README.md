# Skill Card

A clay-style (claymorphism) skill card for **Anshul Deep Bajpai**, AI & Machine Learning Engineer (Fresher). It shows my skills, projects, internships and certifications, and visitors can view each certificate in a popup.

Live: https://anshuldeepbajpai-dhoni.github.io/skill-card/

## Features

- Claymorphism design with a soft blue, mint, butter and coral palette
- Skills grouped into tabs (ML and AI, programming, libraries, backend, data and BI, GenAI tools)
- Project cards with links to each GitHub repo
- Internship and certification cards with a certificate viewer popup
- Responsive layout and keyboard-friendly
- Plain HTML, CSS and JavaScript, no build step

## Project structure

```
skill-card/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── photo.jpg        (ignored by git)
└── certificates/
    └── *.pdf
```

## Run locally

Open `index.html` in a browser, or use the Live Server extension in VS Code.
The certificate popup works best on a server (Live Server or hosting), because some browsers block PDFs opened from local files.

## Customise

All content lives at the top of `script.js`:

- `PROFILE`: GitHub and portfolio links
- `SKILLS`: skill groups and items
- `PROJECTS`: project details and repo links
- `INTERNSHIPS` and `CERTIFICATIONS`: details and certificate file paths

Add certificate files to `certificates/` and update the `file` value. If a photo is not present at `assets/photo.jpg`, the card shows initials instead.

## Contact

- Email: anshuldeepbajpai@gmail.com
- GitHub: https://github.com/anshuldeepbajpai-dhoni
- Portfolio: https://anshul-deep-bajpai-portfolio.vercel.app