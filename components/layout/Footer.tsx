
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Youtube, ShieldCheck, Lock } from 'lucide-react';
import { SERVICES, CORPORATE_LINKS, GOVERNANCE_LINKS, YOUTUBE_URL } from '../../constants';

export default function Footer() {
  return (
    <footer className="py-40 border-t border-[#2F2F2F] bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-[#19C37D] flex items-center justify-center rounded-sm">
                <span className="font-black text-black text-xl">T</span>
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">TechLabs</span>
            </div>
            <p className="text-[#6B6B6B] text-[11px] font-mono uppercase tracking-[0.4em] max-w-sm mb-12 leading-loose">
              Engineering elite ecosystems. <br />
              International Headquarters: Toronto, CA.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="p-5 bg-black border border-[#2F2F2F] rounded-full text-[#6B6B6B] hover:text-[#19C37D] transition-all"><Linkedin size={22} /></a>
              <a href="#" className="p-5 bg-black border border-[#2F2F2F] rounded-full text-[#6B6B6B] hover:text-[#19C37D] transition-all"><Github size={22} /></a>
              <a 
                href={YOUTUBE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-5 bg-black border border-[#2F2F2F] rounded-full text-[#6B6B6B] hover:text-[#FF0000] transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-20">
            <div>
              <h6 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#19C37D] mb-10 text-nowrap">Capabilities</h6>
              <ul className="space-y-5 text-[10px] font-bold text-[#6B6B6B] uppercase tracking-[0.3em]">
                {SERVICES.map(s => (
                  <li key={s.path}><Link to={`/services/${s.path}`} className="hover:text-[#EDEDED] transition-colors">{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#19C37D] mb-10 text-nowrap">Enterprise</h6>
              <ul className="space-y-5 text-[10px] font-bold text-[#6B6B6B] uppercase tracking-[0.3em]">
                {CORPORATE_LINKS.map(l => (
                  <li key={l.path}><Link to={`/${l.path}`} className="hover:text-[#EDEDED] transition-colors">{l.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#19C37D] mb-10 text-nowrap">Governance</h6>
              <ul className="space-y-5 text-[10px] font-bold text-[#6B6B6B] uppercase tracking-[0.3em]">
                {GOVERNANCE_LINKS.map(l => (
                  <li key={l.path}><Link to={`/${l.path}`} className="hover:text-[#EDEDED] transition-colors">{l.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-20 border-t border-[#2F2F2F] flex flex-col lg:flex-row justify-between items-center gap-12 relative">
          <span className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-[0.5em]">© 2024 TechLabs Technical Consulting | Dresbach Group International Operations.</span>
          <div className="flex items-center gap-12">
            <span className="flex items-center gap-4 text-[10px] font-black text-[#6B6B6B] uppercase tracking-[0.4em]"><ShieldCheck size={14} className="text-[#19C37D]" /> ISO 27001 SECURE</span>
            <span className="flex items-center gap-4 text-[10px] font-black text-[#6B6B6B] uppercase tracking-[0.4em]"><ShieldCheck size={14} className="text-[#19C37D]" /> SOC2 COMPLIANT</span>
            <Link 
              to="/admin/login" 
              className="p-2 text-[#2F2F2F] hover:text-[#19C37D] transition-colors"
              aria-label="Admin Access"
            >
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
