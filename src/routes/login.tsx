import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Mail, Lock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-sunset-soft" />
      <div className="relative h-full flex flex-col p-8 pt-20">
        <div>
          <h1 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Welcome <span className="text-gradient-sunset">back</span>
          </h1>
          <p className="text-muted-foreground mt-2">Use your campus email to continue</p>
        </div>

        <div className="mt-10 space-y-4">
          <div className="bg-card rounded-2xl p-4 shadow-card">
            <label className="text-xs font-medium text-muted-foreground">College email</label>
            <div className="flex items-center gap-3 mt-1">
              <Mail className="w-5 h-5 text-primary" />
              <input
                defaultValue="codhers@geu.ac.in"
                className="flex-1 bg-transparent outline-none text-foreground font-medium"
              />
            </div>
          </div>
          <div className="bg-card rounded-2xl p-4 shadow-card">
            <label className="text-xs font-medium text-muted-foreground">Password</label>
            <div className="flex items-center gap-3 mt-1">
              <Lock className="w-5 h-5 text-primary" />
              <input
                type="password"
                defaultValue="••••••••"
                className="flex-1 bg-transparent outline-none text-foreground font-medium"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-primary" />
          Verified college email · End-to-end safe
        </div>

        <div className="flex-1" />

        <Link
          to="/home"
          className="w-full bg-sunset text-primary-foreground py-4 rounded-2xl font-semibold text-center shadow-soft mb-4"
        >
          Sign in
        </Link>
        <p className="text-center text-sm text-muted-foreground">
          New here? <span className="text-primary font-semibold">Create an account</span>
        </p>
      </div>
    </PhoneFrame>
  );
}
