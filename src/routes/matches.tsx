import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { ArrowLeft, Clock, Users, Leaf, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/matches")({
  component: Matches,
});

const rides = [
  {
    host: "Riya M.",
    initial: "R",
    college: "IIT Delhi · 2nd yr",
    rating: 4.9,
    departs: "in 4 min",
    seats: 2,
    total: 3,
    fare: 28,
    note: "Heading to metro, can detour 200m",
    color: "from-[oklch(0.85_0.16_70)] to-[oklch(0.72_0.19_35)]",
  },
  {
    host: "Kabir + 1",
    initial: "K",
    college: "DU North · 3rd yr",
    rating: 4.8,
    departs: "in 9 min",
    seats: 1,
    total: 3,
    fare: 24,
    note: "Quiet ride, study mode 🤫",
    color: "from-[oklch(0.78_0.18_25)] to-[oklch(0.62_0.18_350)]",
  },
  {
    host: "Sana K.",
    initial: "S",
    college: "IIT Delhi · 1st yr",
    rating: 5.0,
    departs: "in 15 min",
    seats: 3,
    total: 3,
    fare: 22,
    note: "Music + good vibes only ✨",
    color: "from-[oklch(0.72_0.16_15)] to-[oklch(0.55_0.16_320)]",
  },
];

function Matches() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-sunset-soft" />
      <div className="relative h-full flex flex-col">
        <StatusBar />
        <div className="px-5 pt-3 pb-2 flex items-center gap-3">
          <Link to="/search" className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-bold text-lg leading-tight">3 ride buddies nearby</h1>
            <p className="text-xs text-muted-foreground">Hostel B-12 → Hauz Khas Metro</p>
          </div>
        </div>

        <div className="px-5 mt-2 flex gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-foreground text-background font-medium">All</span>
          <span className="px-3 py-1.5 rounded-full bg-card font-medium shadow-card">Female only 💗</span>
          <span className="px-3 py-1.5 rounded-full bg-card font-medium shadow-card">Quiet</span>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6 no-scrollbar space-y-4">
          {rides.map((r, i) => (
            <Link
              key={r.host}
              to="/ride"
              className="block bg-card rounded-3xl p-5 shadow-card hover:shadow-soft transition-all animate-slide-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold shadow-soft`}>
                    {r.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold">{r.host}</p>
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">{r.college} · ★ {r.rating}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tight">₹{r.fare}</p>
                  <p className="text-[10px] text-muted-foreground">your share</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {r.departs}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> {r.seats}/{r.total} seats
                </div>
                <div className="flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-primary" /> shared
                </div>
              </div>

              <div className="mt-3 px-3 py-2 rounded-xl bg-secondary text-xs italic text-foreground/80">
                "{r.note}"
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
