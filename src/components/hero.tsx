"use client";

import { ArrowRight, Sparkles, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Background Glowing Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/15" />
        <div className="absolute top-[45%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[130px] dark:bg-purple-500/15" />
      </div>

      {/* Hero Grid Container */}
      <div className="mx-auto max-w-7xl w-full grid gap-16 lg:grid-cols-12 items-center relative z-10">
        
        {/* Left Column: Headline Copy */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3.5 py-1.5 text-xs font-semibold text-indigo-500 dark:text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Generation Agency Experience</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] font-sans">
            We engineer premium
            <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              digital products.
            </span>
          </h1>

          <p className="text-lg text-foreground/75 leading-relaxed max-w-xl">
            Aether Studio combines structural engineering with luxury aesthetics. We build lightning-fast web applications, creative branding systems, and secure web engines for leading businesses.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-indigo-500 transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="text-sm font-bold text-foreground/70 hover:text-indigo-500 border-b-2 border-foreground/10 hover:border-indigo-500 pb-1 transition-all duration-300"
            >
              Start a conversation
            </a>
          </div>
        </div>

        {/* Right Column: Native 3D Isometric Prototype Model */}
        <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[480px] flex items-center justify-center select-none mt-8 lg:mt-0">
          
          {/* Main 3D Perspective Wrap */}
          <div 
            className="relative group w-[340px] h-[340px] flex items-center justify-center scale-[0.8] sm:scale-100"
            style={{ 
              perspective: "1200px",
              transformStyle: "preserve-3d" 
            }}
          >
            {/* 3D Panel 1: Digital Aesthetics (TOP LAYER) */}
            <div 
              className="absolute w-[290px] h-[190px] rounded-2xl border border-indigo-500/30 bg-background/50 p-5 shadow-2xl backdrop-blur-xl cursor-pointer flex flex-col justify-between animate-float-top"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-indigo-500 font-bold">MODEL.01 // AESTHETICS</span>
                <Sparkles className="h-4 w-4 text-indigo-500" />
              </div>
              
              {/* Graphic Wireframe Elements */}
              <div className="my-3 flex-1 flex items-center justify-center relative overflow-hidden rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
                <div className="w-12 h-12 rounded-full border border-indigo-500/20 animate-ping absolute" />
                <div className="w-8 h-8 rounded-full border-2 border-indigo-500/30" />
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-foreground">Redefining Digital Aesthetics</span>
                <span className="text-[9px] text-foreground/50">Fluid curves, premium gradients, and grid layout systems.</span>
              </div>
            </div>

            {/* 3D Panel 2: System Integrity (BOTTOM LAYER) */}
            <div 
              className="absolute w-[290px] h-[190px] rounded-2xl border border-emerald-500/30 bg-background/60 p-5 shadow-2xl backdrop-blur-xl cursor-pointer flex flex-col justify-between animate-float-bottom"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.2)"
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-emerald-500 font-bold">MODEL.02 // INTEGRITY</span>
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
              </div>

              {/* Encryption Metric Graph Wireframe */}
              <div className="my-3 flex-1 flex items-center justify-around relative overflow-hidden rounded-xl bg-emerald-500/5 border border-emerald-500/10 px-4">
                <Cpu className="h-5 w-5 text-emerald-500/50" />
                <div className="flex flex-col gap-1 w-2/3">
                  <div className="h-1.5 w-full rounded-full bg-emerald-500/10 overflow-hidden">
                    <div className="h-full w-[98%] bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500/80">CORE SECURE // 99.9%</span>
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold text-foreground">System Integrity Guard</span>
                <span className="text-[9px] text-foreground/50">TypeScript validation, end-to-end security, and low-latency metrics.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
