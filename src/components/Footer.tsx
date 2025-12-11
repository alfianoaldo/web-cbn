import { Wifi, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">CBN</span>
                <span className="text-2xl font-light text-cyan-400">Fiber</span>
              </div>
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
                <span>+62 819-3994-9902 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@daftarcbn.id</span>
              </div>
            </div>
          </div>

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
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} CBN Fiber. All rights reserved. daftarcbn.id
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
