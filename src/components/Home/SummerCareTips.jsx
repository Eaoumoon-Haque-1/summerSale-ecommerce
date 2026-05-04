export default function SummerCareTips() {
  const tips = [
    {
      title: "Stay Hydrated 💧",
      desc: "Drink plenty of water throughout the day to avoid dehydration.",
    },
    {
      title: "Use Sunscreen ☀️",
      desc: "Always apply SPF 30+ sunscreen before going outside.",
    },
    {
      title: "Wear Light Clothing 👕",
      desc: "Choose breathable fabrics like cotton to stay cool.",
    },
    {
      title: "Protect Your Eyes 🕶️",
      desc: "Use UV-protected sunglasses to prevent eye damage.",
    },
  ];

  return (
    <section className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Summer Care Tips 🌞
          </h2>
          <p className="text-gray-600 mt-3">
            Stay safe and enjoy your summer the right way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-orange-500">
                {tip.title}
              </h3>
              <p className="text-gray-600 mt-3">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}