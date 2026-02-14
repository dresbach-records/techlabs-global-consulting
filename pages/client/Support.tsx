
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlusCircle,
  MessageSquare,
  Clock,
  User,
  ShieldCheck,
  Send,
  MoreHorizontal,
  HelpCircle,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import ClientSidebar from '../../components/client/ClientSidebar';

export default function Support() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const tickets = [
    {
      id: '#TL-4592',
      title: 'Instabilidade em RDS',
      status: 'Urgente',
      desc: 'Latência elevada detectada no banco de dados de produção da região us-east-1.',
      updated: 'há 15 min',
      agent: 'Marcos A.'
    },
    {
      id: '#TL-4588',
      title: 'Configuração de Firewall',
      status: 'Aguardando Cliente',
      desc: 'Solicitação de liberação de portas para novo microserviço de autenticação.',
      updated: 'há 2 horas',
      agent: 'Juliana M.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex font-display text-slate-800">
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-10 min-w-0">
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Suporte Técnico</h1>
            <p className="text-slate-400 font-medium mt-1">Gerencie seus chamados e obtenha auxílio especializado.</p>
          </div>
          <button 
            onClick={() => navigate('/client/support/ticket/new')}
            className="bg-[#19C37D] hover:bg-[#15a86a] text-white px-7 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-[#19C37D]/20 text-sm uppercase tracking-widest active:scale-95"
          >
            <PlusCircle size={20} />
            Abrir Novo Chamado
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/10">
                <h2 className="font-bold text-slate-900 flex items-center gap-3 uppercase tracking-tighter">
                  <MessageSquare size={18} className="text-slate-400" />
                  Chamados Ativos
                </h2>
              </div>
              <div className="divide-y divide-slate-50">
                {tickets.map(ticket => (
                  <div 
                    key={ticket.id} 
                    onClick={() => navigate(`/client/support/ticket/${ticket.id.replace('#', '')}`)}
                    className="p-8 flex items-center justify-between hover:bg-slate-50/50 transition-all group cursor-pointer"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="mt-1 text-slate-200 group-hover:text-[#19C37D] transition-colors">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                          <span className="text-base font-black text-slate-900 uppercase tracking-tight">{ticket.id} - {ticket.title}</span>
                          <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            ticket.status === 'Urgente' ? 'bg-[#19C37D]/10 text-[#19C37D]' : 'bg-blue-50 text-blue-600'
                          }`}>
                            {ticket.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 font-medium mb-4 max-w-xl leading-relaxed">{ticket.desc}</p>
                      </div>
                    </div>
                    <button className="p-3 border border-slate-100 rounded-xl text-slate-200 group-hover:text-[#19C37D] transition-all bg-white shadow-sm">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden flex flex-col h-[500px]">
              <div className="p-6 bg-[#19C37D] text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img className="w-12 h-12 rounded-2xl border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Staff" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#19C37D] rounded-full"></span>
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-tight">Engenheiro Online</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 bg-slate-50/30 overflow-y-auto space-y-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 max-w-[85%]">
                  <p className="text-xs text-slate-600">Olá! Como podemos ajudar hoje?</p>
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 bg-white">
                <div className="relative">
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-xl py-4 pl-5 pr-12 text-xs font-bold focus:ring-2 focus:ring-[#19C37D]/20 outline-none" 
                    placeholder="Mensagem..." 
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#19C37D] text-white rounded-lg">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tighter">
                <ShieldCheck size={18} className="text-[#19C37D]" />
                SLA de Suporte
              </h3>
              <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
                <div className="flex justify-between"><span className="text-slate-400">Urgente</span><span className="text-[#19C37D]">15 min</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Geral</span><span className="text-slate-700">12 horas</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
