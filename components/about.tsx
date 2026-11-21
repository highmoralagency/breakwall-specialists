const points = [
  {
    title: 'Property-Specific Design',
    copy: 'No one-size-fits-all approach.',
  },
  {
    title: 'Integrated Solutions',
    copy: 'Protection and lifestyle features planned together.',
  },
  {
    title: 'Long-Term Thinking',
    copy: 'Built to protect value for years to come.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-[75px] md:grid-cols-2 md:gap-20 md:px-[5vw] md:py-[110px]"
    >
      <div>
        <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-primary">
          Waterfront Lifestyle Professionals
        </span>
        <h2 className="mt-4 font-display text-[48px] uppercase leading-[0.9] md:text-[70px]">
          More than a contractor. A complete waterfront partner.
        </h2>
        <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-[17px]">
          Breakwall Specialist brings shoreline protection, docks, decks, lifts
          and ongoing service together under one roof. The result is a
          waterfront that works as beautifully as it looks.
        </p>
      </div>

      <div className="rounded-xl bg-navy-panel p-8 text-white md:p-10">
        {points.map((point) => (
          <div
            key={point.title}
            className="border-b border-white/10 py-6 last:border-0"
          >
            <strong className="block font-display text-[26px] uppercase">
              {point.title}
            </strong>
            <span className="mt-1.5 block text-navy-muted">{point.copy}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
