
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search, Video, ShieldCheck, Clock, CalendarCheck } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminScheduleMeeting() {
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    record: true,
    lobby: true,
    muteOnEntry: false
  });

  const participants = [
    { name: 'Ricardo O.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCitUU6vdrVGBjnOFBtGYYbcg5HbDxkbHS7X1Az_8SmxZK1I2F_dZ4R5HHo7C2u2OKWF10apLIPUp14TpI9ZWhh_LeM2ZdwaVzw8CnkhDSW1urUx1LW8jXls30cM5eYqPqK9kY6EKf7Y3Vgm6BjPPVAEabajSlYdf7XnVpWY714P4kX6H6of79-vJygjgVEspYm6FPQHcdOcoOt5TGWbpqCBTwqqRGUl3Kvsg7w-2odPz3_47jVIZIvkJeX65UDNN-miJEnjV3xFRpH' },
    { name: 'Ana Costa', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCitUU6vdrVGBjnOFBtGYYbcg5HbDxkbHS7X1Az_8SmxZK1I2F_dZ4R5HHo7C2u2OKWF10apLIPUp14TpI9ZWhh_LeM2ZdwaVzw8CnkhDSW1urUx1LW8jXls30cM5eYqPqK9kY6EKf7Y3Vgm6BjPPVAEabajSlYdf7XnVpWY714P4kX6H6of79-vJygjgVEspYm6FPQHcdOcoOt5TGWbpqCBTwqqRGUl3Kvsg7w-2odPz3_47jVIZIvkJeX65UDNN-miJEnjV3xFRpH' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-w-0 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#19C37D]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <header className="p-10 pb-4 flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Agendar Nova Reunião Técnica</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Configure os detalhes da sessão para desenvolvedores e clientes.</p>
          </div>
          <button onClick={() => navigate('/admin/dashboard')} className="p-3 text-slate-600 hover:text-white transition-colors bg-white/5 rounded-2xl border border-white/5">
            <X size={24} />
          </button>
        </header>

        <div className="flex-1 p-10 flex justify-center overflow-y-auto custom-scrollbar relative z-10">
          <div className="w-full max-w-4xl space-y-10">
            <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Título da Sessão</label>
                  <input className="w-full h-16 bg-[#111] border border-[#2A2A2A] rounded-2xl px-8 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all placeholder:text-slate-800 uppercase tracking-widest" placeholder="Ex: Code Review - Projeto Alpha" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Data e Horário</label>
                    <input className="w-full h-16 bg-[#111] border border-[#2A2A2A] rounded-2xl px-8 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all [color-scheme:dark]" type="datetime-local" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Duração Estimada</label>
                    <select className="w-full h-16 bg-[#111] border border-[#2A2A2A] rounded-2xl px-8 text-sm font-bold text-[#EDEDED] focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all appearance-none cursor-pointer">
                      <option>30 minutos</option><option>45 minutos</option><option selected>1 hora</option><option>2 horas</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-white/5 space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Participantes</label>
                  <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-[#19C37D] transition-colors" size={20} />
                    <input className="w-full h-16 pl-16 pr-8 bg-[#111] border border-[#2A2A2A] rounded-2xl text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all placeholder:text-slate-800" placeholder="Buscar engenheiros ou clientes..." type="text" />
                  </div>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {participants.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5 group transition-all">
                        <img alt="User" className="w-6 h-6 rounded-full grayscale group-hover:grayscale-0" src={p.avatar} />
                        <span className="text-xs text-slate-300 font-black uppercase tracking-tight">{p.name}</span>
                        <button className="text-slate-600 hover:text-red-500"><X size={14} /></button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Configurações Avançadas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1A1A1A] p-6 rounded-3xl border border-[#2A2A2A] flex flex-col gap-6 group hover:border-[#19C37D]/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${config.record ? 'bg-[#19C37D]/10 text-[#19C37D]' : 'bg-white/5 text-slate-600'}`}><Video size={20} /></div>
                    <button onClick={() => setConfig({...config, record: !config.record})} className={`w-12 h-6 rounded-full transition-all relative ${config.record ? 'bg-[#19C37D]' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.record ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                  <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest">Gravação Automática</span>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-3xl border border-[#2A2A2A] flex flex-col gap-6 group hover:border-[#19C37D]/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${config.lobby ? 'bg-[#19C37D]/10 text-[#19C37D]' : 'bg-white/5 text-slate-600'}`}><ShieldCheck size={20} /></div>
                    <button onClick={() => setConfig({...config, lobby: !config.lobby})} className={`w-12 h-6 rounded-full transition-all relative ${config.lobby ? 'bg-[#19C37D]' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.lobby ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                  <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest">Sala de Espera</span>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-3xl border border-[#2A2A2A] flex flex-col gap-6 group hover:border-[#19C37D]/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${config.muteOnEntry ? 'bg-[#19C37D]/10 text-[#19C37D]' : 'bg-white/5 text-slate-600'}`}><Clock size={20} /></div>
                    <button onClick={() => setConfig({...config, muteOnEntry: !config.muteOnEntry})} className={`w-12 h-6 rounded-full transition-all relative ${config.muteOnEntry ? 'bg-[#19C37D]' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${config.muteOnEntry ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                  <span className="text-[10px] font-black text-slate-200 uppercase tracking-widest">Mudo ao Entrar</span>
                </div>
              </div>
            </section>

            <div className="flex items-center gap-6 pt-4">
              <button onClick={() => navigate('/admin/sessions')} className="flex-1 h-20 bg-[#19C37D] hover:brightness-110 text-black font-black rounded-[1.5rem] transition-all shadow-2xl flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] active:scale-[0.98]">
                <CalendarCheck size={24} strokeWidth={3} /> Confirmar Agendamento
              </button>
              <button onClick={() => navigate('/admin/dashboard')} className="px-12 h-20 bg-white/5 hover:bg-white/10 text-slate-500 font-black rounded-[1.5rem] transition-all text-xs uppercase tracking-[0.2em] border border-white/5">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
