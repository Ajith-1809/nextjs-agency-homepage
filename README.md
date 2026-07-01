# 🌌 Aether Studio | Modern Design Agency Homepage

A premium, high-performance, and responsive design agency landing page built as a task-based evaluation for the **Next.js Developer Internship**. 

This application demonstrates solid frontend fundamentals, robust modular component architecture, high-end UI/UX designs, and clean coding practices using the latest React and Next.js APIs.

---

## 🚀 Live Links & Submissions
*   **GitHub Repository**: [Ajith-1809/nextjs-agency-homepage](https://github.com/Ajith-1809/nextjs-agency-homepage)
*   **Vercel Live Demo**: `[Insert Vercel Deployment Link Here]`

---

## 🛠️ Technology Stack
*   **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router, Static Site Generation)
*   **UI Library**: [React 19](https://react.dev/) (Functional Components)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-safety)
*   **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-First compile engine)
*   **Icon Suite**: [Lucide React](https://lucide.dev/) (Clean SVG strokes)

---

## ✨ Features Checklist

Every mandatory section and optional bonus requirement from the internship guidelines has been fully implemented with a customized, expert finish:

### 1. ⚡ Responsive Layout Sections (Mandatory)
*   **Hero Section**:
    *   Bold, asymmetrical layout with gradient-masked creative typography.
    *   Features an interactive **CSS-based 3D isometric card deck** (floating panels for *Digital Aesthetics* and *System Integrity*) that separate dynamically along the Z-axis upon hover.
    *   Dual-action anchor links: scrolls the viewport directly to the Products and Contact sections.
*   **Services Section**:
    *   A clean grid displaying cards for UI/UX Design, Web Development, Branding, and Digital Marketing.
    *   Equipped with subtle hover translations (`hover:-translate-y-1.5`) and color-shifting SVG containers.
*   **Products Section**:
    *   A uniform 3-column gallery grid displaying active projects with clean category filters (All, Design, Development, Branding).
    *   Employs smooth native React-state filtering to update layouts instantly.
*   **Contact Section**:
    *   A card containing Name, Email, and Message inputs designed with clean, rounded borders.
    *   Equipped with client-side form validation (checks for email formatting, lengths, and required fields) showing clear red warning text and icons.
    *   Features a mock API delay (1.5s) showing a spinner loader, followed by a stateful green success banner.

### 2. 🌟 Premium Developer Additions (Bonus)
*   **Class-Based Dark/Light Mode**:
    *   A global theme switch embedded in the header that updates elements across light (`#fafafa`) and dark (`#030303`) modes.
    *   Saves the user's choice in browser `localStorage` to persist themes across page reloads.
*   **SEO & Metadata Integration**:
    *   Uses Next.js App Router metadata API to configure viewport properties, title tags, OpenGraph cards, and Twitter summaries inside the document head.
*   **Image Optimization**:
    *   Optimizes remote photography thumbnails using Next.js `next/image` with remote patterns, size bounds, and layout priority headers to prevent cumulative layout shift (CLS).
*   **Zero-Dependency Performance**:
    *   Avoided heavy animation libraries (like Framer Motion or Three.js) which bloat bundles. Instead, the 3D transforms, glows, and hover lifts are engineered using native, low-latency Tailwind CSS classes.

---

## 📂 Project Directory Structure

The repository follows standard Next.js directory guidelines, keeping components modular and layouts clean:

```text
nextjs/
├── public/                # Static assets (Favicons, logos)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx     # Configures SEO metadata and mounts the ThemeProvider wrapper
│   │   ├── page.tsx       # Assembly file for the homepage sections
│   │   └── globals.css    # Tailwind v4 configuration, theme variables, and keyframe transitions
│   ├── components/
│   │   ├── navbar.tsx     # Frosted sticky header with mobile drawer & theme switch
│   │   ├── hero.tsx       # Headline, CTA links, and 3D isometric prototype deck
│   │   ├── services.tsx   # Grid layout displaying service capabilities
│   │   ├── products.tsx   # Filterable grid of projects with Next/Image optimization
│   │   ├── contact.tsx    # Boxed input form with client-side validations and loaders
│   │   └── footer.tsx     # Copy years, social SVGs (Facebook, Twitter, LinkedIn), and scroll-to-top button
│   ├── context/
│   │   └── theme-context.tsx # Manages dark/light theme state
│   └── data/
│       └── content.ts     # Holds type interfaces and centralized mock data
├── next.config.ts         # Remote patterns configuration for Next/Image optimization
├── tsconfig.json          # TypeScript compilation settings
├── eslint.config.mjs      # Linter configurations
└── package.json           # Scripts and dependencies
```

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Ensure you have Node.js (version 18+) and npm installed.

### 2. Clone the Repository
```bash
git clone <repository_url>
cd nextjs
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live app.

### 5. Compile the Production Build
Confirm the code compiles and passes linter checks with zero errors:
```bash
npm run build
```

---

## 📝 Design Assumptions
*   **Theme Defaults**: The website defaults to **Dark Mode** on initial load as it accentuates the luxury neon aesthetics, but immediately aligns to user settings or OS preferences if modified.
*   **Form Submissions**: The contact form simulates a server payload dispatch by displaying a loading spinner for 1.5 seconds, then resets the fields and presents a success message card.
