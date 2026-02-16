
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants';

export default function Navigation({ isMobile = false }: { isMobile?: boolean }) {
  const linkClass = ({ isActive }: { isActive: boolean }) => `
    text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300
    ${isMobile ? 'text-4xl py-4 border-b border-[#2F2F2F] block w-full text-left' : ''}
    ${isActive ? 'text-[#19C37D]' : 'text-[#6B6B6B] hover:text-[#19C37D]'}
  `;

  return (
    <nav className={isMobile ? 'flex flex-col gap-4 w-full' : 'flex items-center gap-8'}>
      {NAV_ITEMS.map((item) => (
        <NavLink 
          key={item.label} 
          to={item.path === 'home' ? '/' : `/${item.path}`} 
          className={linkClass}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
