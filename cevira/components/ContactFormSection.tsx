"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-lg border border-border-gray/60 bg-white px-5 py-4 text-body-16 text-dark-blue outline-none transition-colors placeholder:text-body-gray/60 focus:border-primary";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-white px-4 md:px-8">
      <div className="container-main flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="heading-6">Request a service</h2>
          <p className="text-body-18 text-body-gray">
            Complete the form and we&apos;ll confirm your booking soon.
          </p>
        </div>

        <div className="w-full max-w-[700px] rounded-3xl border border-border-gray/40 bg-bg-3 p-6 md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <p className="heading-6">Thank you!</p>
              <p className="text-body-18 text-body-gray">
                Your request has been received. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-body-16 font-semibold text-dark-blue">
                    First Name
                  </label>
                  <input id="firstName" name="firstName" type="text" required placeholder="Jane" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-body-16 font-semibold text-dark-blue">
                    Last Name
                  </label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Smith" className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-body-16 font-semibold text-dark-blue">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-body-16 font-semibold text-dark-blue">
                    Phone number
                  </label>
                  <input id="phone" name="phone" type="tel" required placeholder="+1 (800) 123-4567" className={inputCls} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-body-16 font-semibold text-dark-blue">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell us about your cleaning needs..." className={`${inputCls} resize-none`} />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-[30px] py-4 text-body-18 font-semibold text-white transition-colors duration-300 hover:bg-dark-blue"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
