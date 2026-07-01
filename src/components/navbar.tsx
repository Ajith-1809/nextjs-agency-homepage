"use client";

import { useState } from "react";
import { useTheme } from "@/context/theme-context";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/60 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-sans text-xl font-bold tracking-wider text-foreground">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <span>AETHER<span className="text-indigo-500">.</span></span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-indigo-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-foreground/80 hover:bg-foreground/5 hover:text-indigo-500 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-all duration-200 shadow-sm hover:shadow-indigo-500/20"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-foreground/80 hover:bg-foreground/5 hover:text-indigo-500 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-foreground/85 hover:bg-foreground/5 transition-all duration-200"
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-foreground/5 bg-background transition-colors duration-300">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-indigo-500 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-foreground/5 mt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center rounded-full bg-indigo-600 px-4 py-2.5 text-base font-medium text-white hover:bg-indigo-500 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
