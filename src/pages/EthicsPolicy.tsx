
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

interface PageData {
  title: string;
  description: string;
  content: string[];
}

export default function EthicsPolicy() {
  const data: PageData = DETAILED_PAGES['ethics-policy'];
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
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2F2F2F] border border-[#2F2F2F]">
              {data.content.map((item: string) => (
                 <div key={item} className="p-16 bg-black group">
                    <h3 className="text-2xl font-black uppercase group-hover:text-[#19C37D] transition-colors">{item}</h3>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
