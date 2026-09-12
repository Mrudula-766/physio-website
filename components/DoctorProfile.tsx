export default function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="border-y border-[var(--border)] bg-[var(--secondary-background)] py-24 md:py-32"
    >
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Doctor Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-white">
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-sm font-medium text-[var(--muted)]">
                    Dr. Shreyas Photograph
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                    Professional photography will be added here.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-2xl bg-[var(--primary)] lg:block" />
          </div>

          {/* Doctor Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Meet Your Physiotherapist
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Dr. Shreya
            </h2>

            <p className="mt-3 text-base font-medium">
              Physiotherapist
            </p>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
              A personalised approach to physiotherapy, focused on
              understanding each patients needs, goals, and everyday
              challenges.
            </p>

            {/* Professional Highlights */}
            <div className="mt-10 grid gap-6 border-y border-[var(--border)] py-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  Qualifications
                </p>

                <p className="mt-2 text-sm font-medium">
                  Details to be added
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  Specialisation
                </p>

                <p className="mt-2 text-sm font-medium">
                  Details to be added
                </p>
              </div>
            </div>

            <a
              href="#about-doctor"
              className="mt-8 inline-flex items-center text-sm font-semibold underline decoration-[var(--primary)] decoration-4 underline-offset-4 transition-opacity hover:opacity-60"
            >
              Learn more about Dr. Shreya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}