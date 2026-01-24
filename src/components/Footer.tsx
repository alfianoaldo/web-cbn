import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Konten Utama Footer - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">

          {/* Kolom 1: Logo & Kontak */}
          <div>
            <div className="mb-4">
              <img src="/logo-cbn.png" alt="CBN Logo" className="h-12" />
            </div>
            
            <p className="text-gray-400 mb-4 max-w-md">
              Layanan internet fiber optik terpercaya dengan kecepatan tinggi, koneksi stabil, dan dukungan pelanggan 24/7 untuk kebutuhan rumah dan bisnis Anda.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Jakarta, Tangerang, Bandung & Sekitarnya</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                {/* Menjadikan nomor telepon clickable (wa.me) */}
                <a href="https://wa.me/6281939949902" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  +62 819-3994-9902 
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                {/* Menjadikan email clickable (mailto) */}
                <a href="mailto:info@daftarcbn.id" className="hover:text-cyan-400 transition-colors">
                  info@daftarcbn.id
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 2: Layanan */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#paket" className="hover:text-cyan-400 transition-colors">Paket Internet</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-cyan-400 transition-colors">Internet Fiber</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-cyan-400 transition-colors">Telepon Rumah</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-cyan-400 transition-colors">TV Interaktif</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Perusahaan */}
          <div>
            <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#layanan" className="hover:text-cyan-400 transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#paket" className="hover:text-cyan-400 transition-colors">Area Layanan</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-cyan-400 transition-colors">Hubungi Kami</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-cyan-400 transition-colors">Dukungan</a>
              </li>
            </ul>
          </div>

          {/* Kolom 4 (Placeholder untuk Media Sosial atau lainnya) */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
            <p className="text-gray-400 text-sm">Temukan info terbaru dari CBN.</p>
            {/* Tambahkan ikon media sosial di sini */}
          </div>
          
        </div>

        {/* Bagian Bawah Footer (Copyright & Legal) */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CBN Fiber. All rights reserved. daftarcbn.id
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}