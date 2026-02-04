const services = [
  { title: "Search engine optimization", highlight: true },
  { title: "Pay-per-click advertising" },
  { title: "Social media marketing" },
  { title: "Content creation" },
];

function Services() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Services</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl flex justify-between items-center
            ${service.highlight ? "bg-lime-300" : "bg-gray-100"}`}
          >
            <span className="font-semibold">{service.title}</span>
            <span className="text-xl">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
