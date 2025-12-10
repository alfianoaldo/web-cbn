import { Zap, Shield, Headphones, Wifi } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Kecepatan Tinggi',
      description: 'Teknologi fiber optik untuk koneksi internet super cepat dan stabil'
    },
    {
      icon: Shield,
      title: 'Koneksi Stabil',
      description: 'Jaringan handal tanpa gangguan untuk aktivitas digital Anda'
    },
    {
      icon: Headphones,
      title: 'Dukungan 24/7',
      description: 'Tim teknis siap membantu Anda kapan saja setiap hari'
    },
    {
      icon: Wifi,
      title: 'Jangkauan Luas',
      description: 'Melayani berbagai wilayah di Jakarta, Tangerang, dan Bandung'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
