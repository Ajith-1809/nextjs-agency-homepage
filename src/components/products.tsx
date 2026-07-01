"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

type CategoryFilter = "All" | "Design" | "Development" | "Branding";

export default function Portfolio() {
  const [filter, setFilter] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = ["All", "Design", "Development", "Branding"];

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-500">Our Products</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Selected Projects
            </p>
            <p className="mt-4 text-base text-foreground/75">
              A curated selection of our work across branding, design, and web platforms.
            </p>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-indigo-600 text-white"
                    : "text-foreground/70 hover:text-foreground border border-foreground/5 hover:border-foreground/15 bg-background"
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Grid Layout (Strict Compliance) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-w-7xl) 33vw, (max-w-lg) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={project.id === "project-1" || project.id === "project-2"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6" />
              </div>

              {/* Title & Metadata Details */}
              <div className="p-6 relative">
                <div className="flex items-start justify-between">
                  <div>
                    {/* Category tag */}
                    <span className="text-xs font-semibold text-indigo-500">
                      {project.category}
                    </span>
                    {/* Project Title */}
                    <h3 className="mt-1 text-lg font-bold leading-tight text-foreground group-hover:text-indigo-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {/* Sub-tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-md bg-foreground/5 px-2.5 py-0.5 text-[10px] font-medium text-foreground/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Action Link Icon */}
                  <div className="rounded-full bg-indigo-500/5 p-2.5 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
