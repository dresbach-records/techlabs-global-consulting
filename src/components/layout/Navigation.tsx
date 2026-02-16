
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants';

export default function Navigation({ isMobile = false }: { isMobile?: boolean }) {
  const linkClass = (
    isActive: boolean,
    isExternal: boolean
  ) => `
    text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300
    ${isMobile ? 'text-4xl py-4 border-b border-[#2F2F2F] block w-full text-left' : ''}
    ${isActive ? 'text-[#19C37D]' : 'text-[#6B6B6B] hover:text-[#19C37D]'}
  `;

  return (
    <nav className={isMobile ? 'flex flex-col gap-4 w-full' : 'flex items-center gap-8'}>
      {NAV_ITEMS.map((item) => {
        const isExternal = item.path.startsWith('http');
        return isExternal ? (
          <a
            key={item.label}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass(false, true)}
          >
            {item.label}
          </a>
        ) : (
          <NavLink 
            key={item.label} 
            to={item.path === 'home' ? '/' : `/${item.path}`} 
            className={({isActive}) => linkClass(isActive, false)}
          >
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
