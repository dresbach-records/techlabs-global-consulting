
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Bell, Search, 
  LogOut, ShieldCheck, ChevronRight, X,
  Rocket, Save, Calendar, Layers, Cpu,
  Search as SearchIcon, Plus, Check, FileUp,
  FileText, FileArchive, FileDigit, FolderArchive
} from 'lucide-react';

export default function AdminNewProject() {
  const navigate = useNavigate();
  const [selectedEngineers, setSelectedEngineers] = useState([
    { name: 'Ricardo Oliveira', role: '' },
    { name: 'Ana Costa (Sênior Cloud)', role: '' },
    { name: 'Marcos Silva', role: '' }
  ]);

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const handleCancel = () => {
    navigate('/admin/projects');
  };

  const removeEngineer = (name: string) => {
    setSelectedEngineers(prev => prev.filter(e => e.name !== name));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      {/* Admin Sidebar Navigation */}
      <aside className="w-72 border-r border-white/5 bg-[#1A1A1A] flex flex-col shrink-0">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#19C37D] rounded flex items-center justify-center shadow-[0_0_20px_rgba(25,195,125,0.2)]">
              <Terminal className="text-black" size={20} strokeWidth={3} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">TechLabs</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <LayoutDashboard size={20} />
            Visão Geral
          </button>
          <button 
            onClick={() => navigate('/admin/tickets')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <Ticket size={20} className="rotate-45" />
            Tickets Ativos
          </button>
          <button 
            onClick={() => navigate('/admin/projects')}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D] font-bold text-sm transition-all shadow-lg shadow-black/20"
          >
            <Workflow size={20} />
            Projetos
          </button>
          <button 
            onClick={() => navigate('/admin/repository')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <FolderArchive size={20} />
            Repositório
          </button>
          <button 
            onClick={() => navigate('/admin/clients')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <Users size={20} />
            Gestão de Clientes
          </button>
          <button 
            onClick={() => navigate('/admin/infrastructure')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <Network size={20} />
            Infraestrutura
          </button>

          <div className="pt-6 mt-6 border-t border-white/5">
            <button 
              onClick={() => navigate('/admin/settings')}
              className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
            >
              <Settings2 size={20} />
              Configurações de Sistema
            </button>
          </div>
        </nav>

        <div className="p-6 border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-4 p-3 bg-white/2 rounded-2xl">
            <div className="relative">
              <img 
                className="w-10 h-10 rounded-xl border border-[#19C37D]/30 object-cover" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                alt="Admin Avatar" 
              />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#19C37D] border-2 border-[#1A1A1A] rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-white uppercase truncate">Admin Principal</p>
              <p className="text-[10px] text-[#19C37D] uppercase font-black tracking-widest mt-0.5">System Root</p>
            </div>
            <button onClick={handleLogout} className="p-2 text-[#2A2A2A] hover:text-red-500 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Form Terminal */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#111111] relative">
        <header className="h-20 border-b border-white/5 bg-[#1A1A1A]/50 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
          <div className="flex flex-col">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
              <button onClick={() => navigate('/admin/dashboard')} className="hover:text-white">Dashboard</button>
              <ChevronRight size={10} className="text-slate-700" />
              <button onClick={() => navigate('/admin/projects')} className="hover:text-white">Projetos</button>
              <ChevronRight size={10} className="text-slate-700" />
              <span className="text-[#19C37D]">Novo Projeto</span>
            </nav>
            <h1 className="text-lg font-black text-white uppercase tracking-tight">Cadastrar Novo Projeto</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-1.5 bg-black/30 border border-white/5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></span>
              <span className="text-[10px] font-mono text-[#19C37D] uppercase font-bold">Secure Access</span>
            </div>
            <button className="text-slate-500 hover:text-white p-2">
              <Bell size={20} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-10">
            <header>
               <p className="text-sm text-slate-500 font-medium max-w-lg">Configure os parâmetros técnicos e humanos para iniciar o novo ecossistema de projeto TechLabs.</p>
            </header>

            {/* Form Matrix */}
            <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <form className="divide-y divide-white/5">
                {/* Section 01: General Info */}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-black text-xs">01</div>
                    <h2 className="text-lg font-black text-white uppercase tracking-tighter">Informações Gerais</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome do Projeto</label>
                      <input 
                        className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all placeholder:text-slate-800" 
                        placeholder="Ex: App de Gestão Logística" 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Cliente Corporativo</label>
                      <div className="relative group">
                        <SearchIcon size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-[#19C37D] transition-colors" />
                        <input 
                          className="w-full pl-14 pr-6 py-4 bg-[#111] border border-white/5 rounded-2xl text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all placeholder:text-slate-800" 
                          placeholder="Buscar cliente na base..." 
                          type="text" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 02: Classification */}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-black text-xs">02</div>
                    <h2 className="text-lg font-black text-white uppercase tracking-tighter">Classificação & Cronograma</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tipo de Serviço</label>
                      <select className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all appearance-none cursor-pointer">
                        <option>Arquitetura de Sistemas</option>
                        <option>Infraestrutura Cloud</option>
                        <option>Inteligência Artificial (IA)</option>
                        <option>Cybersecurity Audit</option>
                        <option>DevOps & SRE</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Prazo Estimado de Entrega</label>
                      <div className="relative group">
                        <Calendar size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-[#19C37D] transition-colors" />
                        <input 
                          className="w-full pl-14 pr-6 py-4 bg-[#111] border border-white/5 rounded-2xl text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all [color-scheme:dark]" 
                          type="date" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 03: Resources */}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-black text-xs">03</div>
                    <h2 className="text-lg font-black text-white uppercase tracking-tighter">Equipe Alocada</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Selecionar Engenheiros</label>
                      <div className="relative group max-w-2xl">
                        <input 
                          className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-4 pr-32 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all placeholder:text-slate-800" 
                          placeholder="Digite o nome do engenheiro..." 
                          type="text" 
                        />
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                          ADICIONAR
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      {selectedEngineers.map((eng, i) => (
                        <div key={i} className="flex items-center gap-3 bg-[#19C37D]/10 border border-[#19C37D]/20 text-[#19C37D] pl-5 pr-3 py-2.5 rounded-full text-xs font-black uppercase tracking-tight shadow-lg shadow-[#19C37D]/5 group/chip">
                          {eng.name}
                          <button 
                            type="button" 
                            onClick={() => removeEngineer(eng.name)}
                            className="p-1 hover:bg-[#19C37D] hover:text-black rounded-full transition-all"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                      <button type="button" className="flex items-center gap-2 bg-white/2 border border-dashed border-white/10 text-slate-500 px-5 py-2.5 rounded-full text-xs font-bold uppercase hover:border-[#19C37D]/40 hover:text-white transition-all">
                        <Plus size={14} /> NOVO NODE
                      </button>
                    </div>
                  </div>
                </div>

                {/* Section 04: Technical Scope */}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-black text-xs">04</div>
                    <h2 className="text-lg font-black text-white uppercase tracking-tighter">Escopo Técnico</h2>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Detalhamento dos Requisitos</label>
                    <textarea 
                      className="w-full bg-[#111] border border-white/5 rounded-3xl px-8 py-6 text-sm font-medium text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all placeholder:text-slate-800 font-mono leading-relaxed min-h-[200px] resize-none" 
                      placeholder="Descreva as tecnologias (ex: K8s, Terraform, Kafka), integrações críticas e requisitos mandatórios de conformidade (SOC2/GDPR)..."
                    ></textarea>
                  </div>
                </div>

                {/* Section 05: Initial Documentation */}
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-black text-xs">05</div>
                    <h2 className="text-lg font-black text-white uppercase tracking-tighter">Documentação Inicial</h2>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Contratos e Arquitetura</label>
                    <div className="group relative border-2 border-dashed border-white/10 hover:border-[#19C37D]/40 bg-white/[0.02] hover:bg-white/[0.04] rounded-3xl p-12 transition-all cursor-pointer flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <FileUp className="text-slate-500 group-hover:text-[#19C37D] transition-colors" size={32} />
                      </div>
                      <p className="text-sm font-bold text-slate-300 mb-2">
                        Arraste o contrato ou arquivos de arquitetura aqui ou <span className="text-[#19C37D] underline underline-offset-4 decoration-[#19C37D]/30">clique para selecionar</span>
                      </p>
                      <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-10">Tamanho máximo: 50MB por arquivo</p>
                      
                      <div className="flex gap-8 opacity-40 group-hover:opacity-70 transition-opacity">
                         <div className="flex flex-col items-center gap-2">
                            <FileText size={20} className="text-slate-400" />
                            <span className="text-[8px] font-black uppercase tracking-widest">PDF</span>
                         </div>
                         <div className="flex flex-col items-center gap-2">
                            <FileDigit size={20} className="text-slate-400" />
                            <span className="text-[8px] font-black uppercase tracking-widest">DOCX</span>
                         </div>
                         <div className="flex flex-col items-center gap-2">
                            <FileArchive size={20} className="text-slate-400" />
                            <span className="text-[8px] font-black uppercase tracking-widest">ZIP</span>
                         </div>
                      </div>
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple />
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-10 bg-black/30 flex items-center justify-between">
                  <button 
                    type="button" 
                    onClick={handleCancel}
                    className="flex items-center gap-3 text-slate-600 hover:text-red-500 font-black uppercase tracking-widest text-[11px] transition-all px-4"
                  >
                    <X size={18} /> DESCARTAR
                  </button>
                  <div className="flex gap-5">
                    <button 
                      type="button"
                      className="px-10 py-4 bg-white/5 border border-white/5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white hover:bg-white/10 transition-all flex items-center gap-3"
                    >
                      <Save size={18} /> SALVAR RASCUNHO
                    </button>
                    <button 
                      type="submit"
                      className="bg-[#19C37D] text-black px-12 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#19C37D]/20 flex items-center gap-4"
                    >
                      CRIAR PROJETO <Rocket size={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* System Info Notice */}
            <div className="flex items-center justify-center py-10">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D] shadow-[0_0_8px_#19C37D]"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Fluxo de provisionamento automático habilitado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global System Ticker Footer */}
        <footer className="h-14 bg-[#0A0A0A] border-t border-white/5 flex items-center justify-between px-10 overflow-hidden relative z-40">
           <div className="flex items-center gap-10 whitespace-nowrap">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-mono text-[#19C37D] font-black">[SYS]</span>
                 <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">A criação notificará engenheiros via Slack & Email.</span>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <ShieldCheck size={14} className="text-[#19C37D]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-600 font-mono">DRESBACH_SYSTEM_PROV_v2.1</span>
           </div>
        </footer>

        {/* Decorative background element */}
        <div className="fixed top-0 right-0 w-1/3 h-full pointer-events-none opacity-20 z-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#19C37D]/10 blur-[150px] rounded-full"></div>
        </div>
      </main>
    </div>
  );
}
