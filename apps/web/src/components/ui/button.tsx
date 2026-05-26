import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";

type ButtonVariant = "primary" | "outline" | "dark" | "ghost";
type ButtonSize = "sm" | "md";

const classNames = ({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) =>
  ["button", `button--${variant}`, `button--${size}`, className]
    .filter(Boolean)
    .join(" ");

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={classNames({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  children,
  className,
  href,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={classNames({ variant, size, className })}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
