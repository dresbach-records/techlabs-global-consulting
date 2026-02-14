
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Bell, Search, 
  PlusCircle, MoreVertical, ChevronLeft, ChevronRight,
  LogOut, ShieldCheck, Filter, Download, Briefcase,
  CheckCircle2, Hourglass, TrendingUp
} from 'lucide-react';

export default function AdminClients() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const clients = [
    {
      id: 'NB',
      name: 'NorthBridge Financial',
      location: 'Toronto, Canada',
      contact: 'Marcus Chen',
      email: 'm.chen@northbridge.com',
      plan: 'Enterprise Core',
      projects: 12,
      team: ['MC', 'JD'],
      status: 'Ativo',
      statusColor: 'text-[#19C37D] bg-[#19C37D]/10 border-[#19C37D]/20',
      dotColor: 'bg-[#19C37D]'
    },
    {
      id: 'HS',
      name: 'Helix Systems',
      location: 'São Paulo, Brazil',
      contact: 'Ana Pereira',
      email: 'ana@helixsys.com.br',
      plan: 'Pro Services',
      projects: 4,
      team: ['AP'],
      status: 'Em Pausa',
      statusColor: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
      dotColor: 'bg-yellow-500'
    },
    {
      id: 'QD',
      name: 'Quantum Dynamics',
      location: 'Austin, USA',
      contact: 'Sarah Miller',
      email: 'smiller@quantum.io',
      plan: 'Discovery Plan',
      projects: 0,
      team: [],
      status: 'Prospecto',
      statusColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
      dotColor: 'bg-slate-500'
    },
    {
      id: 'VM',
      name: 'Vortex Media',
      location: 'London, UK',
      contact: 'Julian Ross',
      email: 'ross@vortex.co.uk',
      plan: 'Custom SaaS',
      projects: 7,
      team: ['JR', '+2'],
      status: 'Ativo',
      statusColor: 'text-[#19C37D] bg-[#19C37D]/10 border-[#19C37D]/20',
      dotColor: 'bg-[#19C37D]'
    }
  ];

  const stats = [
    { label: 'Total Empresas', value: '128', icon: <Briefcase size={20} className="text-[#19C37D]" />, bg: 'bg-[#19C37D]/10' },
    { label: 'Projetos Ativos', value: '452', icon: <CheckCircle2 size={20} className="text-blue-500" />, bg: 'bg-blue-500/10' },
    { label: 'Aguardando', value: '18', icon: <Hourglass size={20} className="text-yellow-500" />, bg: 'bg-yellow-500/10' },
    { label: 'Novos (Mês)', value: '+14', icon: <TrendingUp size={20} className="text-emerald-500" />, bg: 'bg-emerald-500/10' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      {/* Admin Sidebar Navigation */}
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
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <LayoutDashboard size={20} />
            Visão Geral
          </button>
          <button 
            onClick={() => navigate('/admin/tickets')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <Ticket size={20} className="rotate-45" />
            Tickets Ativos
          </button>
          <button 
            onClick={() => navigate('/admin/projects')}
            className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold"
          >
            <Workflow size={20} />
            Projetos
          </button>
          <button 
            onClick={() => navigate('/admin/clients')}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D] font-bold text-sm transition-all shadow-lg shadow-black/20"
          >
            <Users size={20} />
            Gestão de Clientes
          </button>
          <button className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Network size={20} />
            Infraestrutura
          </button>

          <div className="pt-6 mt-6 border-t border-[#2A2A2A]">
            <button className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
              <Settings2 size={20} />
              Configurações de Sistema
            </button>
          </div>
        </nav>

        <div className="p-6 border-t border-[#2A2A2A] bg-black/10">
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

      {/* Main Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#111111]">
        <header className="h-20 border-b border-[#2A2A2A] bg-[#1A1A1A]/50 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-black text-white uppercase tracking-tight flex items-center">
              Gestão de Clientes <span className="text-[#888888] font-medium mx-3 opacity-50">/</span> Admin
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative group">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888] group-focus-within:text-[#19C37D] transition-colors" />
              <input 
                className="w-80 bg-black/40 border border-[#2A2A2A] rounded-xl py-2.5 pl-12 pr-6 text-xs font-bold uppercase tracking-widest text-white placeholder:text-[#666] focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all" 
                placeholder="Buscar clientes ou projetos..." 
                type="text"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="text-[#888888] hover:text-white transition-colors p-2">
                <Bell size={20} />
              </button>
              <img 
                className="w-9 h-9 rounded-full border border-[#19C37D]/30 object-cover" 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Profile" 
              />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {/* Action & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-widest">
                <span className="text-[#666] mr-3">País:</span>
                <select className="bg-transparent border-none p-0 focus:ring-0 text-[#EDEDED] cursor-pointer outline-none">
                  <option>Todos os Países</option>
                  <option>Brasil</option>
                  <option>Canada</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-widest">
                <span className="text-[#666] mr-3">Status:</span>
                <select className="bg-transparent border-none p-0 focus:ring-0 text-[#EDEDED] cursor-pointer outline-none">
                  <option>Todos</option>
                  <option>Ativo</option>
                  <option>Em Pausa</option>
                  <option>Prospecto</option>
                </select>
              </div>
              <button className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-[#888888] hover:text-white bg-[#1A1A1A] hover:bg-[#222] rounded-xl transition-all flex items-center gap-3 border border-[#2A2A2A]">
                <Filter size={16} /> Mais Filtros
              </button>
            </div>
            <button 
              onClick={() => navigate('/admin/clients/new')}
              className="bg-[#19C37D] hover:brightness-110 text-black font-black px-7 py-3.5 rounded-xl flex items-center gap-3 transition-all shadow-xl shadow-[#19C37D]/10 active:scale-95 uppercase tracking-widest text-xs"
            >
              <PlusCircle size={20} strokeWidth={3} /> Cadastrar Novo Cliente
            </button>
          </div>

          {/* Table Matrix */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/20 border-b border-[#2A2A2A] text-[10px] font-black text-[#666] uppercase tracking-[0.2em]">
                    <th className="px-8 py-5">Empresa</th>
                    <th className="px-8 py-5">Contato Principal</th>
                    <th className="px-8 py-5">Plano/Serviço</th>
                    <th className="px-8 py-5 text-center">Projetos Ativos</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2A2A]">
                  {clients.map((client, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-default">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#2A2A2A] flex items-center justify-center text-[#19C37D] font-black shadow-sm group-hover:border-[#19C37D]/30 transition-colors">
                            {client.id}
                          </div>
                          <div>
                            <div className="text-sm font-black text-[#EDEDED] uppercase tracking-tight">{client.name}</div>
                            <div className="text-[10px] text-[#666] font-bold uppercase tracking-widest mt-1">{client.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-[#EDEDED] uppercase tracking-tight">{client.contact}</span>
                          <span className="text-[10px] text-[#666] font-bold tracking-widest mt-1">{client.email}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1.5 bg-black/40 border border-[#2A2A2A] rounded-lg text-[9px] font-black text-[#888] uppercase tracking-widest">{client.plan}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-xs font-black text-[#EDEDED]">{client.projects}</span>
                          <div className="flex -space-x-2">
                            {client.team.map((initial, idx) => (
                              <div key={idx} className="w-6 h-6 rounded-full border-2 border-[#1A1A1A] bg-[#222] flex items-center justify-center text-[8px] font-black text-[#666]">
                                {initial}
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${client.statusColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${client.dotColor} shadow-[0_0_8px_currentColor]`}></span>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-black/40 hover:bg-[#19C37D]/10 hover:text-[#19C37D] rounded-lg border border-[#2A2A2A] transition-all">Ver Projetos</button>
                          <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-black/40 hover:bg-[#EDEDED] hover:text-black rounded-lg border border-[#2A2A2A] transition-all">Gerenciar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-8 py-5 bg-black/20 border-t border-[#2A2A2A] flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#666] uppercase tracking-widest">Exibindo 4 de 128 clientes cadastrados</span>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-[#2A2A2A] rounded-xl text-[#666] hover:text-white disabled:opacity-20 transition-all">
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-1.5">
                  <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#19C37D]/10 text-[#19C37D] text-[10px] font-black">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/5 text-[#666] text-[10px] font-black transition-all">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/5 text-[#666] text-[10px] font-black transition-all">3</button>
                  <span className="text-[#444] px-1 text-xs">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/5 text-[#666] text-[10px] font-black transition-all">32</button>
                </div>
                <button className="p-2 border border-[#2A2A2A] rounded-xl text-[#666] hover:text-white transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#2A2A2A] flex items-center gap-5 group hover:border-[#19C37D]/20 transition-all shadow-xl">
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-[9px] text-[#666] uppercase font-black tracking-[0.2em] mb-1">{stat.label}</div>
                  <div className="text-2xl font-black text-[#EDEDED] tracking-tighter">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Footer Console */}
        <footer className="border-t border-[#2A2A2A] bg-black/40 px-10 py-4 flex items-center justify-between text-[9px] text-[#666] uppercase tracking-[0.4em] font-black">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full animate-pulse shadow-[0_0_8px_#19C37D]"></span>
              Node: Cluster-Canada-01
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full"></span>
              DB: Sync_Nominal
            </div>
          </div>
          <div className="font-mono flex items-center gap-4">
            <ShieldCheck size={12} className="text-[#19C37D]" />
            Auth Level: SYSTEM_ADMIN
          </div>
        </footer>
      </main>
    </div>
  );
}
