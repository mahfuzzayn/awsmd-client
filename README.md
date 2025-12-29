# Awsmd Client

A premium, interactive portfolio website for a creative design and development agency. This project showcases modern web development practices, featuring smooth scrolling, complex animations, and a highly polished UI.

**Live Demo:** [https://awsmd-client.vercel.app/](https://awsmd-client.vercel.app/)

## ⚙ Tech Stack

Built with the latest modern web technologies:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Primitives), [Lucide React](https://lucide.dev/) (Icons)
- **Animations:** [Framer Motion](https://www.framer.com/motion/), [Tw Animate CSS](https://github.com/theoomore/tw-animate-css)
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Carousels:** [Embla Carousel](https://www.embla-carousel.com/), [Swiper](https://swiperjs.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)

## ✨ Key Features

- **Immersive User Experience:**
  - **Smooth Scrolling:** Integrated Lenis for a premium scroll feel.
  - **Custom Cursor:** Interactive cursor component that responds to hover states.
  - **Video Backgrounds:** High-quality video assets for Hero and Portfolio sections.

- **Complex Visualizations:**
  - **Interactive Graph:** Custom-built circular graph component with rotation and hover effects (`src/components/modules/home/about-us/graph`).
  - **Animated Stats:** Dynamic running numbers and text.

- **Modern Architecture:**
  - **Modular Design:** Feature-based folder structure (e.g., `modules/home/about-us`, `modules/home/banner`).
  - **Shared Components:** Reusable UI elements in `src/components/ui` and `src/components/shared`.
  - **Custom Fonts:** Integrated `Freigeist`, `Inter`, and `Plus Jakarta Sans` via Next.js Font optimization.

## 📂 Project Structure

```bash
src/
├── app/                 # Next.js App Router pages and layouts
├── assets/              # Static images and SVGs
├── components/
│   ├── modules/         # Page-specific sections (Hero, About, Portfolio, etc.)
│   ├── shared/          # Global components (Navigation, RunningText, etc.)
│   └── ui/              # Reusable UI primitives (Buttons, Dialogs, etc.)
├── fonts/               # Local font files
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── types/               # TypeScript type definitions
public/                  # Public assets (Favicon, Videos)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🎨 Design System

The project uses a custom design system built on top of Tailwind CSS.
- **Colors & Typography:** Defined in global CSS variables and Tailwind config.
- **Components:** Uses a customized version of the `shadcn/ui` library pattern.

## 👥 Creator

**Mahfuz Zayn** - A Creative Full Stack Developer

- 🌐 **Website:** [mahfuzzayn.vercel.app](https://mahfuzzayn.vercel.app)
- 📧 **Email:** [mahfuzzayn8@gmail.com](mailto:mahfuzzayn8@gmail.com)
- 📍 **Location:** Sylhet, Bangladesh

### Follow Us
- [Dribbble](https://dribbble.com/mahfuzzayn)
- [LinkedIn](https://www.linkedin.com/in/mahfuzzayn/)
- [Clutch](https://clutch.co/profile/mahfuzzayn)
- [Instagram](https://www.instagram.com/mahfuzzayn)
- [Behance](https://www.behance.net/mahfuzzayn)
