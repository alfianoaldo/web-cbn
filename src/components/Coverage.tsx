import { MapPin, Gift } from 'lucide-react';

export default function Coverage() {
  const areas = [
    'Jakarta Selatan',
    'Jakarta Barat',
    'Jakarta Pusat',
    'Jakarta Timur',
    'Jakarta Utara',
    'Tangerang',
    'Bandung'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Gift className="w-8 h-8" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Promo Spesial!</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-2">GRATIS BIAYA PEMASANGAN</h3>
                  <p className="text-cyan-100 text-lg">Diskon 70% untuk Biaya Pasang Baru</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-5xl font-bold mb-2">Rp 150.000</div>
                  <p className="text-cyan-100">Harga spesial PSB per sambungan*</p>
                  <p className="text-sm text-cyan-100 mt-2">*Belum termasuk PPN</p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Area Layanan</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Layanan CBN Fiber kini tersedia di berbagai wilayah strategis
              </p>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    <span className="font-medium text-gray-800">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 mt-6 text-sm italic">
                Daftar sekarang dan nikmati internet cepat serta stabil di rumah Anda!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
