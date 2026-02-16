
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
  { label: 'Sobre', path: 'about' },
  { label: 'Catálogo', path: 'https://catalogo-dresbach-hosting.vercel.app/' }
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: 'Design de Sistemas',
    description: 'Arquitetura de sistemas distribuídos focada em latência zero e escalabilidade horizontal massiva.',
    icon: <Layers className="w-6 h-6" />,
    path: 'systems-design'
  },
  {
    title: 'Estratégia de Nuvem',
    description: 'Cloud Governance e FinOps para otimização de infraestrutura em escala global (AWS, GCP, Azure).',
    icon: <Cloud className="w-6 h-6" />,
    path: 'cloud-strategy'
  },
  {
    title: 'Escalonamento de IA',
    description: 'Implementação de LLMs corporativos e MLOps para integrar inteligência em processos legados.',
    icon: <Zap className="w-6 h-6" />,
    path: 'ai-scaling'
  },
  {
    title: 'Auditoria Técnica',
    description: 'Auditoria profunda de segurança e performance para Due Diligence e conformidade técnica.',
    icon: <Search className="w-6 h-6" />,
    path: 'tech-audit'
  }
];

export const DETAILED_PAGES: Record<string, DetailedPage> = {
  'services': {
    title: "Serviços",
    subtitle: "Catálogo Completo de Capacidades",
    description: "Nossa gama de serviços de consultoria técnica é projetada para resolver os desafios mais complexos de engenharia moderna.",
    icon: <Briefcase size={48} />,
    content: ["Arquitetura Avançada", "Engenharia de Nuvem", "Integração de IA", "Auditoria de Segurança", "Escalonamento de Plataforma"]
  },
  'systems-design': {
    title: "Design de Sistemas",
    subtitle: "Nó de Arquitetura Empresarial",
    description: "Desenhamos a fundação técnica para sistemas que processam milhões de requisições por segundo. Nosso foco é a soberania arquitetural.",
    icon: <Layers size={48} />,
    content: ["Consenso Distribuído", "Event Sourcing", "Padrões CQRS", "Otimização de Latência"],
    blocks: [
      { title: "Escalabilidade", text: "Projetamos para crescimento infinito através de sharding e partição de dados inteligente." },
      { title: "Resiliência", text: "Sistemas 'self-healing' que mantêm a disponibilidade mesmo sob falhas catastróficas." }
    ]
  },
  'cloud-strategy': {
    title: "Estratégia de Nuvem",
    subtitle: "Governança de Infraestrutura Global",
    description: "Otimizamos seu investimento em nuvem através de estratégias multi-cloud e arquiteturas serverless resilientes.",
    icon: <Cloud size={48} />,
    content: ["Integração FinOps", "Infraestrutura como Código", "Failover Multi-Região", "Segurança Nativa da Nuvem"]
  },
  'ai-scaling': {
    title: "Escalonamento de IA",
    subtitle: "Motor de Integração de Inteligência",
    description: "Transformamos modelos de IA de protótipos em ferramentas de produção escaláveis integradas ao core business.",
    icon: <Zap size={48} />,
    content: ["Orquestração de LLMs", "Implementação de Vector DB", "Pipelines de MLOps", "Otimização de Inferência"]
  },
  'tech-audit': {
    title: "Auditoria Técnica",
    subtitle: "Revisão Profunda de Segurança e Performance",
    description: "Auditorias rigorosas para garantir que seu código e infraestrutura atendam aos mais altos padrões de segurança global.",
    icon: <ShieldCheck size={48} />,
    content: ["Testes de Penetração", "Due Diligence de Arquitetura", "Mapeamento de Conformidade", "Engenharia de Confiabilidade"]
  },
  'expertise': {
    title: "Expertise",
    subtitle: "Autoridade Técnica",
    description: "Nossa autoridade técnica é construída sobre décadas de experiência em engenharia de sistemas críticos.",
    icon: <Award size={48} />,
    content: ["Computação Distribuída", "Criptografia", "Computação de Alta Performance", "Desenvolvimento de Kernel"]
  },
  'ecosystem': {
    title: "Ecossistema",
    subtitle: "Rede Dresbach",
    description: "Um conjunto integrado de empresas de tecnologia operando em sinergia para fornecer soberania digital completa.",
    icon: <Network size={48} />,
    content: ["Hospedagem", "Fábrica de Software", "Laboratórios de P&D", "Venture Building"]
  },
  'clients': {
    title: "Clientes",
    subtitle: "Parceiros em Excelência",
    description: "Trabalhamos com as organizações mais exigentes do mundo para construir o futuro da infraestrutura digital.",
    icon: <Users size={48} />,
    content: ["Finanças", "Energia", "Gigantes de Tecnologia", "Governo", "Logística"]
  },
  'about': {
    title: "Sobre",
    subtitle: "Nossa História e Visão",
    description: "A Dresbach Hosting nasceu da necessidade de consultoria técnica que entenda de fato os limites da computação em escala.",
    icon: <Activity size={48} />,
    content: ["Alcance Global", "Liderança Sênior", "Foco em Pesquisa", "Qualidade Intransigente"]
  },
  'dresbach-group': {
    title: "Grupo Dresbach",
    subtitle: "Holding de Tecnologia Canadense",
    description: "A Dresbach Group é uma holding internacional focada em infraestrutura crítica e soberania digital.",
    icon: <Globe size={48} />,
    content: ["Operações Globais", "Investimentos Estratégicos", "Centros de Inovação", "Data Centers Tier IV"]
  },
  'our-team': {
    title: "Nossa Equipe",
    subtitle: "Elite da Arquitetura",
    description: "Nossa equipe é composta pelo 1% dos engenheiros de software globais, focados em problemas de alta complexidade.",
    icon: <Users size={48} />,
    content: ["Engenharia Principal", "Pesquisa de Segurança", "Ciência de IA", "Arquitetura de Plataforma"]
  },
  'careers': {
    title: "Carreiras",
    subtitle: "Junte-se à Elite",
    description: "Buscamos mentes brilhantes que queiram resolver os problemas técnicos mais difíceis do mundo.",
    icon: <Briefcase size={48} />,
    content: ["Vagas de Engenharia", "Analistas de Segurança", "Especialistas em IA", "Líderes de Produto"]
  },
  'press-room': {
    title: "Sala de Imprensa",
    subtitle: "Notícias e Insights",
    description: "Fique por dentro das últimas inovações e anúncios da Dresbach Hosting e do Dresbach Group.",
    icon: <FileText size={48} />,
    content: ["Anúncios", "Whitepapers", "Estudos de Caso", "Análise de Mercado"]
  },
  'governance': {
    title: "Governança",
    subtitle: "Padrões Corporativos",
    description: "Nossa governança garante transparência, ética e segurança em todas as nossas operações globais.",
    icon: <Scale size={48} />,
    content: ["Transparência", "Padrões do Conselho", "Conformidade Global", "Estrutura Ética"]
  },
  'data-privacy': {
    title: "Privacidade de Dados",
    subtitle: "Governança de Confiança Zero",
    description: "Nossa política de privacidade de dados excede os padrões GDPR e LGPD, focando na soberania absoluta do cliente.",
    icon: <Fingerprint size={48} />,
    content: ["Criptografia de Ponta a Ponta", "Soberania de Dados", "Protocolos de Anonimização", "Privacidade desde a Concepção"]
  },
  'ethics-policy': {
    title: "Política de Ética",
    subtitle: "Nosso Código Moral",
    description: "Desenvolvemos tecnologia com responsabilidade, garantindo que a IA e os sistemas beneficiem a sociedade.",
    icon: <Activity size={48} />,
    content: ["Alinhamento de IA", "Fornecimento Ético", "Impacto Social", "Desenvolvimento Responsável"]
  },
  'compliance': {
    title: "Compliance",
    subtitle: "Padrões Globais",
    description: "Mantemos certificações rigorosas para garantir que sua infraestrutura esteja sempre em conformidade.",
    icon: <Lock size={48} />,
    content: ["ISO 27001", "SOC2 Type II", "GDPR", "PCI-DSS"]
  },
  'security': {
    title: "Segurança",
    subtitle: "Proteção Avançada",
    description: "Segurança não é um recurso, é a nossa fundação. Implementamos defesa em profundidade em cada camada.",
    icon: <ShieldAlert size={48} />,
    content: ["Red Teaming", "Caça a Ameaças", "Fortalecimento de Infraestrutura", "DevSecOps"]
  }
};

