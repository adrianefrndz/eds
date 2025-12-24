import profile from "../../assets/profile.png";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Adriane Fernandez
          </h1>

          {/* Job Title */}
          <h2 className="text-2xl md:text-2xl font-semibold text-slate-600 mt-2">
            Software Developer | Data Analyst
          </h2>

          {/* Education */}
          <div className="mt-6 text-sm text-slate-500">
            <p>Bachelor of Secondary Education major in Mathematics</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-sky-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-sky-300">
              View Projects
            </a>
            <a
              href="#certificates"
              className="border border-slate-300 px-6 py-3 rounded-lg text-slate-700 hover:bg-slate-400">
              Certificates
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile} // replace with your image path
            alt="Adriane Fernandez"
            className="w-40 h-40 md:w-70 md:h-70  object-cover rounded-b-full"
          />
        </div>
      </div>
    </section>
  );
}
