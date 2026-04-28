# 🚀 Sougata Saha — Personal Portfolio

A modern, cinematic personal portfolio website built with **React 19 + Vite 7 + TypeScript**, featuring a dark aesthetic with animated particle fields, interactive sections, a smart AI-powered chatbot, a full-screen blog reader, and a fully responsive multi-page layout — powered by a dedicated Node.js email backend.

**🌐 Live Site:** [https://www.sougatasha.in](https://www.sougatasha.in)  
**📦 Repository:** [github.com/LifeEnthusiast03/Portfolio](https://github.com/LifeEnthusiast03/Portfolio)

---

## ✨ Features

- **Cinematic Hero Section** — Animated fine-grid background, canvas particle field, cursor-tracking spotlight orb, typewriter role cycling, spinning conic-gradient profile frame, and floating tech icons
- **Multi-Page Routing** — React Router v7 with smooth page transition animations via Framer Motion
- **Smart Chatbot** — Context-aware assistant with 15+ knowledge topics, fuzzy multi-score matching, typing indicator, quick-reply chips, and bold markdown rendering
- **Projects Section** — Compact cards with image thumbnails, category filter (Full Stack / Frontend / Gen AI), accent-colored hover glows, and direct GitHub + Live links
- **Skills Section** — Categorized tech stack display with animated entrance
- **Education Section** — Timeline-style layout with academic details, SGPA, and certifications tab
- **Blogs Section** — Searchable article grid with category filter, featured post highlight, read-time & view counts, and a full-screen **Blog Reader** modal with rich formatted content
- **Contact Section** — Functional contact form backed by a Node.js + Nodemailer email server (deployed separately)
- **Custom Cursor** — Premium animated cursor that enhances the interactive feel
- **Animated Particles** — Shared reusable canvas component used across all pages for visual consistency
- **Premium Dark Theme** — Unified `#030712` base with `44px` blueprint grid, radial ambient glows, and `backdrop-blur` glassmorphism throughout
- **TypeScript Throughout** — Entire codebase (frontend + backend) written in strict TypeScript

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
│   ├── App.tsx              # Root router + layout
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   └── components/
│       ├── Particles.tsx           # Shared animated canvas particle field
│       ├── PageTransition.tsx      # Framer Motion page wrapper
│       ├── ScrollToTop.tsx         # Scroll reset on route change
│       ├── CustomCursor.tsx        # Custom animated cursor
│       ├── Navbar/
│       │   └── navbar.tsx          # Fixed floating pill navbar
│       ├── Footer/
│       │   └── footer.tsx          # Compact single-bar footer
│       ├── ChatBot/
│       │   └── chatbot.tsx         # AI portfolio assistant
│       ├── Herosection/
│       │   └── herosection.tsx     # Landing hero with spotlight + particles
│       ├── Projectsction/
│       │   └── project.tsx         # Projects grid with filter
│       ├── Skillsection/
│       │   └── skills.tsx          # Tech stack breakdown
│       ├── Educationsection/
│       │   └── education.tsx       # Academic history + certifications
│       ├── Blogsection/
│       │   ├── blog.tsx            # Article grid with search & filter
│       │   ├── BlogReader.tsx      # Full-screen blog reading modal
│       │   └── blogData.ts         # Static blog content & metadata
│       └── Contactsection/
│           └── contact.tsx         # Contact form (calls email API)
├── server/                         # Node.js email backend
│   ├── src/
│   │   └── index.ts               # Express + Nodemailer email API
│   ├── package.json
│   └── tsconfig.json
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
└── vercel.json                     # Client-side routing config for Vercel
```

---

## 🛠️ Tech Stack

### Frontend

| Category | Technologies |
|---|---|
| **Framework** | React 19, Vite 7 |
| **Language** | TypeScript |
| **Routing** | React Router DOM v7 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion v12 |
| **Icons** | Lucide React, React Icons (Simple Icons) |
| **Canvas** | Vanilla Canvas API (particle field) |

### Backend (Email Server)

| Category | Technologies |
|---|---|
| **Runtime** | Node.js |
| **Language** | TypeScript (ts-node-dev) |
| **Framework** | Express.js |
| **Email** | Nodemailer |
| **Config** | dotenv, CORS |

---

## 📄 Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HeroSection` | Landing page with animated hero |
| `/projects` | `ProjectsSection` | 4 featured projects with filter |
| `/skills` | `SkillsSection` | Full tech stack breakdown |
| `/education` | `EducationSection` | Academic background & certifications |
| `/blogs` | `BlogSection` + `BlogReader` | Tech articles with search, categories & full-screen reader |
| `/contact` | `ContactSection` | Contact form + social links |

---

## 🧩 Key Components

### `Particles.tsx`
Reusable canvas-based animated particle field. 60 drifting dots with connecting lines under 100px proximity. Shared across all section pages for visual consistency.

### `chatbot.tsx`
Portfolio-specific AI assistant with:
- **15 knowledge topics**: identity, skills, all projects, education, contact, coding profiles, GenAI, frontend, backend, blogs, location, hobbies, availability
- **Fuzzy multi-score matching**: exact → substring → word-level partial scoring
- **Greeting / farewell / thanks** special-case handling
- Quick-reply chips, animated typing indicator, bold `**text**` rendering

### `herosection.tsx`
- **Spotlight orb**: tracks mouse cursor with spring physics (`useMotionValue` + `useSpring`)
- **Typewriter hook**: cycles through 5 role titles with configurable typing/delete/pause speeds
- **Particles canvas**: 60-dot animated field
- **Staggered entrance**: Framer Motion `initial → animate` with cascading delays
- **6 social links**: GitHub, LinkedIn, Email, LeetCode, GFG, Codeforces

### `BlogReader.tsx`
Full-screen immersive blog reader modal featuring:
- Rich formatted content with headings, code blocks, and callouts
- Reading progress bar
- Estimated read time display
- Smooth open/close animations via Framer Motion

### `server/src/index.ts`
Standalone Express email API:
- `POST /api/send-email` — receives contact form payload, sends via Nodemailer (Gmail OAuth2 / App Password)
- CORS-enabled for portfolio domain
- Environment-variable driven configuration via `.env`

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Frontend Setup

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

### Email Server Setup

```bash
cd server

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your Gmail credentials

# Start the email server (development)
npm run dev
```

The email API will be available at `http://localhost:4000`

### Environment Variables (server/.env)

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
PORT=4000
```

> **Note:** Use a Gmail [App Password](https://myaccount.google.com/apppasswords) — not your regular account password.

### Build for Production

```bash
# Frontend
npm run build

# Email server
cd server && npm run build
```

Frontend output goes to the `dist/` folder, ready for static hosting (Vercel, Netlify, GitHub Pages).

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Dependencies

### Frontend (`package.json`)

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
  },
  "devDependencies": {
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@typescript-eslint/eslint-plugin": "^8.59.0",
    "@typescript-eslint/parser": "^8.59.0",
    "@vitejs/plugin-react": "^4.5.2",
    "typescript": "^6.0.3",
    "vite": "^7.0.0"
  }
}
```

### Email Server (`server/package.json`)

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "nodemailer": "^6.9.13"
  },
  "devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/nodemailer": "^6.4.14",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.4.5"
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

MIT © 2026 Sougata Saha
