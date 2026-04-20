import { Link, useLocation } from "@tanstack/react-router";
import { Home, Map, MessageCircle, User } from "lucide-react";

const items = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/rides", icon: Map, label: "Rides" },
  { to: "/chat", icon: MessageCircle, label: "Chat" },
  { to: "/profile", icon: User, label: "Profile" },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="absolute bottom-0 left-0 right-0 glass border-t border-border/40 px-2 py-2 pb-4 z-40">
      <div className="flex justify-around items-center">
        {items.map(({ to, icon: Icon, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-all"
            >
              <div
                className={`p-2 rounded-2xl transition-all ${
                  active ? "bg-sunset shadow-soft" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${active ? "text-primary-foreground" : "text-muted-foreground"}`}
                  strokeWidth={active ? 2.5 : 2}
                />
              </div>
              <span
                className={`text-[10px] font-medium ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
