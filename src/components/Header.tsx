export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = 'Saya ingin mendaftar CBN, apakah bisa info paket internetnya';
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=6281939949902&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Sebaiknya berikan link pada logo untuk kembali ke beranda */}
            <a href="#home" onClick={() => scrollToSection('home')}>
              <img src="/logo-cbn.png" alt="CBN Logo" className="h-12" />
            </a>
          </div>
          
          {/* Navigasi Utama */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Mengganti <button> di Navigasi dengan <a> agar lebih semantik */}
            <a onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Beranda
            </a>
            <a onClick={() => scrollToSection('layanan')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Layanan
            </a>
            <a onClick={() => scrollToSection('paket')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Paket
            </a>
            <a onClick={() => scrollToSection('kontak')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Kontak
            </a>
          </nav>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
}