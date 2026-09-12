"use client";

import { useState } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white">
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <span className="text-xl font-bold tracking-tight">
            Dr. Shreya
          </span>
          <span className="ml-2 text-sm text-[var(--muted)]">
            Physiotherapy
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-opacity hover:opacity-60"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#appointment"
            className="rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--primary-hover)]"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
        >
          <span className="text-lg">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-[var(--secondary-background)]"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#appointment"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}