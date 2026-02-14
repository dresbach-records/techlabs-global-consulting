
import React from 'react';
import { Cpu } from 'lucide-react';

export default function RequestBriefing() {
  return (
    <div className="animate-in fade-in duration-700 min-h-screen pt-48 bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
          Technical <br /> <span className="text-[#19C37D]">Briefing</span> Node
        </h2>
        <p className="text-xl text-[#6B6B6B] mb-20 max-w-2xl mx-auto leading-relaxed">
          Inicie seu processo de auditoria ou design arquitetural. 
          Use nosso assistente de IA no canto inferior para refinar suas especificações antes da consulta presencial.
        </p>
        <div className="p-20 border border-[#2F2F2F] bg-[#050505]">
           <Cpu size={48} className="text-[#19C37D] mx-auto mb-10" />
           <h3 className="text-2xl font-black uppercase mb-4">Pronto para Analisar?</h3>
           <p className="text-[#6B6B6B] text-sm uppercase tracking-widest">Ative o Assistant IA para iniciar o mapeamento.</p>
        </div>
      </div>
    </div>
  );
}
