
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

export default function CloudStrategy() {
  const data = DETAILED_PAGES['cloud-strategy'];
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
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2F2F2F] border border-[#2F2F2F]">
              {data.content.map(item => (
                 <div key={item} className="p-12 bg-black hover:bg-[#0A0A0A] transition-all">
                    <h3 className="text-xl font-black uppercase">{item}</h3>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
