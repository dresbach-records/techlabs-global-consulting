
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ReceiptText, 
  Download,
  Search,
  ChevronRight,
  TrendingUp,
  CreditCard,
  History,
  Clock,
  ChevronLeft,
  FileDown,
  BarChart4,
  CalendarDays,
  ShieldAlert,
  Headset
} from 'lucide-react';
import ClientSidebar from '../../components/client/ClientSidebar';

export default function Invoices() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const invoices = [
    { id: '#INV-8842', service: 'Arquitetura Cloud & Managed Ops', date: '05 Out, 2023', amount: 'R$ 12.450,00', status: 'Pago' },
    { id: '#INV-8791', service: 'Segurança Zero Trust (Setup)', date: '15 Set, 2023', amount: 'R$ 8.900,00', status: 'Pago' },
    { id: '#INV-8650', service: 'Manutenção & Monitoramento 24/7', date: '05 Set, 2023', amount: 'R$ 4.200,00', status: 'Pago' },
    { id: '#INV-8952', service: 'Expansão de Nodes Cloud (Over-usage)', date: '28 Out, 2023', amount: 'R$ 2.150,00', status: 'Pendente' },
  ];

  const filteredInvoices = invoices.filter(inv => 
    inv.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    inv.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex font-display text-slate-800">
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-10 min-w-0">
        <header className="flex flex-col xl:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
              <span>Portal do Cliente</span>
              <ChevronRight size={10} className="text-slate-300" />
              <span className="text-[#19C37D]">Faturas e Financeiro</span>
            </nav>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Faturas e Financeiro</h1>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
              <CalendarDays size={18} className="text-slate-400" />
              Exportar Relatório
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-[#19C37D] text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-[#15a86a] transition-all shadow-lg shadow-[#19C37D]/20">
              <CreditCard size={18} />
              Método de Pagamento
            </button>
          </div>
        </header>

        {/* Highlight Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Total Investido</p>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter">R$ 142.850,00</h2>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[10px] font-black text-[#19C37D] bg-[#19C37D]/10 px-3 py-1.5 rounded-full uppercase tracking-widest">
                  <TrendingUp size={12} /> +12% vs ano anterior
                </span>
              </div>
            </div>
            <History size={120} className="absolute -right-6 -bottom-6 text-slate-50 opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Próximo Vencimento</p>
              <div className="flex items-baseline gap-4">
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">R$ 12.450,00</h2>
                <span className="text-xl font-bold text-slate-300">/ 05 Nov</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[10px] font-black text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-amber-100">
                  <Clock size={12} /> Aguardando fechamento
                </span>
              </div>
            </div>
            <Clock size={120} className="absolute -right-6 -bottom-6 text-slate-50 opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          </div>
        </section>

        {/* Invoice Table */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-12">
          <div className="px-10 py-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center bg-slate-50/20 gap-4">
            <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight">Histórico Recente</h3>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Filtrar faturas..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 pr-6 py-3 bg-white border border-slate-100 rounded-xl text-xs font-bold focus:ring-2 focus:ring-[#19C37D]/20 focus:border-[#19C37D] w-full md:w-72 transition-all outline-none"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/30">
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Invoice ID</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Serviço</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Data Emissão</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Valor</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredInvoices.map((inv, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-all cursor-default group">
                    <td className="px-10 py-6 text-sm font-black text-slate-900">{inv.id}</td>
                    <td className="px-10 py-6 text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{inv.service}</td>
                    <td className="px-10 py-6 text-sm text-slate-400 font-medium">{inv.date}</td>
                    <td className="px-10 py-6 text-sm font-black text-slate-900">{inv.amount}</td>
                    <td className="px-10 py-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        inv.status === 'Pago' ? 'bg-[#19C37D]/10 text-[#19C37D]' : 'bg-amber-50 text-amber-500'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          inv.status === 'Pago' ? 'bg-[#19C37D]' : 'bg-amber-500'
                        }`}></div>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex items-center justify-end gap-4">
                        {inv.status === 'Pendente' && (
                          <button className="text-[10px] font-black text-[#19C37D] uppercase tracking-widest hover:underline px-2">Pagar Agora</button>
                        )}
                        <button className="p-2.5 text-slate-200 hover:text-[#19C37D] hover:bg-white transition-all rounded-xl shadow-none hover:shadow-sm">
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
