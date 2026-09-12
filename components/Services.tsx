const services = [
  {
    number: "01",
    title: "Pain Management",
    description:
      "Assessment and physiotherapy care designed to help manage pain and improve everyday movement.",
  },
  {
    number: "02",
    title: "Musculoskeletal Rehabilitation",
    description:
      "Support for movement and function following common musculoskeletal problems and injuries.",
  },
  {
    number: "03",
    title: "Sports Rehabilitation",
    description:
      "Structured rehabilitation to support a safe and progressive return to physical activity.",
  },
  {
    number: "04",
    title: "Post-Injury Recovery",
    description:
      "Guided rehabilitation focused on restoring movement, strength, and confidence after injury.",
  },
  {
    number: "05",
    title: "Mobility & Movement",
    description:
      "Exercises and movement strategies designed to support mobility and everyday physical function.",
  },
  {
    number: "06",
    title: "Preventive Physiotherapy",
    description:
      "Practical guidance to help you understand movement and support your long-term physical wellbeing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            What We Help With
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Physiotherapy designed around your recovery.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            From managing pain to improving movement and returning to activity,
            physiotherapy can support you at different stages of your recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group bg-white p-8 transition-colors hover:bg-[var(--secondary-background)] md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  {service.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-12 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}