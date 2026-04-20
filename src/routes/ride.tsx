import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { MapBackground } from "@/components/MapBackground";
import { ArrowLeft, ShieldCheck, MessageCircle, Clock, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/ride")({
  component: Ride,
});

function Ride() {
  return (
    <PhoneFrame>
      <MapBackground withRoute />

      <div className="absolute top-0 left-0 right-0 z-30">
        <StatusBar />
        <div className="px-5 pt-3 flex items-center gap-3">
          <Link to="/matches" className="w-10 h-10 rounded-full glass flex items-center justify-center shadow-card">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="px-3 py-1.5 rounded-full glass shadow-card text-xs font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ride confirmed
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-[2.5rem] shadow-glow z-20 animate-slide-up">
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-4" />

        {/* Host */}
        <div className="px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[oklch(0.85_0.16_70)] to-[oklch(0.72_0.19_35)] flex items-center justify-center text-white font-bold text-xl shadow-soft">
              R
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="font-bold">Riya Mehra</p>
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">IIT Delhi · ★ 4.9 · 47 hops</p>
            </div>
          </div>
          <Link to="/chat" className="w-11 h-11 rounded-full bg-sunset flex items-center justify-center shadow-soft">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
          </Link>
        </div>

        {/* Trip */}
        <div className="mx-6 mt-5 p-4 rounded-2xl bg-secondary/60">
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <div className="w-0.5 h-8 bg-border my-1" />
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Pickup · 9:14 AM</p>
                <p className="font-semibold text-sm">Hostel B-12 main gate</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Drop · 9:22 AM</p>
                <p className="font-semibold text-sm">Hauz Khas Metro Gate 2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-6 mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="p-3 rounded-2xl bg-secondary/60">
            <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-sm font-bold">8 min</p>
            <p className="text-[10px] text-muted-foreground">trip</p>
          </div>
          <div className="p-3 rounded-2xl bg-secondary/60">
            <Users className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-sm font-bold">3 of 3</p>
            <p className="text-[10px] text-muted-foreground">sharing</p>
          </div>
          <div className="p-3 rounded-2xl bg-sunset text-primary-foreground">
            <p className="text-[10px] uppercase tracking-wider opacity-80">Your share</p>
            <p className="text-lg font-bold">₹28</p>
          </div>
        </div>

        {/* Co-riders */}
        <div className="mx-6 mt-4 flex items-center justify-between p-3 rounded-2xl bg-secondary/60">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.78_0.18_25)] to-[oklch(0.62_0.18_350)] border-2 border-card flex items-center justify-center text-white text-xs font-bold">N</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.72_0.16_15)] to-[oklch(0.55_0.16_320)] border-2 border-card flex items-center justify-center text-white text-xs font-bold">A</div>
            </div>
            <p className="text-xs font-medium">Niharika & Aanya joining</p>
          </div>
          <span className="text-xs text-primary font-semibold">View</span>
        </div>

        <div className="p-6 pb-6">
          <Link
            to="/ongoing"
            className="block w-full bg-sunset text-primary-foreground py-4 rounded-2xl font-semibold text-center shadow-soft"
          >
            Start the ride
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
