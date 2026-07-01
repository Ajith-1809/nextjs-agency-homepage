"use client";

import { SERVICES } from "@/data/content";
import * as Icons from "lucide-react";

// Helper component to dynamically render Lucide icons
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Subtle radial backdrop glows */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-500">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            We build high-performance digital solutions
          </p>
          <p className="mt-4 text-base text-foreground/75 leading-relaxed">
            From strategic concept design to development and launch, we build solutions that accelerate brand growth.
          </p>
        </div>

        {/* 4 Service Cards Grid (Strict Task Requirement Compliance) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl border border-foreground/10 bg-foreground/[0.01] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 hover:bg-foreground/[0.02] hover:shadow-lg hover:shadow-indigo-500/5 active:scale-[0.98] active:border-indigo-500/20"
            >
              {/* Icon Container with subtle glow */}
              <div className="inline-flex rounded-2xl bg-indigo-500/10 p-3.5 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <ServiceIcon name={service.iconName} className="h-6 w-6" />
              </div>

              {/* Service Title */}
              <h3 className="mt-6 text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-indigo-500">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
