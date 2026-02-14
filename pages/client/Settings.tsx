
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mail,
  Camera,
  ToggleLeft,
  ToggleRight,
  ShieldCheck,
  Save,
  Trash2,
  Plus
} from 'lucide-react';
import ClientSidebar from '../../components/client/ClientSidebar';

export default function Settings() {
  const navigate = useNavigate();
  const [twoFactor, setTwoFactor] = useState(true);

  const teamMembers = [
    { name: 'Marcos Araújo', email: 'marcos@innovatex.com', role: 'Desenvolvedor Senior', status: 'Ativo', initials: 'MA' }
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex font-display text-slate-800">
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-10 min-w-0">
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Configurações do Portal</h1>
            <p className="text-slate-400 font-medium mt-1">Gerencie suas informações pessoais, segurança e equipe.</p>
          </div>
          <button className="bg-[#19C37D] hover:bg-[#15a86a] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-[#19C37D]/20 text-sm uppercase tracking-widest active:scale-95">
            <Save size={18} />
            Salvar Alterações
          </button>
        </header>

        <div className="max-w-5xl space-y-10">
          <section className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="px-10 py-6 border-b border-slate-50 bg-slate-50/10">
              <h2 className="font-black text-slate-900 text-lg uppercase tracking-tighter">Perfil</h2>
            </div>
            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <input className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold" type="text" defaultValue="Ricardo Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Endereço de E-mail</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold" type="email" defaultValue="ricardo.silva@innovatex.com" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="px-10 py-6 border-b border-slate-50 bg-slate-50/10">
              <h2 className="font-black text-slate-900 text-lg uppercase tracking-tighter">Segurança</h2>
            </div>
            <div className="p-10 space-y-8">
              <div className="flex items-center justify-between p-8 bg-slate-50/50 border border-slate-100 rounded-3xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#19C37D]/10 text-[#19C37D] rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-900 uppercase tracking-tight">Autenticação 2FA</p>
                  </div>
                </div>
                <button onClick={() => setTwoFactor(!twoFactor)} className={`transition-all ${twoFactor ? 'text-[#19C37D]' : 'text-slate-200'}`}>
                  {twoFactor ? <ToggleRight size={48} /> : <ToggleLeft size={48} />}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
