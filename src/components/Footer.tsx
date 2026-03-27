export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#201f1f] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-black text-primary font-headline uppercase tracking-tight">Portfolio</div>
        <div className="flex items-center space-x-8 font-headline text-xs uppercase tracking-widest">
          <a className="text-gray-500 hover:text-primary transition-colors duration-500" href="#">LinkedIn</a>
          <a className="text-gray-500 hover:text-primary transition-colors duration-500" href="#">GitHub</a>
          <a className="text-gray-500 hover:text-primary transition-colors duration-500" href="#">Email</a>
        </div>
        <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-label">
          © 2024 Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
