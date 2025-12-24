const skillGroups = [
  {
    title: "Android Development",
    skills: ["Java", "Firebase", "SQLite", "XML"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS Tailwind", "TypeScript", "React.js", "Node.js"],
  },
  {
    title: "Data Analytics",
    skills: ["SQL", "Python", "Data Visualization"],
  },
  {
    title: "Tools",
    skills: [
      "Android Studio",
      "VS Code",
      "Cursor",
      "Eclipse",
      "IntelliJ",
      "BigQuery",
      "GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12 text-slate-200">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-medium text-slate-300 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
