
import React from 'react';
import { 
  Layers, Cloud, Shield, Terminal, Zap, Cpu, Globe, Database, 
  Monitor, Activity, Code, Scale, Users, Briefcase, FileText, 
  Search, Lock, Eye, BookOpen, ShieldCheck, HardDrive, BarChart, Server,
  ArrowRight, ShieldAlert, Fingerprint, ZapOff, Network, Award
} from 'lucide-react';
import { NavItem, ServiceCardProps, EcosystemBrand, DetailedPage, Path } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Serviços', path: 'services' },
  { label: 'Expertise', path: 'expertise' },
  { label: 'Ecossistema', path: 'ecosystem' },
  { label: 'Clientes', path: 'clients' },
  { label: 'Sobre', path: 'about' }
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: 'Systems Design',
    description: 'Arquitetura de sistemas distribuídos focada em latência zero e escalabilidade horizontal massiva.',
    icon: <Layers className="w-6 h-6" />,
    path: 'systems-design'
  },
  {
    title: 'Cloud Strategy',
    description: 'Cloud Governance e FinOps para otimização de infraestrutura em escala global (AWS, GCP, Azure).',
    icon: <Cloud className="w-6 h-6" />,
    path: 'cloud-strategy'
  },
  {
    title: 'AI Scaling',
    description: 'Implementação de LLMs corporativos e MLOps para integrar inteligência em processos legados.',
    icon: <Zap className="w-6 h-6" />,
    path: 'ai-scaling'
  },
  {
    title: 'Tech Audit',
    description: 'Auditoria profunda de segurança e performance para Due Diligence e conformidade técnica.',
    icon: <Search className="w-6 h-6" />,
    path: 'tech-audit'
  }
];

export const DETAILED_PAGES: Record<string, DetailedPage> = {
  'services': {
    title: "Services",
    subtitle: "Full Capabilities Catalog",
    description: "Nossa gama de serviços de consultoria técnica é projetada para resolver os desafios mais complexos de engenharia moderna.",
    icon: <Briefcase size={48} />,
    content: ["Advanced Architecture", "Cloud Engineering", "AI Integration", "Security Auditing", "Platform Scaling"]
  },
  'systems-design': {
    title: "Systems Design",
    subtitle: "Enterprise Architecture Node",
    description: "Desenhamos a fundação técnica para sistemas que processam milhões de requisições por segundo. Nosso foco é a soberania arquitetural.",
    icon: <Layers size={48} />,
    content: ["Distributed Consensus", "Event Sourcing", "CQRS Patterns", "Latency Optimization"],
    blocks: [
      { title: "Escalabilidade", text: "Projetamos para crescimento infinito através de sharding e partição de dados inteligente." },
      { title: "Resiliência", text: "Sistemas 'self-healing' que mantêm a disponibilidade mesmo sob falhas catastróficas." }
    ]
  },
  'cloud-strategy': {
    title: "Cloud Strategy",
    subtitle: "Global Infrastructure Governance",
    description: "Otimizamos seu investimento em nuvem através de estratégias multi-cloud e arquiteturas serverless resilientes.",
    icon: <Cloud size={48} />,
    content: ["FinOps Integration", "Infrastructure as Code", "Multi-Region Failover", "Cloud Native Security"]
  },
  'ai-scaling': {
    title: "AI Scaling",
    subtitle: "Intelligence Integration Engine",
    description: "Transformamos modelos de IA de protótipos em ferramentas de produção escaláveis integradas ao core business.",
    icon: <Zap size={48} />,
    content: ["LLM Orchestration", "Vector DB Implementation", "MLOps Pipelines", "Inference Optimization"]
  },
  'tech-audit': {
    title: "Technical Audit",
    subtitle: "Deep Security & Performance Review",
    description: "Auditorias rigorosas para garantir que seu código e infraestrutura atendam aos mais altos padrões de segurança global.",
    icon: <ShieldCheck size={48} />,
    content: ["Penetration Testing", "Architecture Due Diligence", "Compliance Mapping", "Reliability Engineering"]
  },
  'expertise': {
    title: "Expertise",
    subtitle: "Technical Authority",
    description: "Nossa autoridade técnica é construída sobre décadas de experiência em engenharia de sistemas críticos.",
    icon: <Award size={48} />,
    content: ["Distributed Computing", "Cryptography", "High-Performance Computing", "Kernel Development"]
  },
  'ecosystem': {
    title: "Ecosystem",
    subtitle: "Dresbach Network",
    description: "Um conjunto integrado de empresas de tecnologia operando em sinergia para fornecer soberania digital completa.",
    icon: <Network size={48} />,
    content: ["Hosting", "Software Factory", "R&D Labs", "Venture Building"]
  },
  'clients': {
    title: "Clients",
    subtitle: "Partners in Excellence",
    description: "Trabalhamos com as organizações mais exigentes do mundo para construir o futuro da infraestrutura digital.",
    icon: <Users size={48} />,
    content: ["Finance", "Energy", "Tech Giants", "Government", "Logistics"]
  },
  'about': {
    title: "About",
    subtitle: "Our Story & Vision",
    description: "A TechLabs nasceu da necessidade de consultoria técnica que entenda de fato os limites da computação em escala.",
    icon: <Activity size={48} />,
    content: ["Global Reach", "Senior Leadership", "Research Focus", "Uncompromising Quality"]
  },
  'dresbach-group': {
    title: "Dresbach Group",
    subtitle: "Canadian Tech Holding",
    description: "A Dresbach Group é uma holding internacional focada em infraestrutura crítica e soberania digital.",
    icon: <Globe size={48} />,
    content: ["Global Operations", "Strategic Investments", "Innovation Hubs", "Tier IV Data Centers"]
  },
  'our-team': {
    title: "Our Team",
    subtitle: "Architectural Elite",
    description: "Nossa equipe é composta pelo 1% dos engenheiros de software globais, focados em problemas de alta complexidade.",
    icon: <Users size={48} />,
    content: ["Core Engineering", "Security Research", "AI Science", "Platform Architecture"]
  },
  'careers': {
    title: "Careers",
    subtitle: "Join the Elite",
    description: "Buscamos mentes brilhantes que queiram resolver os problemas técnicos mais difíceis do mundo.",
    icon: <Briefcase size={48} />,
    content: ["Engineering Roles", "Security Analysts", "AI Specialists", "Product Leads"]
  },
  'press-room': {
    title: "Press Room",
    subtitle: "News & Insights",
    description: "Fique por dentro das últimas inovações e anúncios da TechLabs e do Dresbach Group.",
    icon: <FileText size={48} />,
    content: ["Announcements", "Whitepapers", "Case Studies", "Market Analysis"]
  },
  'governance': {
    title: "Governance",
    subtitle: "Corporate Standards",
    description: "Nossa governança garante transparência, ética e segurança em todas as nossas operações globais.",
    icon: <Scale size={48} />,
    content: ["Transparency", "Board Standards", "Global Compliance", "Ethical Framework"]
  },
  'data-privacy': {
    title: "Data Privacy",
    subtitle: "Zero Trust Governance",
    description: "Nossa política de privacidade de dados excede os padrões GDPR e LGPD, focando na soberania absoluta do cliente.",
    icon: <Fingerprint size={48} />,
    content: ["End-to-End Encryption", "Data Sovereignty", "Anonymization Protocols", "Privacy by Design"]
  },
  'ethics-policy': {
    title: "Ethics Policy",
    subtitle: "Our Moral Code",
    description: "Desenvolvemos tecnologia com responsabilidade, garantindo que a IA e os sistemas beneficiem a sociedade.",
    icon: <Activity size={48} />,
    content: ["AI Alignment", "Ethical Sourcing", "Social Impact", "Responsible Dev"]
  },
  'compliance': {
    title: "Compliance",
    subtitle: "Global Standards",
    description: "Mantemos certificações rigorosas para garantir que sua infraestrutura esteja sempre em conformidade.",
    icon: <Lock size={48} />,
    content: ["ISO 27001", "SOC2 Type II", "GDPR", "PCI-DSS"]
  },
  'security': {
    title: "Security",
    subtitle: "Advanced Protection",
    description: "Segurança não é um recurso, é a nossa fundação. Implementamos defesa em profundidade em cada camada.",
    icon: <ShieldAlert size={48} />,
    content: ["Red Teaming", "Threat Hunting", "Infrastructure Hardening", "DevSecOps"]
  }
};

