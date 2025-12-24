export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-surface text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col  justify-between items-center gap-6">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Adriane Fernandez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
