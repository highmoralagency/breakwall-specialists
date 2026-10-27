import { BrandLogo } from '@/components/brand-logo'
import { HeroVideo } from '@/components/hero-video'

const trust = [
  {
    title: 'Built to Last',
    copy: 'Engineered for demanding Great Lakes conditions.',
  },
  {
    title: 'Waterfront Experts',
    copy: 'Property-specific planning and integrated solutions.',
  },
  {
    title: 'Complete Service',
    copy: 'Breakwalls, docks, decks, lifts, repairs and maintenance.',
  },
]

const stats = [
  { value: 'Custom', label: 'Designed for your property' },
  { value: 'Complete', label: 'Waterfront solutions' },
  { value: 'Local', label: 'Serving Windsor-Essex' },
  { value: 'Durable', label: 'Built for generations' },
]

export function Hero() {
  return (
    <section
      aria-label="Breakwall Specialists hero section"
      className="relative overflow-hidden bg-navy text-white"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-12 md:px-[4vw] md:pb-20 md:pt-[132px] lg:gap-16">
        {/* Video — full-bleed on top for mobile, framed on the right for desktop */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-[16/9] md:rounded-[8px] md:border md:border-white/10 md:shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
            <HeroVideo />
            {/* Mobile: keeps the fixed nav legible and blends the video into the content below */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 md:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(3,17,29,.7) 0%, rgba(3,17,29,0) 32%, rgba(3,17,29,0) 70%, #0a2236 100%)',
              }}
            />
          </div>

          {/* Desktop: advantages strip directly under the video */}
          <ul
            aria-label="Company advantages"
            className="mt-6 hidden grid-cols-3 gap-6 md:grid"
          >
            {trust.map((item) => (
              <li key={item.title} className="border-t border-white/20 pt-4">
                <strong className="block font-display text-lg uppercase lg:text-xl">
                  {item.title}
                </strong>
                <span className="mt-1 block text-[13px] leading-relaxed text-white/70">
                  {item.copy}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Text — below the video on mobile, beside it on desktop */}
        <div className="order-2 flex flex-col items-center px-[22px] pb-12 pt-2 md:order-1 md:items-start md:px-0 md:pb-0 md:pt-0">
          <BrandLogo className="relative -mt-14 h-[150px] md:mt-0 md:h-[140px] lg:h-[160px]" />

          <p className="mt-6 text-center text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#70c7ff] md:text-left md:text-xs">
            Windsor • Essex County • Lake St. Clair
          </p>
          <h1 className="mt-3 text-balance text-center font-display text-[58px] font-extrabold uppercase leading-[0.82] tracking-tight md:text-left md:text-[clamp(56px,5.6vw,96px)] md:leading-[0.8]">
            Protect Your
            <br />
            <span className="text-[#e8f5ff]">Waterfront.</span>
          </h1>
          <p className="my-2 -rotate-2 text-center font-script text-[36px] text-accent md:my-3 md:text-left md:text-[clamp(34px,3.4vw,56px)]">
            Preserve your lifestyle.
          </p>
          <p className="max-w-[470px] text-pretty text-center text-sm leading-relaxed text-white/85 md:max-w-[520px] md:text-left md:text-base md:leading-[1.7]">
            Premium metal breakwalls, docks, wave deflectors and complete
            shoreline solutions built for strength, longevity and lasting
            waterfront value.
          </p>
          <div className="mt-7 grid w-full grid-cols-2 gap-3 md:flex md:w-auto md:gap-3.5">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-[5px] bg-primary px-4 text-[10px] font-extrabold uppercase tracking-[0.045em] text-primary-foreground shadow-[0_14px_32px_rgba(0,122,204,0.25)] transition-colors hover:bg-accent md:min-h-[52px] md:px-6 md:text-xs"
            >
              Get a Free Estimate
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-[5px] border border-white/60 bg-[rgba(4,21,35,0.26)] px-4 text-[10px] font-extrabold uppercase tracking-[0.045em] text-white transition-colors hover:bg-[rgba(4,21,35,0.5)] md:min-h-[52px] md:px-6 md:text-xs"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid w-full grid-cols-2 bg-[rgba(3,17,29,0.92)] px-4 py-4 md:grid-cols-4 md:px-[5vw] md:py-6">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`px-3 py-2 md:px-6 md:py-1 ${
              i % 2 === 0 ? 'border-r border-white/20' : ''
            } md:border-r md:last:border-0`}
          >
            <strong className="block font-display text-[19px] uppercase md:text-[25px]">
              {stat.value}
            </strong>
            <span className="mt-1 block text-[9px] text-white/60 md:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
