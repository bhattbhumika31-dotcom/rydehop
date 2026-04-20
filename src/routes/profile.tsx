import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BottomNav } from "@/components/BottomNav";
import { Settings, Award, Leaf, Wallet, ShieldCheck, ChevronRight, LogOut } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-background" />
      <div className="relative h-full flex flex-col">
        {/* sunset header */}
        <div className="bg-sunset relative pb-20">
          <StatusBar dark />
          <div className="px-6 pt-3 flex justify-between items-center text-white">
            <h1 className="font-bold text-lg">Profile</h1>
            <Settings className="w-5 h-5" />
          </div>
          <div className="px-6 mt-6 flex items-center gap-4 text-white">
            <div className="w-20 h-20 rounded-3xl glass-dark flex items-center justify-center text-3xl font-bold border-2 border-white/40">
              A
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-xl font-bold">Aanya Sharma</p>
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="text-xs opacity-90">IIT Delhi · 2nd year · CSE</p>
              <p className="text-xs opacity-90 mt-0.5">★ 4.92 · 38 hops shared</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 -mt-12 pb-28 no-scrollbar">
          {/* impact card */}
          <div className="bg-card rounded-3xl p-5 shadow-card grid grid-cols-3 gap-2 text-center">
            <div>
              <Leaf className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xl font-bold">12.4</p>
              <p className="text-[10px] text-muted-foreground">kg CO₂ saved</p>
            </div>
            <div className="border-x border-border">
              <Wallet className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xl font-bold">₹840</p>
              <p className="text-[10px] text-muted-foreground">saved this month</p>
            </div>
            <div>
              <Award className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xl font-bold">L3</p>
              <p className="text-[10px] text-muted-foreground">Hop Hero tier</p>
            </div>
          </div>

          {/* progress */}
          <div className="mt-4 bg-sunset-soft rounded-3xl p-5 border border-primary/20">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span>Next badge: Eco Pioneer</span>
              <span className="text-primary">62%</span>
            </div>
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <div className="h-full w-[62%] bg-sunset rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Share 8 more rides to unlock free coffee at Café Strip ☕
            </p>
          </div>

          {/* menu */}
          <div className="mt-5 bg-card rounded-3xl shadow-card overflow-hidden">
            {[
              { label: "Payment & wallet", sub: "UPI · ₹420 balance" },
              { label: "Saved places", sub: "Hostel · Coaching · Metro" },
              { label: "Safety center", sub: "Trusted contacts · SOS" },
              { label: "Verify with college ID", sub: "Verified ✓" },
            ].map((m) => (
              <Link
                to="/home"
                key={m.label}
                className="flex items-center justify-between px-5 py-4 border-b border-border last:border-b-0 hover:bg-secondary/40"
              >
                <div>
                  <p className="font-semibold text-sm">{m.label}</p>
                  <p className="text-xs text-muted-foreground">{m.sub}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>

          <Link to="/" className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground py-3">
            <LogOut className="w-4 h-4" /> Sign out
          </Link>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
