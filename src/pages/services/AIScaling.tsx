
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

export default function AIScaling() {
  const data = DETAILED_PAGES['ai-scaling'];
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
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {data.content.map(item => (
                 <div key={item} className="p-16 border border-[#2F2F2F] bg-black hover:border-[#19C37D]/30 transition-all">
                    <h3 className="text-2xl font-black uppercase mb-4">{item}</h3>
                    <p className="text-sm text-[#6B6B6B] uppercase tracking-widest font-mono">Status: DEPLOYED_SCALE</p>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
