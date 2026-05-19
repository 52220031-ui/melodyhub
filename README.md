# MelodyHub

A modern music streaming UI built with **React** and **Vite** for CSCI390 Web Programming, Phase 2.

> Discover your perfect sound. Millions of tracks, free forever.

---

## Project Description

MelodyHub is a responsive, single-page web application that showcases a music streaming concept. It features a glassmorphic design with animated gradients, trending artist cards, genre browsing, and a contact form. The project was built to apply modern frontend development principles using React, React Router, and component-based architecture.

This is Phase 2 of the CSCI390 course project. Phase 1 was a static HTML/CSS/JavaScript site — Phase 2 migrates it to ReactJS with four routes and full responsive behavior.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool and dev server
- **React Router v6** — client-side routing
- **CSS3** — custom styling with gradients, blur, and animations
- **Font Awesome 6** — icons
- **Google Fonts (Inter)** — typography

## Features

- Four full pages: **Home**, **About**, **Genres**, **Contact**
- Animated loader on initial visit
- Responsive navbar with mobile hamburger menu
- Scroll-aware navbar background
- Glassmorphic artist and genre cards with hover effects
- Working contact form with success feedback
- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling and CSS transitions

## Pages

| Route       | Purpose                                          |
| ----------- | ------------------------------------------------ |
| `/`         | Home — hero, trending artists, genre preview     |
| `/about`    | About — mission, tech stack, course info         |
| `/genres`   | Genres — browse 10 musical styles + playlists    |
| `/contact`  | Contact — form, info cards, social links         |

## Project Structure

```
music-stream/
├── public/
│   └── images/         # Artist images
├── src/
│   ├── components/     # Reusable: Navbar, Footer, Loader
│   ├── pages/          # Route components: Home, About, Genres, Contact
│   ├── App.jsx         # Router and layout
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # Vite entry HTML
├── package.json
├── vite.config.js
└── vercel.json         # SPA rewrite for Vercel
```

## Setup Instructions

### Prerequisites
- **Node.js** 18 or later
- **npm** (comes with Node)

### Install and Run

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/melodyhub.git
cd melodyhub

# 2. Install dependencies
npm install

# 3. Start the dev server (opens http://localhost:5173)
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

## Deployment

This project is configured for **Vercel** (free, zero-config for Vite apps).

### Deploy to Vercel

1. Push the repository to GitHub.
2. Visit [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, select your `melodyhub` repo.
4. Vercel auto-detects Vite. Click **Deploy**.
5. The `vercel.json` file ensures client-side routes (`/about`, `/genres`, `/contact`) work after refresh.

Alternative hosts: **Netlify** (similar one-click flow) or **GitHub Pages** (requires extra base path config).

## Screenshots

> Add screenshots here after deployment:
>
> - `screenshots/home.png` — Home page
> - `screenshots/about.png` — About page
> - `screenshots/genres.png` — Genres page
> - `screenshots/contact.png` — Contact page
> - `screenshots/mobile.png` — Mobile view

## Course Information

- **Course:** CSCI390 — Web Programming
- **Semester:** Spring 2025-2026
- **Phase:** 2 (frontend with React)
- **Due:** 31 May 2026

## Group Contribution

All team members contributed equally to:
- UI/UX design and React component implementation
- Responsive styling and animations
- Documentation and deployment

## License

This project was built for educational purposes as part of the CSCI390 course.
