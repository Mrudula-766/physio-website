const testimonials = [
  {
    quote:
      "Patient testimonial will be added here once approved by the clinic.",
    name: "Patient Name",
    detail: "Patient testimonial",
  },
  {
    quote:
      "Patient testimonial will be added here once approved by the clinic.",
    name: "Patient Name",
    detail: "Patient testimonial",
  },
  {
    quote:
      "Patient testimonial will be added here once approved by the clinic.",
    name: "Patient Name",
    detail: "Patient testimonial",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[var(--secondary-background)] py-24 md:py-32"
    >
      <div className="container">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Patient Experiences
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Care that patients can feel good about.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Real experiences from patients will be featured here.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-white p-8 md:p-10"
            >
              <div
                className="text-4xl leading-none"
                aria-hidden="true"
              >
                “
              </div>

              <blockquote className="mt-6 text-base leading-7">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="text-sm font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  {testimonial.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}