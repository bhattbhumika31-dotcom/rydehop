import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { MapBackground } from "@/components/MapBackground";
import { Phone, Shield, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/ongoing")({
  component: Ongoing,
});

function Ongoing() {
  return (
    <PhoneFrame>
      <MapBackground withRoute />

      <div className="absolute top-0 left-0 right-0 z-30">
        <StatusBar />
        <div className="px-5 pt-3 flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-sunset shadow-soft text-primary-foreground text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            On the way · 4 min to drop
          </div>
          <button className="w-11 h-11 rounded-full bg-destructive flex items-center justify-center shadow-soft">
            <Shield className="w-5 h-5 text-destructive-foreground" />
          </button>
        </div>
      </div>

      {/* Live car */}
      <div className="absolute top-[45%] left-[55%] z-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-white shadow-glow flex items-center justify-center text-3xl">
          🚗
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-[2.5rem] shadow-glow z-20 animate-slide-up">
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-4" />

        <div className="px-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Arriving at Hauz Khas Metro</p>
          <h2 className="text-3xl font-bold tracking-tight mt-1" style={{ letterSpacing: '-0.02em' }}>
            4 min <span className="text-muted-foreground font-normal text-lg">· 0.6 km left</span>
          </h2>
        </div>

        {/* progress */}
        <div className="mx-6 mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-[68%] bg-sunset rounded-full" />
        </div>

        <div className="mx-6 mt-5 p-4 rounded-2xl bg-secondary/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[oklch(0.85_0.16_70)] to-[oklch(0.72_0.19_35)] flex items-center justify-center text-white font-bold">
              R
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate">Riya is driving</p>
              <p className="text-xs text-muted-foreground truncate">Activa · DL 8S AB 1234</p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link to="/chat" className="w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </Link>
            <button className="w-10 h-10 rounded-full bg-sunset shadow-soft flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="mx-6 mt-3 p-3 rounded-2xl bg-sunset-soft border border-primary/20 flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <p className="text-xs">Trip shared with 2 emergency contacts</p>
        </div>

        <div className="p-6">
          <Link
            to="/profile"
            className="block w-full bg-foreground text-background py-4 rounded-2xl font-semibold text-center"
          >
            End ride · Pay ₹28
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
