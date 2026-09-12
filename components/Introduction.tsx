export default function Introduction() {
  return (
    <section
      id="about"
      className="border-y border-[var(--border)] bg-[var(--secondary-background)] py-24 md:py-32"
    >
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-24">
          {/* Main Introduction */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              About Physiotherapy
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Helping you move with confidence.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Physiotherapy is about more than simply managing pain. It is
              about understanding movement, supporting recovery, and helping
              you return to the activities that matter to you.
            </p>

            <a
              href="#doctor"
              className="mt-8 inline-flex items-center text-sm font-semibold underline decoration-[var(--primary)] decoration-4 underline-offset-4 transition-opacity hover:opacity-60"
            >
              Learn more about Dr. Shreya
            </a>
          </div>

          {/* Trust Points */}
          <div className="lg:pt-14">
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              <div className="flex gap-5 py-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold">
                  ✓
                </span>

                <div>
                  <h3 className="font-semibold">Personalised care</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Care shaped around your individual needs, goals, and
                    recovery journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold">
                  ✓
                </span>

                <div>
                  <h3 className="font-semibold">Movement-focused approach</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Supporting better movement and function as part of your
                    recovery.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold">
                  ✓
                </span>

                <div>
                  <h3 className="font-semibold">Long-term wellbeing</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Building practical habits that can support your progress
                    beyond the clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}