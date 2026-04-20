export function StatusBar({ dark = false }: { dark?: boolean }) {
  const cls = dark ? "text-white" : "text-foreground";
  return (
    <div className={`flex justify-between items-center px-8 pt-3 pb-1 text-xs font-semibold ${cls} relative z-10`}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span>●●●</span>
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  );
}
