import { dataAnalyticsProjects } from "../../data/dataAnalytics";

const DataAnalyticsProjects = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {dataAnalyticsProjects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full rounded-xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <h2 className="text-3xl md:text-3xl font-bold text-blue-700 mb-6">
                {project.title}
              </h2>

              <p className="text-md text-slate-600 leading-relaxed text-justify">
                {project.description}
              </p>

              <p className="text-md text-slate-600 mt-4 leading-relaxed text-justify">
                {project.description2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataAnalyticsProjects;
