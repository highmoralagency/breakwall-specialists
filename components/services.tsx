import { ServiceCard } from '@/components/service-card'

const services = [
  {
    number: '01',
    title: 'Breakwalls',
    copy: 'Custom steel and shoreline protection systems designed around your property and water conditions.',
    bannerPosition: 'top',
    focus: '50% 60%',
    photos: [
      { src: '/services/breakwalls/1.webp', alt: 'Steel sheet pile breakwall lining a boat slip' },
      { src: '/services/breakwalls/2.webp', alt: 'Steel sheet pile wall installed along the shoreline' },
      { src: '/services/breakwalls/3.webp', alt: 'Steel wall section with a drainage pipe' },
      { src: '/services/breakwalls/4.webp', alt: 'Excavator setting a steel sheet pile wall' },
      { src: '/services/breakwalls/5.webp', alt: 'Trench dug for a new steel wall' },
      { src: '/services/breakwalls/6.webp', alt: 'Steel wall return dug into the shoreline' },
      { src: '/services/breakwalls/7.webp', alt: 'Steel wall corner installed beside an excavator' },
    ],
  },
  {
    number: '02',
    title: 'Wave Deflectors',
    copy: 'Reduce wave energy, spray and shoreline erosion with professionally designed deflection systems.',
    bannerPosition: 'top',
    focus: '50% 70%',
    photos: [
      { src: '/services/wave-deflectors/1.webp', alt: 'Finished steel wall with wave deflector along the lake' },
      { src: '/services/wave-deflectors/2.webp', alt: 'Wave deflector running the length of a shoreline' },
    ],
  },
  {
    number: '03',
    title: 'Docks',
    copy: 'Functional, durable docks created for safe access, entertaining and everyday waterfront enjoyment.',
    bannerPosition: 'top',
    focus: '50% 60%',
    photos: [
      { src: '/services/docks/1.webp', alt: 'Long composite dock with a boat on a lift' },
      { src: '/services/docks/2.webp', alt: 'Dock with a fishing boat raised on a lift' },
      { src: '/services/docks/3.webp', alt: 'Paver patio with chairs overlooking a dock' },
      { src: '/services/docks/4.webp', alt: 'Composite dock extending into the lake' },
      { src: '/services/docks/5.webp', alt: 'Dock end with a raised lift platform' },
      { src: '/services/docks/6.webp', alt: 'Dock platform with a lift and storage box' },
      { src: '/services/docks/7.webp', alt: 'Dock with a grated platform and lift' },
      { src: '/services/docks/8.webp', alt: 'Docks with jet skis raised on lifts' },
    ],
  },
  {
    number: '04',
    title: 'Paver Decks',
    copy: 'Polished outdoor living spaces that connect your home to the water with style and practicality.',
    bannerPosition: 'top',
    focus: '50% 60%',
    photos: [
      { src: '/services/paver-decks/1.webp', alt: 'Paver deck built at the water’s edge' },
      { src: '/services/paver-decks/2.webp', alt: 'Paver deck beside armour stone on the shoreline' },
      { src: '/services/paver-decks/3.webp', alt: 'Paver deck framed in steel on the shoreline' },
      { src: '/services/paver-decks/4.webp', alt: 'Paver deck frame being installed in winter' },
      { src: '/services/paver-decks/5.webp', alt: 'Paver deck in progress beside the lake' },
      { src: '/services/paver-decks/6.webp', alt: 'Paver walkway leading out to a dock' },
    ],
  },
  {
    number: '05',
    title: 'Boat & PWC Lifts',
    copy: 'Premium Golden lifts that protect your watercraft while keeping launching simple and convenient.',
    bannerPosition: 'bottom',
    focus: '50% 50%',
    photos: [
      { src: '/services/lifts/1.webp', alt: 'Bowrider raised on a lift inside a boathouse' },
      { src: '/services/lifts/2.webp', alt: 'Inflatable boat raised on a lift in a boathouse' },
      { src: '/services/lifts/3.webp', alt: 'Boathouse lifts with a boat raised' },
      { src: '/services/lifts/4.webp', alt: 'Row of lifts installed in a boathouse' },
      { src: '/services/lifts/5.webp', alt: 'Boathouse lift slips under construction' },
      { src: '/services/lifts/6.webp', alt: 'Boathouse lifts and decking' },
      { src: '/services/lifts/7.webp', alt: 'Lift slip with decking inside a boathouse' },
      { src: '/services/lifts/8.webp', alt: 'Lift platform inside a boathouse' },
      { src: '/services/lifts/9.webp', alt: 'Dock with installed lift motors' },
      { src: '/services/lifts/10.webp', alt: 'Lift frame at the end of a dock' },
      { src: '/services/lifts/11.webp', alt: 'Lift cradle beside a composite dock' },
      { src: '/services/lifts/12.webp', alt: 'Aluminum lift cradle over the water' },
      { src: '/services/lifts/13.webp', alt: 'Lift cradle and dock beside a steel wall' },
      { src: '/services/lifts/14.webp', alt: 'Lift motor and cradle close-up' },
      { src: '/services/lifts/15.webp', alt: 'Lift cradle installed beside a dock' },
      { src: '/services/lifts/16.webp', alt: 'Lift frames being fabricated in the shop' },
    ],
  },
  {
    number: '06',
    title: 'Repairs & Maintenance',
    copy: 'Professional inspections, restoration and maintenance to keep shoreline structures performing properly.',
    bannerPosition: 'bottom',
    focus: '50% 55%',
    photos: [
      { src: '/services/repairs/1.webp', alt: 'Crew member welding a steel breakwall cap' },
      { src: '/services/repairs/2.webp', alt: 'Worn dock surface before reskinning', tag: 'Before' },
      { src: '/services/repairs/3.webp', alt: 'Dock after reskinning with new surface', tag: 'After' },
      { src: '/services/repairs/4.webp', alt: 'Crew member welding a steel post in winter' },
      { src: '/services/repairs/5.webp', alt: 'Crew member repairing a breakwall in winter' },
      { src: '/services/repairs/6.webp', alt: 'Crew member working on a dock at the wall' },
      { src: '/services/repairs/7.webp', alt: 'Steel dock frames being fabricated in the shop' },
      { src: '/services/repairs/8.webp', alt: 'Steel framing fabricated in the shop' },
      { src: '/services/repairs/9.webp', alt: 'Work barge with an excavator on the lake' },
      { src: '/services/repairs/10.webp', alt: 'Work barge on the lake' },
    ],
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
