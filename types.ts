
import React from 'react';

export type Path = 
  | 'home' 
  | 'services' 
  | 'systems-design' 
  | 'cloud-strategy' 
  | 'ai-scaling' 
  | 'tech-audit'
  | 'expertise'
  | 'ecosystem'
  | 'clients'
  | 'about'
  | 'dresbach-group'
  | 'our-team'
  | 'careers'
  | 'press-room'
  | 'governance'
  | 'data-privacy'
  | 'ethics-policy'
  | 'compliance'
  | 'security'
  | 'start-consultation'
  | 'request-briefing';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path?: Path;
}

export interface EcosystemBrand {
  name: string;
  specialty: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  path: Path;
}

export interface DetailedPage {
  title: string;
  subtitle: string;
  description: string;
  content: string[];
  icon: React.ReactNode;
  blocks?: { title: string; text: string }[];
}
