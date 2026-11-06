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
src="/assets/breakwall-logo-clean.png"
  alt="Breakwall Specialist Inc. logo"
  className="relative h-full w-auto object-contain [filter:drop-shadow(0_0_3px_rgba(255,255,255,0.95))_drop-shadow(0_0_10px_rgba(255,255,255,0.8))_drop-shadow(0_0_22px_rgba(255,255,255,0.55))]"
      />
    </div>
  )
}
