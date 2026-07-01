"use client";

import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/5 bg-background transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Intro */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 font-sans text-xl font-bold tracking-wider text-foreground">
              <Sparkles className="h-5 w-5 text-indigo-500" />
              <span>AETHER<span className="text-indigo-500">.</span></span>
            </a>
            <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
              We design and engineer bespoke web platforms and brand systems for ambitious companies worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-4">Studio</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-foreground/60 hover:text-indigo-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-foreground/60 hover:text-indigo-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="text-sm text-foreground/60 hover:text-indigo-500 transition-colors">Products</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-foreground/60 hover:text-indigo-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-foreground/5 p-2.5 text-foreground/75 hover:bg-indigo-500/10 hover:text-indigo-500 transition-all"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-foreground/5 p-2.5 text-foreground/75 hover:bg-indigo-500/10 hover:text-indigo-500 transition-all"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-foreground/5 p-2.5 text-foreground/75 hover:bg-indigo-500/10 hover:text-indigo-500 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-foreground/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50">
            &copy; {currentYear} Aether Studio. All rights reserved.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 rounded-full border border-foreground/10 px-3.5 py-1.5 text-xs font-semibold text-foreground/70 hover:text-foreground hover:border-foreground/20 transition-all"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
