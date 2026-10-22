export default function Header({ searchQuery, onSearchChange, onAddTask }) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex flex-col gap-5 border-b border-slate-200 bg-white px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="mb-1 text-sm text-slate-500">{formattedDate}</p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Good morning, Manav
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Here’s what’s happening with your tasks today.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="relative min-w-0 flex-1 sm:w-64 sm:flex-none">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400">
            ⌕
          </span>

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search tasks..."
            aria-label="Search tasks"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </label>

        <button
          type="button"
          aria-label="Notifications"
          title="Notifications"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-600 transition hover:bg-slate-50"
        >
          ♧
        </button>

        <button
          type="button"
          onClick={onAddTask}
          className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
        >
          + New Task
        </button>
      </div>
    </header>
  );
}
