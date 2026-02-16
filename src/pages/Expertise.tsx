
import React from 'react';
import { DETAILED_PAGES, YOUTUBE_URL } from '@/constants';
import { Youtube, PlayCircle, ArrowRight, Activity } from 'lucide-react';

export default function Expertise() {
  const data = DETAILED_PAGES['expertise'];
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-48 pb-24 bg-black border-b border-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">{data.title}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* Authority Grid */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2F2F2F] border border-[#2F2F2F]">
            {data.content.map((item, idx) => (
              <div key={idx} className="p-16 bg-black hover:bg-[#0A0A0A] transition-all group">
                <div className="text-[10px] font-mono text-[#19C37D] mb-10">AUTH_LVL_{idx+1}</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube / Experience Node */}
      <section className="py-40 bg-black overflow-hidden relative border-t border-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-[#0D0D0D] border border-[#2F2F2F] rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 group">
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center gap-4 bg-[#FF0000]/10 border border-[#FF0000]/20 px-6 py-2 rounded-full">
                <Youtube className="text-[#FF0000]" size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF0000]">TechLabs_Labs // Live_Operations</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Engineers <br /> <span className="text-[#19C37D]">Unfiltered</span>
              </h2>
              <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-lg">
                Nossa experiência não é teórica. Assista nossos engenheiros resolvendo desafios reais de infraestrutura, IA e sistemas de missão crítica em nosso laboratório público.
              </p>
              <a 
                href={YOUTUBE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 px-12 py-6 bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-[#19C37D] transition-all active:scale-95 shadow-2xl"
              >
                Acessar Canal Oficial <ArrowRight size={18} strokeWidth={3} />
              </a>
            </div>

            <div className="flex-1 w-full relative">
               <div className="aspect-video bg-[#111111] rounded-[2rem] border border-white/5 relative overflow-hidden group-hover:border-[#19C37D]/30 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-6 flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                     <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest font-bold">REC_NODE_STREAMING</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#19C37D]/5 to-transparent opacity-40"></div>
                  
                  <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="relative z-10 flex flex-col items-center gap-4 group/play transition-transform hover:scale-110">
                     <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-2xl">
                        <PlayCircle size={48} className="text-white group-hover/play:text-[#19C37D] transition-colors" />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Open_Stream</span>
                  </a>

                  {/* UI Overlay Mock */}
                  <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-[#FF0000] w-[65%]"></div>
                  </div>
               </div>
               
               {/* Floating Data Badge */}
               <div className="absolute -bottom-10 -right-5 bg-[#19C37D] text-black p-8 rounded-3xl shadow-2xl hidden md:block animate-bounce-slow">
                  <Activity size={32} strokeWidth={3} />
                  <p className="text-[9px] font-black uppercase tracking-widest mt-4">High_Authority<br />Knowledge_Base</p>
               </div>
            </div>
          </div>
        </div>

        {/* Background Grids */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#19C37D]/5 blur-[250px] rounded-full pointer-events-none z-0"></div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
