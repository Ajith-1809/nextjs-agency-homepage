# 📘 Aether Studio | Technical Architecture & Presentation Guide

This document is prepared to explain the technical decisions, folder architecture, styling design patterns, and optimization practices implemented for the **Aether Studio Homepage**. 

It can be used directly as a presentation guide or reference notes for the technical interview.

---

## 📋 Table of Contents
1. [Project Overview & Design Concept](#1-project-overview--design-concept)
2. [Architectural Decisions](#2-architectural-decisions)
3. [Component Breakdown & Code Walkthrough](#3-component-breakdown--code-walkthrough)
4. [Performance & SEO Optimization Strategy](#4-performance--seo-optimization-strategy)
5. [Interview FAQ & Key Talking Points](#5-interview-faq--key-talking-points)

---

## 1. Project Overview & Design Concept
The project goal was to build a modern Design Agency Home Page conforming to the internship evaluation checklist. 

*   **Design Vision**: Clean, high-end, editorial aesthetic. 
*   **The Theme**: A default dark layout using rich charcoal shades (`#030303`), accented by neon-indigo and purple gradients. 
*   **Interactive Focus**: Prioritizing high-fidelity interactive elements, such as a **native 3D isometric product deck** in the hero and a dynamic products grid filter, while keeping the application lightweight.

---

## 2. Architectural Decisions

### A. Next.js 16 App Router
*   **Why App Router?** The folder-based directory provides a clean routing model. It supports **React Server Components (RSC)** by default, which improves initial load times by rendering HTML on the server and minimizing client-side hydration.
*   **Server vs. Client Components**:
    *   **Server Components** (`layout.tsx`): Used to declare static page metadata and load SEO tags. This ensures search engine bots receive complete HTML headers instantly.
    *   **Client Components** (`page.tsx`, `navbar.tsx`, `hero.tsx`, `services.tsx`, `products.tsx`, `contact.tsx`): Used where user interaction or state hooks (`useState`, `useEffect`) are necessary (like toggles, forms, tab filters, and event listeners).

### B. Directory Structure
We segregated files into highly focused modules:
*   `src/components/`: Modular functional UI sections.
*   `src/context/`: Core states shared globally (e.g., `ThemeContext`).
*   `src/data/`: Static content models and JSON datasets to keep presentation layers readable.

### C. State Management
*   **Theme Provider**: A custom `ThemeProvider` context wraps the layout. It checks local storage during initialization, syncs the state with a `.dark` class toggled on the `<html>` root, and saves preferences to local storage.

---

## 3. Component Breakdown & Code Walkthrough

### 🌓 Navbar (`navbar.tsx`)
*   **Design**: A sticky, frosted-glass header using `backdrop-blur-md bg-background/60`.
*   **Function**: Houses navigation links and the theme toggle icon. Includes a responsive mobile drawer menu triggered by React state.

### 📐 Hero (`hero.tsx`)
*   **Design**: Left-aligned headline typography contrasting against a **3D isometric layered deck** on the right.
*   **CSS 3D Engine**: Uses native CSS 3D capabilities (`perspective: 1200px` and `transform-style: preserve-3d`).
*   **3D Stacking**: 
    *   *Top Layer (Model 01 - Aesthetics)*: Translucent card with circular graphics.
    *   *Bottom Layer (Model 02 - Integrity)*: Solid card with CPU/Secure graphics.
    *   *Hover State*: The `group` selector triggers Z-axis displacement (`translateZ`), causing the cards to spread apart vertically on hover.

### 💼 Services (`services.tsx`)
*   **Design**: A responsive 4-column card grid compliant with the task sheet specifications.
*   **Styling**: Cards lift up using Tailwind hover transforms (`hover:-translate-y-1.5`) and draw attention via micro-borders.

### 🎨 Products (`products.tsx`)
*   **Design**: A uniform 3-column grid displaying projects.
*   **Tab Filtering**: A dynamic React filter shuffles the project array on-click, updating the gallery instantly.

### ✉️ Contact Form (`contact.tsx`)
*   **Design**: Structured boxed input fields featuring focus borders (`focus:ring-2 focus:ring-indigo-500/25`).
*   **Validators**: JavaScript regex checks input formats. Errors are mapped to respective inputs and styled with warning icons.
*   **Mock State**: Simulates api delays via a `setTimeout` loader spinner, showing a success card upon completion.

---

## 4. Performance & SEO Optimization Strategy

### A. Core Web Vitals & Hydration
*   **Framer Motion Removal**: To resolve initial compile and filesystem bottlenecks on the development server, we removed Javascript-heavy animation engines. We replaced them with native CSS keyframe and Tailwind hover animations.
*   **Cumulative Layout Shift (CLS)**: Thumbnails render inside containers using `next/image` with explicit `sizes` and `priority` flags, ensuring the browser reserves space during render.

### B. Search Engine Optimization (SEO)
*   **Meta Tags**: `layout.tsx` exposes Next.js metadata objects which compile into HTML meta elements (`keywords`, `author`, `OpenGraph`, `Twitter cards`), ensuring high index indexing scores.

---

## 5. Interview FAQ & Key Talking Points

When presenting this project in your technical discussion, be prepared to answer these questions:

### 💬 "Why did you use Next.js over Vite/Create React App?"
> *"Next.js provides out-of-the-box Server-Side Rendering (SSR) and App Routing. This allows us to keep layouts light, secure search engine crawlability, and utilize the modern Next.js Image Component for asset resizing."*

### 💬 "How does the Dark Mode Toggle work?"
> *"I built a custom React Context provider (`ThemeContext`) that wraps the root layout. It reads from local storage during mounting to prevent hydration mismatches, then adds or removes the `.dark` class on the root `<html>` element. Tailwind v4's `@custom-variant dark (&:where(.dark, .dark *))` directive automatically picks up this class to swap styling tokens."*

### 💬 "How did you implement the 3D isometric stack?"
> *"I avoided loading heavy external libraries like Three.js which bloat bundle sizes. Instead, I built the 3D stack natively in CSS using perspective containers, `transform-style: preserve-3d`, and rotated individual panels on the X and Z axes. Hover states animate the Z-axis displacement via standard CSS transitions, which is hardware-accelerated by the GPU."*

### 💬 "How do you handle Image Optimization?"
> *"I used Next.js's `<Image />` component. I set up secure `remotePatterns` in `next.config.ts` to authorize Unsplash domains, configured responsive `sizes` to prevent the browser from loading desktop-sized images on mobile, and added `priority` headers to images above the fold to improve Largest Contentful Paint (LCP)."*
