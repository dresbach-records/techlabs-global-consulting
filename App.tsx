
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SecureLayout from './components/layout/SecureLayout'; // Import SecureLayout
import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Ecosystem from './pages/Ecosystem';
import Clients from './pages/Clients';
import About from './pages/About';
import RequestBriefing from './pages/RequestBriefing';
import DresbachGroup from './pages/DresbachGroup';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import PressRoom from './pages/PressRoom';
import Governance from './pages/Governance';
import DataPrivacy from './pages/DataPrivacy';
import EthicsPolicy from './pages/EthicsPolicy';
import Compliance from './pages/Compliance';
import Security from './pages/Security';
import StartConsultation from './pages/StartConsultation';
import SystemsDesign from './pages/services/SystemsDesign';
import CloudStrategy from './pages/services/CloudStrategy';
import AIScaling from './pages/services/AIScaling';
import TechAudit from './pages/services/TechAudit';
import Dashboard from './pages/client/Dashboard';
import Projects from './pages/client/Projects';
import Invoices from './pages/client/Invoices';
import Support from './pages/client/Support';
import Settings from './pages/client/Settings';
import ScheduleCall from './pages/client/ScheduleCall';
import TicketView from './pages/client/TicketView';
import Meeting from './pages/client/Meeting';
import ActiveMeeting from './pages/client/ActiveMeeting';
import ClientSupportChat from './pages/client/ClientSupportChat';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';
import AdminTickets from './pages/admin/AdminTickets';
import AdminClients from './pages/admin/AdminClients';
import AdminInfrastructure from './pages/admin/AdminInfrastructure';
import AdminNewClient from './pages/admin/AdminNewClient';
import AdminSettings from './pages/admin/AdminSettings';
import AdminNewProject from './pages/admin/AdminNewProject';
import AdminRepository from './pages/admin/AdminRepository';
import AdminApprovals from './pages/admin/AdminApprovals';
import AdminMeetingSetup from './pages/admin/AdminMeetingSetup';
import AdminActiveMeeting from './pages/admin/AdminActiveMeeting';
import AdminScheduleMeeting from './pages/admin/AdminScheduleMeeting';
import AdminSessions from './pages/admin/AdminSessions';
import AdminRecordings from './pages/admin/AdminRecordings';
import AdminActiveRooms from './pages/admin/AdminActiveRooms';
import AdminSupportChat from './pages/admin/AdminSupportChat';
import JoinMeeting from './pages/JoinMeeting';
import { MessageSquare, Cpu, X, Send, ShieldAlert, Home as HomeIcon, Headset } from 'lucide-react';
import { getBriefingAdvice } from './services/geminiService';
import { chatService } from './services/chatService';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center p-6">
    <ShieldAlert size={64} className="text-[#19C37D] mb-8" />
    <h1 className="text-4xl font-black uppercase mb-4">Node Not Found</h1>
    <p className="text-[#6B6B6B] mb-8 max-w-md">O caminho solicitado não existe ou o acesso foi negado pelo protocolo de segurança.</p>
    <Link to="/" className="px-8 py-4 bg-[#19C37D] text-black font-black uppercase text-xs flex items-center gap-3">
      <HomeIcon size={16} /> Return to Home
    </Link>
  </div>
);

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'ai' | 'admin', text: string}[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLiveAgent, setIsLiveAgent] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const isAuthPage = location.pathname === '/start-consultation' || location.pathname === '/join-meeting';
  const isAdminPage = location.pathname.startsWith('/admin');
  const isClientDashboard = location.pathname.startsWith('/client');
  const isActiveMeeting = location.pathname === '/client/meeting/active' || location.pathname === '/admin/meeting/active';
  const showFullLayout = !isAuthPage && !isClientDashboard && !isAdminPage && !isActiveMeeting;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  // Sincronizar com chat service se for live agent
  useEffect(() => {
    if (isLiveAgent) {
      const unsubscribe = chatService.subscribe((sessions) => {
        const session = sessions['PUBLIC-WEB'];
        if (session) {
          const formattedMessages = session.messages.map(m => ({
            role: (m.isAdmin ? 'admin' : 'user') as 'admin' | 'user',
            text: m.text
          }));
          setChatMessages(formattedMessages as any);
        }
      });
      return unsubscribe;
    }
  }, [isLiveAgent]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const currentInput = userInput;
    
    if (isLiveAgent) {
      chatService.sendMessage('PUBLIC-WEB', currentInput, 'Visitante Web', false);
      setUserInput('');
      return;
    }

    setChatMessages(prev => [...prev, { role: 'user', text: currentInput }]);
    setUserInput('');
    setIsTyping(true);
    const aiResponse = await getBriefingAdvice(currentInput);
    setIsTyping(false);
    setChatMessages(prev => [...prev, { role: 'ai', text: aiResponse || '' }]);
  };

  const connectToAgent = () => {
    setIsLiveAgent(true);
    setChatMessages(prev => [...prev, { role: 'ai', text: 'Conectando você a um engenheiro de suporte TechLabs...' }]);
    chatService.sendMessage('PUBLIC-WEB', 'Cliente solicitou suporte humano no site público.', 'Sistema', true);
  };

  return (
    <SecureLayout>
      <div className="relative min-h-screen bg-black text-[#EDEDED] antialiased">
        <div className="fixed inset-0 grid-pattern opacity-[0.05] pointer-events-none z-0"></div>
        
        {showFullLayout && <Header />}
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/systems-design" element={<SystemsDesign />} />
            <Route path="/services/cloud-strategy" element={<CloudStrategy />} />
            <Route path="/services/ai-scaling" element={<AIScaling />} />
            <Route path="/services/tech-audit" element={<TechAudit />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/request-briefing" element={<RequestBriefing />} />
            <Route path="/dresbach-group" element={<DresbachGroup />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press-room" element={<PressRoom />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/ethics-policy" element={<EthicsPolicy />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/security" element={<Security />} />
            <Route path="/start-consultation" element={<StartConsultation />} />
            <Route path="/join-meeting" element={<JoinMeeting />} />
            
            <Route path="/client/dashboard" element={<Dashboard />} />
            <Route path="/client/projects" element={<Projects />} />
            <Route path="/client/invoices" element={<Invoices />} />
            <Route path="/client/support" element={<Support />} />
            <Route path="/client/support/chat" element={<ClientSupportChat />} />
            <Route path="/client/support/ticket/:id" element={<TicketView />} />
            <Route path="/client/settings" element={<Settings />} />
            <Route path="/client/schedule-call" element={<ScheduleCall />} />
            <Route path="/client/meeting" element={<Meeting />} />
            <Route path="/client/meeting/active" element={<ActiveMeeting />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/projects/new" element={<AdminNewProject />} />
            <Route path="/admin/tickets" element={<AdminTickets />} />
            <Route path="/admin/clients" element={<AdminClients />} />
            <Route path="/admin/clients/new" element={<AdminNewClient />} />
            <Route path="/admin/infrastructure" element={<AdminInfrastructure />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/repository" element={<AdminRepository />} />
            <Route path="/admin/approvals" element={<AdminApprovals />} />
            <Route path="/admin/meeting" element={<AdminMeetingSetup />} />
            <Route path="/admin/meeting/active" element={<AdminActiveMeeting />} />
            <Route path="/admin/schedule" element={<AdminScheduleMeeting />} />
            <Route path="/admin/sessions" element={<AdminSessions />} />
            <Route path="/admin/recordings" element={<AdminRecordings />} />
            <Route path="/admin/active-rooms" element={<AdminActiveRooms />} />
            <Route path="/admin/support/chat" element={<AdminSupportChat />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {showFullLayout && <Footer />}

        {showFullLayout && !chatOpen && (
          <button 
            onClick={() => setChatOpen(true)}
            className="fixed bottom-10 right-10 z-[60] w-20 h-20 bg-[#19C37D] text-black rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-pulse"
          >
            <MessageSquare size={32} />
          </button>
        )}

        {showFullLayout && chatOpen && (
          <div className="fixed bottom-0 right-0 z-[100] w-full sm:w-[450px] h-[80vh] sm:h-[650px] sm:bottom-10 sm:right-10 flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="bg-[#0A0A0A] border-t sm:border border-[#2F2F2F] flex flex-col h-full overflow-hidden sm:rounded-lg">
              <div className="p-6 border-b border-[#2F2F2F] flex items-center justify-between bg-black">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#19C37D] flex items-center justify-center rounded-sm">
                    <Cpu size={18} className="text-black" />
                  </div>
                  <div>
                     <h3 className="text-xs font-black uppercase tracking-[0.2em]">{isLiveAgent ? 'Suporte Engenharia' : 'Solution Architect AI'}</h3>
                     {isLiveAgent && <span className="text-[8px] font-black text-[#19C37D] uppercase tracking-widest">Atendimento Humano</span>}
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)} className="p-2 text-[#6B6B6B] hover:text-[#19C37D] transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-black/30 custom-scrollbar">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-sm text-xs ${
                      msg.role === 'user' ? 'bg-[#19C37D] text-black font-black uppercase' : 
                      msg.role === 'admin' ? 'bg-blue-600 text-white font-black' : 'bg-[#111111] border border-[#2F2F2F] text-[#EDEDED]'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {!isLiveAgent && chatMessages.length > 2 && (
                  <div className="flex justify-center pt-4">
                     <button 
                      onClick={connectToAgent}
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#19C37D] hover:border-[#19C37D]/30 transition-all"
                     >
                       <Headset size={14} /> Falar com Consultor Humano
                     </button>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-6 bg-black border-t border-[#2F2F2F]">
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    placeholder={isLiveAgent ? "Digite sua mensagem para o engenheiro..." : "Descreva seu desafio técnico..."} 
                    className="flex-grow bg-[#111111] border border-[#2F2F2F] rounded-sm px-4 py-3 text-xs focus:outline-none focus:border-[#19C37D] transition-colors" 
                  />
                  <button type="submit" className="bg-[#19C37D] text-black px-4 rounded-sm hover:brightness-110">
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </SecureLayout>
  );
}
