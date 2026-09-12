const steps = [
  {
    number: "01",
    title: "Book your appointment",
    description:
      "Choose a convenient appointment time and take the first step towards addressing your movement or recovery goals.",
  },
  {
    number: "02",
    title: "Understand your needs",
    description:
      "Your initial session focuses on understanding your concerns, movement, symptoms, and individual goals.",
  },
  {
    number: "03",
    title: "Begin your treatment",
    description:
      "Your physiotherapy plan is shaped around your needs and may include guided exercises, movement strategies, and hands-on care where appropriate.",
  },
  {
    number: "04",
    title: "Track your progress",
    description:
      "Your progress is reviewed along the way so your approach can evolve as your movement and confidence improve.",
  },
];

export default function PatientJourney() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Your Journey
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            From your first appointment to feeling your best.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            A straightforward approach that keeps you informed and involved
            throughout your physiotherapy journey.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-0 border-y border-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`relative py-8 md:px-8 lg:py-10 ${
                index !== steps.length - 1
                  ? "border-b border-[var(--border)] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold">
                {step.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}