const steps = [
  "Consultation",
  "Research and strategy development",
  "Implementation",
  "Monitoring and optimization",
];

function Process() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Our Working Process</h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 flex gap-4 items-center"
          >
            <span className="font-bold text-xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
