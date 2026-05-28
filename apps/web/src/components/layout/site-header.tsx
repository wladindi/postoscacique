"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ButtonLink } from "@/components/ui/button";

// Numero do WhatsApp da Comercial Cacique — atualizar quando disponivel.
// Formato: codigo do pais + DDD + numero (somente digitos, ex.: 5511999998888)
const WHATSAPP_NUMBER = "0000000000";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre as soluções Cacique Frotas para abastecer minha frota.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const navItems = [
  { href: "/", label: "Posto Cacique" },
  { href: "/cacique-lub", label: "Cacique Lub" },
  { href: "/tem-conveniencia", label: "Tem Conveniência" },
  { href: "/fidelidade", label: "Fidelidade" },
  { href: "/sobre", label: "Sobre" }
];

type SiteHeaderProps = {
  activeLabel?: string;
};

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function SiteHeader({ activeLabel = "Posto Cacique" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <BrandLogo />
        <nav aria-label="Navegação principal" className="site-header__nav">
          {navItems.map((item) => (
            <Link
              aria-current={item.label === activeLabel ? "page" : undefined}
              className="site-header__link"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <a
            aria-label="Abasteça sua frota pelo WhatsApp"
            className="site-header__whats"
            href={WHATSAPP_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon size={18} />
            Abasteça sua frota
          </a>
          <ButtonLink className="site-header__cta" href="/contato" size="sm">
            Contato
          </ButtonLink>
        </div>
        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="site-header__toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? (
            <X aria-hidden="true" size={26} strokeWidth={2.4} />
          ) : (
            <Menu aria-hidden="true" size={26} strokeWidth={2.4} />
          )}
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={`site-header__drawer ${open ? "is-open" : ""}`}
        id="mobile-nav"
      >
        <nav aria-label="Navegação mobile" className="site-header__drawer-nav">
          {navItems.map((item) => (
            <Link
              aria-current={item.label === activeLabel ? "page" : undefined}
              className="site-header__drawer-link"
              href={item.href}
              key={item.label}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            aria-label="Abasteça sua frota pelo WhatsApp"
            className="site-header__drawer-whats"
            href={WHATSAPP_URL}
            onClick={() => setOpen(false)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon size={20} />
            Abasteça sua frota
          </a>
          <ButtonLink
            className="site-header__drawer-cta"
            href="/contato"
            onClick={() => setOpen(false)}
            size="md"
          >
            Contato
          </ButtonLink>
        </nav>
      </div>
      {open && (
        <button
          aria-label="Fechar menu"
          className="site-header__backdrop"
          onClick={() => setOpen(false)}
          type="button"
        />
      )}
    </header>
  );
}
