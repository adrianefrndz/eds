import { useState } from "react";
import { projects } from "../../data/projects";
import ImageGalleryModal from "../layout/ImageModal";

export default function Portfolio() {
  const [activeImages, setActiveImages] = useState<string[] | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12 text-slate-200">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.title}
              className="h-full flex flex-col border border-white/10
                         hover:border-sky-400 transition rounded-lg overflow-hidden">
              {/* Preview Image */}
              <div className="h-44 flex items-center justify-center bg-slate-900">
                {Array.isArray(project.images) &&
                project.images.length > 0 &&
                project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="max-h-44 max-w-full object-contain"
                  />
                ) : (
                  <div className="text-slate-500 text-sm">No image</div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 bg-slate-800 flex flex-col flex-1">
                <h3 className="text-lg font-medium text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full 
                                 bg-slate-900 text-slate-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-6 flex items-center gap-4 text-sm">
                  {project.repo ? (
                    project.repo.startsWith("http") ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:underline">
                        Source
                      </a>
                    ) : (
                      <span className="text-slate-400 italic">
                        {project.repo}
                      </span>
                    )
                  ) : null}

                  {Array.isArray(project.images) &&
                    project.images.length > 1 && (
                      <button
                        onClick={() => setActiveImages(project.images ?? [])}
                        className="ml-auto text-gray-400 text-[12px] hover:underline">
                        See more photos
                      </button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeImages && (
        <ImageGalleryModal
          images={activeImages}
          onClose={() => setActiveImages(null)}
        />
      )}
    </section>
  );
}
