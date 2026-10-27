import { ServiceCard } from '@/components/service-card'

const services = [
  {
    number: '01',
    title: 'Breakwalls',
    copy: 'Custom steel and shoreline protection systems designed around your property and water conditions.',
    image: '/services/breakwalls.webp',
    alt: 'Steel sheet pile breakwall along a lakefront lawn',
    bannerPosition: 'top',
    focus: '40% 80%',
  },
  {
    number: '02',
    title: 'Wave Deflectors',
    copy: 'Reduce wave energy, spray and shoreline erosion with professionally designed deflection systems.',
    image: '/services/wave-deflectors.webp',
    alt: 'Wave curling back off a curved steel wave deflector',
    bannerPosition: 'top',
    focus: '50% 70%',
  },
  {
    number: '03',
    title: 'Docks',
    copy: 'Functional, durable docks created for safe access, entertaining and everyday waterfront enjoyment.',
    image: '/services/docks.webp',
    alt: 'Composite dock extending into calm lake water',
    bannerPosition: 'top',
    focus: '65% 75%',
  },
  {
    number: '04',
    title: 'Paver Decks',
    copy: 'Polished outdoor living spaces that connect your home to the water with style and practicality.',
    image: '/services/paver-decks.webp',
    alt: 'Stone paver patio overlooking the lake',
    bannerPosition: 'top',
    focus: '45% 65%',
  },
  {
    number: '05',
    title: 'Boat & PWC Lifts',
    copy: 'Premium Golden lifts that protect your watercraft while keeping launching simple and convenient.',
    image: '/services/boat-lifts.webp',
    alt: 'Boat and personal watercraft raised on lifts beside a dock',
    bannerPosition: 'bottom',
    focus: '50% 45%',
  },
  {
    number: '06',
    title: 'Repairs & Maintenance',
    copy: 'Professional inspections, restoration and maintenance to keep shoreline structures performing properly.',
    image: '/services/repairs.webp',
    alt: 'Crew member inspecting a steel breakwall',
    bannerPosition: 'bottom',
    focus: '45% 50%',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-navy-panel px-5 py-[75px] text-white md:px-[5vw] md:py-[110px]"
    >
      <div className="mx-auto mb-9 max-w-[850px] text-center md:mb-14">
        <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-primary">
          Complete Waterfront Solutions
        </span>
        <h2 className="mt-4 text-balance font-display text-[48px] uppercase leading-[0.9] md:text-[clamp(48px,5vw,72px)]">
          Everything your shoreline needs.
        </h2>
        <p className="mt-4 leading-relaxed text-white/70">
          One experienced team for protection, access, recreation and long-term
          maintenance.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1420px] gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </section>
  )
}
