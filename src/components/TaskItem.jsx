const priorityStyles = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-teal-50 text-teal-700",
};

export default function TaskItem({ task, onToggle }) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.title}" as ${
            task.completed ? "incomplete" : "completed"
          }`}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
        />

        <div className="min-w-0">
          <p
            className={`wrap-break-word text-sm font-semibold ${
              task.completed ? "text-slate-400 line-through" : "text-slate-800"
            }`}
          >
            {task.title}
          </p>

          <p className="mt-1 text-xs text-slate-500">{task.project}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pl-7 sm:pl-0">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            priorityStyles[task.priority] ?? priorityStyles.Medium
          }`}
        >
          {task.priority}
        </span>

        <span className="min-w-16 text-right text-xs text-slate-500">
          {task.dueDate}
        </span>
      </div>
    </div>
  );
}
