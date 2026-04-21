const features = [
  {
    icon: "⚡",
    title: "DISEÑO ÚNICO",
    description: "Piezas exclusivas con estética urbana y minimalista",
  },
  {
    icon: "🏆",
    title: "CALIDAD PREMIUM",
    description: "Materiales de alta calidad para máxima durabilidad",
  },
  {
    icon: "🚚",
    title: "ENVÍO RÁPIDO",
    description: "Entrega express en 24-48 horas",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4 text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
