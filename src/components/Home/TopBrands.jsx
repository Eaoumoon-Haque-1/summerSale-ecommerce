import Image from "next/image";

export default function TopBrands() {
  const brands = [
    {
      name: "BeachBloom",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop",
      desc: "Beach hats & accessories",
    },
    {
      name: "GlowCare",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
      desc: "Summer skincare",
    },
    {
      name: "SunnyWear",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
      desc: "Light outfits",
    },
    {
      name: "HydroCool",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop",
      desc: "Hydration essentials",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold">Featured Brands</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top Summer Brands 🏷️
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted names for your sunny day essentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition border border-orange-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {brand.name}
                </h3>
                <p className="text-gray-500 mt-1">{brand.desc}</p>

                <button className="mt-4 px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
