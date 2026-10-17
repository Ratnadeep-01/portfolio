import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Mail, ExternalLink, Sparkles, Terminal, ShieldCheck, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/projects';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cardTransform, setCardTransform] = useState('');
  const cardRef = useRef(null);

  const roles = [
    'Full-Stack MERN Developer',
    'Scalable Web Architect',
    '5+ Hackathons Competitor',
    'C++ & Python Problem Solver'
  ];

  // Typing / Rotating effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // 3D Tilt Effect on Hero Card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setCardTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setCardTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Glowing Blobs */}
      <div className="glow-blob w-[500px] h-[500px] -top-32 -left-32 bg-violet-600/25" />
      <div className="glow-blob w-[600px] h-[600px] top-1/4 -right-48 bg-cyan-500/20" />
      <div className="glow-blob w-[450px] h-[450px] -bottom-24 left-1/3 bg-purple-700/20" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d10_1px,transparent_1px),linear-gradient(to_bottom,#1f293d10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Confident Hero Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Institution & Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-cyan-300">NIT Patna '28</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">B.Tech Computer Science</span>
          </div>

          {/* Name & Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 inline-block drop-shadow-[0_0_35px_rgba(139,92,246,0.3)]">
              Ratnadeep Kumar
            </span>
          </h1>

          {/* Typing Role Header */}
          <div className="h-10 sm:h-12 flex items-center font-mono text-base sm:text-xl lg:text-2xl text-slate-300 mb-6">
            <span className="text-cyan-400 mr-2 font-bold">&gt;</span>
            <span className="text-slate-200 font-semibold">{displayedText}</span>
            <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block" />
          </div>

          {/* Concise Elevator Pitch */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            Building robust, production-ready web platforms and scalable backends.
            Specialized in the <strong className="text-slate-200 font-semibold">MERN stack</strong>,
            distributed microservices, media pipelines, and modern full-stack architectures.
            Selected for <strong className="text-cyan-300 font-semibold">Smart India Hackathon 2026</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#featured"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 interactive group"
            >
              <span>View Featured Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/60 hover:border-violet-500/40 transition-all duration-200 interactive"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 interactive"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-violet-400 hover:border-violet-500/40 transition-all duration-200 interactive"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send direct email"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-fuchsia-400 hover:border-fuchsia-500/40 transition-all duration-200 interactive"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Photo Card with Neon Glow & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: cardTransform,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative w-full max-w-sm sm:max-w-md perspective-1000 group cursor-pointer"
          >
            {/* Glowing Backdrop Behind Card */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 opacity-60 blur-xl group-hover:opacity-100 transition duration-500" />

            {/* Inner Glass Card */}
            <div className="relative rounded-3xl bg-[#0e111a] border border-white/10 p-3 sm:p-4 overflow-hidden shadow-2xl backdrop-blur-xl">
              {/* Photo Frame */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950">
                <picture>
                  <source srcSet="/assets/images/hero-ratnadeep.webp" type="image/webp" />
                  <img
                    src="/assets/images/hero-ratnadeep.jpg"
                    alt="Ratnadeep Kumar — Full-Stack Developer and CSE Student at NIT Patna"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </picture>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-transparent opacity-80" />

                {/* Floating Top Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Available for Internships</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-display font-bold text-sm">Ratnadeep Kumar</p>
                      <p className="text-slate-400 text-xs font-mono">B.Tech CSE · NIT Patna</p>
                    </div>
                    <div className="p-2 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30">
                      <Terminal className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Tech Badge: MERN */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-violet-500/40 backdrop-blur-md shadow-xl text-xs font-semibold text-white animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
              <span>MERN Stack Specialist</span>
            </div>

            {/* Orbiting Badge: 5+ Hackathons */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-md shadow-xl text-xs font-semibold text-cyan-300 animate-float-reverse">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>5+ Hackathons Finalist</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stat Counters Bar */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-6">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">
              {stat.value}{stat.suffix}
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
