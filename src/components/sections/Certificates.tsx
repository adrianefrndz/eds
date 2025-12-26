import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12 text-slate-200">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-slate-800 border border-white/10 rounded-xl overflow-hidden
                 hover:border-sky-400 transition flex flex-col h-full">
              {/* Image container ALWAYS rendered */}
              <div className="h-40 bg-slate-900 flex items-center justify-center">
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-40 max-w-full object-contain
                       hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Content pushed to bottom */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mt-auto">
                  <h3 className="text-lg font-medium text-slate-100">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
                  <p className="mt-1 text-sm text-slate-500">{cert.year}</p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-sky-400 hover:underline">
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
