import { Check, Star, Trophy, Sparkles } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      badge: 'BEST SELLER',
      badgeColor: 'from-orange-500 to-red-500',
      name: 'CBN FIBER 20',
      speed: '20 Mbps',
      speedBasic: '20 Mbps',
      speedBooster: null,
      price: 'Rp 193.140',
      icon: Star,
      borderColor: 'from-blue-400 to-blue-600',
      features: [
        'Kuota Internet Unlimited',
        'Gratis Biaya Sewa Alat',
        'Gratis Biaya Instalasi',
        'Speed Basic 20 Mbps'
      ]
    },
    {
      badge: 'BEST DEAL',
      badgeColor: 'from-yellow-400 to-orange-500',
      name: 'CBN FIBER 30',
      speed: '60 Mbps',
      speedBasic: '30 Mbps',
      speedBooster: '30 Mbps',
      price: 'Rp 226.440',
      icon: Trophy,
      borderColor: 'from-cyan-400 to-blue-600',
      popular: true,
      features: [
        'Kuota Internet Unlimited',
        'Gratis Biaya Sewa Alat',
        'Gratis Biaya Instalasi',
        'Speed Basic 30 Mbps',
        'Booster 30 Mbps',
        'Promo Speedboost selama 6 bulan'
      ]
    },
    {
      badge: 'BEST EXPERIENCE',
      badgeColor: 'from-pink-500 to-rose-500',
      name: 'CBN FIBER 50',
      speed: '100 Mbps',
      speedBasic: '50 Mbps',
      speedBooster: '50 Mbps',
      price: 'Rp 259.740',
      icon: Sparkles,
      borderColor: 'from-blue-500 to-blue-700',
      features: [
        'Kuota Internet Unlimited',
        'Gratis Biaya Sewa Alat',
        'Gratis Biaya Instalasi',
        'Speed Basic 50 Mbps',
        'Booster 50 Mbps',
        'Promo Speedboost selama 6 bulan'
      ]
    }
  ];

  return (
    <section id="paket" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paket Langganan <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">CBN Fiber</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket internet yang sesuai dengan kebutuhan Anda. Semua paket dilengkapi dengan proses pemasangan cepat dan dukungan teknis responsif 24 jam.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-cyan-400' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                    PALING POPULER
                  </div>
                )}

                <div className={`bg-gradient-to-r ${pkg.badgeColor} text-white py-3 px-6 text-center`}>
                  <span className="font-bold text-sm tracking-wider">{pkg.badge}</span>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-br ${pkg.borderColor} rounded-2xl`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    {pkg.name}
                  </h3>

                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600 mb-1">
                      kecepatan internet hingga
                    </div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
                      {pkg.speed}
                    </div>
                    {pkg.speedBooster ? (
                      <div className="text-xs text-gray-500">
                        (Speed basic {pkg.speedBasic} + Booster {pkg.speedBooster})
                      </div>
                    ) : (
                      <div className="text-xs text-gray-500">
                        (Speed basic {pkg.speedBasic})
                      </div>
                    )}
                  </div>

                  <div className="border-t border-b border-gray-200 py-6 mb-6">
                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      *Harga sudah termasuk biaya admin dan pajak 11%
                    </div>
                    {pkg.speedBooster && (
                      <div className="text-xs text-gray-500 mt-1">
                        *Promo Speedboost selama 6 bulan
                      </div>
                    )}
                  </div>

                  {(() => {
                    const message = `Saya tertarik dengan paket ${pkg.name} (${pkg.price}/bulan)`;
                    const whatsappUrl = `https://api.whatsapp.com/send/?phone=6281939949902&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
                    return (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center w-full bg-gradient-to-r ${pkg.borderColor} text-white py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                      >
                        Hubungi via WhatsApp
                      </a>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>

        
            </li>
          </ul>
   
  );
}
