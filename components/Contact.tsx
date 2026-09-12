const contactDetails = [
  {
    label: "Location",
    value: "Clinic address will be added here",
  },
  {
    label: "Phone",
    value: "Clinic phone number will be added here",
  },
  {
    label: "Email",
    value: "Clinic email will be added here",
  },
  {
    label: "Opening Hours",
    value: "Clinic hours will be added here",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Get in Touch
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Lets get you moving.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Have a question or ready to take the next step? Get in touch
              with the clinic to discuss your appointment.
            </p>

            <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-semibold">
                    {detail.label}
                  </span>

                  <span className="text-sm text-[var(--muted)] sm:text-right">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="min-h-[400px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--secondary-background)]">
            <div className="flex h-full min-h-[400px] items-center justify-center p-8 text-center">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)] text-xl">
                  +
                </div>

                <p className="mt-5 font-semibold">
                  Clinic location
                </p>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
                  An interactive map will be added once the clinic address is
                  confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}