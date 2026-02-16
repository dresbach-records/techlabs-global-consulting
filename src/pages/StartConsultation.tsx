
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AtSign, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  User,
  ShieldCheck,
  Send,
  ArrowLeft,
  RotateCcw
} from 'lucide-react';
import { createCoraCheckoutSession } from '@/services/coraService';

type AuthMode = 'login' | 'register' | 'recover';

export default function StartConsultation() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMaintenancePopup, setShowMaintenancePopup] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleBackToLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setMode('login');
  };

  const handleAuthAction = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMaintenancePopup(true);
  };

  const handleCheckout = async () => {
    const { checkoutUrl } = await createCoraCheckoutSession();
    window.location.href = checkoutUrl;
  };

  if (checkoutUrl) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f6f8f7] flex flex-col font-display antialiased relative overflow-hidden">
      {showMaintenancePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-md w-full text-center border">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sistema em Manutenção</h2>
            <p className="text-slate-500 mb-8">O sistema está temporariamente indisponível para novos cadastros ou logins. Por favor, tente novamente mais tarde.</p>
            <button
              onClick={() => setShowMaintenancePopup(false)}
              className="bg-[#19c27c] hover:bg-[#15a86a] text-white font-bold py-3 px-8 rounded-lg text-sm uppercase tracking-widest"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#19c27c]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#19c27c]/5 rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        ></div>
        {/* Progress Bar Top */}
        <div className="fixed top-0 left-0 w-full h-1 bg-[#19c27c]/20 z-50">
          <div className="h-full bg-[#19c27c] w-1/3"></div>
        </div>
      </div>

      {/* Header / Branding */}
      <header className="relative z-10 w-full pt-16 pb-8 flex justify-center">
        <div className="flex flex-col items-center">
        <img src="/Logo_Dresbach.png" alt="DRESBACH HOSTING" className="h-12 w-auto mb-4" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">
            by Dresbach Group Canada
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-200/50">
          
          {mode !== 'recover' && (
            <div className="flex p-1 bg-slate-100 rounded-xl mb-10 transition-all">
              <button 
                onClick={() => setMode('login')}
                disabled={isLoading}
                className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  mode === 'login' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Entrar
              </button>
              <button 
                onClick={() => setMode('register')}
                disabled={isLoading}
                className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  mode === 'register' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Cadastrar
              </button>
            </div>
          )}

          {mode === 'login' && (
            <form className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500" onSubmit={handleAuthAction}>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 ml-1">E-mail Corporativo</label>
                <div className="relative group">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#19c27c] transition-colors" />
                  <input 
                    required
                    type="email" 
                    placeholder="nome@empresa.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="block text-sm font-semibold text-slate-700">Senha</label>
                  <button 
                    type="button" 
                    onClick={() => setMode('recover')}
                    className="text-xs font-medium text-slate-400 hover:text-[#19c27c] transition-colors"
                  >
                    Esqueci minha senha
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#19c27c] transition-colors" />
                  <input 
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-[#19c27c] hover:bg-[#15a86a] text-white font-bold rounded-xl shadow-lg shadow-[#19c27c]/20 transition-all flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Acessar Painel
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-white text-slate-400 font-medium tracking-wide">Acesso seguro SSL</span>
                </div>
              </div>
            </form>
          )}

          {mode === 'register' && (
            <form className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500" onSubmit={handleAuthAction}>
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700 ml-1">Nome Completo</label>
                <div className="relative group">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#19c27c] transition-colors" />
                   <input 
                    required
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700 ml-1">E-mail Corporativo</label>
                <div className="relative group">
                   <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#19c27c] transition-colors" />
                   <input 
                    required
                    type="email" 
                    placeholder="nome@empresa.com"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">Senha</label>
                  <input 
                    required
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">Confirmar</label>
                  <input 
                    required
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="relative flex items-center h-5">
                  <input 
                    id="terms" 
                    required
                    type="checkbox" 
                    className="w-4 h-4 text-[#19c27c] border-slate-300 rounded focus:ring-[#19c27c]" 
                  />
                </div>
                <label htmlFor="terms" className="text-[11px] text-slate-500 leading-tight">
                  Concordo com os <span className="text-[#19c27c] cursor-pointer hover:underline font-semibold">Termos de Uso</span> e a <span className="text-[#19c27c] cursor-pointer hover:underline font-semibold">Política de Privacidade</span> do Dresbach Group.
                </label>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-[#19c27c] hover:bg-[#15a86a] text-white font-bold rounded-xl shadow-lg shadow-[#19c27c]/20 transition-all mt-4 active:scale-[0.98] disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                ) : "Criar Conta"}
              </button>
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all mt-4 active:scale-[0.98] disabled:opacity-70"
              >
                Finalizar com Cora
            </button>
            </form>
          )}

          {mode === 'recover' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#19c27c]/10 rounded-full mb-6 text-[#19c27c]">
                  <RotateCcw size={32} />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-3">Recuperar Acesso</h1>
                <p className="text-slate-500 text-sm leading-relaxed px-2">
                  Informe seu e-mail corporativo abaixo. Enviaremos um link de recuperação para que você possa redefinir sua senha com segurança.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleAuthAction}>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">E-mail Corporativo</label>
                  <div className="relative group">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 group-focus-within:text-[#19c27c] transition-colors" />
                    <input 
                      required
                      type="email" 
                      placeholder="exemplo@empresa.com.br"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#19c27c]/20 focus:border-[#19c27c] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 outline-none text-sm"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#19c27c] hover:bg-[#15a86a] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#19c27c]/20 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  <span>Enviar Link de Recuperação</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 text-center pt-6 border-t border-slate-100">
                <button 
                  onClick={handleBackToLogin}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#19c27c] hover:text-[#15a86a] transition-colors"
                >
                  <ArrowLeft size={16} />
                  Voltar para o Login
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 opacity-30 grayscale saturate-0 mb-4">
            <div className="h-6 w-20 bg-slate-400/30 rounded flex items-center justify-center text-[8px] font-black uppercase tracking-tighter">Parceiro Verificado</div>
            <div className="h-6 w-16 bg-slate-400/30 rounded flex items-center justify-center text-[8px] font-black uppercase tracking-tighter">SSL Seguro</div>
          </div>
          <p className="text-xs text-slate-400 font-bold tracking-[0.4em] uppercase">
            UMA EMPRESA CANADENSE
          </p>
          <div className="flex items-center justify-center gap-4 mt-2 text-[10px] font-semibold text-slate-300">
            <button className="hover:text-[#19c27c] transition-colors uppercase tracking-widest">Políticas de Segurança</button>
            <span className="opacity-30">•</span>
            <button className="hover:text-[#19c27c] transition-colors uppercase tracking-widest">Suporte Técnico</button>
          </div>
          <p className="text-[10px] text-slate-300/50 mt-4 font-medium">
            © 2026 DRESBACH HOSTING. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
