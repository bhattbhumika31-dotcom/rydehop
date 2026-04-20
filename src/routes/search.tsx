import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { ArrowLeft, MapPin, Circle, Clock, Star } from "lucide-react";

export const Route = createFileRoute("/search")({
  component: Search,
});

const recents = [
  { name: "Hauz Khas Metro", sub: "1.2 km · 6 min" },
  { name: "Block C Hostel", sub: "0.8 km · 4 min" },
  { name: "FIITJEE Coaching", sub: "1.0 km · 5 min" },
  { name: "Library Annex", sub: "0.4 km · 2 min" },
];

function Search() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-background" />
      <div className="relative h-full flex flex-col">
        <StatusBar />
        <div className="px-5 pt-3 pb-4 flex items-center gap-3">
          <Link to="/home" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-bold text-lg">Plan a hop</h1>
        </div>

        {/* From / To */}
        <div className="mx-5 bg-card rounded-3xl p-5 shadow-card">
          <div className="flex gap-3">
            <div className="flex flex-col items-center pt-1.5">
              <Circle className="w-3 h-3 fill-primary text-primary" />
              <div className="w-0.5 h-10 bg-border my-1" />
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">FROM</p>
                <p className="font-semibold">Girls Hostel B-12</p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground">TO</p>
                <input
                  defaultValue="Hauz Khas Metro Gate 2"
                  className="font-semibold w-full bg-transparent outline-none text-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 mt-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Recent
          </p>
          <div className="space-y-2">
            {recents.map((r) => (
              <button
                key={r.name}
                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-secondary transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.sub}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-sunset-soft border border-primary/20">
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Fairness zone: 1 km</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  We keep rides short and shareable so everyone pays a fair, fixed split.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1" />
        <div className="p-5">
          <Link
            to="/matches"
            className="block w-full bg-sunset text-primary-foreground py-4 rounded-2xl font-semibold text-center shadow-soft"
          >
            Find ride buddies →
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
