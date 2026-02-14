
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Bell, Search, 
  Download, LogOut, ShieldCheck, Globe, Cpu,
  Cloud, AlertTriangle, CheckCircle2, Info, Activity
} from 'lucide-react';

export default function AdminInfrastructure() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const nodes = [
    { id: '#TOR-01', name: 'Primary Cluster (CA)', status: 'ACTIVE', cpu: 24.5, memory: '12.8 GB', memPercent: 60, statusColor: 'text-[#19C37D] bg-[#19C37D]/10 border-[#19C37D]/20' },
    { id: '#SP-02', name: 'Database Replica (BR)', status: 'ACTIVE', cpu: 18.2, memory: '32.1 GB', memPercent: 45, statusColor: 'text-[#19C37D] bg-[#19C37D]/10 border-[#19C37D]/20' },
    { id: '#SG-05', name: 'Edge Cache (SG)', status: 'HIGH LOAD', cpu: 92.1, memory: '14.9 GB', memPercent: 88, statusColor: 'text-red-500 bg-red-500/10 border-red-500/20', alert: true },
  ];

  const alerts = [
    { type: 'CRITICAL', color: 'text-red-500', icon: <AlertTriangle size={18} />, time: '14:24:02', text: 'Memory threshold exceeded on SG-05 cluster.' },
    { type: 'SUCCESS', color: 'text-[#19C37D]', icon: <CheckCircle2 size={18} />, time: '14:18:55', text: 'Auto-scaling group TOR-WEB deployment complete.' },
    { type: 'WARNING', color: 'text-yellow-500', icon: <AlertTriangle size={18} />, time: '13:55:12', text: 'Unauthorized access attempt blocked from IP 192.168.1.102.' },
    { type: 'INFO', color: 'text-slate-400', icon: <Info size={18} />, time: '13:40:00', text: 'Scheduled backup initiated for Database Replica BR.' },
    { type: 'SUCCESS', color: 'text-[#19C37D]', icon: <CheckCircle2 size={18} />, time: '13:30:22', text: 'Network latency stabilized in São Paulo node.' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      <aside className="w-72 border-r border-[#2A2A2A] bg-[#1A1A1A] flex flex-col shrink-0">
        <div className="p-8 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#19C37D] rounded flex items-center justify-center shadow-[0_0_20px_rgba(25,195,125,0.2)]">
              <Terminal className="text-black" size={20} strokeWidth={3} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">TechLabs</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          <button onClick={() => navigate('/admin/dashboard')} className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <LayoutDashboard size={20} /> Visão Geral
          </button>
          <button onClick={() => navigate('/admin/tickets')} className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Ticket size={20} className="rotate-45" /> Tickets Ativos
          </button>
          <button onClick={() => navigate('/admin/projects')} className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Workflow size={20} /> Projetos
          </button>
          <button onClick={() => navigate('/admin/clients')} className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Users size={20} /> Gestão de Clientes
          </button>
          <button onClick={() => navigate('/admin/infrastructure')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D] font-bold text-sm transition-all shadow-lg">
            <Network size={20} /> Infraestrutura
          </button>
          <div className="pt-6 mt-6 border-t border-[#2A2A2A]">
            <button 
              onClick={() => navigate('/admin/settings')}
              className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
            >
              <Settings2 size={20} /> Configurações de Sistema
            </button>
          </div>
        </nav>

        <div className="p-6 border-t border-[#2A2A2A] bg-black/10">
          <div className="flex items-center gap-4 p-3 bg-white/2 rounded-2xl">
            <div className="relative">
              <img className="w-10 h-10 rounded-xl border border-[#19C37D]/30 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Admin" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#19C37D] border-2 border-[#1A1A1A] rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-white uppercase truncate">Admin Principal</p>
              <p className="text-[10px] text-[#19C37D] uppercase font-black tracking-widest">System Root</p>
            </div>
            <button onClick={handleLogout} className="p-2 text-[#2A2A2A] hover:text-red-500 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#111111] relative">
        <header className="h-20 border-b border-[#2A2A2A] bg-[#1A1A1A]/50 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-black text-white uppercase tracking-tight">Infraestrutura <span className="text-[#19C37D]">Global</span></h1>
            <div className="flex items-center gap-3 px-4 py-1.5 bg-[#19C37D]/10 border border-[#19C37D]/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></div>
              <span className="text-[10px] font-mono text-[#19C37D] uppercase font-bold">Live Monitoring</span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-10 text-right">
              <div>
                <p className="text-[9px] uppercase text-[#666] font-black">Global Uptime</p>
                <p className="text-sm font-mono text-[#19C37D] font-black">99.998%</p>
              </div>
              <div>
                <p className="text-[9px] uppercase text-[#666] font-black">Avg Latency</p>
                <p className="text-sm font-mono text-[#19C37D] font-black">42ms</p>
              </div>
            </div>
            <button className="flex items-center gap-3 bg-[#19C37D] text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all">
              <Download size={18} strokeWidth={3} /> EXPORT
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar z-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-10 relative min-h-[450px] overflow-hidden shadow-2xl">
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Global Network Latency</h3>
                  <p className="text-xs text-[#666] font-bold uppercase tracking-widest mt-1">Real-time response times</p>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#19C37D]"></span>
                    <span className="text-[9px] font-black uppercase text-[#666]">Fast ({"<"} 50ms)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="text-[9px] font-black uppercase text-[#666]">Warning (100ms+)</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
                <Globe size={600} className="text-[#19C37D]" strokeWidth={0.5} />
              </div>
              <div className="absolute top-[25%] left-[25%] group">
                <div className="relative">
                  <div className="absolute inset-0 w-8 h-8 -m-3 rounded-full bg-[#19C37D]/20 animate-ping"></div>
                  <div className="w-3 h-3 rounded-full bg-[#19C37D] shadow-[0_0_15px_#19C37D]"></div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-10 shadow-2xl h-full">
                <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-10 flex items-center gap-3">
                   <Cloud className="text-[#19C37D]" size={20} /> Cloud Providers
                </h3>
                <div className="space-y-12">
                  <div className="flex items-center gap-8">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90">
                        <circle className="text-white/5" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                        <circle className="text-[#19C37D]" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251" strokeDashoffset="60" strokeWidth="8" strokeLinecap="round"></circle>
                      </svg>
                      <span className="absolute text-[10px] font-black text-[#19C37D]">AWS</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase text-[#666]"><span>EC2</span><span>14/20</span></div>
                      <div className="flex justify-between text-[10px] font-black uppercase text-[#666]"><span>S3</span><span>2.4 TB</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
              {nodes.map((node, i) => (
                <div key={i} className={`bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#19C37D]/30 transition-all ${node.alert ? 'border-l-4 border-l-red-500' : ''}`}>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-[#666]">{node.id}</span>
                    <span className={`text-[9px] px-3 py-1 rounded-lg font-black uppercase ${node.statusColor}`}>{node.status}</span>
                  </div>
                  <h4 className="font-black text-sm text-white uppercase mb-8">{node.name}</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-[9px] font-black text-[#666] uppercase mb-2"><span>CPU</span><span>{node.cpu}%</span></div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${node.alert ? 'bg-red-500' : 'bg-[#19C37D]'}`} style={{ width: `${node.cpu}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-10 flex flex-col shadow-2xl h-full">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-10 flex items-center gap-3">
                 <Activity className="text-red-500" size={20} /> Live Logs
              </h3>
              <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/2">
                    <div className={`${alert.color} shrink-0`}>{alert.icon}</div>
                    <div className="min-w-0">
                      <div className="flex justify-between items-center gap-2 mb-1">
                        <span className={`text-[9px] font-black uppercase ${alert.color}`}>{alert.type}</span>
                        <span className="text-[9px] text-[#666] font-mono">{alert.time}</span>
                      </div>
                      <p className="text-[11px] font-bold text-slate-300 leading-tight uppercase">{alert.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="h-14 bg-[#0A0A0A] border-t border-[#2A2A2A] flex items-center px-10 overflow-hidden relative">
           <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-mono text-[#19C37D] font-black">[SYS]</span>
                 <span className="text-[10px] text-[#666] font-bold uppercase tracking-widest">Kernel: 5.15.0-76-generic</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D]/30"></div>
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-mono text-[#19C37D] font-black">[NET]</span>
                 <span className="text-[10px] text-[#666] font-bold uppercase tracking-widest">Ingress: 1.2 GB/s</span>
              </div>
           </div>
        </footer>

        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { display: flex; animation: marquee 30s linear infinite; min-width: 200%; }
        `}</style>
      </main>
    </div>
  );
}
