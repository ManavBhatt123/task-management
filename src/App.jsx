import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import TaskList from "./components/TaskList.jsx";
import ProgressCard from "./components/ProgressCard.jsx";
import UpcomingTasks from "./components/UpcomingTasks.jsx";
import Sidebar from "./components/sidebar.jsx";
import { initialTasks } from "./data/tasks.js";

const emptyForm = {
  title: "",
  project: "Personal",
  priority: "Medium",
  dueDate: "Today",
};

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState("All");
  const [activePage, setActivePage] = useState("Overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  const completedCount = tasks.filter((task) => task.completed).length;

  const inProgressCount = tasks.filter(
    (task) => task.status === "in-progress" && !task.completed,
  ).length;

  const overdueCount = tasks.filter(
    (task) => task.dueDate === "Overdue" && !task.completed,
  ).length;

  const filteredTasks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(query) ||
        task.project.toLowerCase().includes(query) ||
        task.priority.toLowerCase().includes(query);

      let matchesTab = true;

      if (activeTab === "Today") {
        matchesTab = task.dueDate === "Today" && !task.completed;
      } else if (activeTab === "Upcoming") {
        matchesTab =
          task.dueDate !== "Today" &&
          task.dueDate !== "Overdue" &&
          !task.completed;
      } else if (activeTab === "Completed") {
        matchesTab = task.completed;
      }

      return matchesSearch && matchesTab;
    });
  }, [tasks, activeTab, searchQuery]);

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              status: task.completed ? "todo" : "completed",
            }
          : task,
      ),
    );
  }

  function openTaskForm() {
    setFormData(emptyForm);
    setIsFormOpen(true);
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleCreateTask(event) {
    event.preventDefault();

    const title = formData.title.trim();

    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      project: formData.project.trim() || "Personal",
      priority: formData.priority,
      dueDate: formData.dueDate,
      status: "todo",
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setActiveTab("All");
    setSearchQuery("");
    setIsFormOpen(false);
    setFormData(emptyForm);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar activePage={activePage} onNavigate={setActivePage} />
        </div>

        <main className="min-w-0 flex-1">
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onAddTask={openTaskForm}
          />

          <div className="mx-auto max-w-[1600px] space-y-6 p-5 sm:p-8">
            {/* Mobile navigation */}
            <div className="flex gap-2 overflow-x-auto lg:hidden">
              {["Overview", "My Tasks", "Calendar", "Projects", "Settings"].map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setActivePage(page)}
                    className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium ${
                      activePage === page
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            {/* Page heading */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {activePage}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Manage your work and keep your day organized.
                </p>
              </div>

              <button
                type="button"
                onClick={openTaskForm}
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                + Create task
              </button>
            </div>

            {/* Statistics */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Total Tasks"
                value={tasks.length}
                change="All tasks"
                symbol="▤"
                color="blue"
                progress={100}
              />

              <StatCard
                title="In Progress"
                value={inProgressCount}
                change="Being worked on"
                symbol="◷"
                color="amber"
                progress={
                  tasks.length ? (inProgressCount / tasks.length) * 100 : 0
                }
              />

              <StatCard
                title="Completed"
                value={completedCount}
                change="Tasks finished"
                symbol="✓"
                color="teal"
                progress={
                  tasks.length ? (completedCount / tasks.length) * 100 : 0
                }
              />

              <StatCard
                title="Overdue"
                value={overdueCount}
                change="Need attention"
                symbol="!"
                color="red"
                progress={
                  tasks.length ? (overdueCount / tasks.length) * 100 : 0
                }
              />
            </section>

            {/* Main content */}
            <section className="grid grid-cols-1 items-start gap-6 2xl:grid-cols-[minmax(0,1.7fr)_minmax(300px,1fr)]">
              <TaskList
                tasks={filteredTasks}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onToggleTask={toggleTask}
                onAddTask={openTaskForm}
              />

              <div className="space-y-6">
                <ProgressCard completed={completedCount} total={tasks.length} />

                <UpcomingTasks tasks={tasks} />
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* New task modal */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsFormOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="task-form-title"
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2
                  id="task-form-title"
                  className="text-xl font-bold text-slate-900"
                >
                  Create a new task
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Add the details to organize your work.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                aria-label="Close form"
                className="rounded-lg px-2 py-1 text-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label
                  htmlFor="task-title"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Task title
                </label>

                <input
                  id="task-title"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  placeholder="e.g. Build the dashboard"
                  required
                  autoFocus
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label
                  htmlFor="task-project"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Project
                </label>

                <input
                  id="task-project"
                  name="project"
                  value={formData.project}
                  onChange={handleFormChange}
                  placeholder="e.g. Development"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="task-priority"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Priority
                  </label>

                  <select
                    id="task-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="task-due-date"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Due date
                  </label>

                  <select
                    id="task-due-date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                  >
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>Oct 24</option>
                    <option>Oct 25</option>
                    <option>Oct 26</option>
                    <option>Oct 27</option>
                    <option>Overdue</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Create task
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
