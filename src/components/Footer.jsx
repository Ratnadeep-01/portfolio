import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/projects';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080c] py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-display font-extrabold text-xl text-white">
              Ratnadeep Kumar
            </span>
            <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              NIT Patna '28
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Crafting high-performance full-stack applications with modern web architectures.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-cyan-400 transition-colors interactive"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-violet-400 transition-colors interactive"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-fuchsia-400 transition-colors interactive"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:text-cyan-400 transition-colors interactive"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all interactive border border-white/[0.06]"
          aria-label="Back to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3">
        <p>© {new Date().getFullYear()} Ratnadeep Kumar. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Engineered with React 19, Tailwind, GSAP & Lenis</span>
        </p>
      </div>
    </footer>
  );
}
