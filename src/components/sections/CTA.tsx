export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center bg-surface border border-white/10 rounded-2xl p-12">
        <h3 className="text-3xl font-bold">Let’s build something meaningful</h3>

        <p className="mt-4 text-muted max-w-xl mx-auto">
          I’m open to junior developer roles, freelance work, and
          collaborations. Let’s discuss how I can contribute to your project.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="bg-primary text-black px-6 py-3 rounded-lg font-medium">
            Contact Me
          </a>
          <a href="#" className="border border-white/20 px-6 py-3 rounded-lg">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