export const CORPORATE_LINKS = [
  { title: "Grupo Dresbach", path: 'dresbach-group' as Path, icon: <Globe /> },
  { title: "Nossa Equipe", path: 'our-team' as Path, icon: <Users /> },
  { title: "Carreiras", path: 'careers' as Path, icon: <Briefcase /> },
  { title: "Sala de Imprensa", path: 'press-room' as Path, icon: <FileText /> }
];

export const GOVERNANCE_LINKS = [
  { title: "Privacidade de Dados", path: 'data-privacy' as Path, icon: <Eye /> },
  { title: "Política de Ética", path: 'ethics-policy' as Path, icon: <Scale /> },
  { title: "Compliance", path: 'compliance' as Path, icon: <Lock /> },
  { title: "Segurança", path: 'security' as Path, icon: <ShieldAlert /> }
];

export const ECOSYSTEM: EcosystemBrand[] = [
  {
    name: 'Dresbach Hosting',
    specialty: 'Inteligência Estratégica',
    description: 'Design de arquitetura sênior para ambientes de missão crítica.',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    name: 'CodeForge',
    specialty: 'Fábrica de Software',
    description: 'Desenvolvimento ágil focado em excelência técnica extrema.',
    icon: <Terminal className="w-5 h-5" />
  }
];

export const CLIENTS = [
  "STRATOS CORP", "GLOBAL LOGISTICS", "NEURAL SYSTEMS", "QUANTUM BANK", "HELIOS ENERGY", "VERTEX TECH"
];

export const CALENDLY_URL = "https://calendly.com/dresbach-hosting/30min";
export const YOUTUBE_URL = "https://www.youtube.com/@dresbach-hosting";
