import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
};

export function BrandLogo({ href = "/", compact = false }: BrandLogoProps) {
  return (
    <Link
      aria-label="Rede Cacique"
      className={compact ? "brand-logo brand-logo--compact" : "brand-logo"}
      href={href}
    >
      <span className="brand-logo__script">Rede</span>
      <span className="brand-logo__name">CACIQUE</span>
      <span className="brand-logo__tagline">COM VOCE EM TODOS OS CAMINHOS</span>
    </Link>
  );
}
