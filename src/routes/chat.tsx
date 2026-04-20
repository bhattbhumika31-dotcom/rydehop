import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BottomNav } from "@/components/BottomNav";
import { ArrowLeft, Send, Smile } from "lucide-react";

export const Route = createFileRoute("/chat")({
  component: Chat,
});

const msgs = [
  { me: false, text: "Heyy! I'm at the gate already 🌞", time: "9:12 AM" },
  { me: true, text: "Coming in 1 min, just grabbing my bag!", time: "9:12 AM" },
  { me: false, text: "All good, Niharika is here too", time: "9:13 AM" },
  { me: true, text: "Perfect, on my way ✨", time: "9:13 AM" },
  { me: false, text: "I'll be wearing a yellow hoodie 💛", time: "9:13 AM" },
];

function Chat() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-sunset-soft" />
      <div className="relative h-full flex flex-col">
        <StatusBar />
        <div className="px-5 pt-3 pb-3 flex items-center gap-3 glass border-b border-border/40">
          <Link to="/ride" className="w-9 h-9 rounded-full bg-card flex items-center justify-center shadow-card">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[oklch(0.85_0.16_70)] to-[oklch(0.72_0.19_35)] flex items-center justify-center text-white font-bold">
            R
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">Ride with Riya + 2</p>
            <p className="text-xs text-primary">● Active · arriving in 4 min</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 no-scrollbar">
          <p className="text-center text-[10px] text-muted-foreground">TODAY · 9:12 AM</p>
          {msgs.map((m, i) => (
            <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm shadow-card ${
                  m.me
                    ? "bg-sunset text-primary-foreground rounded-br-md"
                    : "bg-card text-foreground rounded-bl-md"
                }`}
              >
                {m.text}
                <p className={`text-[10px] mt-1 ${m.me ? "opacity-80" : "text-muted-foreground"}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-24 pt-2">
          <div className="bg-card rounded-full px-4 py-2 flex items-center gap-2 shadow-card">
            <Smile className="w-5 h-5 text-muted-foreground" />
            <input placeholder="Type a message…" className="flex-1 bg-transparent outline-none text-sm" />
            <button className="w-9 h-9 rounded-full bg-sunset flex items-center justify-center shadow-soft">
              <Send className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
