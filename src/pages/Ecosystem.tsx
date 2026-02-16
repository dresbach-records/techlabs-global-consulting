
import React from 'react';
import { DETAILED_PAGES, ECOSYSTEM } from '@/constants';

interface Brand {
  name: string;
  specialty: string;
  description: string;
  icon: JSX.Element;
}

export default function Ecosystem() {
  const data = DETAILED_PAGES['ecosystem'];
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2F2F2F] border border-[#2F2F2F]">
            {ECOSYSTEM.map((brand: Brand, idx: number) => (
              <div key={idx} className="p-16 bg-black group">
                <div className="text-[#19C37D] mb-12">{brand.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">{brand.name}</h3>
                <p className="text-xs font-black text-[#19C37D] uppercase tracking-widest mb-4">{brand.specialty}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
