import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappMessage = 'Saya ingin mendaftar CBN, apakah bisa info paket internetnya';
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=6281939949902&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Internet Fiber Optik Terpercaya
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Rasakan Koneksi Internet<br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Terunggul dari CBN
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nikmati kecepatan internet stabil berbasis fiber optik untuk kebutuhan rumah, bisnis, dan aktivitas digital tanpa gangguan. CBN menghadirkan layanan terbaik dengan jangkauan luas, harga kompetitif, dan dukungan teknis yang selalu siap membantu.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <span>Daftar CBN Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="relative h-48 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
