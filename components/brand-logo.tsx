type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <div className={`brand-logo-enter inline-block ${className}`}>
      {/* Beacon glow positioned over the lighthouse lamp room */}
      <span
        aria-hidden="true"
        className="beacon-glow pointer-events-none absolute left-1/2 top-[7%] size-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <img
        src="/assets/breakwall-logo-official.png"
        alt="Breakwall Specialist Inc. logo"
        className="relative h-full w-auto object-contain [filter:drop-shadow(0_12px_28px_rgba(0,0,0,0.5))]"
      />
    </div>
  )
}
