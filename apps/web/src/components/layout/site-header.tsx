"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Posto Cacique" },
  { href: "/cacique-lub", label: "Cacique Lub" },
  { href: "/tem-conveniencia", label: "Tem Conveniência" },
  { href: "/cacique-frotas", label: "Cacique Frotas" },
  { href: "/fidelidade", label: "Fidelidade" },
  { href: "/sobre", label: "Sobre" }
];

type SiteHeaderProps = {
  activeLabel?: string;
};

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
        <ButtonLink className="site-header__cta" href="/contato" size="sm">
          Contato
        </ButtonLink>
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
