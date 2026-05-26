import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "white" | "light" | "dark" | "red";
};

export function Section({
  children,
  className,
  tone = "white",
  ...props
}: SectionProps) {
  return (
    <section
      className={["section", `section--${tone}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  );
}
