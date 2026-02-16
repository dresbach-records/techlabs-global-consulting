
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Soluções",
    links: [
      { label: "Design de Sistemas", href: "/services/systems-design" },
      { label: "Estratégia de Nuvem", href: "/services/cloud-strategy" },
      { label: "Escalonamento de IA", href: "/services/ai-scaling" },
      { label: "Auditoria Técnica", href: "/services/tech-audit" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "/about" },
      { label: "Nossa Equipe", href: "/our-team" },
      { label: "Carreiras", href: "/careers" },
      { label: "Sala de Imprensa", href: "/press-room" },
    ],
  },
  {
    title: "Governança",
    links: [
      { label: "Privacidade de Dados", href: "/data-privacy" },
      { label: "Política de Ética", href: "/ethics-policy" },
      { label: "Compliance", href: "/compliance" },
      { label: "Segurança", href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-[#EDEDED] pt-32 pb-12 relative z-10 border-t border-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 pr-8">
            <div className="flex items-center gap-2 mb-4">
              <img src="/Logo_Dresbach.png" alt="Dresbach Hosting" className="h-5" />
              <Link to="/" className="text-sm font-black uppercase tracking-[0.2em] text-white">
                Dresbach Hosting
              </Link>
            </div>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Uma empresa canadense que fornece consultoria de tecnologia avançada para sistemas de missão crítica.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-xs text-[#6B6B6B] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-[#3C3C3C] font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 DRESBACH HOSTING, INC. UMA EMPRESA DO GRUPO DRESBACH.
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}
