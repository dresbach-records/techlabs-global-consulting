
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, DETAILED_PAGES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const data = DETAILED_PAGES['services'];
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
            {SERVICES.map((s, idx) => (
              <Link key={idx} to={`/services/${s.path}`} className="p-16 bg-black hover:bg-[#0A0A0A] transition-all group flex items-start justify-between">
                <div>
                   <div className="text-[#19C37D] mb-10">{s.icon}</div>
                   <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-[#19C37D] transition-colors">{s.title}</h2>
                   <p className="text-[#6B6B6B] max-w-sm">{s.description}</p>
                </div>
                <ArrowUpRight size={24} className="text-[#2F2F2F] group-hover:text-[#19C37D] transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
