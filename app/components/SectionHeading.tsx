import { Reveal } from "./Reveal";

/**
 * Editorial section header: a monospace index number, a serif title,
 * and a hairline rule — the recurring "dossier" motif of the site.
 */
export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-terracotta-deep">{index}</span>
        <div className="rule flex-1 translate-y-[-4px]" />
        {kicker && (
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">
            {kicker}
          </span>
        )}
      </div>
      <h2 className="font-display mt-4 text-4xl font-medium tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
