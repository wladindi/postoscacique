import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";

const businessLinks = [
  "Posto Cacique",
  "Cacique Lub",
  "Tem Conveniência",
  "Cacique Frotas"
];

const serviceLinks = [
  "Cacique Fidelidade",
  "TRR Cacique",
  "Rota Pay",
  "Trabalhe conosco"
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <BrandLogo compact />
        <FooterColumn title="NEGÓCIOS" items={businessLinks} />
        <FooterColumn title="SERVIÇOS" items={serviceLinks} />
      </div>
      <p className="site-footer__copyright">
        © 2026 Rede Cacique. Todos os direitos reservados. CNPJ
        06.656.656/0001-43
      </p>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="site-footer__column">
      <h2>{title}</h2>
      {items.map((item) => (
        <Link href="#" key={item}>
          {item}
        </Link>
      ))}
    </div>
  );
}
