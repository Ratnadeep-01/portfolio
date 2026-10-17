import React, { useState } from 'react';
import { GraduationCap, Award, HeartHandshake, Code, Terminal, CheckCircle2, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  const galleryImages = [
    {
      src: '/assets/images/about-ratnadeep.jpg',
      webp: '/assets/images/about-ratnadeep.webp',
      alt: 'Ratnadeep Kumar — NIT Patna Campus & Engineering Lifestyle',
      caption: 'Full-Stack Developer & Problem Solver'
    },
    {
      src: '/assets/images/gallery-1.jpg',
      webp: '/assets/images/gallery-1.webp',
      alt: 'Ratnadeep Kumar traveling in the mountains and bridges',
      caption: 'Exploring & Gaining Perspective'
    },
    {
      src: '/assets/images/gallery-2.jpg',
      webp: '/assets/images/gallery-2.webp',
      alt: 'Ratnadeep Kumar focused and building',
      caption: 'Deep Focus & Continuous Learning'
    }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech CSE @ NIT Patna",
      subtitle: "Graduating Batch of 2028",
      desc: "Deepening fundamentals in Data Structures, Algorithms, Operating Systems, DBMS, and Distributed Architectures."
    },
    {
      icon: Award,
      title: "5+ Hackathons Finalist",
      subtitle: "Rapid Prototyping Under Pressure",
      desc: "Selected for Smart India Hackathon 2026 (PS 26076 with MoES/IMD) engineering offline-first weather engines."
    },
    {
      icon: HeartHandshake,
      title: "Teacher at Sankalp (NSS)",
      subtitle: "Empowering Underprivileged Youth",
      desc: "Teaching mathematics, logic, and scientific thinking to young students through NIT Patna's NSS initiative."
    },
    {
      icon: Code,
      title: "NPTEL Certified (IIT Madras)",
      subtitle: "'Joy of Computing using Python'",
      desc: "Certified with elite distinction in computational algorithms, recursion, graph traversal, and programming patterns."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background-secondary/40">
      {/* Background glow accents */}
      <div className="glow-blob w-96 h-96 top-1/2 -left-20 bg-violet-600/15" />
      <div className="glow-blob w-96 h-96 -bottom-20 right-10 bg-cyan-600/15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Story & Engineering Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Me</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A developer who bridges engineering rigor with real-world product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Showcase & Gallery Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Main Featured Photo */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-2.5 shadow-2xl border border-white/10 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                <picture>
                  <source srcSet={galleryImages[activePhoto].webp} type="image/webp" />
                  <img
                    src={galleryImages[activePhoto].src}
                    alt={galleryImages[activePhoto].alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                {/* Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10">
                  <p className="text-white text-xs font-mono font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {galleryImages[activePhoto].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnail Selector */}
            <div className="flex items-center gap-3 mt-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 interactive ${
                    activePhoto === idx
                      ? 'border-cyan-400 scale-105 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={img.src} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative & Four Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
              Designing scalable digital systems with obsessive attention to user experience and architecture.
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                I am a Computer Science & Engineering undergraduate at the{' '}
                <strong className="text-white font-semibold">National Institute of Technology Patna</strong>{' '}
                (Graduating in 2028). My work is centered around the intersection of high-performance full-stack web architectures, distributed backends, and elegant interfaces.
              </p>
              <p>
                Over the past few years, I have engineered full-scale platforms such as{' '}
                <span className="text-cyan-300 font-medium">ReviewFlow</span> (an AI-powered Google Maps review accelerator and QR stand studio),{' '}
                <span className="text-violet-300 font-medium">myTube</span> (a video sharing platform with hybrid SSR/CSR and dual-JWT auth), and{' '}
                <span className="text-emerald-300 font-medium">VOTEX</span> (a secure digital voting and auditing system).
              </p>
              <p>
                Beyond writing clean code, I actively compete in hackathons (5+ so far, including SIH 2026), hold an elite NPTEL certification in Python from IIT Madras, and mentor young students from underprivileged backgrounds through{' '}
                <strong className="text-white font-semibold">Sankalp (NSS, NIT Patna)</strong>.
              </p>
            </div>

            {/* Four Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card flex flex-col justify-between hover:border-violet-500/30 transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-violet-600/15 border border-violet-500/20 text-cyan-300 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-violet-600/25 transition-all">
                        <IconComponent className="w-5 h-5 text-cyan-300" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-cyan-400/90 mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
