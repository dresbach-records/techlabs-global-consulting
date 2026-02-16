
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

export default function About() {
  const data = DETAILED_PAGES['about'];
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
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Nossa Missão <br /> <span className="text-[#19C37D]">Arquitetural</span></h2>
                 <p className="text-[#6B6B6B] leading-relaxed mb-8">
                    Não somos apenas desenvolvedores. Somos arquitetos de sistemas que acreditam que a tecnologia deve ser invisível, resiliente e soberana.
                 </p>
                 <div className="space-y-6">
                    {data.content.map((item: string) => (
                       <div key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                          <div className="w-2 h-2 bg-[#19C37D]"></div> {item}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-20 border border-[#2F2F2F] bg-black relative">
                 <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#19C37D]"></div>
                 <span className="text-sm font-mono text-[#6B6B6B] block mb-12">[DRESBACH_GROUP_CANADA]</span>
                 <p className="text-2xl font-light italic">"A excelência técnica não é negociável. Entregamos a base para o futuro digital do amanhã."</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
