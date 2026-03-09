import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("section-shell animate-fade-up", className)}>
      {children}
    </section>
  );
}
