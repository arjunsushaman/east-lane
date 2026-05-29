const MARQUEE_TEXT =
  'SHARING PLATES · ASIAN BISTRO · KINGSTON UPON THAMES · EAST LANE · '

export default function MarqueeStrip() {
  return (
    <div
      className="bg-cream overflow-hidden border-y border-terracotta/12 py-[1.1rem]"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        <span className="label-caps text-terracotta/55 tracking-[0.26em] shrink-0 pr-0">
          {MARQUEE_TEXT}
        </span>
        <span className="label-caps text-terracotta/55 tracking-[0.26em] shrink-0 pr-0">
          {MARQUEE_TEXT}
        </span>
        <span className="label-caps text-terracotta/55 tracking-[0.26em] shrink-0 pr-0">
          {MARQUEE_TEXT}
        </span>
        <span className="label-caps text-terracotta/55 tracking-[0.26em] shrink-0 pr-0">
          {MARQUEE_TEXT}
        </span>
      </div>
    </div>
  )
}
