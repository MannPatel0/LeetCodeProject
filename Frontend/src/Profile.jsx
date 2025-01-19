import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/project")}
      className="bg-zinc-800 rounded-lg h-64 cursor-pointer hover:bg-zinc-700 transition-colors overflow-hidden"
    >
      <div className="h-full w-full flex flex-col">
        <img
          src="/api/placeholder/400/200"
          alt="Project thumbnail"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <span className="text-gray-400">Project</span>
        </div>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-900 p-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white mb-6 flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="bg-zinc-800 rounded-lg p-6">
          <img
            src="/api/placeholder/800/400"
            alt="Project detail"
            className="w-full rounded-lg mb-6"
          />
          <h1 className="text-2xl text-white mb-4">Project Title</h1>
          <p className="text-gray-400">
            Project description and details would go here. Click the back button
            to return to the main page.
          </p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-zinc-900 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl text-white font-medium mb-4">Mann Patel</h1>
          <div className="bg-zinc-800 rounded-lg p-4 h-12">
            <span className="text-white">💡</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-white">📑</span>
              <h2 className="text-white">Projects</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-white">
                <span>⇅</span>
              </button>
              <button className="text-gray-400 hover:text-white">
                <span>↑</span>
              </button>
              <button className="text-gray-400 hover:text-white">
                <span>🔍</span>
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
