export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold text-black/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Ameer Hamza. Data Science Portfolio.</p>
        <p className="text-orange-600">Built with Next.js, AI and analytics.</p>
      </div>
    </footer>
  );
}