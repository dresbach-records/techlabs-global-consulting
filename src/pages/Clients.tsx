
import React from 'react';
import { DETAILED_PAGES, CLIENTS } from '@/constants';

export default function Clients() {
  const data = DETAILED_PAGES['clients'];
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {CLIENTS.map((client: string, idx: number) => (
              <div key={idx} className="p-20 border border-[#2F2F2F] bg-black flex items-center justify-center text-center hover:border-[#19C37D]/30 transition-all">
                <span className="text-xs font-black uppercase tracking-[1em] text-[#6B6B6B] group-hover:text-[#EDEDED]">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
