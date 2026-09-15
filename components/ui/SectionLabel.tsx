type SectionLabelProps = {
  index: string;
  children: string;
};

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-faint">
      <span className="text-accent">{index}</span>
      <span aria-hidden className="h-px w-8 bg-cream/15" />
      {children}
    </p>
  );
}
