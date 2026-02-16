
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import { CALENDLY_URL } from '../../constants';

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
        <Link to="/" className="flex items-center">
          <img src="/Logo_Dresbach.png" alt="DRESBACH HOSTING" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <Navigation />
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
          </div>
        </div>
      )}
    </header>
  );
}
