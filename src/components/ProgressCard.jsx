export default function ProgressCard({ completed, total }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-bold text-slate-900">Today’s Progress</h3>

      <p className="mt-1 text-sm text-slate-500">Small steps add up.</p>

      <div className="my-6 flex justify-center">
        <div className="relative h-32 w-32">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full -rotate-90"
            role="img"
            aria-label={`${percentage}% of tasks completed`}
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="9"
            />

            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#2563eb"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-500"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-900">
              {percentage}%
            </span>
            <span className="text-xs text-slate-500">completed</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-slate-50 p-4 text-center">
        <p className="text-sm font-semibold text-slate-800">
          {completed} of {total} tasks completed
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {total - completed} tasks remaining
        </p>
      </div>
    </section>
  );
}
