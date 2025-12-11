import { Wifi, Phone, Tv, Check } from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: Wifi,
      title: 'Internet Fiber',
      description: 'Koneksi internet super cepat dan stabil'
    },
    {
      icon: Phone,
      title: 'Telepon Rumah',
      description: 'Layanan telepon rumah dengan kualitas jernih'
    },
    {
      icon: Tv,
      title: 'TV Interaktif',
      description: 'Hiburan berkualitas dengan berbagai channel'
    }
  ];

  const benefits = [
    'Teknologi Fiber Optik Terkini',
    'Kecepatan Internet Hingga 100 Mbps',
    'Unlimited Kuota Internet',
    'Dukungan Teknis 24/7',
    'Proses Pemasangan Cepat',
    'Harga Paket Kompetitif'
  ];

  // URL WhatsApp dengan nomor dan teks yang di-encode
  const whatsappUrl = "https://wa.me/6281939949902?text=Saya%20ingin%20mendaftar%20CBN%2C%20apakah%20bisa%20info%20paket%20internetnya";

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Selamat Datang di <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">CBN Fiber</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi Internet Cepat dari CBN untuk Aktivitas Tanpa Batas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Tentang Layanan Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              CBN Fiber merupakan layanan internet broadband modern berbasis teknologi fiber optik yang menghadirkan koneksi cepat, stabil, dan berkualitas tinggi untuk kebutuhan rumah maupun bisnis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CBN menawarkan layanan Triple Play yang mencakup Internet Fiber (Internet Cepat), Telepon Rumah (Fixed Phone), dan TV Interaktif. Selain itu, CBN juga menyediakan layanan Dual Play, yaitu kombinasi Internet Fiber dan Telepon Rumah, atau Internet Fiber dan TV Interaktif, sesuai kebutuhan pengguna.
            </p>
            <div className="grid grid-cols-1 gap-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-cyan-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BAGIAN CALL TO ACTION DENGAN TOMBOL WHATSAPP */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Kami Melayani Pemasangan CBN untuk Bandung dan Sekitarnya
          </h3>
          <p className="text-cyan-100 text-lg mb-6 max-w-3xl mx-auto">
            Jika Anda ingin daftar CBN Fiber Bandung, silakan hubungi kami sekarang. Kami menyediakan pilihan paket internet CBN terbaru yang dapat disesuaikan dengan kebutuhan Anda.
          </p>
          
          {/* TOMBOL WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Hubungi Kami Sekarang
          </a>
          
        </div>
      </div>
    </section>
  );
}