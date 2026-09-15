type Line =
  | { kind: "command"; text: string }
  | { kind: "output"; text: string }
  | { kind: "success"; text: string };

type TerminalProps = {
  title: string;
  lines: Line[];
  className?: string;
};

const lineColor: Record<Line["kind"], string> = {
  command: "text-cream",
  output: "text-faint",
  success: "text-accent",
};

export function Terminal({ title, lines, className = "" }: TerminalProps) {
  return (
    <div
      aria-hidden
      className={`overflow-hidden rounded-xl border border-cream/10 bg-ink/80 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-cream/8 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-cream/15" />
        <span className="h-2 w-2 rounded-full bg-cream/15" />
        <span className="h-2 w-2 rounded-full bg-accent/60" />
        <span className="ml-2 font-mono text-[11px] tracking-wide text-faint">{title}</span>
      </div>

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {lines.map((line, index) => (
          <div key={index} className={lineColor[line.kind]}>
            {line.kind === "command" && <span className="mr-2 text-accent">$</span>}
            {line.text}
            {index === lines.length - 1 && (
              <span className="ml-1 inline-block h-3.5 w-[7px] translate-y-[2px] bg-accent animate-caret" />
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
