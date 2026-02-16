
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import { CALENDLY_URL } from '@/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-[#2F2F2F] h-16' : 'bg-transparent border-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-[#19C37D] flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90">
            <span className="font-black text-black text-xl">T</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase">TechLabs</span>
            <span className="text-[8px] font-bold text-[#6B6B6B] tracking-[0.3em] uppercase">Dresbach Group Holding</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <Navigation />
          <Link 
            to="/start-consultation"
            className="bg-[#19C37D] text-black px-6 py-2.5 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] green-glow hover:brightness-110 transition-all"
          >
            Iniciar Consulta
          </Link>
        </div>

        <button className="lg:hidden text-[#EDEDED]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black pt-32 px-10 lg:hidden animate-in fade-in">
          <div className="flex flex-col gap-8">
            <Navigation isMobile />
            <Link to="/start-consultation" className="bg-[#19C37D] text-black w-full py-6 rounded-sm font-black uppercase tracking-widest text-center text-sm mt-8">Consultoria Agora</Link>
          </div>
        </div>
      )}
    </header>
  );
}
