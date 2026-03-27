import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl bg-gradient-to-b from-surface to-transparent">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link 
          to="/"
          className="text-xl font-bold tracking-tighter text-primary font-headline"
        >
          Portfolio
        </Link>
        <div className="hidden md:flex items-center space-x-8 font-headline text-sm tracking-tight">
          <Link 
            to="/"
            className={`${isActive('/') ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-white'} transition-colors duration-300`}
          >
            หน้าแรก
          </Link>
          <Link 
            to="/#projects"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-on-surface-variant hover:text-white transition-colors duration-300"
          >
            ผลงาน
          </Link>
          <Link 
            to="/about"
            className={`${isActive('/about') ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-white'} transition-colors duration-300`}
          >
            เกี่ยวกับ
          </Link>
          <Link 
            to="/contact"
            className={`${isActive('/contact') ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-white'} transition-colors duration-300`}
          >
            ติดต่อ
          </Link>
        </div>
        <button className="bg-primary text-on-primary px-5 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-all active:scale-95 duration-200">
          ดาวน์โหลด CV
        </button>
      </div>
    </nav>
  );
}
