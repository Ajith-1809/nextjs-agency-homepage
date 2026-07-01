export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Layout" | "Code" | "Sparkles" | "TrendingUp";
}

export interface Project {
  id: string;
  title: string;
  category: "Design" | "Development" | "Branding" | "All";
  tags: string[];
  imageUrl: string;
}

export const SERVICES: Service[] = [
  {
    id: "service-1",
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces and seamless experience pathways that engage and delight your customers.",
    iconName: "Layout",
  },
  {
    id: "service-2",
    title: "Web Development",
    description: "Building fast, SEO-optimized, and highly interactive websites and applications using cutting-edge tech.",
    iconName: "Code",
  },
  {
    id: "service-3",
    title: "Branding & Identity",
    description: "Creating cohesive brand stories, branding systems, and visual kits that establish market presence.",
    iconName: "Sparkles",
  },
  {
    id: "service-4",
    title: "Digital Marketing",
    description: "Formulating search engine optimization plans and data-driven marketing campaigns to drive organic growth.",
    iconName: "TrendingUp",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Vesper Mobile FinTech",
    category: "Design",
    tags: ["Product Design", "iOS App"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-2",
    title: "Eclipse E-Commerce Framework",
    category: "Development",
    tags: ["Next.js", "Stripe Engine"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-3",
    title: "Aura Brand Identity Kit",
    category: "Branding",
    tags: ["Brand Guidelines", "Logos"],
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-4",
    title: "Prism Real-Time SaaS Analytics",
    category: "Development",
    tags: ["React Dashboards", "Charts API"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-5",
    title: "Lumen Creative Studio Portfolio",
    category: "Design",
    tags: ["Web Design", "Webflow Engine"],
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-6",
    title: "Nova AI Chat Interface",
    category: "Development",
    tags: ["AI API", "Tailwind Chat"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
];
