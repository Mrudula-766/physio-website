const footerNavigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-black text-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"
            >
              Dr. Shreya
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Personalised physiotherapy care focused on recovery, movement,
              and long-term wellbeing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Appointment */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Start Your Journey
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Ready to take the next step? Get in touch with the clinic or
              request an appointment.
            </p>

            <a
              href="#appointment"
              className="mt-6 inline-flex rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[var(--primary-hover)]"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Shreya Physiotherapy. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}