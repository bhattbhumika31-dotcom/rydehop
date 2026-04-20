export function MapBackground({ withRoute = false }: { withRoute?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* warm sunset map base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.93 0.05 70) 0%, oklch(0.9 0.07 50) 50%, oklch(0.86 0.09 30) 100%)",
        }}
      />
      {/* grid streets */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="streets" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="oklch(0.78 0.08 40)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#streets)" />
        {/* main roads */}
        <path d="M 0 200 Q 200 180 420 240" stroke="oklch(1 0 0 / 0.6)" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M 80 0 Q 120 300 200 600" stroke="oklch(1 0 0 / 0.6)" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M 300 0 Q 280 400 350 800" stroke="oklch(1 0 0 / 0.5)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 0 500 Q 200 470 420 520" stroke="oklch(1 0 0 / 0.5)" strokeWidth="10" fill="none" strokeLinecap="round" />

        {/* parks / blocks */}
        <rect x="20" y="280" width="80" height="100" rx="14" fill="oklch(0.85 0.12 140 / 0.5)" />
        <rect x="240" y="80" width="100" height="80" rx="14" fill="oklch(0.85 0.12 140 / 0.45)" />
        <rect x="220" y="380" width="60" height="60" rx="10" fill="oklch(0.85 0.12 140 / 0.4)" />

        {withRoute && (
          <>
            <path
              d="M 90 600 Q 180 450 260 350 T 340 180"
              stroke="oklch(0.7 0.19 35)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="0"
            />
            {/* pickup */}
            <circle cx="90" cy="600" r="10" fill="oklch(0.7 0.19 35)" />
            <circle cx="90" cy="600" r="4" fill="white" />
            {/* dropoff */}
            <rect x="332" y="172" width="16" height="16" rx="3" fill="oklch(0.4 0.12 290)" />
          </>
        )}
      </svg>
    </div>
  );
}
