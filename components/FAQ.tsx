"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What happens during my first physiotherapy appointment?",
    answer:
      "Your first appointment generally involves understanding your concerns, discussing your goals, and assessing relevant movement or physical factors. Your physiotherapist can then recommend an appropriate approach based on your individual needs.",
  },
  {
    question: "Do I need to bring anything to my appointment?",
    answer:
      "Please bring any relevant medical or treatment information that may help your physiotherapist understand your situation. Specific requirements can be confirmed with the clinic when booking.",
  },
  {
    question: "How long does a physiotherapy session take?",
    answer:
      "Session length can vary depending on the type of appointment and your individual needs. Please confirm the expected duration with the clinic when scheduling your appointment.",
  },
  {
    question: "How many physiotherapy sessions will I need?",
    answer:
      "There is no single number of sessions that is appropriate for everyone. The recommended frequency and duration of care depend on your condition, goals, progress, and individual circumstances.",
  },
  {
    question: "Can physiotherapy help with pain and movement problems?",
    answer:
      "Physiotherapy can support people with a range of pain, movement, and physical function concerns. An assessment can help determine whether physiotherapy is appropriate for your particular situation.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can use the appointment option on this website or contact the clinic directly to discuss availability and schedule a suitable time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Questions before you begin?
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Here are some common questions patients may have before starting
              physiotherapy.
            </p>
          </div>

          {/* FAQ List */}
          <div className="border-t border-[var(--border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--border)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-semibold sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--secondary-background)] text-xl transition-transform"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-14">
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}