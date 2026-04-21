const products = [
  {
    id: 1,
    name: "Camiseta Básica Urban",
    material: "Algodón 100% orgánico",
    price: "€29",
  },
  {
    id: 2,
    name: "Jeans Slim Fit",
    material: "Denim premium stretch",
    price: "€89",
  },
  {
    id: 3,
    name: "Sudadera Oversize",
    material: "Algodón French Terry",
    price: "€65",
  },
  {
    id: 4,
    name: "Chaqueta Bomber",
    material: "Nylon resistente al agua",
    price: "€120",
  },
  {
    id: 5,
    name: "Gorra Snapback",
    material: "Bordado premium",
    price: "€35",
  },
  {
    id: 6,
    name: "Zapatillas Urban",
    material: "Suela de goma antideslizante",
    price: "€95",
  },
];

export default function ProductsGrid() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            NUESTRA COLECCIÓN
          </h2>
          <p className="text-gray-400 text-lg">
            Estilo urbano para cada ocasión
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 border border-amber-500/30 p-6 rounded-lg hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              {/* Product Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-md mb-4 flex items-center justify-center group-hover:from-amber-900/30 group-hover:to-gray-900 transition-all duration-300">
                <span className="text-gray-600 font-bold">IMAGEN</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{product.material}</p>
              <p className="text-2xl font-bold text-amber-400">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
