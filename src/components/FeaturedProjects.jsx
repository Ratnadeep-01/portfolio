import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowRight, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (prefersReducedMotion || !isDesktop) {
      return;
    }

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // Calculate total horizontal scroll width
    const totalScrollWidth = container.scrollWidth - window.innerWidth + 120;

    const horizontalTween = gsap.to(container, {
      x: () => -totalScrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalScrollWidth * 1.2}`,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      horizontalTween.scrollTrigger?.kill();
      horizontalTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="relative py-20 lg:py-24 bg-[#08090e] overflow-hidden"
    >
      {/* Background Neon Blobs */}
      <div className="glow-blob w-[600px] h-[600px] top-10 left-10 bg-violet-600/15" />
      <div className="glow-blob w-[500px] h-[500px] bottom-10 right-10 bg-cyan-500/15" />

      {/* Section Sticky / Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ranked Flagship Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Ranked by technical depth, architecture complexity, real-world utility, and recruiter relevance.
          </p>
        </div>

        {/* Scroll hint on desktop */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-900/60 px-4 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Horizontal Scroll Showcase (Pinned)</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </div>
      </div>

      {/* Horizontal Track for Desktop, Fluid Stacking for Mobile */}
      <div className="relative w-full overflow-visible">
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-4 sm:px-6 lg:px-12 w-full lg:w-max"
        >
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="w-full lg:w-[680px] rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative group overflow-hidden shadow-2xl shrink-0"
            >
              {/* Top Accent Gradient Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`}
              />

              {/* Watermark Rank Number */}
              <div className="absolute top-4 right-6 font-display font-black text-6xl sm:text-7xl text-white/[0.04] pointer-events-none select-none">
                0{project.rank}
              </div>

              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md">
                      RANK #{project.rank}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-900/80 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-violet-300 mb-4">
                  {project.subtitle}
                </p>

                {/* Tagline / Punchy Pitch */}
                <p className="text-sm font-semibold text-slate-200 mb-4 border-l-2 border-cyan-400 pl-3">
                  {project.tagline}
                </p>

                {/* Deep Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="mb-6 space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Key Architectural Pillars:
                  </p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row: Tech Stack Chips & Action Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all interactive"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white text-xs sm:text-sm font-medium border border-slate-700 hover:border-violet-400 transition-all interactive"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
