
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Rocket, 
  ReceiptText, 
  Headset, 
  Settings, 
  Layers,
  Video,
  CalendarDays,
  ChevronDown,
  MessageCircle
} from 'lucide-react';

export default function ClientSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [meetingMenuOpen, setMeetingMenuOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20 hidden lg:flex">
      <div className="p-8 flex items-center gap-3">
        <div className="w-9 h-9 bg-[#19C37D] rounded-lg flex items-center justify-center shadow-lg shadow-[#19C37D]/20">
          <Layers className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-2xl tracking-tight text-slate-900">TechLabs</span>
      </div>

      <nav className="mt-6 flex-1 px-4 space-y-1">
        <button 
          onClick={() => navigate('/client/dashboard')}
          className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
            isActive('/client/dashboard') 
              ? 'bg-[#19C37D]/10 text-[#19C37D] border-r-4 border-[#19C37D] font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
          }`}
        >
          <LayoutDashboard className="mr-3 w-5 h-5" />
          Dashboard
        </button>

        <button 
          onClick={() => navigate('/client/support/chat')}
          className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
            isActive('/client/support/chat') 
              ? 'bg-[#19C37D]/10 text-[#19C37D] border-r-4 border-[#19C37D] font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
          }`}
        >
          <MessageCircle className="mr-3 w-5 h-5" />
          Chat Direto
        </button>

        <button 
          onClick={() => navigate('/client/projects')}
          className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
            isActive('/client/projects') 
              ? 'bg-[#19C37D]/10 text-[#19C37D] border-r-4 border-[#19C37D] font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
          }`}
        >
          <Rocket className="mr-3 w-5 h-5" />
          Meus Projetos
        </button>

        <button 
          onClick={() => navigate('/client/invoices')}
          className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
            isActive('/client/invoices') 
              ? 'bg-[#19C37D]/10 text-[#19C37D] border-r-4 border-[#19C37D] font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
          }`}
        >
          <ReceiptText className="mr-3 w-5 h-5" />
          Faturas
        </button>

        <div className="pt-2">
          <button 
            onClick={() => setMeetingMenuOpen(!meetingMenuOpen)}
            className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
              isActive('/client/meeting') || isActive('/client/schedule-call')
                ? 'text-[#19C37D]'
                : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
            }`}
          >
            <div className="flex items-center">
              <Video className="mr-3 w-5 h-5" />
              Reuniões
            </div>
            <ChevronDown size={14} className={`transition-transform ${meetingMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {meetingMenuOpen && (
            <div className="ml-6 mt-1 space-y-1 border-l border-slate-100">
              <button 
                onClick={() => navigate('/client/meeting')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] font-black uppercase tracking-widest pl-6 ${
                  isActive('/client/meeting') ? 'text-[#19C37D] bg-[#19C37D]/5' : 'text-slate-500 hover:text-[#19C37D]'
                }`}
              >
                Sala de Reunião
              </button>
              <button 
                onClick={() => navigate('/client/schedule-call')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] font-black uppercase tracking-widest pl-6 ${
                  isActive('/client/schedule-call') ? 'text-[#19C37D] bg-[#19C37D]/5' : 'text-slate-500 hover:text-[#19C37D]'
                }`}
              >
                Agendar Call
              </button>
            </div>
          )}
        </div>

        <button 
          onClick={() => navigate('/client/support')}
          className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
            location.pathname.startsWith('/client/support') && !isActive('/client/support/chat')
              ? 'bg-[#19C37D]/10 text-[#19C37D] border-r-4 border-[#19C37D] font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
          }`}
        >
          <Headset className="mr-3 w-5 h-5" />
          Suporte Técnico
        </button>

        <button 
          onClick={() => navigate('/client/settings')}
          className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${
            isActive('/client/settings') 
              ? 'bg-[#19C37D]/10 text-[#19C37D] border-r-4 border-[#19C37D] font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#19C37D]'
          }`}
        >
          <Settings className="mr-3 w-5 h-5" />
          Configurações
        </button>
      </nav>

      <div className="p-8 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md" 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
              alt="User" 
            />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#19C37D] border-2 border-white rounded-full"></div>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">Ricardo Silva</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate">CTO - InnovateX</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
