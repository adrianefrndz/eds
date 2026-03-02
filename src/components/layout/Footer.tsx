export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-5 md:py-10 bg-surface text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col  justify-between items-center gap-6">
        <p className="text-gray-600 text-[10px] md:text-base text-center">
          © {new Date().getFullYear()} Adriane Fernandez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
