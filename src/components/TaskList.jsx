import TaskItem from "./TaskItem.jsx";

const tabs = ["All", "Today", "Upcoming", "Completed"];

export default function TaskList({
  tasks,
  activeTab,
  onTabChange,
  onToggleTask,
  onAddTask,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-900">My Tasks</h3>
          <p className="mt-1 text-sm text-slate-500">
            Keep track of your daily work.
          </p>
        </div>

        <button
          type="button"
          onClick={onAddTask}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          + Add task
        </button>
      </div>

      <div className="mt-5 flex gap-5 overflow-x-auto border-b border-slate-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`shrink-0 border-b-2 pb-3 text-sm font-medium transition ${
              activeTab === tab
                ? "border-blue-600 text-blue-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-1">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
          ))
        ) : (
          <div className="py-12 text-center">
            <div className="text-3xl text-slate-300" aria-hidden="true">
              ✓
            </div>
            <p className="mt-3 font-semibold text-slate-700">No tasks found</p>
            <p className="mt-1 text-sm text-slate-500">
              Try another filter or create a new task.
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
        Showing {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
      </div>
    </section>
  );
}
