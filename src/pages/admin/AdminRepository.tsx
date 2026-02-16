
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Bell, Search, 
  LogOut, ShieldCheck, ChevronRight, FileUp,
  Download, Trash2, Eye, FileText, FolderArchive,
  BarChart3, Layers, FileArchive, HardDrive, Filter,
  ChevronLeft, FileCode, X, Plus, Upload, Check,
  History, Clock, User
} from 'lucide-react';

export default function AdminRepository() {
  const navigate = useNavigate();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isHistoryPanelOpen, setIsHistoryPanelOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleLogout = () => {
    navigate('/admin/login');
  };

  const files = [
    {
      name: 'contrato_servicos_v2.pdf',
      version: 'v2.4',
      type: 'CONTRATO',
      project: 'App de Gestão Logística',
      date: '12 Out 2023, 14:20',
      author: 'Ricardo Oliveira',
      size: '2.4 MB',
      icon: <FileText size={20} className="text-red-500" />,
      bg: 'bg-red-500/10'
    },
    {
      name: 'blueprint_cloud_infra.zip',
      version: 'v1.1',
      type: 'BLUEPRINT',
      project: 'Eco System Cloud',
      date: '10 Out 2023, 09:15',
      author: 'Ana Costa',
      size: '45.8 MB',
      icon: <FolderArchive size={20} className="text-[#19C37D]" />,
      bg: 'bg-[#19C37D]/10'
    },
    {
      name: 'especificacao_tecnica_v1.docx',
      version: 'v3.0',
      type: 'DOCUMENTAÇÃO',
      project: 'AI Data Engine',
      date: '08 Out 2023, 11:00',
      author: 'Marcos Silva',
      size: '1.1 MB',
      icon: <FileText size={20} className="text-blue-500" />,
      bg: 'bg-blue-500/10'
    }
  ];

  const versionHistory = [
    { version: 'v2.4', status: 'Atual', date: 'Hoje, 14:20', author: 'Ricardo Oliveira', desc: 'Ajuste de cláusula de rescisão técnica.' },
    { version: 'v2.3', status: '', date: '05 Out 2023, 09:15', author: 'Ana Costa', desc: 'Correção de valores de manutenção mensal.' },
    { version: 'v2.2', status: '', date: '28 Set 2023, 16:45', author: 'Ricardo Oliveira', desc: 'Upload inicial do rascunho de contrato.' }
  ];

  const stats = [
    { label: 'Espaço Utilizado', value: '12.4 GB', sub: 'de 50 GB', progress: 24.8, color: 'text-[#19C37D]' },
    { label: 'Total de Arquivos', value: '1,248', sub: 'REV 1.2', color: 'text-white' },
    { label: 'Versões Ativas', value: '4,812', sub: 'ALL_NODES', color: 'text-white' },
    { label: 'Modificações (24h)', value: '+24', sub: 'ACTIVE_LOGS', color: 'text-[#19C37D]' }
  ];

  const openHistory = (file: any) => {
    setSelectedFile(file);
    setIsHistoryPanelOpen(true);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#111111] text-[#E2E8F0] font-sans antialiased">
      {/* Version History Drawer */}
      <div className={`fixed inset-y-0 right-0 z-[110] w-[450px] bg-[#161616] border-l border-white/5 shadow-2xl transition-transform duration-500 ease-in-out transform ${isHistoryPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-white/5 bg-black/20 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter">Histórico de Versões</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{selectedFile?.name || 'Arquivo'}</p>
            </div>
            <button onClick={() => setIsHistoryPanelOpen(false)} className="p-2 text-slate-500 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
            {versionHistory.map((v, i) => (
              <div key={i} className="relative pl-10 group">
                {/* Timeline Line */}
                {i !== versionHistory.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-[-40px] w-px bg-white/5 group-hover:bg-[#19C37D]/20 transition-colors"></div>
                )}
                
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  v.status === 'Atual' ? 'bg-[#19C37D] border-[#19C37D] shadow-[0_0_15px_rgba(25,195,125,0.4)]' : 'bg-[#161616] border-white/10'
                }`}>
                  {v.status === 'Atual' ? <Check size={14} className="text-black" strokeWidth={4} /> : <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-black uppercase tracking-tight ${v.status === 'Atual' ? 'text-[#19C37D]' : 'text-slate-300'}`}>
                      Versão {v.version} {v.status && <span className="ml-2 px-2 py-0.5 bg-[#19C37D]/10 rounded text-[9px] uppercase font-black">({v.status})</span>}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">{v.date}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{v.desc}</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase">{v.author.charAt(0)}</div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">por <span className="text-slate-300">{v.author}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-black/40 border-t border-white/5">
            <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
              <Plus size={16} /> Comparar com Versão Anterior
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modal Overlay */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-8 border-b border-white/5 bg-black/20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#19C37D]/10 rounded-xl flex items-center justify-center text-[#19C37D]">
                  <FileUp size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tighter">Upload de Arquivo</h2>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Repositório Central TechLabs</p>
                </div>
              </div>
              <button onClick={() => setIsUploadModalOpen(false)} className="p-2 text-slate-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-10 space-y-8">
              <div className="group relative border-2 border-dashed border-white/10 hover:border-[#19C37D]/40 bg-white/[0.02] hover:bg-white/[0.04] rounded-3xl p-16 transition-all cursor-pointer flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Upload className="text-slate-500 group-hover:text-[#19C37D] transition-colors" size={40} />
                </div>
                <p className="text-sm font-bold text-slate-300 mb-2">
                  Arraste arquivos aqui ou <span className="text-[#19C37D] underline underline-offset-4 decoration-[#19C37D]/30">navegue</span>
                </p>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Formatos aceitos: PDF, DOCX, ZIP, PNG, JPG (Máx 50MB)</p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Projeto Relacionado</label>
                  <select className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all appearance-none cursor-pointer">
                    <option>Selecione o Projeto</option>
                    <option>App de Gestão Logística</option>
                    <option>Eco System Cloud</option>
                    <option>AI Data Engine</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tipo de Documento</label>
                  <select className="w-full bg-[#111] border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all appearance-none cursor-pointer">
                    <option>Selecione o Tipo</option>
                    <option>CONTRATO</option>
                    <option>BLUEPRINT</option>
                    <option>DOCUMENTAÇÃO TÉCNICA</option>
                    <option>RELATÓRIO</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 bg-black/40 flex items-center justify-between border-t border-white/5">
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#19C37D]" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Upload Seguro Via Dresbach_Sync</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-8 py-3 text-[11px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all"
                >
                  Cancelar
                </button>
                <button className="bg-[#19C37D] text-black px-10 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#19C37D]/10 flex items-center gap-3 active:scale-95">
                  Iniciar Upload <Check size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Sidebar Navigation */}
      <aside className="w-72 border-r border-white/5 bg-[#1A1A1A] flex flex-col shrink-0">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#19C37D] rounded flex items-center justify-center shadow-[0_0_20px_rgba(25,195,125,0.2)]">
              <Terminal className="text-black" size={20} strokeWidth={3} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">TechLabs</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          <button onClick={() => navigate('/admin/dashboard')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <LayoutDashboard size={20} /> Visão Geral
          </button>
          <button onClick={() => navigate('/admin/tickets')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Ticket size={20} className="rotate-45" /> Tickets Ativos
          </button>
          <button onClick={() => navigate('/admin/projects')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Workflow size={20} /> Projetos
          </button>
          <button onClick={() => navigate('/admin/repository')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D] font-bold text-sm transition-all shadow-lg">
            <FolderArchive size={20} /> Repositório
          </button>
          <button onClick={() => navigate('/admin/clients')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Users size={20} /> Gestão de Clientes
          </button>
          <button onClick={() => navigate('/admin/infrastructure')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
            <Network size={20} /> Infraestrutura
          </button>
          
          <div className="pt-6 mt-6 border-t border-white/5">
            <button className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold">
              <History size={20} /> Logs de Versão
            </button>
            <button onClick={() => navigate('/admin/settings')} className="w-full flex items-center gap-4 p-4 rounded-xl text-slate-500 hover:bg-white/5 hover:text-white transition-all text-sm font-semibold mt-1">
              <Settings2 size={20} /> Configurações de Sistema
            </button>
          </div>
        </nav>

        <div className="p-6 border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-4 p-3 bg-white/2 rounded-2xl">
            <div className="relative">
              <img className="w-10 h-10 rounded-xl border border-[#19C37D]/30 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Admin" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#19C37D] border-2 border-[#1A1A1A] rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-white uppercase truncate">Erik Magnus</p>
              <p className="text-[10px] text-[#19C37D] uppercase font-black tracking-widest mt-0.5">Tech Lead</p>
            </div>
            <button onClick={handleLogout} className="p-2 text-[#2A2A2A] hover:text-red-500 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Repository Terminal */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#111111]">
        <header className="h-20 border-b border-white/5 bg-[#1A1A1A]/50 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-20">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
              <span>Admin</span>
              <ChevronRight size={10} className="text-slate-700" />
              <span className="text-[#19C37D]">Repositório Global</span>
            </nav>
            <h1 className="text-lg font-black text-white uppercase tracking-tight">Controle de Versão</h1>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-[#19C37D] text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-3 shadow-lg shadow-[#19C37D]/10"
            >
              <FileUp size={18} strokeWidth={3} /> Upload Nova Versão
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {/* Repository Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/5 p-8 rounded-3xl hover:border-[#19C37D]/20 transition-all shadow-xl group">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{stat.label}</p>
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className={`text-3xl font-black tracking-tighter ${stat.color}`}>{stat.value}</h2>
                  <span className="text-[10px] font-mono font-bold text-slate-700 tracking-widest uppercase">{stat.sub}</span>
                </div>
                {stat.progress && (
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#19C37D] transition-all duration-1000" style={{ width: `${stat.progress}%` }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Files Matrix */}
          <div className="bg-[#1A1A1A] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 py-6 border-b border-white/5 flex flex-wrap gap-6 items-center justify-between bg-white/[0.01]">
              <div className="relative flex-1 max-w-2xl">
                <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700" />
                <input 
                  className="w-full pl-14 pr-6 py-4 bg-black/40 border border-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-white placeholder:text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all" 
                  placeholder="Buscar por nome do arquivo ou projeto..." 
                  type="text"
                />
              </div>
              <div className="flex gap-4">
                <select className="bg-black/40 border border-white/5 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest px-6 py-4 outline-none focus:ring-1 focus:ring-[#19C37D]/30 cursor-pointer">
                  <option>Tipo de Arquivo</option>
                  <option>CONTRATO</option>
                  <option>BLUEPRINT</option>
                  <option>RELATÓRIO</option>
                </select>
                <button className="p-4 text-slate-500 hover:text-white transition-all bg-black/40 border border-white/5 rounded-2xl">
                  <Filter size={20} />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/20 text-[9px] uppercase tracking-[0.2em] text-slate-600 font-black border-b border-white/5">
                    <th className="px-10 py-5">Nome do Arquivo</th>
                    <th className="px-10 py-5">Projeto Associado</th>
                    <th className="px-10 py-5">Última Versão</th>
                    <th className="px-10 py-5">Enviado por</th>
                    <th className="px-10 py-5 text-center">Tamanho</th>
                    <th className="px-10 py-5 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {files.map((file, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group cursor-default">
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-6">
                          <div className={`w-12 h-12 rounded-2xl ${file.bg} flex items-center justify-center shrink-0`}>
                            {file.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                               <p className="text-sm font-black text-white uppercase tracking-tight group-hover:text-[#19C37D] transition-colors">{file.name}</p>
                               <span className="px-2 py-0.5 bg-[#19C37D]/10 text-[#19C37D] rounded border border-[#19C37D]/20 text-[9px] font-black uppercase tracking-tighter">{file.version}</span>
                            </div>
                            <p className="text-[9px] text-slate-600 font-black tracking-widest mt-1 uppercase">{file.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{file.project}</span>
                      </td>
                      <td className="px-10 py-8">
                        <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">{file.date}</span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-500 uppercase">{file.author.charAt(0)}</div>
                          <span className="text-[11px] font-bold text-slate-400">{file.author}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-center">
                        <span className="text-[10px] font-mono font-black text-slate-700">{file.size}</span>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => openHistory(file)}
                            className="p-2 text-slate-500 hover:text-[#19C37D] hover:bg-[#19C37D]/10 rounded-xl transition-all" 
                            title="Ver Histórico"
                          >
                            <History size={18} />
                          </button>
                          <button className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"><Eye size={18} /></button>
                          <button className="p-2 text-slate-500 hover:text-[#19C37D] hover:bg-[#19C37D]/10 rounded-xl transition-all"><Download size={18} /></button>
                          <button className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-10 py-6 border-t border-white/5 flex items-center justify-between bg-black/20">
              <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">Mostrando {files.length} de 1,248 arquivos em cache</p>
              <div className="flex gap-4">
                <button className="p-3 border border-white/5 text-slate-700 rounded-xl hover:text-white transition-all disabled:opacity-20" disabled><ChevronLeft size={18} /></button>
                <div className="flex gap-2">
                   <button className="w-10 h-10 bg-[#19C37D] text-black rounded-xl font-black text-[11px]">1</button>
                   <button className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-500 rounded-xl font-black text-[11px] transition-all">2</button>
                   <button className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-500 rounded-xl font-black text-[11px] transition-all">3</button>
                </div>
                <button className="p-3 border border-white/5 text-slate-700 rounded-xl hover:text-white transition-all"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>

          {/* GitHub Connection Banner */}
          <div className="bg-[#0D0D0D] border border-white/5 rounded-3xl p-10 flex items-center justify-between overflow-hidden relative group">
             <div className="flex items-center gap-8 relative z-10">
                <div className="p-5 bg-white/5 rounded-2xl">
                   <FileCode size={40} className="text-slate-400 group-hover:text-[#19C37D] transition-colors" />
                </div>
                <div>
                   <h3 className="text-xl font-black text-white uppercase tracking-tighter">Sincronização Ativa</h3>
                   <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Repositório TechLabs conectado via <span className="text-[#19C37D]">Dresbach-GitHub-Sync v4.2</span></p>
                </div>
             </div>
             <div className="flex gap-4 relative z-10">
                <div className="flex items-center gap-3 px-4 py-2 bg-black border border-white/5 rounded-xl">
                   <span className="w-2 h-2 rounded-full bg-[#19C37D] shadow-[0_0_10px_#19C37D]"></span>
                   <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">Git: Up to Date</span>
                </div>
                <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">Re-Sync Manual</button>
             </div>
             {/* Decorative Background Icon */}
             <Terminal size={200} className="absolute right-[-40px] bottom-[-60px] text-white opacity-[0.02] rotate-12 pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700" />
          </div>
        </div>

        {/* Global Footer Console */}
        <footer className="h-14 bg-black border-t border-white/5 flex items-center justify-between px-10 relative overflow-hidden z-40">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                 <span className="w-1.5 h-1.5 bg-[#19C37D] rounded-full animate-pulse shadow-[0_0_8px_#19C37D]"></span>
                 <span className="text-[10px] font-mono text-slate-600 font-black uppercase tracking-widest">Auth Level: SYSTEM_ADMIN</span>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <span className="text-[10px] font-mono text-slate-800 font-black uppercase tracking-widest">Storage Cluster: AWS_S3_PRIMARY</span>
              <ShieldCheck size={14} className="text-slate-800" />
           </div>
        </footer>
      </main>
    </div>
  );
}
