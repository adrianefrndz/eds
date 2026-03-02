import { dataAnalyticsProjects } from "../../data/dataAnalytics";

const DataAnalyticsProjects = () => {
  return (
    <section className="bg-gray-50 py-10 md:py-24">
      <h1 className="text-center text-gray-800 text-4xl font-extrabold mb-10">
        {" "}
        Data Analytics
      </h1>
      <div className="max-w-5xl mx-auto px-6 space-y-32">
        {dataAnalyticsProjects.map((project, index) => (
          <div key={index} className="space-y-10">
            {/* ===== Top Photos ===== */}
            <div className="space-y-2">
              {/* Main Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full rounded-xl shadow-xl"
              />

              {/* Optional Second Image */}
              {project.imageUrl2 && (
                <img
                  src={project.imageUrl2}
                  alt={`${project.title} secondary`}
                  className="w-full rounded-xl shadow-lg"
                />
              )}
            </div>

            {/* ===== Project Content ===== */}
            <div className="space-y-6">
              <h2 className="md:text-3xl text-2xl font-bold text-blue-700">
                {project.title}
              </h2>

              <p className="text-sm md:text-md text-slate-600 leading-relaxed">
                <span className="font-semibold">Problem: </span>
                {project.problem}
              </p>

              <p className="text-sm md:text-md text-slate-600 leading-relaxed">
                <span className="font-semibold">Dataset: </span>
                {project.dataset}
              </p>
              {/* ===== Data Cleaning Image (Optional) ===== */}
              {project.imageDataCleaning && (
                <div className="mt-6">
                  <img
                    src={project.imageDataCleaning}
                    alt={`${project.title} data cleaning process`}
                    className="w-150 md:h-100 h-75 rounded-xl"
                  />
                </div>
              )}
              {/* Tools */}
              <div>
                <span className="text-sm md:text-md text-slate-600 font-semibold">
                  Tools Used:
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div>
                <span className="font-semibold text-sm md:text-md text-slate-600">
                  Key Insights:
                </span>
                <ul className="list-disc ml-6 mt-2 text-sm md:text-md text-slate-600 space-y-1">
                  {project.insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              {project.impact && (
                <p className="text-sm md:text-md text-slate-600">
                  <span className="font-semibold">Impact: </span>
                  {project.impact}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataAnalyticsProjects;
