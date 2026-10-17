import React, { useEffect, useState } from 'react';

export default function IntroLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT');

  const completeIntro = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete?.();
    }, 350);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    // Interval to advance counter smoothly
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          completeIntro();
          return 100;
        }
        if (prev === 25) setStatusText('FETCHING REPOSITORIES & METRICS');
        if (prev === 60) setStatusText('COMPILING FULL-STACK MODULES');
        if (prev === 85) setStatusText('READY');
        return prev + 5;
      });
    }, 25);

    // Hard fallback timeout: guarantees unmount in at most 1.5s
    const fallbackTimeout = setTimeout(() => {
      clearInterval(interval);
      completeIntro();
    }, 1500);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        clearInterval(interval);
        clearTimeout(fallbackTimeout);
        completeIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      onClick={completeIntro}
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#08090e] cursor-pointer transition-all duration-400 ease-out select-none ${
        isFading ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Background ambient glow */}
      <div className="glow-blob w-96 h-96 bg-violet-600/20 top-1/3 left-1/3 animate-pulse-slow" />
      <div className="glow-blob w-80 h-80 bg-cyan-500/15 bottom-1/3 right-1/3" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Monogram Badge */}
        <div className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900/90 border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 animate-pulse" />
          <span className="font-display font-black text-3xl tracking-wider bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            RK
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-xl sm:text-2xl font-bold tracking-widest uppercase text-white mb-2">
          Ratnadeep Kumar
        </h1>
        <p className="font-mono text-xs tracking-wider text-cyan-400/90 mb-8 uppercase">
          {statusText}
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(34,211,238,0.7)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="mt-4 flex items-center justify-between w-64 text-slate-400 font-mono text-xs">
          <span>NIT PATNA '28</span>
          <span className="text-cyan-400 font-semibold">{percent}%</span>
        </div>

        <span className="mt-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          Click anywhere to skip
        </span>
      </div>
    </div>
  );
}
