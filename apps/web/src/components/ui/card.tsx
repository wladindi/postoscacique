import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "light" | "dark" | "red" | "muted";
};

export function Card({
  children,
  className,
  tone = "light",
  ...props
}: CardProps) {
  return (
    <div
      className={["card", `card--${tone}`, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
