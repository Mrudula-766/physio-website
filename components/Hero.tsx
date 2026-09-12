export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 md:grid-cols-2 md:py-20 lg:gap-20">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Physiotherapy & Rehabilitation
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Move better.
              <br />
              Feel stronger.
              <br />
              <span className="relative inline-block">
                Live better.
                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[var(--primary)] sm:h-4" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Personalised physiotherapy care focused on recovery,
              movement, and helping you return to the things you love.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-semibold transition-colors hover:bg-[var(--primary-hover)]"
              >
                Book an Appointment
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-7 py-4 text-sm font-semibold transition-colors hover:bg-[var(--secondary-background)]"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--secondary-background)]">
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-sm font-medium text-[var(--muted)]">
                    Doctor / Clinic Image
                  </p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    Real photography will be added here
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Element */}
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-2xl bg-[var(--primary)] lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}