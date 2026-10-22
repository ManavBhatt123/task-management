export default function UpcomingTasks({ tasks }) {
  const upcomingTasks = tasks.filter((task) => !task.completed).slice(0, 4);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900">Upcoming</h3>

        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
          {upcomingTasks.length} tasks
        </span>
      </div>

      <div className="mt-5 space-y-5">
        {upcomingTasks.length > 0 ? (
          upcomingTasks.map((task) => (
            <div key={task.id} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-lg text-blue-600">
                □
              </div>

              <div className="min-w-0 flex-1">
                <p className="wrap-break-word text-sm font-semibold text-slate-800">
                  {task.title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {task.dueDate} · {task.project}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="py-6 text-center text-sm text-slate-500">
            You’re all caught up!
          </p>
        )}
      </div>
    </section>
  );
}
