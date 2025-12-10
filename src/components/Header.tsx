import { Wifi } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-600">CBN</span>
              <span className="text-2xl font-light text-cyan-500">Fiber</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Beranda
            </button>
            <button onClick={() => scrollToSection('layanan')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Layanan
            </button>
            <button onClick={() => scrollToSection('paket')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Paket
            </button>
            <button onClick={() => scrollToSection('kontak')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontak
            </button>
          </nav>
          <button
            onClick={() => scrollToSection('kontak')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </header>
  );
}
