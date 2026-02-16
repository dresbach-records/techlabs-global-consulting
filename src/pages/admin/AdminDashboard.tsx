
import React from 'react';
import { Bell, Search, Timer, AlertTriangle, Cloud, Download, TrendingDown, Terminal, ShieldCheck } from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminDashboard() {
  const logs = [
    { time: '14:32:01', type: 'INFO', color: 'text-[#19C37D]', border: 'border-[#19C37D]/50', text: 'Nova implantação concluída no cluster k8s-prod-brazil-01. Versão v2.4.1-stable.' },
    { time: '14:30:15', type: 'CRIT', color: 'text-red-500', border: 'border-red-500/50', text: 'Latência acima de 500ms detectada no endpoint /api/v1/auth. Escalando instâncias...' },
    { time: '14:28:44', type: 'USER', color: 'text-blue-500', border: 'border-blue-500/50', text: 'Cliente Alpha Corp abriu Ticket #892: "Erro de Sincronização de Banco".' },
    { time: '14:25:20', type: 'INFO', color: 'text-[#19C37D]', border: 'border-[#19C37D]/50', text: 'Backup diário concluído com sucesso. Volume: 4.2 TB.' },
    { time: '14:15:00', type: 'LOGS', color: 'text-slate-500', border: 'border-slate-500/50', text: 'Rotatividade de logs executada em 12 nós de infraestrutura.' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-w-0 bg-[#111111] overflow-y-auto custom-scrollbar">
        <header className="h-20 border-b border-[#2A2A2A] bg-[#1A1A1A]/50 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-black text-white uppercase tracking-tight flex items-center">
              Dashboard Admin <span className="text-[#19C37D] font-medium mx-3 opacity-50">/</span> Operações Internas
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-1.5 bg-black/30 border border-[#2A2A2A] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></span>
              <span className="text-[10px] font-mono text-[#19C37D] uppercase font-bold">Sistema Nominal</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[#888888] hover:text-white transition-colors relative p-2">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#111111]"></span>
              </button>
              <button className="text-[#888888] hover:text-white transition-colors p-2">
                <Search size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="p-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-2xl relative overflow-hidden group hover:border-[#19C37D]/30 transition-all shadow-xl">
              <p className="text-[#888888] text-[11px] font-black uppercase tracking-[0.2em] mb-4">Tempo Médio de Resposta</p>
              <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-black text-white tracking-tighter">12m 45s</h2>
                <span className="text-[#19C37D] text-xs font-black flex items-center gap-1 bg-[#19C37D]/10 px-2 py-1 rounded-lg">
                  <TrendingDown size={14} /> -14%
                </span>
              </div>
              <div className="mt-8 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#19C37D] w-[78%] shadow-[0_0_15px_rgba(25,195,125,0.4)]"></div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/30 transition-all shadow-xl">
              <p className="text-[#888888] text-[11px] font-black uppercase tracking-[0.2em] mb-4">Tickets Críticos Pendentes</p>
              <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-black text-white tracking-tighter uppercase">04</h2>
                <span className="text-red-500 text-[10px] font-black flex items-center gap-1 border border-red-500/20 px-3 py-1 rounded-full uppercase tracking-widest">! ALTO RISCO</span>
              </div>
              <div className="mt-8 flex gap-2">
                <div className="h-1.5 flex-1 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                <div className="h-1.5 flex-1 bg-red-500 rounded-full"></div>
                <div className="h-1.5 flex-1 bg-white/5 rounded-full"></div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all shadow-xl">
              <p className="text-[#888888] text-[11px] font-black uppercase tracking-[0.2em] mb-4">Uso de Infraestrutura Cloud</p>
              <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-black text-white tracking-tighter">64.2%</h2>
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-lg">AWS-USE1</span>
              </div>
              <div className="mt-8 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[64%] shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-2 px-2">
                <h3 className="text-sm font-black text-white flex items-center gap-3 uppercase tracking-[0.2em] italic">
                  <Terminal className="text-[#19C37D]" size={18} /> Live Activity Feed
                </h3>
              </div>
              <div className="space-y-2 font-mono text-xs overflow-hidden rounded-2xl border border-[#2A2A2A]">
                {logs.map((log, i) => (
                  <div key={i} className={`bg-[#1A1A1A] border-l-4 ${log.border} p-5 flex items-start gap-6 hover:bg-[#222222] transition-colors cursor-default group`}>
                    <span className="text-[#888888] shrink-0 font-bold opacity-60">[{log.time}]</span>
                    <span className={`${log.color} uppercase font-black shrink-0 tracking-widest`}>[{log.type}]</span>
                    <p className="text-slate-300 leading-relaxed">{log.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 shadow-xl">
                <h4 className="text-[10px] font-black text-[#888888] uppercase tracking-[0.3em] mb-8 border-b border-[#2A2A2A] pb-4">Saúde do Sistema</h4>
                <div className="space-y-8">
                  {['API Gateway', 'Bancos de Dados', 'Armazenamento'].map((label, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center text-[11px] mb-3">
                        <span className="text-slate-400 font-bold uppercase tracking-widest">{label}</span>
                        <span className="text-[#19C37D] font-black tracking-tighter text-sm">99.9%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#19C37D] w-[95%]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-5 bg-[#19C37D] text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-xl hover:bg-[#15a86a] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-[#19C37D]/20">
                <Download size={18} /> Gerar Relatório Global
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
