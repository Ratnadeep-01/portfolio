import React, { useState } from 'react';
import { 
  Code2, Terminal, Coffee, FileCode, FileJson, ShieldCheck, 
  Atom, Globe, Palette, Sparkles, Layers, Layout, 
  Server, Cpu, Database, Zap, Network, KeyRound, 
  GitBranch, Box, Cloud, UploadCloud, Send, Laptop, Check 
} from 'lucide-react';
import { skillsData } from '../data/projects';

// Icon Map helper
const iconMap = {
  Code2, Terminal, Coffee, FileCode, FileJson, ShieldCheck,
  Atom, Globe, Palette, Sparkles, Layers, Layout,
  Server, Cpu, Database, Zap, Network, KeyRound,
  GitBranch, Box, Cloud, UploadCloud, Send, Laptop
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  // Consolidate or filter skills
  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsData.languages.map(s => ({ ...s, group: 'Languages' })),
        ...skillsData.frontend.map(s => ({ ...s, group: 'Frontend' })),
        ...skillsData.backend.map(s => ({ ...s, group: 'Backend' })),
        ...skillsData.tools.map(s => ({ ...s, group: 'Tools' })),
      ];
    }
    return (skillsData[activeCategory] || []).map(s => ({
      ...s,
      group: categories.find(c => c.id === activeCategory)?.label || ''
    }));
  };

  const currentSkills = getSkillsToDisplay();

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-blob w-[500px] h-[500px] top-1/3 -right-32 bg-violet-600/15" />
      <div className="glow-blob w-[450px] h-[450px] bottom-10 left-10 bg-cyan-600/15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">Toolbox</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Core technologies and engineering frameworks I use to design, build, and deploy high-performance applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 interactive ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.35)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-4 sm:p-5 glass-card hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Icon + Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}35`,
                    }}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300" style={{ color: skill.color }} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    {skill.level}
                  </span>
                </div>

                {/* Bottom Row: Name + Focus Area */}
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {skill.experience}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">
                      {skill.group}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
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
