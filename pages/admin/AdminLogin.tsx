
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Key, BadgeCheck, LogIn, ShieldAlert } from 'lucide-react';

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [showMaintenancePopup, setShowMaintenancePopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMaintenancePopup(true);
  };

  const bootLogs = [
    "INIT_BOOT_SEQUENCE... OK",
    "LOADING_KERNEL_MODULES... OK",
    "ESTABLISHING_ENCRYPTED_TUNNEL... OK",
    "FIREWALL_ACTIVE... OK",
    "MEM_CHECK... 0x000F23... OK",
    "ADMIN_SUBSYSTEM_MOUNTED... OK",
    "ENCRYPTION_LAYER_AES256... ACTIVE"
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-slate-300 font-mono flex items-center justify-center p-4 relative overflow-hidden antialiased">
      {showMaintenancePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2F2F2F] border border-[#19C37D]/20 p-8 rounded-xl shadow-2xl text-center">
            <h2 className="text-lg font-bold text-white mb-4">Sistema em Manutenção</h2>
            <p className="text-slate-400 mb-6">O sistema está temporariamente indisponível. Por favor, tente novamente mais tarde.</p>
            <button
              onClick={() => setShowMaintenancePopup(false)}
              className="bg-[#19C37D] hover:bg-[#15a86a] text-[#111111] font-bold py-2 px-4 rounded-lg text-sm uppercase tracking-widest"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Matrix-like Background Logs */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden select-none flex flex-wrap gap-x-8 gap-y-4 p-4 text-[10px] leading-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <p key={i}>{bootLogs[i % bootLogs.length]}</p>
        ))}
      </div>

      <div className="w-full max-w-[420px] relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2F2F2F] border border-[#19C37D]/20 rounded-lg mb-4 shadow-[0_0_20px_rgba(25,195,125,0.05)]">
            <Terminal size={32} className="text-[#19C37D]" />
          </div>
          <h1 className="text-xl font-bold tracking-tighter text-white uppercase italic">TechLabs</h1>
          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.2em]">Dresbach Group Canada • Admin Terminal</p>
        </div>

        <div className="bg-[#2F2F2F] border border-[#19C37D]/20 p-8 rounded-xl shadow-2xl relative overflow-hidden group hover:border-[#19C37D]/40 transition-all duration-500">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#19C37D_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <h2 className="text-sm font-semibold text-white tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse"></span>
                Acesso Restrito
              </h2>
              <span className="text-[10px] text-slate-500 font-mono">ID: SEC-882-SYS</span>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Admin ID / Email</label>
                <div className="relative group">
                  <BadgeCheck size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#19C37D] transition-colors" />
                  <input 
                    required
                    className="w-full bg-[#111111]/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/50 transition-all font-mono" 
                    placeholder="admin@techlabs.ca" 
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Security Token</label>
                <div className="relative group">
                  <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#19C37D] transition-colors" />
                  <input 
                    required
                    className="w-full bg-[#111111]/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#19C37D]/50 transition-all font-mono" 
                    placeholder="••••••••••••••••" 
                    type="password"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#19C37D] hover:bg-[#15a86a] text-[#111111] font-bold py-4 rounded-lg text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(25,195,125,0.2)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-[#111111]/30 border-t-[#111111] rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Acessar Terminal Admin</span>
                    <LogIn size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-between text-[10px] text-slate-500 font-medium">
              <button className="hover:text-[#19C37D] transition-colors uppercase tracking-wider">Recuperar Credenciais</button>
              <span className="h-1 w-1 rounded-full bg-slate-700"></span>
              <button className="hover:text-[#19C37D] transition-colors uppercase tracking-wider">Suporte Nível 3</button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-white/5">
          <ShieldAlert size={18} className="text-amber-500/70 shrink-0" />
          <p className="text-[9px] text-slate-500 leading-relaxed uppercase tracking-tight font-medium">
            Aviso: Este terminal monitora todas as sessões via IP corporativo. O acesso não autorizado a este sistema é estritamente proibido sob as leis de segurança cibernética do Canadá e protocolos Dresbach.
          </p>
        </div>
      </div>
    </div>
  );
}
