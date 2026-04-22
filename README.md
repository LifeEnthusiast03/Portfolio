# 🚀 Sougata Saha — Personal Portfolio

A modern, cinematic personal portfolio website built with **React 19 + Vite 7**, featuring a dark aesthetic with animated particle fields, interactive sections, a smart AI-powered chatbot, and a fully responsive multi-page layout.

**Live:** [https://github.com/LifeEnthusiast03/Portfolio](https://github.com/LifeEnthusiast03/Portfolio)

---

## ✨ Features

- **Cinematic Hero Section** — Animated fine-grid background, canvas particle field, cursor-tracking spotlight orb, typewriter role cycling, spinning conic-gradient profile frame, and floating tech icons
- **Multi-Page Routing** — React Router v7 with smooth page transition animations via Framer Motion
- **Smart Chatbot** — Context-aware assistant with 15+ knowledge topics, fuzzy multi-score matching, typing indicator, quick-reply chips, and bold markdown rendering
- **Projects Section** — Compact cards with image thumbnails, category filter (Full Stack / Frontend / Gen AI), accent-colored hover glows, and direct GitHub + Live links
- **Skills Section** — Categorized tech stack display with animated entrance
- **Education Section** — Timeline-style layout with academic details, SGPA, and certifications tab
- **Blogs Section** — Searchable article grid with category filter, featured post highlight, read-time & view counts
- **Contact Section** — Functional contact form with animated cards
- **Animated Particles** — Shared reusable canvas component used across all pages for visual consistency
- **Premium Dark Theme** — Unified `#030712` base with `44px` blueprint grid, radial ambient glows, and `backdrop-blur` glassmorphism throughout

---

## 🗂️ Project Structure

```
Portfolio/
├── public/
│   ├── sougata.jpg          # Profile photo
│   ├── chat.png             # Chat app screenshot
│   ├── readwise.png         # Readwise screenshot
│   ├── spendwise.png        # Spendwise screenshot
│   ├── skyfleat.png         # SkyFlect screenshot
│   └── Sougata_Saha.pdf     # Resume / CV
├── src/
│   ├── App.jsx              # Root router + layout
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── components/
│       ├── Particles.jsx           # Shared animated canvas particle field
│       ├── PageTransition.jsx      # Framer Motion page wrapper
│       ├── ScrollToTop.jsx         # Scroll reset on route change
│       ├── Navbar/
│       │   └── navbar.jsx          # Fixed floating pill navbar
│       ├── Footer/
│       │   └── footer.jsx          # Compact single-bar footer
│       ├── ChatBot/
│       │   └── chatbot.jsx         # AI portfolio assistant
│       ├── Herosection/
│       │   └── herosection.jsx     # Landing hero with spotlight + particles
│       ├── Projectsction/
│       │   └── project.jsx         # Projects grid with filter
│       ├── Skillsection/
│       │   └── skills.jsx          # Tech stack breakdown
│       ├── Educationsection/
│       │   └── education.jsx       # Academic history + certifications
│       ├── Blogsection/
│       │   └── blog.jsx            # Article grid with search & filter
│       └── Contactsection/
│           └── contact.jsx         # Contact form
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 19, Vite 7 |
| **Routing** | React Router DOM v7 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion v12 |
| **Icons** | Lucide React, React Icons (Simple Icons) |
| **Canvas** | Vanilla Canvas API (particle field) |

---

## 📄 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HeroSection` | Landing page with animated hero |
| `/projects` | `ProjectsSection` | 4 featured projects with filter |
| `/skills` | `SkillsSection` | Full tech stack breakdown |
| `/education` | `EducationSection` | Academic background & certifications |
| `/blogs` | `BlogSection` | Tech articles with search & categories |
| `/contact` | `ContactSection` | Contact form + social links |

---

## 🧩 Key Components

### `Particles.jsx`
Reusable canvas-based animated particle field. 60 drifting dots with connecting lines under 100px proximity. Shared across all section pages for visual consistency.

### `chatbot.jsx`
Portfolio-specific AI assistant with:
- **15 knowledge topics**: identity, skills, all projects, education, contact, coding profiles, GenAI, frontend, backend, blogs, location, hobbies, availability
- **Fuzzy multi-score matching**: exact → substring → word-level partial scoring
- **Greeting / farewell / thanks** special-case handling
- Quick-reply chips, animated typing indicator, bold `**text**` rendering

### `herosection.jsx`
- **Spotlight orb**: tracks mouse cursor with spring physics (`useMotionValue` + `useSpring`)
- **Typewriter hook**: cycles through 5 role titles with configurable typing/delete/pause speeds
- **Particles canvas**: 60-dot animated field
- **Staggered entrance**: Framer Motion `initial → animate` with cascading delays
- **6 social links**: GitHub, LinkedIn, Email, LeetCode (SiLeetcode), GFG (SiGeeksforgeeks), Codeforces (SiCodeforces)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/LifeEnthusiast03/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready for static hosting (Vercel, Netlify, GitHub Pages).

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^12.23.0",
    "lucide-react": "^0.525.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.14.2",
    "tailwindcss": "^4.1.11"
  }
}
```

---

## 🔗 Featured Projects

| Project | Stack | Link |
|---|---|---|
| **Real-Time Chat App** | Node.js, Socket.io, MongoDB, React | [GitHub](https://github.com/LifeEnthusiast03/My_chat_app) |
| **Readwise** (RAG Knowledge Base) | React, Node.js, Pinecone, OpenAI | [Live](https://readwise-virid.vercel.app/login) |
| **Spendwise** (Expense Tracker) | React, Express, PostgreSQL, Prisma | [Live](https://spendwisee-beige.vercel.app/) |
| **SkyFlect** (Weather App) | React, Tailwind CSS, OpenWeather API | [Live](https://skyflect.vercel.app/) |

---

## 📬 Contact

| Platform | Link |
|---|---|
| **Email** | sahasougata820@gmail.com |
| **LinkedIn** | [linkedin.com/in/sougatasaha](https://www.linkedin.com/in/sougatasaha/) |
| **GitHub** | [github.com/LifeEnthusiast03](https://github.com/LifeEnthusiast03) |
| **LeetCode** | [leetcode.com/u/sougata820](https://leetcode.com/u/sougata820/) |
| **GeeksForGeeks** | [geeksforgeeks.org/profile/sahasoug21zk](https://www.geeksforgeeks.org/profile/sahasoug21zk) |
| **Codeforces** | [codeforces.com/profile/Sougatasaha](https://codeforces.com/profile/Sougatasaha) |

---

## 📜 License

MIT © 2025 Sougata Saha
