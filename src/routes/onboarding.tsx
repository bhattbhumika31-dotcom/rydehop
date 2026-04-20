import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { useState } from "react";
import { GraduationCap, Users, Leaf } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
});

const slides = [
  {
    icon: GraduationCap,
    title: "Verified students only",
    body: "Sign up with your college email. Every ride buddy is a real campus student — no strangers, no surprises.",
    bg: "from-[oklch(0.85_0.16_70)] to-[oklch(0.75_0.18_35)]",
  },
  {
    icon: Users,
    title: "Hop together, save together",
    body: "Match with peers heading the same way — hostel to campus, metro to coaching, anywhere within 1 km.",
    bg: "from-[oklch(0.78_0.18_25)] to-[oklch(0.62_0.18_350)]",
  },
  {
    icon: Leaf,
    title: "Fair fares. Greener trips.",
    body: "Costs split equally. No surge, no exploitation — just affordable, sustainable campus mobility.",
    bg: "from-[oklch(0.72_0.16_15)] to-[oklch(0.45_0.14_300)]",
  },
];

function Onboarding() {
  const [i, setI] = useState(0);
  const slide = slides[i];
  const Icon = slide.icon;
  const last = i === slides.length - 1;

  return (
    <PhoneFrame>
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`} />
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="relative h-full flex flex-col p-8 text-white">
        <div className="flex justify-end pt-8">
          <Link to="/login" className="text-sm opacity-80 font-medium">Skip</Link>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-[2.5rem] glass-dark flex items-center justify-center mb-10 animate-float">
            <Icon className="w-14 h-14" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4 max-w-[280px]" style={{ letterSpacing: '-0.03em' }}>
            {slide.title}
          </h2>
          <p className="text-base opacity-85 font-light max-w-[300px] leading-relaxed">
            {slide.body}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-1.5 bg-white/40"}`}
            />
          ))}
        </div>

        {last ? (
          <Link
            to="/login"
            className="w-full bg-white text-foreground py-4 rounded-2xl font-semibold text-center shadow-soft"
          >
            Get started
          </Link>
        ) : (
          <button
            onClick={() => setI(i + 1)}
            className="w-full bg-white text-foreground py-4 rounded-2xl font-semibold shadow-soft"
          >
            Continue
          </button>
        )}
      </div>
    </PhoneFrame>
  );
}
