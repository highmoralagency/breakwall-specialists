import { ProjectGallery } from '@/components/project-gallery'

export function ProjectBand() {
  return (
    <section
      id="projects"
      className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-[75px] md:grid-cols-[0.8fr_1.2fr] md:gap-[70px] md:px-[5vw] md:py-[100px]"
    >
      <div>
        <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-primary">
          Featured Work
        </span>
        <h2 className="mt-4 font-display text-[48px] uppercase leading-[0.9] md:text-[70px]">
          Built for the water.
          <br />
          Designed for the property.
        </h2>
        <p className="my-6 leading-relaxed text-muted-foreground md:my-7">
          Every shoreline presents a different challenge. Our approach considers
          wave action, water depth, property layout, access and how you want to
          use your waterfront.
        </p>
        <a
          href="#contact"
          className="flex min-h-[56px] w-full items-center justify-center rounded-[5px] bg-[linear-gradient(90deg,color-mix(in_oklab,var(--primary)_62%,black),var(--primary)_55%,color-mix(in_oklab,var(--primary)_78%,white))] px-6 text-sm font-extrabold uppercase tracking-[0.06em] text-primary-foreground shadow-[0_14px_32px_rgba(0,122,204,0.25)] transition-[filter] hover:brightness-110 md:inline-flex md:w-auto md:text-xs"
        >
          Discuss Your Project
        </a>
      </div>

      <ProjectGallery />
    </section>
  )
}
