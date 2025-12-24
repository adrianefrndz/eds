export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/20 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between text-black">
        <h1 className="font-semibold text-lg">Adriane Fernandez</h1>

        <ul className="flex gap-6 text-sm text-muted">
          <li>
            <a
              href="#home"
              className="hover:text-primary transition hover:text-cyan-400">
              Home
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-primary transition  hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
