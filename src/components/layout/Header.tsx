
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: "/services", label: "Serviços" },
  { href: "/expertise", label: "Expertise" },
  { href: "/ecosystem", label: "Ecossistema" },
  { href: "/clients", label: "Clientes" },
  { href: "/about", label: "Sobre" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/Logo_Dresbach.png" alt="Dresbach Hosting" className="h-5" />
            <Link to="/" className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Dresbach Hosting
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                  isActive(link.href)
                    ? 'text-[#19C37D]'
                    : 'text-[#6B6B6B] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/start-consultation"
              className="group flex items-center gap-3 px-8 py-4 bg-[#19C37D] text-black font-black uppercase text-xs"
            >
              Iniciar Consulta
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] md:hidden">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <img src="/Logo_Dresbach.png" alt="Dresbach Hosting" className="h-5" />
            <Link to="/" className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Dresbach Hosting
            </Link>
          </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <ArrowRight size={24} />
              </button>
            </div>
            <nav className="mt-16 flex flex-col items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-black uppercase tracking-widest transition-colors ${
                    isActive(link.href)
                      ? 'text-[#19C37D]'
                      : 'text-white hover:text-[#19C37D]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/start-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 group flex items-center gap-3 px-8 py-4 bg-[#19C37D] text-black font-black uppercase text-sm"
              >
                Iniciar Consulta
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
