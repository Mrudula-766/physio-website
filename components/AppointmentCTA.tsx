export default function AppointmentCTA() {
  return (
    <section
      id="appointment"
      className="px-5 pb-24 md:px-8 md:pb-32"
    >
      <div className="container">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-black px-8 py-16 text-white md:px-14 md:py-20 lg:px-20 lg:py-24">
          {/* Decorative Accent */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--primary)]" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Take the Next Step
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Ready to move better?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              If you are ready to understand your movement and work towards
              your recovery goals, book an appointment to get started.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-[var(--primary-hover)]"
              >
                Book an Appointment
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact the Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}