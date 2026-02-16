
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  MoreVertical,
  Plus,
  Circle,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Headset
} from 'lucide-react';
import ClientSidebar from '@/components/client/ClientSidebar';

export default function Projects() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Migration to Azure',
      status: 'Em Progresso',
      progress: 68,
      icon: <Cloud className="w-6 h-6" />,
      steps: [
        'Configuração de instâncias reserva em US-East-1',
        'Migração de Banco de Dados Relacional (PostgreSQL)',
        'Testes de conectividade VPN Site-to-Site'
      ]
    },
    {
      id: 2,
      title: 'AI Integration (LLM Implementation)',
      status: 'Em Progresso',
      progress: 32,
      icon: <Cpu className="w-6 h-6" />,
      steps: [
        'Fine-tuning de modelos proprietários com RAG',
        'Integração de API com sistema de CRM interno'
      ]
    },
    {
      id: 3,
      title: 'Zero Trust Security Audit',
      status: 'Concluído',
      progress: 100,
      icon: <ShieldCheck className="w-6 h-6" />,
      completionNote: 'Projeto finalizado com sucesso em 15/09/2023. Relatório final disponível na seção de Documentos.'
    },
    {
      id: 4,
      title: 'Relational Data Warehouse Optimization',
      status: 'Concluído',
      progress: 100,
      icon: <Database className="w-6 h-6" />,
      completionNote: 'Melhoria de 45% na velocidade de queries analíticas alcançada.'
    }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'todos') return true;
    if (activeTab === 'progresso') return p.status === 'Em Progresso';
    if (activeTab === 'concluidos') return p.status === 'Concluído';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex font-display text-slate-800">
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-10 min-w-0">
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Meus Projetos</h1>
            <p className="text-slate-400 font-medium mt-1">Gerencie e acompanhe a evolução das suas iniciativas tecnológicas.</p>
          </div>
          <button className="bg-[#19C37D] hover:bg-[#15a86a] text-white px-7 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-[#19C37D]/20 text-sm">
            <Plus size={20} />
            Solicitar Novo Projeto
          </button>
        </header>

        {/* Filters */}
        <div className="flex items-center gap-8 border-b border-slate-200 mb-10 overflow-x-auto whitespace-nowrap">
          <button 
            onClick={() => setActiveTab('todos')}
            className={`pb-4 text-sm font-bold tracking-tight transition-all border-b-2 ${
              activeTab === 'todos' ? 'text-[#19C37D] border-[#19C37D]' : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Todos os Projetos
          </button>
          <button 
            onClick={() => setActiveTab('progresso')}
            className={`pb-4 text-sm font-bold tracking-tight transition-all border-b-2 ${
              activeTab === 'progresso' ? 'text-[#19C37D] border-[#19C37D]' : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Em Progresso (2)
          </button>
          <button 
            onClick={() => setActiveTab('concluidos')}
            className={`pb-4 text-sm font-bold tracking-tight transition-all border-b-2 ${
              activeTab === 'concluidos' ? 'text-[#19C37D] border-[#19C37D]' : 'text-slate-400 border-transparent hover:text-slate-600'
            }`}
          >
            Concluídos (4)
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    project.status === 'Concluído' ? 'bg-slate-100 text-slate-500' : 'bg-[#19C37D]/10 text-[#19C37D]'
                  }`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 leading-tight">{project.title}</h3>
                    <span className={`inline-block mt-1 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                      project.status === 'Concluído' ? 'bg-slate-100 text-slate-500' : 'bg-[#19C37D]/10 text-[#19C37D]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <button className="text-slate-200 hover:text-slate-400 transition-colors"><MoreVertical size={20} /></button>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Progresso Geral</span>
                  <span className={project.status === 'Concluído' ? 'text-slate-400' : 'text-[#19C37D]'}>{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-50 h-2.5 rounded-full overflow-hidden border border-slate-100">
                  <div className={`h-full rounded-full transition-all duration-1000 ${
                    project.status === 'Concluído' ? 'bg-slate-200' : 'bg-[#19C37D]'
                  }`} style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  {project.status === 'Concluído' ? 'Conclusão' : 'Próximos Passos'}
                </h4>
                
                {project.steps ? (
                  <ul className="space-y-3">
                    {project.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/step">
                        <div className="mt-1 w-4 h-4 rounded-full border border-[#19C37D] flex items-center justify-center shrink-0">
                          <Circle size={6} className="text-[#19C37D] opacity-0 group-hover/step:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-slate-500 font-medium leading-tight group-hover/step:text-slate-900 transition-colors">{step}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500 italic font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {project.completionNote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
