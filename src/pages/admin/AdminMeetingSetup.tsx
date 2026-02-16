
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Bell, Search, 
  LogOut, ShieldCheck, Video, Mic, Settings,
  Check, Copy, PlayCircle, Shield, FolderArchive,
  FileCheck, History, ToggleLeft, ToggleRight,
  Camera, CameraOff, MicOff
} from 'lucide-react';

export default function AdminMeetingSetup() {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    record: false,
    mute: true,
    lobby: true
  });
  const [copied, setCopied] = useState(false);

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const copyLink = () => {
    navigator.clipboard.writeText('techlabs.io/join/rev-q4-arch');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const startMeeting = () => {
    navigate('/admin/meeting/active');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      {/* Sidebar - Consistent with other Admin pages */}
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
          <button onClick={() => navigate('/admin/dashboard')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <LayoutDashboard size={20} /> Visão Geral
          </button>
          <button onClick={() => navigate('/admin/tickets')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Ticket size={20} className="rotate-45" /> Tickets Ativos
          </button>
          <button onClick={() => navigate('/admin/projects')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Workflow size={20} /> Projetos
          </button>
          <button onClick={() => navigate('/admin/repository')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <FolderArchive size={20} /> Repositório
          </button>
          <button onClick={() => navigate('/admin/approvals')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <FileCheck size={20} /> Aprovações
          </button>
          <button onClick={() => navigate('/admin/meeting')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D] font-bold text-sm transition-all shadow-lg">
            <Video size={20} /> Reunião
          </button>
          <button onClick={() => navigate('/admin/clients')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Users size={20} /> Gestão de Clientes
          </button>
          <button onClick={() => navigate('/admin/infrastructure')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Network size={20} /> Infraestrutura
          </button>
          
          <div className="pt-6 mt-6 border-t border-white/5">
            <button className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
              <History size={20} /> Logs de Versão
            </button>
            <button onClick={() => navigate('/admin/settings')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold mt-1">
              <Settings2 size={20} /> Configurações
            </button>
          </div>
        </nav>

        <div className="p-6 border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-4 p-3 bg-white/2 rounded-2xl">
            <div className="relative">
              <img className="w-10 h-10 rounded-xl border border-[#19C37D]/30 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Admin" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#19C37D] border-2 border-[#1A1A1A] rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-white uppercase truncate">Admin Principal</p>
              <p className="text-[10px] text-[#19C37D] uppercase font-black tracking-widest mt-0.5">Tech Lead</p>
            </div>
            <button onClick={handleLogout} className="p-2 text-[#2A2A2A] hover:text-red-500 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Setup Subsystem */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#111111] items-center justify-center p-10 relative overflow-hidden">
        {/* Decorative Grid and Glow */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#19C37D]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="w-full max-w-4xl relative z-10 animate-in fade-in zoom-in-95 duration-700">
          {/* Header Branding */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
               <div className="w-8 h-8 bg-[#19C37D] rounded flex items-center justify-center shadow-lg shadow-[#19C37D]/20">
                 <Video size={18} className="text-black" />
               </div>
               <span className="text-sm font-black text-[#19C37D] uppercase tracking-[0.3em]">TechLabs Meeting</span>
            </div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Iniciar Nova Sessão Técnica</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Review Trimestral de Arquitetura</p>
          </div>

          {/* Configuration Card */}
          <div className="bg-[#1A1A1A] border border-white/5 rounded-[2.5rem] p-10 md:p-16 shadow-2xl flex flex-col md:flex-row gap-16 items-stretch">
            {/* Left: Device Preview */}
            <div className="flex-1 flex flex-col">
              <div className="relative aspect-square bg-[#0D0D0D] rounded-3xl border border-white/5 flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                {/* Simulated Camera Feed */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black opacity-60"></div>
                <Camera size={120} strokeWidth={0.5} className="text-white/5 group-hover:text-[#19C37D]/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex gap-4 mt-8">
                   <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#19C37D] hover:text-black transition-all">
                     <Mic size={20} />
                   </button>
                   <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#19C37D] hover:text-black transition-all">
                     <Video size={20} />
                   </button>
                   <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                     <Settings size={20} />
                   </button>
                </div>

                <div className="absolute bottom-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#19C37D]">
                  <Check size={12} strokeWidth={4} />
                  Câmera e microfone prontos
                </div>
              </div>
            </div>

            {/* Right: Settings & Link */}
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">Configurações Rápidas</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between group">
                      <span className="text-xs font-black uppercase text-slate-400 group-hover:text-white transition-colors">Gravar Automaticamente</span>
                      <button onClick={() => setConfig({...config, record: !config.record})} className={`w-12 h-6 rounded-full transition-all relative ${config.record ? 'bg-[#19C37D]' : 'bg-white/10'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.record ? 'left-7' : 'left-1'}`}></div>
                      </button>
                    </div>
                    <div className="flex items-center justify-between group">
                      <span className="text-xs font-black uppercase text-slate-400 group-hover:text-white transition-colors">Silenciar na Entrada</span>
                      <button onClick={() => setConfig({...config, mute: !config.mute})} className={`w-12 h-6 rounded-full transition-all relative ${config.mute ? 'bg-[#19C37D]' : 'bg-white/10'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.mute ? 'left-7' : 'left-1'}`}></div>
                      </button>
                    </div>
                    <div className="flex items-center justify-between group">
                      <span className="text-xs font-black uppercase text-slate-400 group-hover:text-white transition-colors">Sala de Espera Ativada</span>
                      <button onClick={() => setConfig({...config, lobby: !config.lobby})} className={`w-12 h-6 rounded-full transition-all relative ${config.lobby ? 'bg-[#19C37D]' : 'bg-white/10'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.lobby ? 'left-7' : 'left-1'}`}></div>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                   <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Link de Convite</h3>
                   <div className="flex items-center gap-2 p-4 bg-black/40 border border-white/5 rounded-2xl group hover:border-[#19C37D]/30 transition-all">
                      <span className="flex-1 text-xs font-mono font-bold text-slate-400 tracking-tight">techlabs.io/join/rev-q4-arch</span>
                      <button 
                        onClick={copyLink}
                        className="p-2 text-slate-600 hover:text-[#19C37D] transition-colors"
                      >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                      </button>
                   </div>
                </div>
              </div>

              <button 
                onClick={startMeeting}
                className="w-full mt-10 md:mt-0 bg-[#19C37D] text-black py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-[#19C37D]/10 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4"
              >
                <PlayCircle size={20} strokeWidth={3} />
                Iniciar Reunião
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
            Ao iniciar, todos os participantes na sala de espera receberão uma notificação.
          </p>
        </div>

        {/* Global Footer Console Style */}
        <footer className="fixed bottom-10 left-0 right-0 flex items-center justify-center gap-12 text-[9px] font-black uppercase tracking-[0.2em] text-slate-700">
           <button className="hover:text-white transition-colors">Centro de Ajuda</button>
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 bg-[#19C37D] rounded-full animate-pulse"></div>
             Status do Sistema
           </div>
           <button className="hover:text-white transition-colors">Privacidade</button>
        </footer>
      </main>
    </div>
  );
}
