
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Video,
  Mic,
  MicOff,
  VideoOff,
  Settings as SettingsIcon,
  Terminal,
  User,
  Lock,
  HelpCircle,
  Bug
} from 'lucide-react';
import ClientSidebar from '@/components/client/ClientSidebar';

export default function Meeting() {
  const navigate = useNavigate();
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [isMeetingTime, setIsMeetingTime] = useState(true);

  const handleJoin = () => {
    navigate('/client/meeting/active');
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex font-display text-slate-800">
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-10 min-w-0 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-500">
          {/* Video Preview Section */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative aspect-video bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group">
              {videoOn ? (
                <img 
                  alt="Camera Preview" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[1px] grayscale-[30%]" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                  <VideoOff size={64} className="text-slate-700" />
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              
              <div className="relative z-10 flex flex-col h-full items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 shadow-xl">
                  <User size={48} className="text-white" />
                </div>
                <span className="text-white font-black text-xs uppercase tracking-[0.2em] bg-black/30 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  {videoOn ? 'Sua câmera está ligada' : 'Câmera Desligada'}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></div>
                <span className="text-white text-[10px] font-black uppercase tracking-widest">Ricardo Silva (Você)</span>
              </div>
            </div>

            {/* Media Controls */}
            <div className="flex justify-center items-center gap-6">
              <button 
                onClick={() => setMicOn(!micOn)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-xl active:scale-95 ${
                  micOn ? 'bg-[#19C37D] text-white shadow-[#19C37D]/20' : 'bg-red-500 text-white shadow-red-500/20'
                }`}
              >
                {micOn ? <Mic size={28} /> : <MicOff size={28} />}
              </button>
              <button 
                onClick={() => setVideoOn(!videoOn)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-xl active:scale-95 ${
                  videoOn ? 'bg-[#19C37D] text-white shadow-[#19C37D]/20' : 'bg-red-500 text-white shadow-red-500/20'
                }`}
              >
                {videoOn ? <Video size={28} /> : <VideoOff size={28} />}
              </button>
              <button className="w-16 h-16 rounded-full flex items-center justify-center bg-white text-slate-400 border border-slate-100 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm active:scale-95">
                <SettingsIcon size={28} />
              </button>
            </div>
          </div>

          {/* Meeting Info Section */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-xl space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#19C37D] rounded-lg flex items-center justify-center">
                    <Terminal size={16} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black text-[#19C37D] tracking-[0.3em] uppercase">TechLabs Meeting</span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-4">Revisão de Arquitetura: Módulo Documentos</h1>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                   Organizado por Tech Lead <span className="opacity-30">•</span> 14:00 - 15:30
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-4">Participantes já na sala</span>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="User" />
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="User" />
                      <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] font-black text-slate-500">+4</span>
                      </div>
                    </div>
                    <span className="text-xs font-black uppercase tracking-tight text-slate-600">Juliana e outros 5</span>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/50 rounded-2xl border border-dashed border-blue-100">
                  <div className="flex items-center gap-3 text-blue-600 mb-2">
                    <Lock size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Sala Protegida</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">Sua entrada será autorizada manualmente pelo organizador da reunião em instantes.</p>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleJoin}
                  className="w-full bg-[#19C37D] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#19C37D]/30 hover:brightness-105 active:scale-[0.98] transition-all"
                >
                  {isMeetingTime ? 'Iniciar Reunião' : 'Pedir para Entrar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
