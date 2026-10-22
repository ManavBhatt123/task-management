const styles = {
  blue: {
    icon: "text-blue-700 bg-blue-50",
    bar: "bg-blue-600",
  },
  amber: {
    icon: "text-amber-700 bg-amber-50",
    bar: "bg-amber-500",
  },
  teal: {
    icon: "text-teal-700 bg-teal-50",
    bar: "bg-teal-600",
  },
  red: {
    icon: "text-red-700 bg-red-50",
    bar: "bg-red-500",
  },
};

export default function StatCard({
  title,
  value,
  change,
  symbol,
  color = "blue",
  progress = 0,
}) {
  const style = styles[color] ?? styles.blue;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{title}</p>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${style.icon}`}
          aria-hidden="true"
        >
          {symbol}
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <p className="text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </p>

        <span className="pb-1 text-xs text-slate-500">{change}</span>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${style.bar}`}
          style={{
            width: `${Math.min(100, Math.max(0, progress))}%`,
          }}
        />
      </div>
    </article>
  );
}
