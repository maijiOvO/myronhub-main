import { useState } from 'react';
import { Dumbbell, Trees, Github, Mail, ExternalLink, Globe } from 'lucide-react';

const content = {
  zh: {
    title: "MYRONHUB",
    subtitle: "独立开发者 / 数字作品集",
    projects: [
      {
        title: "FitLog AI",
        desc: "基于 React + Supabase 的专业健身记录助手，支持云同步与数据可视化。",
        link: "https://fit.myronhub.com",
        tags: ["React", "Supabase", "PWA"]
      },
      {
        title: "Kinetic Xmas Tree",
        desc: "高性能粒子效果圣诞树，支持动态交互与手势控制。",
        link: "https://tree.myronhub.com",
        tags: ["Canvas", "WebGL", "Animation"]
      }
    ],
    footer: "© 2025 MYRONHUB.COM"
  },
  en: {
    title: "MYRONHUB",
    subtitle: "Independent Developer / Digital Portfolio",
    projects: [
      {
        title: "FitLog AI",
        desc: "A professional fitness tracking assistant based on React + Supabase, with cloud sync and data visualization.",
        link: "https://fit.myronhub.com",
        tags: ["React", "Supabase", "PWA"]
      },
      {
        title: "Kinetic Xmas Tree",
        desc: "A high-performance particle effect Christmas tree with dynamic interaction and gesture control.",
        link: "https://tree.myronhub.com",
        tags: ["Canvas", "WebGL", "Animation"]
      }
    ],
    footer: "© 2024 MYRONHUB.COM · DESIGNED BY AI"
  }
};

const projectIcons = {
  "FitLog AI": <Dumbbell className="text-blue-500" size={32} />,
  "Kinetic Xmas Tree": <Trees className="text-green-500" size={32} />
};

export default function App() {
  const [lang, setLang] = useState('zh');

  const currentContent = content[lang as keyof typeof content];

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-20 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <h1 className="text-5xl font-black text-white tracking-tighter">
              {currentContent.title}<span className="text-blue-500">HUB</span>
            </h1>
            <button onClick={toggleLang} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-all">
              <Globe size={20} />
            </button>
          </div>
          <p className="text-slate-400 text-lg font-medium">{currentContent.subtitle}</p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://github.com/maijiOvO" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-all"><Github size={20}/></a>
            <a href="mailto:maiji5102@gmail.com" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-all"><Mail size={20}/></a>
          </div>
        </header>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.projects.map((project, i) => (
            <a 
              key={i} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/40 border border-slate-700/50 p-8 rounded-[2.5rem] hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">{projectIcons[project.title as keyof typeof projectIcons]}</div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {project.title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">{project.desc}</p>
              </div>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-900/50 rounded-lg text-slate-500">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-32 text-center border-t border-slate-800/50 pt-8">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            {currentContent.footer}
          </p>
        </footer>
      </main>
    </div>
  );
}