export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div>
        <h2 className="text-2xl font-semibold mb-12 text-slate-200 text-center">
          Contacts
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="flex gap-8">
          {/* Email */}
          <a
            href="mailto:adrianefrndz07@gmail.com"
            className="text-slate-400 hover:text-sky-400 transition"
            aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8">
              <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0 8 5 8-5H4zm16 12V8l-8 5-8-5v10h16z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/adrianefrndz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
            aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adriane-fernandez-893a54337/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition"
            aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8">
              <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.48 1s2.5 1 2.5 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.84v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.78 2.65 4.78 6.1v9.42h-4v-8.36c0-2-.04-4.57-2.78-4.57-2.79 0-3.22 2.18-3.22 4.43v8.5h-4V7.98z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
