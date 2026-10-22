const navItems = [
  { label: "Overview", symbol: "▦" },
  { label: "My Tasks", symbol: "☑" },
  { label: "Projects", symbol: "▤" },
  { label: "Settings", symbol: "⚙" },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-5">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
          T
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            TaskFlow
          </h1>
          <p className="text-xs text-slate-500">Plan. Focus. Achieve.</p>
        </div>
      </div>

      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = activePage === item.label;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate(item.label)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="w-5 text-center text-lg" aria-hidden="true">
                {item.symbol}
              </span>
              {item.label}
              {item.label === "My Tasks" && (
                <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  8
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-100 pt-5">
        <div className="flex items-center gap-3 rounded-xl p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-semibold text-teal-800">
            M
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              Manav
            </p>
            <p className="truncate text-xs text-slate-500">Free workspace</p>
          </div>

          <span className="ml-auto text-slate-400" aria-hidden="true">
            ⋯
          </span>
        </div>
      </div>
    </aside>
  );
}
