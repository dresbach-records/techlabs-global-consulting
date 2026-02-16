
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

export default function Careers() {
  const data = DETAILED_PAGES['careers'];
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-48 pb-24 bg-black border-b border-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">{data.title}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl leading-relaxed">{data.description}</p>
        </div>
      </section>
      <section className="py-32 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
           <div className="space-y-4">
              {data.content.map((pos: string) => (
                 <div key={pos} className="p-10 border border-[#2F2F2F] bg-black flex items-center justify-between group hover:border-[#19C37D] transition-all cursor-pointer">
                    <h4 className="text-2xl font-black uppercase tracking-tighter">{pos}</h4>
                    <span className="text-[#19C37D] text-xs font-black uppercase tracking-widest">Inscreva-se</span>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
