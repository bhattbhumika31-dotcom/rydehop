import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BottomNav } from "@/components/BottomNav";
import { Clock, MapPin, Repeat } from "lucide-react";

export const Route = createFileRoute("/rides")({
  component: Rides,
});

const upcoming = [
  { from: "Hostel B-12", to: "Hauz Khas Metro", time: "Today · 9:14 AM", with: "Riya + 2", price: 28 },
];

const past = [
  { from: "Coaching Hub", to: "Block C Hostel", time: "Yesterday · 7:40 PM", with: "Sana + 1", price: 22 },
  { from: "Library", to: "Café Strip", time: "Tue · 5:10 PM", with: "Kabir", price: 18 },
  { from: "Metro Gate 2", to: "IIT Main Gate", time: "Mon · 8:55 AM", with: "Aditi + 2", price: 25 },
  { from: "Hostel A-3", to: "FIITJEE", time: "Sun · 10:00 AM", with: "Riya", price: 30 },
];

function Rides() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-background" />
      <div className="relative h-full flex flex-col">
        <StatusBar />

        <div className="px-6 pt-3 pb-2">
          <h1 className="text-3xl font-bold tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Your <span className="text-gradient-sunset">hops</span>
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-28 no-scrollbar">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-3">Upcoming</p>
          {upcoming.map((r) => (
            <Link
              to="/ride"
              key={r.from}
              className="block bg-sunset rounded-3xl p-5 text-primary-foreground shadow-soft mb-3"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium opacity-90 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {r.time}
                </span>
                <span className="text-2xl font-bold">₹{r.price}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                {r.from} → {r.to}
              </div>
              <p className="text-xs opacity-90 mt-1">Sharing with {r.with}</p>
            </Link>
          ))}

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-6 mb-3">History</p>
          <div className="space-y-2">
            {past.map((r, i) => (
              <div key={i} className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Repeat className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{r.from} → {r.to}</p>
                  <p className="text-xs text-muted-foreground">{r.time} · {r.with}</p>
                </div>
                <p className="font-bold">₹{r.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
