
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  MoreVertical,
  Download,
  FileText,
  FileImage,
  CheckCircle2,
  MessageSquare,
  BarChart3,
  Headset
} from 'lucide-react';
import ClientSidebar from '@/components/client/ClientSidebar';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex font-display text-slate-800">
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-10 min-w-0">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Bem-vindo, Ricardo</h1>
            <p className="text-slate-400 font-medium mt-1">Aqui está o status atual dos seus projetos e infraestrutura.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-3 bg-white text-slate-400 hover:text-[#19C37D] transition-all rounded-xl shadow-sm border border-slate-100">
              <Bell size={22} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#19C37D] rounded-full ring-2 ring-white"></span>
            </button>
            <button 
              onClick={() => navigate('/client/schedule-call')}
              className="bg-[#19C37D] hover:bg-[#15a86a] text-white px-7 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-[#19C37D]/20 text-sm"
            >
              <Headset size={20} />
              Falar com Consultor Sênior
            </button>
          </div>
        </header>

        {/* Status Cards Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-[#19C37D]/10 text-[#19C37D] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg">Em Progresso</span>
              <button className="text-slate-200 hover:text-slate-400 transition-colors"><MoreVertical size={20} /></button>
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">Arquitetura Cloud AWS</h3>
            <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">Migração de infraestrutura legada para ambiente escalável.</p>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-tighter">Progresso</span>
                <span className="text-[#19C37D]">65%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#19C37D] h-full rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg">Planejamento</span>
              <button className="text-slate-200 hover:text-slate-400 transition-colors"><MoreVertical size={20} /></button>
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">Segurança Zero Trust</h3>
            <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">Implementação de políticas de acesso granular e MFA.</p>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-tighter">Progresso</span>
                <span className="text-blue-600">12%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Saúde da Infraestrutura</h3>
            <div className="flex items-end justify-between mt-auto">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#19C37D] tracking-tighter">99.9%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Uptime Garantido</span>
              </div>
              <div className="flex items-end gap-1.5 h-16 pb-1">
                <div className="bg-[#19C37D]/20 w-4 h-[40%] rounded-t-sm"></div>
                <div className="bg-[#19C37D]/20 w-4 h-[60%] rounded-t-sm"></div>
                <div className="bg-[#19C37D]/20 w-4 h-[50%] rounded-t-sm"></div>
                <div className="bg-[#19C37D]/20 w-4 h-[80%] rounded-t-sm"></div>
                <div className="bg-[#19C37D] w-4 h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(25,195,125,0.3)]"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                <h2 className="font-bold text-lg text-slate-900 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#19C37D] rounded-full"></div>
                  Documentos e Blueprints
                </h2>
                <button className="text-xs font-bold text-[#19C37D] hover:underline uppercase tracking-widest transition-all">Ver Todos</button>
              </div>
              <div className="divide-y divide-slate-50">
                <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shadow-sm">
                      <FileText size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-[#19C37D] transition-colors">Diagrama_AWS_V2.pdf</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-1 uppercase">Atualizado em 12 Out, 2023 • 4.2 MB</p>
                    </div>
                  </div>
                  <button className="p-3 hover:bg-white hover:text-[#19C37D] rounded-xl text-slate-300 transition-all shadow-none hover:shadow-sm">
                    <Download size={20} />
                  </button>
                </div>
                <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shadow-sm">
                      <FileText size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-[#19C37D] transition-colors">Relatorio_Seguranca_Trimestral.docx</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-1 uppercase">Atualizado em 05 Out, 2023 • 1.8 MB</p>
                    </div>
                  </div>
                  <button className="p-3 hover:bg-white hover:text-[#19C37D] rounded-xl text-slate-300 transition-all shadow-none hover:shadow-sm">
                    <Download size={20} />
                  </button>
                </div>
                <div className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-green-50 text-[#19C37D] rounded-xl flex items-center justify-center shadow-sm">
                      <FileImage size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-[#19C37D] transition-colors">Blueprint_DataCenter_v1.png</p>
                      <p className="text-[10px] text-slate-400 font-semibold mt-1 uppercase">Atualizado em 28 Set, 2023 • 8.5 MB</p>
                    </div>
                  </div>
                  <button className="p-3 hover:bg-white hover:text-[#19C37D] rounded-xl text-slate-300 transition-all shadow-none hover:shadow-sm">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-slate-900">Última Fatura</h3>
                <BarChart3 className="text-slate-200 w-5 h-5" />
              </div>
              <div className="mb-8">
                <p className="text-3xl font-black text-slate-900 tracking-tighter">R$ 12.450,00</p>
                <p className="text-[11px] text-slate-400 font-bold flex items-center gap-1.5 mt-2 uppercase">
                  <CheckCircle2 size={14} className="text-[#19C37D]" />
                  Pago em 05/10/2023
                </p>
              </div>
              <button onClick={() => navigate('/client/invoices')} className="w-full py-3.5 border border-slate-100 text-slate-500 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-[0.98]">
                Ver Histórico Financeiro
              </button>
            </div>

            <div className="bg-[#19C37D] rounded-3xl shadow-xl shadow-[#19C37D]/20 p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-6 tracking-tight">Seu Gerente de Conta</h3>
                <div className="flex items-center gap-4 mt-4">
                  <img 
                    className="w-14 h-14 rounded-2xl border-2 border-white/20 object-cover shadow-lg" 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                    alt="Juliana Mendes" 
                  />
                  <div>
                    <p className="font-bold text-sm">Juliana Mendes</p>
                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Senior Cloud Architect</p>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <button 
                    onClick={() => navigate('/client/schedule-call')}
                    className="flex-1 bg-white text-[#19C37D] font-bold py-3.5 rounded-xl text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-[0.95]"
                  >
                    Agendar Call
                  </button>
                  <button 
                    onClick={() => navigate('/client/support')}
                    className="p-3.5 bg-white/20 hover:bg-white/30 rounded-xl transition-all active:scale-[0.95]"
                  >
                    <MessageSquare size={18} />
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
