import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hubungi <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Customer Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim kami siap membantu Anda 24/7. Hubungi kami sekarang untuk informasi lebih lanjut atau daftar layanan CBN Fiber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telepon / WhatsApp</h4>
                  <p className="text-cyan-100">Hubungi Customer Service kami</p>
                  <a href="tel:+628111234567" className="text-white font-bold hover:text-cyan-200 transition-colors">
                    +62819-3994-9902
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-cyan-100">Kirim pertanyaan Anda</p>
                  <a href="mailto:info@daftarcbn.id" className="text-white font-bold hover:text-cyan-200 transition-colors">
                    info@daftarcbn.id
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Jam Operasional</h4>
                  <p className="text-cyan-100">Senin - Minggu</p>
                  <p className="text-white font-bold">24 Jam Non-Stop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulir Pendaftaran</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="08xx xxxx xxxx"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap
                </label>
                <textarea
                  id="address"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Masukkan alamat lengkap untuk pemasangan"
                ></textarea>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Paket
                </label>
                <select
                  id="package"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Pilih paket yang diinginkan</option>
                  <option value="fiber20">CBN Fiber 20 - 20 Mbps</option>
                  <option value="fiber30">CBN Fiber 30 - 60 Mbps</option>
                  <option value="fiber50">CBN Fiber 50 - 100 Mbps</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Kirim Pendaftaran</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Daftar Sekarang & Nikmati Internet Super Stabil!</h3>
          <p className="text-cyan-100 text-lg">
            Proses pemasangan cepat dengan dukungan teknis responsif 24 jam
          </p>
        </div>
      </div>
    </section>
  );
}
