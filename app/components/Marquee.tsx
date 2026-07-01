import { marqueeSkills } from "../content";

/**
 * Infinite technology ticker. The track is duplicated so the CSS
 * translateX(-50%) loop is seamless; pauses on hover.
 */
export default function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="marquee relative z-[2] overflow-hidden border-y border-line bg-card py-5">
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display px-6 text-lg text-ink md:text-xl">{skill}</span>
            <span aria-hidden className="text-terracotta">
              ✦
            </span>
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: "linear-gradient(to right, var(--color-card), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: "linear-gradient(to left, var(--color-card), transparent)" }}
      />
    </div>
  );
}
