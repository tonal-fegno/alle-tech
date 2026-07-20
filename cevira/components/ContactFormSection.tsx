"use client";

import { useState } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ArrowButton from "@/components/ui/ArrowButton";
import { CONTACT_INFO, SOLUTIONS } from "@/lib/constants";

const inputCls =
  "w-full rounded-xl border border-border-gray/50 bg-white px-4 py-3.5 text-body-16 text-ink outline-none transition-colors placeholder:text-body-gray/60 focus:border-primary";

const labelCls = "text-body-16 font-semibold text-ink";

const EMAIL_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="white"
      strokeWidth="1.8"
    />
    <path
      d="m4 6.5 8 6 8-6"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EMAIL_ITEMS = [
  { label: "General", value: CONTACT_INFO.email },
  { label: "Sales Inquiries", value: CONTACT_INFO.salesEmail },
];

const INFO_ITEMS = [
  {
    label: "Call us",
    value: CONTACT_INFO.phone,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 4h4l1.6 5-2.4 1.6a12 12 0 0 0 6.2 6.2L15.5 14l5 1.6v4a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3 5.6 1.5 1.5 0 0 1 4.5 4Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Visit Us",
    value: CONTACT_INFO.workingHours,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
        <path
          d="M12 7v5l3.5 2"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-white px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-12 md:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gradient-primary" />
            <span className="text-body-16 font-semibold text-ink uppercase">
              Request a Service
            </span>
          </span>
          <AnimatedHeading className="heading-2 max-w-[700px]">
            Let&apos;s Talk About Your Business Needs
          </AnimatedHeading>
          <p className="max-w-[600px] text-body-18 text-body-gray">
            Tell us a bit about what you&apos;re looking for and our team will
            get back to you with next steps within one business day.
          </p>
        </div>

        {/* Split card */}
        <div className="grid w-full max-w-[1100px] grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-30px_rgba(0,21,69,0.35)] lg:grid-cols-[380px_1fr]">
          {/* Info panel */}
          <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-[#0B0714] p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
              style={{
                background:
                  "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(76,29,149,0.75), transparent 70%)",
              }}
            />
            <div className="relative flex flex-col gap-3">
              <h3 className="text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-white md:text-[26px]">
                We&apos;d love to hear from you
              </h3>
              <p className="text-body-16 text-white/70">
                Connect with our team to discuss your business goals and
                discover the right technology solutions for your organization.
              </p>
            </div>

            <div className="relative flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  {EMAIL_ICON}
                </span>
                <div className="flex flex-col gap-2">
                  {EMAIL_ITEMS.map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/50">
                        {item.label}
                      </span>
                      <a
                        href={`mailto:${item.value}`}
                        className="text-body-16 font-medium text-white transition-colors hover:text-white/80"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    {item.icon}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/50">
                      {item.label}
                    </span>
                    <span className="text-body-16 font-medium text-white">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="relative text-[13px] text-white/40">
              By submitting this form, you agree to be contacted by ALLE TECH
              regarding your inquiry.
            </p>
          </div>

          {/* Form panel */}
          <div className="p-6 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="m4 12.5 5 5L20 7"
                      stroke="#0A4CE0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="heading-6">Thank you!</p>
                <p className="max-w-[360px] text-body-16 text-body-gray">
                  Your request has been received. We&apos;ll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className={labelCls}>
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className={labelCls}>
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelCls}>
                      Business Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputCls}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className={labelCls}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+971 4 521 8493"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className={labelCls}>
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Inc."
                    className={inputCls}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className={labelCls}>
                    Service You&apos;re Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className={`${inputCls} appearance-none pr-11`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SOLUTIONS.map((solution) => (
                        <option key={solution.slug} value={solution.title}>
                          {solution.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <path
                        d="M1 1.5 7 7.5 13 1.5"
                        stroke="#4C505B"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={labelCls}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your business needs..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <ArrowButton type="submit" variant="solid" className="mt-2">
                  Send Request
                </ArrowButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