export const CORPORATE_LINKS = [
  { title: "Dresbach Group", path: 'dresbach-group' as Path, icon: <Globe /> },
  { title: "Our Team", path: 'our-team' as Path, icon: <Users /> },
  { title: "Careers", path: 'careers' as Path, icon: <Briefcase /> },
  { title: "Press Room", path: 'press-room' as Path, icon: <FileText /> }
];

export const GOVERNANCE_LINKS = [
  { title: "Data Privacy", path: 'data-privacy' as Path, icon: <Eye /> },
  { title: "Ethics Policy", path: 'ethics-policy' as Path, icon: <Scale /> },
  { title: "Compliance", path: 'compliance' as Path, icon: <Lock /> },
  { title: "Security", path: 'security' as Path, icon: <ShieldAlert /> }
];

export const ECOSYSTEM: EcosystemBrand[] = [
  {
    name: 'TechLabs',
    specialty: 'Strategic Intelligence',
    description: 'Design de arquitetura sênior para ambientes de missão crítica.',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    name: 'CodeForge',
    specialty: 'Software Factory',
    description: 'Desenvolvimento ágil focado em excelência técnica extrema.',
    icon: <Terminal className="w-5 h-5" />
  },
  {
    name: 'Dresbach Hosting',
    specialty: 'Cloud Infra',
    description: 'Infraestrutura global Tier IV com soberania de dados garantida.',
    icon: <Database className="w-5 h-5" />
  }
];

export const CLIENTS = [
  "STRATOS CORP", "GLOBAL LOGISTICS", "NEURAL SYSTEMS", "QUANTUM BANK", "HELIOS ENERGY", "VERTEX TECH"
];

export const CALENDLY_URL = "https://calendly.com/techlabs-consulting/30min";
export const YOUTUBE_URL = "https://www.youtube.com/@tech-labai";
