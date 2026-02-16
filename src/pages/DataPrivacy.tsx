
import React from 'react';
import { DETAILED_PAGES } from '@/constants';

export default function DataPrivacy() {
  const data = DETAILED_PAGES['data-privacy'];
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-48 pb-24 bg-black border-b border-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">{data.title}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-2xl leading-relaxed">{data.description}</p>
        </div>
      </section>
      <section className="py-32 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
           {data.content.map((item: string) => (
              <div key={item}>
                 <h3 className="text-2xl font-black uppercase mb-8 text-[#19C37D]">{item}</h3>
                 <p className="text-[#6B6B6B] leading-relaxed mb-6">
                    Na TechLabs, implementamos camadas de abstração de dados que garantem que nenhuma informação sensível seja exposta ou armazenada sem o consentimento absoluto e criptografia de chave privada do cliente.
                 </p>
                 <div className="h-px w-full bg-[#2F2F2F]"></div>
              </div>
           ))}
        </div>
      </section>
    </div>
  );
}
