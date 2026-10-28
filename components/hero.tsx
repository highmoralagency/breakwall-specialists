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
      className="relative overflow-hidden bg-background pt-[76px] text-navy md:pt-[88px]"
    >
      {/* Concrete backdrop and angled light panels */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url(/assets/concrete-texture.png)] bg-cover bg-center opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[34%] h-[40%] w-[58%] bg-white/75 [clip-path:polygon(45%_0,100%_0,100%_100%,0_72%)] md:left-0 md:right-auto md:top-0 md:h-full md:w-[52%] md:[clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[50%] h-[30%] w-[24%] bg-muted/80 [clip-path:polygon(100%_0,100%_100%,0_55%)] md:hidden"
      />

      <div className="relative md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:min-h-[660px]">
        {/* Video — full-bleed with a diagonal bottom on mobile, slanted left edge on desktop */}
        <div className="hero-frame relative bg-primary md:order-2">
          <div className="hero-media relative aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto">
            <HeroVideo />
          </div>
        </div>

        {/* Copy */}
        <div className="relative z-10 flex flex-col items-center px-6 pb-8 text-center md:order-1 md:items-start md:justify-center md:py-16 md:pl-[5vw] md:pr-6 md:text-left">
          <BrandLogo className="relative -mt-[84px] h-[168px] md:mt-0 md:h-[150px] lg:h-[170px]" />

          <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.14em] text-primary md:text-sm">
            Windsor • Essex County • Lake St. Clair
          </p>
          <h1 className="mt-3 font-display text-[64px] font-extrabold uppercase leading-[0.84] tracking-tight text-navy md:text-[clamp(64px,6vw,104px)] md:leading-[0.82]">
            Protect Your
            <br />
            Waterfront.
          </h1>
          <p className="mt-1 -rotate-3 whitespace-nowrap font-script text-[clamp(28px,8.6vw,40px)] leading-tight text-primary md:text-[clamp(40px,3.6vw,60px)]">
            Preserve your lifestyle.
          </p>
          <p className="mt-3 max-w-[440px] text-pretty text-base leading-relaxed text-foreground/75 md:max-w-[500px] md:text-lg">
            Premium metal breakwalls, docks, wave deflectors and complete
            shoreline solutions built for strength, longevity and lasting
            waterfront value.
          </p>

          {/* Desktop CTAs sit with the copy */}
          <div className="mt-8 hidden gap-3.5 md:flex">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-[6px] bg-primary px-7 text-sm font-bold uppercase tracking-[0.06em] text-primary-foreground shadow-[0_14px_32px_rgba(22,136,212,0.3)] transition-colors hover:bg-accent"
            >
              Get a Free Estimate
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-[52px] items-center justify-center rounded-[6px] border-2 border-navy px-7 text-sm font-bold uppercase tracking-[0.06em] text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      {/* Navy slab — CTAs on mobile, advantages on desktop */}
      <div className="hero-slab relative bg-navy px-6 pb-12 pt-20 text-navy-foreground md:-mt-16 md:px-[5vw] md:pb-10 md:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-[80%] w-[32%] bg-primary [clip-path:polygon(100%_0,100%_100%,0_100%)] md:h-full md:w-[18%]"
        />

        <div className="relative mx-auto flex w-full max-w-[340px] flex-col gap-4 md:hidden">
          <a
            href="#contact"
            className="inline-flex min-h-[60px] items-center justify-center rounded-[6px] bg-primary px-6 text-base font-bold shadow-[0_14px_32px_rgba(22,136,212,0.35)] uppercase tracking-[0.06em] text-primary-foreground transition-colors hover:bg-accent"
          >
            Get a Free Estimate
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-[60px] items-center justify-center rounded-[6px] border-2 border-navy-foreground/80 bg-navy/60 px-6 text-base font-bold backdrop-blur-sm uppercase tracking-[0.06em] text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            View Our Projects
          </a>
        </div>

        <ul
          aria-label="Company advantages"
          className="relative hidden max-w-[1100px] grid-cols-3 gap-8 md:grid"
        >
          {trust.map((item) => (
            <li key={item.title} className="border-t-2 border-primary pt-4">
              <strong className="block font-display text-xl uppercase lg:text-2xl">
                {item.title}
              </strong>
              <span className="mt-1 block text-sm leading-relaxed text-navy-muted">
                {item.copy}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stats bar */}
      <div className="relative grid w-full grid-cols-2 bg-navy-deep px-4 py-4 text-navy-foreground md:grid-cols-4 md:px-[5vw] md:py-6">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`px-3 py-2 md:px-6 md:py-1 ${
              i % 2 === 0 ? 'border-r border-white/20' : ''
            } md:border-r md:last:border-0`}
          >
            <strong className="block font-display text-xl uppercase md:text-[25px]">
              {stat.value}
            </strong>
            <span className="mt-1 block text-xs text-navy-muted md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
