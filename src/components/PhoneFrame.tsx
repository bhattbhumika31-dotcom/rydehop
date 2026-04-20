import { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-glow flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-[420px] h-[860px] max-h-[95vh] rounded-[3rem] bg-card shadow-glow overflow-hidden border-[10px] border-foreground/90">
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground/90 rounded-full z-50" />
        <div className="relative w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
