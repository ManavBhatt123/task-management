export default function ProjectsView({ tasks }) {
  const projectNames = [
    ...new Set(tasks.map((task) => task.project.trim()).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-slate-900">Projects</h2>

      <div className="space-y-3">
        {projectNames.map((project) => (
          <div
            key={project}
            className="rounded-xl border border-slate-200 bg-white px-5 py-4"
          >
            <h3 className="font-semibold text-slate-800">{project}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
