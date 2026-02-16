
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES, CLIENTS, CORPORATE_LINKS, GOVERNANCE_LINKS } from '@/constants';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="lg:w-3/4">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#19C37D]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#19C37D]">Autoridade Arquitetural Global</span>
            </div>
            <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              Engenharia <br />
              <span className="text-[#19C37D]">de Sistemas</span> <br />
              de Precisão
            </h1>
            <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-2xl mb-16 leading-relaxed font-light">
              Consultoria de arquitetura de elite para infraestruturas de missão crítica. Sustentamos soberania digital em escala global.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link to="/start-consultation" className="group w-full sm:w-auto px-16 py-8 bg-[#19C37D] text-black font-black text-xs uppercase tracking-[0.3em] rounded-sm flex items-center justify-center gap-4 green-glow transition-all">
                Iniciar Consulta <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/expertise" className="w-full sm:w-auto px-16 py-8 border border-[#2F2F2F] text-[#EDEDED] font-black text-xs uppercase tracking-[0.3em] rounded-sm hover:bg-[#111111] transition-all text-center">
                Nossa Expertise
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#19C37D]/5 blur-[250px] rounded-full pointer-events-none -translate-y-1/2"></div>
      </section>

      <section className="py-24 border-y border-[#2F2F2F] bg-[#050505] relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30">
            {CLIENTS.map((client) => (
              <span key={client} className="text-[10px] font-black uppercase tracking-[0.7em] whitespace-nowrap">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#19C37D] mb-8">Capabilidades de Consultoria</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                Arquitetura <br /> <span className="text-[#6B6B6B]">de Negócios</span> <br /> Especializada
              </h3>
            </div>
            <div className="h-[2px] w-32 bg-[#19C37D]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2F2F2F] border border-[#2F2F2F]">
            {SERVICES.map((service, idx) => (
              <Link 
                key={idx} 
                to={service.path ? `/services/${service.path}` : '/services'}
                className="group p-12 bg-black hover:bg-[#0A0A0A] transition-all cursor-pointer relative overflow-hidden h-[450px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#19C37D] mb-12 transition-transform group-hover:-translate-y-2">{service.icon}</div>
                  <h4 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-[#19C37D] transition-colors">{service.title}</h4>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed group-hover:text-[#EDEDED] transition-colors">{service.description}</p>
                </div>
                <ArrowUpRight size={16} className="text-[#19C37D] opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#080808] border-y border-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2F2F2F] border border-[#2F2F2F]">
            <div className="bg-black p-12 lg:p-24">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#19C37D] mb-16">Centro Corporativo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {CORPORATE_LINKS.map(link => (
                  <Link key={link.title} to={`/${link.path}`} className="group cursor-pointer">
                    <div className="text-[#6B6B6B] group-hover:text-[#19C37D] transition-colors mb-6">{link.icon}</div>
                    <h4 className="font-black uppercase tracking-tighter text-sm mb-2">{link.title}</h4>
                    <p className="text-[10px] text-[#2F2F2F] font-mono group-hover:text-[#6B6B6B] transition-colors uppercase tracking-widest">Nó de Operações Globais</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-black p-12 lg:p-24 lg:border-l border-[#2F2F2F]">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#19C37D] mb-16">Governança & Ética</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {GOVERNANCE_LINKS.map(link => (
                  <Link key={link.title} to={`/${link.path}`} className="group cursor-pointer">
                    <div className="text-[#6B6B6B] group-hover:text-[#19C37D] transition-colors mb-6">{link.icon}</div>
                    <h4 className="font-black uppercase tracking-tighter text-sm mb-2">{link.title}</h4>
                    <p className="text-[10px] text-[#2F2F2F] font-mono group-hover:text-[#6B6B6B] transition-colors uppercase tracking-widest">Conformidade com Políticas</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
