import React from 'react';
import { Trophy, GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { experiencesAndAchievements } from '../data/projects';

const iconMap = {
  Trophy,
  GraduationCap,
  Award,
  BookOpen
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-blob w-[550px] h-[550px] top-1/2 -left-40 bg-purple-600/15" />
      <div className="glow-blob w-[500px] h-[500px] -bottom-20 right-10 bg-cyan-600/15" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Milestones & Community</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Competitive hackathons, algorithmic certifications, education, and community social leadership.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesAndAchievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div key={item.id} className="relative group">
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#08090e] border-2 border-violet-500/60 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>

                {/* Content Glass Card */}
                <div className="rounded-3xl glass-card p-6 sm:p-8 hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-violet-300">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        {item.badge}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 mt-3">
                    {item.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
