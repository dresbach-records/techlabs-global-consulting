
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ChevronLeft, ChevronRight, Video, Link2, Edit2, Trash2 } from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminSessions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('proximas');

  const sessions = [
    { date: '24 Out, 2023', time: '14:30 - 15:30', title: 'Code Review: API Integrations', link: 'techlabs.zoom.us/j/827...', participants: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCitUU6vdrVGBjnOFBtGYYbcg5HbDxkbHS7X1Az_8SmxZK1I2F_dZ4R5HHo7C2u2OKWF10apLIPUp14TpI9ZWhh_LeM2ZdwaVzw8CnkhDSW1urUx1LW8jXls30cM5eYqPqK9kY6EKf7Y3Vgm6BjPPVAEabajSlYdf7XnVpWY714P4kX6H6of79-vJygjgVEspYm6FPQHcdOcoOt5TGWbpqCBTwqqRGUl3Kvsg7w-2odPz3_47jVIZIvkJeX65UDNN-miJEnjV3xFRpH'], extraParticipants: 3 },
    { date: '25 Out, 2023', time: '09:00 - 10:00', title: 'Arquitetura Micro-Frontends', link: 'techlabs.zoom.us/j/412...', participants: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCitUU6vdrVGBjnOFBtGYYbcg5HbDxkbHS7X1Az_8SmxZK1I2F_dZ4R5HHo7C2u2OKWF10apLIPUp14TpI9ZWhh_LeM2ZdwaVzw8CnkhDSW1urUx1LW8jXls30cM5eYqPqK9kY6EKf7Y3Vgm6BjPPVAEabajSlYdf7XnVpWY714P4kX6H6of79-vJygjgVEspYm6FPQHcdOcoOt5TGWbpqCBTwqqRGUl3Kvsg7w-2odPz3_47jVIZIvkJeX65UDNN-miJEnjV3xFRpH'], extraParticipants: 0 },
    { date: '27 Out, 2023', time: '16:00 - 17:30', title: 'Workshop: Performance Web', link: 'techlabs.zoom.us/j/109...', participants: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCitUU6vdrVGBjnOFBtGYYbcg5HbDxkbHS7X1Az_8SmxZK1I2F_dZ4R5HHo7C2u2OKWF10apLIPUp14TpI9ZWhh_LeM2ZdwaVzw8CnkhDSW1urUx1LW8jXls30cM5eYqPqK9kY6EKf7Y3Vgm6BjPPVAEabajSlYdf7XnVpWY714P4kX6H6of79-vJygjgVEspYm6FPQHcdOcoOt5TGWbpqCBTwqqRGUl3Kvsg7w-2odPz3_47jVIZIvkJeX65UDNN-miJEnjV3xFRpH'], extraParticipants: 12 }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-w-0 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#19C37D]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <header className="p-10 pb-4 flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Minhas Sessões Agendadas</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Gerencie suas reuniões técnicas e sessões de code review.</p>
          </div>
          <button onClick={() => navigate('/admin/schedule')} className="bg-[#19C37D] hover:brightness-110 text-black font-black px-8 py-3 rounded-xl flex items-center gap-3 transition-all shadow-xl uppercase tracking-widest text-xs">
            <Plus size={18} strokeWidth={3} /> Agendar Nova Reunião
          </button>
        </header>

        <div className="px-10 mt-6 flex items-center gap-10 border-b border-white/5 relative z-10">
          <button onClick={() => setActiveTab('proximas')} className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'proximas' ? 'text-[#19C37D]' : 'text-slate-500 hover:text-white'}`}>
            Próximas<span className="ml-3 px-1.5 py-0.5 bg-[#19C37D]/10 rounded-md text-[9px]">12</span>
            {activeTab === 'proximas' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#19C37D]"></div>}
          </button>
          <button onClick={() => setActiveTab('passadas')} className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'passadas' ? 'text-[#19C37D]' : 'text-slate-500 hover:text-white'}`}>
            Passadas
            {activeTab === 'passadas' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#19C37D]"></div>}
          </button>
        </div>

        <div className="flex-1 p-10 relative z-10 overflow-y-auto custom-scrollbar">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[2rem] overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/20 border-b border-[#2A2A2A] text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
                  <th className="px-10 py-6">Data / Hora</th>
                  <th className="px-10 py-6">Título da Sessão</th>
                  <th className="px-10 py-6">Participantes</th>
                  <th className="px-10 py-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sessions.map((session, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="px-10 py-8">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-white uppercase tracking-tight">{session.date}</span>
                        <span className="text-[10px] font-bold text-[#19C37D] uppercase mt-1">{session.time}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-200 uppercase tracking-tight">{session.title}</span>
                        <div className="flex items-center gap-2 mt-2 opacity-40 group-hover:opacity-100 transition-opacity">
                          <Video size={14} className="text-slate-500" />
                          <span className="text-[10px] font-mono text-slate-500">{session.link}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center -space-x-3">
                        {session.participants.map((p, idx) => (
                          <img key={idx} className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] object-cover grayscale group-hover:grayscale-0 transition-all" src={p} alt="" />
                        ))}
                        {session.extraParticipants > 0 && (
                          <div className="w-8 h-8 rounded-full bg-[#222] border-2 border-[#1A1A1A] flex items-center justify-center text-[9px] font-black text-[#19C37D]">+{session.extraParticipants}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-10 py-8 text-right">
                      <div className="flex items-center justify-end gap-3 opacity-30 group-hover:opacity-100 transition-all">
                        <button className="p-2.5 text-slate-400 hover:text-[#19C37D] hover:bg-[#19C37D]/5 rounded-xl"><Link2 size={18} /></button>
                        <button className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl"><Edit2 size={18} /></button>
                        <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-500/5 rounded-xl"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-10 py-6 border-t border-white/5 bg-black/20 flex items-center justify-between">
              <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">Mostrando 1-10 de 12 sessões</span>
              <div className="flex items-center gap-3">
                <button className="p-2 border border-white/5 rounded-lg text-slate-600 disabled:opacity-20" disabled><ChevronLeft size={16} /></button>
                <button className="w-9 h-9 border border-[#19C37D] text-[#19C37D] rounded-lg font-black text-[11px]">1</button>
                <button className="p-2 border border-white/5 rounded-lg text-slate-600"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
