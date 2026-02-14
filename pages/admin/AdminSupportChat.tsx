
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Settings, MessageSquare, Send, Paperclip, 
  Code, Image as ImageIcon, MoreVertical, ShieldCheck,
  ChevronRight, ArrowRight, User, History as HistoryIcon
} from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { chatService, ChatSession } from '../../services/chatService';

export default function AdminSupportChat() {
  const [sessions, setSessions] = useState<Record<string, ChatSession>>({});
  const [activeSessionId, setActiveSessionId] = useState('NB-FIN');
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = chatService.subscribe((newSessions) => {
      setSessions({...newSessions});
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [sessions, activeSessionId]);

  const activeSession = sessions[activeSessionId];

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    chatService.sendMessage(activeSessionId, inputText, 'Admin Marcus', true);
    setInputText('');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A] text-[#EDEDED] font-sans antialiased">
      <AdminSidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[#1A1A1A] bg-[#0D0D0D] flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#19C37D]/10 rounded flex items-center justify-center text-[#19C37D]">
              <MessageSquare size={18} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-sm font-black uppercase tracking-tight text-white">Engenharia de Atendimento</h1>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Real-time Operations</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-1.5 bg-black/40 border border-[#19C37D]/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></span>
              <span className="text-[10px] font-mono text-[#19C37D] uppercase font-bold">Engineer: Marcus V.</span>
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <aside className="w-80 border-r border-[#1A1A1A] bg-[#0D0D0D] flex flex-col shrink-0 overflow-hidden">
            <div className="p-5 border-b border-[#1A1A1A]">
              <div className="relative">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700" />
                <input 
                  type="text" 
                  placeholder="Filtrar chamados..."
                  className="w-full bg-black/40 border border-[#1A1A1A] rounded-xl py-2.5 pl-10 pr-4 text-[10px] font-bold focus:outline-none focus:ring-1 focus:ring-[#19C37D]/30 transition-all text-white placeholder:text-slate-800 uppercase tracking-widest"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {Object.values(sessions).map((session) => (
                <button 
                  key={session.id}
                  onClick={() => setActiveSessionId(session.id)}
                  className={`w-full p-6 text-left border-b border-[#1A1A1A] transition-all relative ${
                    activeSessionId === session.id ? 'bg-white/[0.03] border-l-4 border-l-[#19C37D]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-black uppercase tracking-tight text-white truncate max-w-[120px]">{session.company}</span>
                    <span className="text-[9px] font-mono text-slate-700 font-bold">{session.lastActivity}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium truncate mb-2">
                    {session.messages[session.messages.length - 1]?.text || 'Sem mensagens'}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D] shadow-[0_0_5px_#19C37D]"></span>
                    <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">ACTIVE</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="flex-1 flex flex-col bg-[#080808] overflow-hidden">
            <div className="h-20 px-8 border-b border-[#1A1A1A] bg-[#0D0D0D] flex items-center justify-between shrink-0">
              {activeSession ? (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-slate-400 uppercase">
                    {activeSession.company.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-white uppercase tracking-tight">{activeSession.company}</h2>
                    <p className="text-[9px] text-[#19C37D] font-black uppercase tracking-widest flex items-center gap-1.5">
                      Session ID: <span className="text-slate-400">{activeSession.id}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <span className="text-slate-700 font-black uppercase text-xs">Selecione um atendimento</span>
              )}
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 border border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all rounded-lg bg-black/20">Transferir</button>
                <button className="px-5 py-2 border border-red-900/30 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500 hover:text-white transition-all rounded-lg bg-red-500/5">Encerrar</button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar flex flex-col">
              <div className="flex justify-center mb-4">
                <span className="px-4 py-1.5 bg-black/40 border border-[#1A1A1A] rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 italic">Chat Iniciado às {activeSession?.messages[0]?.time}</span>
              </div>

              {activeSession?.messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.isAdmin ? 'items-end' : 'items-start'} max-w-2xl ${msg.isAdmin ? 'ml-auto' : ''}`}>
                  <div className={`p-6 rounded-2xl text-sm leading-relaxed ${
                    msg.isAdmin 
                      ? 'bg-black/40 border border-[#19C37D]/30 text-slate-200' 
                      : 'bg-[#1A1A1A] border border-[#2A2A2A] text-slate-300'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="mt-2 text-[9px] font-mono text-slate-600 font-bold uppercase tracking-widest">
                    {msg.sender} • {msg.time}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-8 border-t border-[#1A1A1A] bg-[#0D0D0D]">
              <div className="max-w-5xl mx-auto bg-[#080808] border border-[#1A1A1A] rounded-2xl overflow-hidden focus-within:border-[#19C37D]/40 transition-all shadow-2xl">
                <textarea 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  className="w-full bg-transparent border-none p-6 text-sm text-slate-300 placeholder:text-slate-800 resize-none outline-none min-h-[100px] custom-scrollbar font-medium"
                  placeholder="Escreva sua resposta técnica para o cliente..."
                ></textarea>
                <div className="px-6 py-4 border-t border-[#1A1A1A] flex items-center justify-between bg-black/20">
                  <div className="flex items-center gap-6 text-slate-600">
                    <button type="button" className="hover:text-[#19C37D] transition-colors"><Paperclip size={20} /></button>
                    <button type="button" className="hover:text-[#19C37D] transition-colors"><Code size={20} /></button>
                    <button type="button" className="hover:text-[#19C37D] transition-colors"><ImageIcon size={20} /></button>
                  </div>
                  <button type="submit" className="bg-[#19C37D] text-black px-8 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 shadow-lg shadow-[#19C37D]/20">
                    Enviar Resposta <Send size={16} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </form>
          </section>

          <aside className="w-80 border-l border-[#1A1A1A] bg-[#0D0D0D] flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            <div className="p-8 space-y-10">
              <section>
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Perfil do Cliente</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[9px] font-black text-slate-700 uppercase mb-1">Company</p>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">{activeSession?.company}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-700 uppercase mb-1">SLA Tier</p>
                    <p className="text-xs font-black text-[#19C37D] uppercase tracking-tighter flex items-center gap-2">
                      Enterprise Gold <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D]"></div>
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-700 uppercase mb-4">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'PostgreSQL', 'AWS'].map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-slate-400 uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Metadados</h3>
                <div className="bg-[#111111] rounded-2xl p-6 space-y-4 border border-white/5">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase">
                    <span className="text-slate-600">ID</span>
                    <span className="text-slate-300">#TK-88210</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase">
                    <span className="text-slate-600">Status</span>
                    <span className="text-blue-500">EM ATENDIMENTO</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-95 border border-white/5 shadow-xl">
                  <HistoryIcon size={16} /> Ver Histórico Completo
                </button>
              </section>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
