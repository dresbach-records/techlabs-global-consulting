
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Bell, Search, 
  Filter, Download, MoreVertical, ChevronLeft, ChevronRight,
  AlertTriangle, AlertCircle, CheckCircle2, LogOut, Plus, ShieldCheck
} from 'lucide-react';

export default function AdminProjects() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const projects = [
    {
      name: 'Cloud Migration - Phase 2',
      client: 'Global Logistics Corp',
      lead: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      deadline: '24.10.2024',
      status: 'On Track',
      progress: 65,
      statusColor: 'text-[#19C37D]',
      dotColor: 'bg-[#19C37D]'
    },
    {
      name: 'AI Engine Integration',
      client: 'FinTech Hub',
      lead: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      deadline: '12.11.2024',
      status: 'At Risk',
      progress: 42,
      statusColor: 'text-amber-500',
      dotColor: 'bg-amber-500'
    },
    {
      name: 'Cyber Security Audit',
      client: 'National Bank Group',
      lead: 'Marcus Thorne',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      deadline: '01.10.2024',
      status: 'Delayed',
      progress: 88,
      statusColor: 'text-red-500',
      dotColor: 'bg-red-500'
    },
    {
      name: 'Smart City IoT Hub',
      client: 'Metropolis Gov',
      lead: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      deadline: '15.12.2024',
      status: 'On Track',
      progress: 15,
      statusColor: 'text-[#19C37D]',
      dotColor: 'bg-[#19C37D]'
    }
  ];

  const stats = [
    { label: 'Total Projetos', value: '128', sub: 'REV 1.0.4', color: 'text-white' },
    { label: 'On Track', value: '102', sub: '80%', color: 'text-white', dot: true },
    { label: 'At Risk', value: '18', icon: <AlertTriangle size={18} className="text-amber-500" />, color: 'text-amber-500' },
    { label: 'Delayed', value: '08', icon: <AlertCircle size={18} className="text-red-500" />, color: 'text-red-500' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] text-slate-300 font-sans antialiased">
      {/* Admin Sidebar Navigation */}
      <aside className="w-72 border-r border-white/5 bg-[#111111] flex flex-col shrink-0">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#19C37D] rounded flex items-center justify-center shadow-[0_0_20px_rgba(25,195,125,0.2)]">
              <Terminal className="text-[#111111]" size={20} strokeWidth={3} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">TechAdmin</span>
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
          <div className="flex items-center justify-between p-3 bg-white/2 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  className="w-10 h-10 rounded-xl border border-[#19C37D]/30 object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                  alt="Admin Avatar" 
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#19C37D] border-2 border-[#111111] rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-white uppercase truncate">Marcos Silveira</p>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-0.5">CTO Global</p>
              </div>
            </div>
            <button onClick={handleLogout} className="p-2 text-slate-600 hover:text-red-500 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Control Terminal */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0A0A0A]">
        <header className="h-20 border-b border-white/5 bg-[#0A0A0A] flex items-center justify-between px-10 sticky top-0 z-20">
          <div>
            <h1 className="text-xl font-black text-white tracking-tighter uppercase">Gestão de Projetos Enterprise</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-1 font-bold">Global Delivery Monitoring</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="p-2.5 text-slate-500 hover:bg-white/5 hover:text-white rounded-full transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-black"></span>
            </button>
            <button 
              onClick={() => navigate('/admin/projects/new')}
              className="bg-white text-black px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-200 active:scale-95 shadow-xl shadow-white/5"
            >
              Novo Projeto
            </button>
          </div>
        </header>

        <div className="p-10 space-y-10 overflow-y-auto custom-scrollbar flex-1">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`bg-[#111111] border border-white/5 p-6 rounded-xl hover:border-[#19C37D]/20 transition-all group ${i === 2 ? 'border-l-2 border-l-amber-500/50' : i === 3 ? 'border-l-2 border-l-red-500/50' : ''}`}>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                <div className="flex items-baseline justify-between">
                  <h2 className={`text-3xl font-black tracking-tighter ${stat.color}`}>{stat.value}</h2>
                  {stat.sub && (
                    <div className="flex items-center gap-2">
                      {stat.dot && <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D] shadow-[0_0_8px_#19C37D]"></span>}
                      <span className={`text-[10px] font-mono font-bold tracking-widest ${stat.dot ? 'text-[#19C37D]' : 'text-slate-600'}`}>{stat.sub}</span>
                    </div>
                  )}
                  {stat.icon && stat.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Table Container */}
          <div className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="px-8 py-6 border-b border-white/5 flex flex-wrap gap-6 items-center justify-between bg-white/2">
              <div className="flex items-center gap-6 flex-1 min-w-[300px]">
                <div className="relative flex-1 max-w-md">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                  <input 
                    className="w-full pl-12 pr-6 py-3 bg-black/40 border border-white/5 rounded-xl text-xs font-bold uppercase tracking-widest text-white placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all" 
                    placeholder="Filtrar por nome, cliente ou ID..." 
                    type="text"
                  />
                </div>
                <div className="flex gap-3">
                  <select className="bg-black/40 border border-white/5 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest px-4 py-3 outline-none focus:ring-1 focus:ring-[#19C37D]/30">
                    <option>Clientes</option>
                  </select>
                  <select className="bg-black/40 border border-white/5 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest px-4 py-3 outline-none focus:ring-1 focus:ring-[#19C37D]/30">
                    <option>Serviços</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-3 text-slate-500 hover:text-white transition-all bg-black/40 border border-white/5 rounded-xl">
                  <Filter size={18} />
                </button>
                <button className="p-3 text-slate-500 hover:text-white transition-all bg-black/40 border border-white/5 rounded-xl">
                  <Download size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/40 text-[9px] uppercase tracking-[0.2em] text-slate-600 font-black border-b border-white/5">
                    <th className="px-8 py-5">Projeto / Cliente</th>
                    <th className="px-8 py-5">Lead Engineer</th>
                    <th className="px-8 py-5">Deadline</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 w-80">Progresso Técnico</th>
                    <th className="px-8 py-5 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {projects.map((project, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors group cursor-default">
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-black text-xs text-white uppercase tracking-tight group-hover:text-[#19C37D] transition-colors">{project.name}</span>
                          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-1">{project.client}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img className="w-7 h-7 rounded-lg grayscale group-hover:grayscale-0 transition-all border border-white/10" src={project.avatar} alt={project.lead} />
                          <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">{project.lead}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">{project.deadline}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 ${project.dotColor} rounded-full`}></span>
                          <span className={`text-[9px] font-black uppercase tracking-widest ${project.statusColor}`}>{project.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="flex-1 h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                            <div className="bg-slate-700 h-full transition-all duration-1000 delay-300" style={{ width: `${project.progress}%` }}></div>
                          </div>
                          <span className="text-[10px] font-mono font-black text-slate-600 w-10 text-right">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="text-slate-600 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-6 border-t border-white/5 flex items-center justify-between bg-black/20">
              <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">Página 1 de 32 • Total 128 Projetos</p>
              <div className="flex gap-3">
                <button className="px-5 py-2 border border-white/5 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white/5 transition-all text-slate-600 hover:text-white">Ant</button>
                <button className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-white/5">Próx</button>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Console Footer */}
        <footer className="border-t border-white/5 bg-[#0D0D0D] px-10 py-4 flex items-center justify-between text-[9px] text-slate-600 uppercase tracking-[0.4em] font-black">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full animate-pulse"></span>
              API Cluster: Nominal
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full"></span>
              DB Latency: 12ms
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full"></span>
              Auth Nodes: Online
            </div>
          </div>
          <div className="font-mono flex items-center gap-4">
            <ShieldCheck size={12} className="text-[#19C37D]" />
            Updated: 2024-05-20 14:32:05 UTC
          </div>
        </footer>
      </main>
    </div>
  );
}
