import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BottomNav } from "@/components/BottomNav";
import { MapBackground } from "@/components/MapBackground";
import { Search, Bell, Building2, Train, BookOpen, Coffee } from "lucide-react";

export const Route = createFileRoute("/home")({
  component: Home,
});

const quickPlaces = [
  { icon: Building2, label: "Hostel", sub: "5 rides now" },
  { icon: Train, label: "Metro", sub: "12 rides" },
  { icon: BookOpen, label: "Coaching", sub: "8 rides" },
  { icon: Coffee, label: "Café Strip", sub: "3 rides" },
];

function Home() {
  return (
    <PhoneFrame>
      <MapBackground />

      {/* top header */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <StatusBar />
        <div className="px-5 pt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-sunset flex items-center justify-center text-white font-bold shadow-soft">
              A
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Hey there 👋</p>
              <p className="font-semibold text-foreground">codHERS</p>
            </div>
          </div>
          <button className="w-11 h-11 rounded-full glass flex items-center justify-center shadow-card">
            <Bell className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* live ride pins (visible above the bottom sheet) */}
      <div className="absolute top-[22%] left-[28%] z-10">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-glow" style={{ width: 60, height: 60, transform: 'translate(-30px, -30px)' }} />
          <div className="w-12 h-12 rounded-full bg-sunset flex items-center justify-center shadow-glow border-4 border-white">
            <span className="text-xl">🚗</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[26%] right-[18%] z-10">
        <div className="w-10 h-10 rounded-full bg-card shadow-soft border-2 border-primary flex items-center justify-center text-base">🛵</div>
      </div>

      {/* bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-[2.5rem] shadow-glow z-20 pb-24 pt-3 animate-slide-up">
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto mb-5" />
        <div className="px-6">
          <h2 className="text-2xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Where to, <span className="text-gradient-sunset">friend?</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Within 1 km · fair share zone</p>

          <Link
            to="/search"
            className="mt-4 flex items-center gap-3 bg-secondary rounded-2xl px-4 py-4 shadow-card"
          >
            <Search className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Search a destination…</span>
          </Link>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-6 mb-3">
            Quick hops
          </p>
          <div className="grid grid-cols-2 gap-3">
            {quickPlaces.map(({ icon: Icon, label, sub }) => (
              <Link
                key={label}
                to="/search"
                className="bg-secondary/60 rounded-2xl p-4 hover:shadow-soft transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-sunset flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </PhoneFrame>
  );
}
