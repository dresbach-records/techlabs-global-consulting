
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Group, Network, Settings2, Bell, Search, 
  Plus, MoreVertical, ChevronLeft, ChevronRight,
  LogOut, ShieldCheck
} from 'lucide-react';

export default function AdminTickets() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const tickets = [
    {
      id: '#892',
      companyCode: 'AC',
      company: 'Alpha Corp',
      subject: 'Erro de Sincronização de Banco',
      desc: 'Produção offline desde 14:28 UTC',
      priority: 'Crítica',
      priorityColor: 'text-red-400 border-red-900/40 bg-red-900/20',
      agent: 'Ricardo Almeida',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      status: 'Em Atendimento',
      statusDot: 'bg-[#19C37D]'
    },
    {
      id: '#891',
      companyCode: 'SL',
      company: 'Skyline Logistics',
      subject: 'Falha na Autenticação SSO',
      desc: 'Integrando com Azure AD Pro',
      priority: 'Alta',
      priorityColor: 'text-orange-400 border-orange-900/40 bg-orange-900/20',
      agent: 'Lucas Mendes',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      status: 'Aguardando',
      statusDot: 'bg-slate-500'
    },
    {
      id: '#890',
      companyCode: 'BT',
      company: 'Beta Technologies',
      subject: 'Relatório de Faturamento Mensal',
      desc: 'Dados de Julho não consolidados',
      priority: 'Média',
      priorityColor: 'text-slate-400 border-white/5 bg-white/5',
      agent: 'Mariana Souza',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      status: 'Em Atendimento',
      statusDot: 'bg-[#19C37D]'
    },
    {
      id: '#889',
      companyCode: 'NC',
      company: 'Nexus Cloud',
      subject: 'Provisionamento de Nova VPC',
      desc: 'Ambiente de Testes / Sandbox',
      priority: 'Média',
      priorityColor: 'text-slate-400 border-white/5 bg-white/5',
      agent: 'Ricardo Almeida',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      status: 'Pendente Cliente',
      statusDot: 'bg-[#19C37D]'
    },
    {
      id: '#888',
      companyCode: 'GH',
      company: 'Global Heavy',
      subject: 'Vazamento de Dados (Alerta IDS)',
      desc: 'Tentativa de acesso não autorizado em DB-04',
      priority: 'Crítica',
      priorityColor: 'text-red-400 border-red-900/40 bg-red-900/20',
      agent: 'Mariana Souza',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      status: 'Em Atendimento',
      statusDot: 'bg-[#19C37D]'
    }
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
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D] font-bold text-sm transition-all shadow-lg shadow-black/20"
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
          <button className="w-full flex items-center gap-4 p-4 rounded-xl text-[#888888] hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Group size={20} />
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

      {/* Main Terminal Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#111111]">
        <header className="h-20 border-b border-[#2A2A2A] bg-[#1A1A1A]/50 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-black text-white uppercase tracking-tight flex items-center">
              Operações Internas <span className="text-[#888888] font-medium mx-3 opacity-50">/</span> Tickets Ativos
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-black/30 border border-[#2A2A2A] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></span>
              <span className="text-[10px] font-mono text-[#888888] uppercase tracking-[0.2em] font-bold">Sistema Nominal</span>
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

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#1A1A1A] p-6 rounded-2xl border border-[#2A2A2A] shadow-xl">
            <div className="flex items-center gap-6 flex-1 max-w-3xl">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]" />
                <input 
                  className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl py-3 pl-12 pr-6 text-xs font-bold uppercase tracking-widest text-[#EDEDED] placeholder:text-[#888888] focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all" 
                  placeholder="Filtrar por ID, Empresa ou Assunto..." 
                  type="text"
                />
              </div>
              <select className="bg-[#111111] border border-[#2A2A2A] rounded-xl py-3 px-6 text-xs font-black uppercase tracking-widest text-[#888888] outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all cursor-pointer">
                <option>Prioridade (Todas)</option>
                <option>Crítica</option>
                <option>Alta</option>
                <option>Média</option>
              </select>
              <select className="bg-[#111111] border border-[#2A2A2A] rounded-xl py-3 px-6 text-xs font-black uppercase tracking-widest text-[#888888] outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all cursor-pointer">
                <option>Status (Todos)</option>
                <option>Aguardando</option>
                <option>Em Atendimento</option>
                <option>Pendente Cliente</option>
              </select>
            </div>
            <button className="bg-[#19C37D] text-black px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#19C37D]/10 active:scale-95">
              <Plus size={18} strokeWidth={3} /> NOVO TICKET
            </button>
          </div>

          {/* Tickets Matrix Table */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#2A2A2A] bg-black/20 text-[9px] uppercase tracking-[0.2em] font-black text-[#888888]">
                  <th className="px-8 py-5">ID</th>
                  <th className="px-8 py-5">Empresa</th>
                  <th className="px-8 py-5">Assunto</th>
                  <th className="px-8 py-5">Prioridade</th>
                  <th className="px-8 py-5">Consultor</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2A2A]">
                {tickets.map((ticket, i) => (
                  <tr key={i} className="hover:bg-white/2 transition-all cursor-default group">
                    <td className="px-8 py-6 font-mono text-[11px] font-bold text-[#888888] group-hover:text-[#EDEDED] transition-colors">{ticket.id}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-black border border-[#2A2A2A] flex items-center justify-center text-[10px] font-black text-[#EDEDED] shadow-sm">{ticket.companyCode}</div>
                        <span className="text-xs font-black text-[#EDEDED] uppercase tracking-tight">{ticket.company}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <p className="text-xs font-black text-[#EDEDED] uppercase tracking-tight group-hover:text-[#19C37D] transition-colors">{ticket.subject}</p>
                        <p className="text-[10px] text-[#888888] font-bold uppercase tracking-widest mt-1 truncate max-w-[280px]">{ticket.desc}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest ${ticket.priorityColor}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <img alt="Agent" className="w-7 h-7 rounded-lg grayscale group-hover:grayscale-0 transition-all border border-white/10" src={ticket.avatar}/>
                        <span className="text-xs text-[#888888] font-bold uppercase tracking-tight group-hover:text-[#EDEDED]">{ticket.agent}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full ${ticket.statusDot} shadow-[0_0_8px_currentColor]`}></span>
                        <span className="text-[10px] font-black text-[#EDEDED] uppercase tracking-widest">{ticket.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-[#2A2A2A] hover:text-[#19C37D] transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Metrics & Pagination */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#888888] font-black uppercase tracking-[0.2em]">Total de Atendimentos:</span>
                <span className="text-sm text-[#EDEDED] font-black tracking-tighter">42</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#888888] font-black uppercase tracking-[0.2em]">Tempo Médio:</span>
                <span className="text-sm text-[#EDEDED] font-black tracking-tighter">1h 12m</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 border border-[#2A2A2A] rounded-xl text-[#888888] hover:text-[#EDEDED] hover:bg-white/5 transition-all">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                <button className="w-9 h-9 flex items-center justify-center bg-[#19C37D] text-black text-[11px] font-black rounded-xl shadow-lg shadow-[#19C37D]/20">1</button>
                <button className="w-9 h-9 flex items-center justify-center text-[#888888] text-[11px] font-black hover:bg-white/5 rounded-xl transition-all">2</button>
                <button className="w-9 h-9 flex items-center justify-center text-[#888888] text-[11px] font-black hover:bg-white/5 rounded-xl transition-all">3</button>
              </div>
              <button className="p-2.5 border border-[#2A2A2A] rounded-xl text-[#888888] hover:text-[#EDEDED] hover:bg-white/5 transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Global Status Footer */}
        <footer className="border-t border-[#2A2A2A] bg-black/40 px-10 py-5 flex items-center justify-between text-[9px] text-[#888888] uppercase tracking-[0.4em] font-black">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full animate-pulse shadow-[0_0_8px_#19C37D]"></span>
              API Cluster: Nominal
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full shadow-[0_0_5px_#19C37D]"></span>
              DB Latency: 12ms
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full shadow-[0_0_5px_#19C37D]"></span>
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
