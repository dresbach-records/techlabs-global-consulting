
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Terminal, LayoutDashboard, Ticket, Workflow, 
  Users, Network, Settings2, Video, Plus, 
  Calendar, Activity, History, ChevronDown, 
  FolderArchive, LogOut, MessageSquare
} from 'lucide-react';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  // Dropdown starts open as requested
  const [meetingMenuOpen, setMeetingMenuOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-72 border-r border-[#2A2A2A] bg-[#0D0D0D] flex flex-col shrink-0 hidden lg:flex h-screen sticky top-0">
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
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/dashboard') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <LayoutDashboard size={20} /> Painel Geral
        </button>

        <button 
          onClick={() => navigate('/admin/support/chat')}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/support/chat') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <MessageSquare size={20} /> Suporte Realtime
        </button>
        
        <button 
          onClick={() => navigate('/admin/tickets')}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/tickets') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Ticket size={20} className="rotate-45" /> Tickets Ativos
        </button>
        
        <button 
          onClick={() => navigate('/admin/projects')}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/projects') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Workflow size={20} /> Projetos
        </button>

        {/* Meeting Dropdown Group */}
        <div className="pt-2">
          <button 
            onClick={() => setMeetingMenuOpen(!meetingMenuOpen)}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all text-sm font-semibold ${
              location.pathname.includes('/admin/schedule') || 
              location.pathname.includes('/admin/sessions') || 
              location.pathname.includes('/admin/active-rooms') || 
              location.pathname.includes('/admin/recordings')
                ? 'text-white' 
                : 'text-slate-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <Video size={20} /> Reuniões
            </div>
            <ChevronDown size={14} className={`transition-transform ${meetingMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {meetingMenuOpen && (
            <div className="ml-6 mt-1 space-y-1 border-l border-[#2A2A2A]">
              <button 
                onClick={() => navigate('/admin/schedule')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] font-black uppercase tracking-widest pl-6 ${
                  isActive('/admin/schedule') ? 'text-[#19C37D] bg-[#19C37D]/5' : 'text-slate-500 hover:text-[#19C37D] hover:bg-[#19C37D]/5'
                }`}
              >
                <Plus size={14} /> Agendar Nova
              </button>
              <button 
                onClick={() => navigate('/admin/sessions')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] font-black uppercase tracking-widest pl-6 ${
                  isActive('/admin/sessions') ? 'text-[#19C37D] bg-[#19C37D]/5' : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <Calendar size={14} /> Minhas Sessões
              </button>
              <button 
                onClick={() => navigate('/admin/active-rooms')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] font-black uppercase tracking-widest pl-6 ${
                  isActive('/admin/active-rooms') ? 'text-[#19C37D] bg-[#19C37D]/5' : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <Activity size={14} /> Salas Ativas
              </button>
              <button 
                onClick={() => navigate('/admin/recordings')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] font-black uppercase tracking-widest pl-6 ${
                  isActive('/admin/recordings') ? 'text-[#19C37D] bg-[#19C37D]/5' : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <History size={14} /> Gravações
              </button>
            </div>
          )}
        </div>

        <button 
          onClick={() => navigate('/admin/repository')}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/repository') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <FolderArchive size={20} /> Repositório
        </button>
        
        <button 
          onClick={() => navigate('/admin/clients')}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/clients') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Users size={20} /> Clientes
        </button>
        
        <button 
          onClick={() => navigate('/admin/infrastructure')}
          className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
            isActive('/admin/infrastructure') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Network size={20} /> Infraestrutura
        </button>

        <div className="pt-6 mt-6 border-t border-[#2A2A2A]">
          <button 
            onClick={() => navigate('/admin/settings')}
            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all text-sm font-semibold ${
              isActive('/admin/settings') ? 'bg-[#19C37D]/10 text-[#19C37D] border-l-4 border-[#19C37D]' : 'text-slate-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Settings2 size={20} /> Configurações
          </button>
        </div>
      </nav>

      <div className="p-8 border-t border-[#2A2A2A] bg-black/20">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img className="w-10 h-10 rounded-full border border-[#19C37D]/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCitUU6vdrVGBjnOFBtGYYbcg5HbDxkbHS7X1Az_8SmxZK1I2F_dZ4R5HHo7C2u2OKWF10apLIPUp14TpI9ZWhh_LeM2ZdwaVzw8CnkhDSW1urUx1LW8jXls30cM5eYqPqK9kY6EKf7Y3Vgm6BjPPVAEabajSlYdf7XnVpWY714P4kX6H6of79-vJygjgVEspYm6FPQHcdOcoOt5TGWbpqCBTwqqRGUl3Kvsg7w-2odPz3_47jVIZIvkJeX65UDNN-miJEnjV3xFRpH" alt="Host" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#19C37D] border-2 border-[#0D0D0D] rounded-full"></div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-black text-white uppercase truncate">Admin Host</span>
            <span className="text-[9px] text-[#19C37D] font-bold uppercase tracking-widest mt-0.5">Online</span>
          </div>
          <button onClick={() => navigate('/admin/login')} className="ml-auto text-slate-600 hover:text-red-500 transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
