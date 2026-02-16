
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

export default function OurTeam() {
  const data = DETAILED_PAGES['our-team'];
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-48 pb-24 bg-black border-b border-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">{data.title}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl leading-relaxed">{data.description}</p>
        </div>
      </section>
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.content.map(role => (
                 <div key={role} className="p-12 border border-[#2F2F2F] bg-black text-center group hover:border-[#19C37D]/30 transition-all">
                    <div className="w-20 h-20 bg-[#111111] rounded-full mx-auto mb-8 border border-[#2F2F2F] group-hover:bg-[#19C37D] transition-all"></div>
                    <h4 className="text-lg font-black uppercase mb-2">{role}</h4>
                    <span className="text-[10px] text-[#6B6B6B] uppercase tracking-widest">Líder da TechLabs</span>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
