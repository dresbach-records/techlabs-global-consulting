
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, ArrowRight, UserCircle, ShieldCheck, Activity, HelpCircle } from 'lucide-react';

export default function JoinMeeting() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [meetingId, setMeetingId] = useState('TL-882-CH-2024');

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    // Redireciona para a prévia da reunião (módulo de vídeo)
    navigate('/client/meeting');
  };

  return (
    <div className="min-h-screen bg-black text-[#EDEDED] font-sans flex items-center justify-center relative overflow-hidden antialiased">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#19C37D 1px, transparent 1px), linear-gradient(90deg, #19C37D 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#19C37D]/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#19C37D]/5 blur-[100px] rounded-full animate-pulse delay-700"></div>
      </div>

      <main className="relative z-10 w-full max-w-md px-6 animate-in fade-in zoom-in-95 duration-700">
        <div className="bg-[#111111] border border-white/5 rounded-3xl p-10 shadow-2xl backdrop-blur-md relative overflow-hidden group">
          {/* Top Logo Area */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#19C37D]/10 rounded-xl flex items-center justify-center border border-[#19C37D]/20 shadow-[0_0_20px_rgba(25,195,125,0.1)] group-hover:scale-110 transition-transform duration-500">
                <Terminal className="text-[#19C37D]" size={24} strokeWidth={2.5} />
              </div>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">TechLabs</h1>
            </div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-slate-500 font-black">by Dresbach Group Canada</p>
          </div>

          <div className="mb-10 text-center">
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-2">Entrar na Reunião</h2>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Insira as informações para acessar o lobby</p>
          </div>

          <form onSubmit={handleContinue} className="space-y-8">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">Seu Nome</label>
                <input 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-[#2F2F2F] rounded-2xl px-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/50 transition-all placeholder:text-slate-700" 
                  placeholder="Como deseja ser chamado?" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black ml-1">ID da Reunião</label>
                <input 
                  required
                  value={meetingId}
                  onChange={(e) => setMeetingId(e.target.value)}
                  className="w-full bg-black/40 border border-[#2F2F2F] rounded-2xl px-6 py-4 text-sm font-mono font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/50 transition-all" 
                  type="text"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#19C37D] hover:bg-[#15a86a] text-black font-black py-4.5 rounded-2xl transition-all shadow-xl shadow-[#19C37D]/10 flex items-center justify-center gap-3 group active:scale-[0.98] uppercase tracking-[0.2em] text-xs h-14"
            >
              <span>Continuar para Prévia</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[9px] uppercase tracking-[0.3em] font-black">
              <span className="bg-[#111111] px-4 text-slate-600">ou</span>
            </div>
          </div>

          <button 
            onClick={() => navigate('/start-consultation')}
            className="w-full flex items-center justify-center gap-3 py-4 border border-[#2F2F2F] rounded-2xl hover:bg-white/5 transition-all group shadow-sm active:scale-[0.98]"
          >
            <UserCircle size={20} className="text-slate-500 group-hover:text-[#19C37D] transition-colors" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">Entrar com Conta TechLabs</span>
          </button>
        </div>

        {/* Footer Metrics */}
        <div className="mt-10 flex items-center justify-center gap-10 opacity-30">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#19C37D]" />
            <span className="text-[9px] uppercase tracking-widest font-black">Conexão Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[#19C37D]" />
            <span className="text-[9px] uppercase tracking-widest font-black">Latência: 12ms</span>
          </div>
        </div>
      </main>

      {/* Help Trigger */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="text-[10px] text-slate-600 hover:text-[#19C37D] transition-all uppercase tracking-widest font-black flex items-center gap-3 group">
          <span>Precisa de ajuda?</span>
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#19C37D] group-hover:text-black transition-all">
            <HelpCircle size={16} />
          </div>
        </button>
      </div>
    </div>
  );
}
