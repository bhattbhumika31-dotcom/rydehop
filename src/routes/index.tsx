import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RydeHop — Campus rides, shared." },
      { name: "description", content: "Premium student-only ride sharing for campus commutes. Hostel, metro, coaching — share the ride, split the vibe." },
      { property: "og:title", content: "RydeHop — Campus rides, shared." },
      { property: "og:description", content: "Student-only ride sharing for short campus commutes." },
    ],
  }),
  component: Splash,
});

function Splash() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-sunset" />
      <div className="absolute inset-0 bg-glow opacity-60" />
      {/* sun */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-gradient-to-b from-[oklch(0.95_0.12_85)] to-[oklch(0.78_0.19_45)] blur-md animate-pulse-glow" />
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-b from-[oklch(0.98_0.08_85)] to-[oklch(0.85_0.18_55)]" />

      {/* mountain silhouette */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 420 200" preserveAspectRatio="none">
        <path d="M0,200 L0,140 Q60,80 120,120 T240,100 Q310,60 380,110 L420,90 L420,200 Z" fill="oklch(0.35 0.1 320 / 0.6)" />
        <path d="M0,200 L0,170 Q80,120 160,150 T320,140 Q380,120 420,150 L420,200 Z" fill="oklch(0.25 0.08 310 / 0.8)" />
      </svg>

      <div className="relative z-10 h-full flex flex-col items-center justify-between py-24 px-8 text-white">
        <div />
        <div className="text-center mt-32">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-dark mb-6 text-xs font-medium tracking-wide">
            <Sparkles className="w-3 h-3" /> FOR STUDENTS, BY STUDENTS
          </div>
          <h1 className="text-7xl font-black tracking-tight" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.04em' }}>
            Ryde<span className="italic font-light">Hop</span>
          </h1>
          <p className="mt-3 text-base font-light opacity-90 max-w-[260px] mx-auto">
            Share the ride. Split the vibe. Skip the wait.
          </p>
        </div>

        <Link
          to="/onboarding"
          className="w-full bg-white text-foreground py-4 rounded-2xl font-semibold text-center shadow-soft hover:scale-[1.02] transition-transform"
        >
          Let's hop in →
        </Link>
      </div>
    </PhoneFrame>
  );
}
