const projects = [
  { id: 1, name: "Customer Support Bot" },
  { id: 2, name: "SQL Query Generator" },
  { id: 3, name: "Research Paper Summarizer" },
];

export default function Dashboard() {
  return (
    <div className="bg-white text-gray-900 p-8 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">MMcon</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">+ New Notebook</button>
        </div>

        <h2 className="text-lg font-semibold mb-3">Your Projects</h2>

        <div className="border rounded divide-y">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
            >
              <span>{project.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
