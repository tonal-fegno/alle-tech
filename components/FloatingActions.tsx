"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import whatsapp from '@/public/whatsapp-svg.svg';
import support from '@/public/support-svg.svg';

export default function FloatingActions() {
  const [hoveredBtn, setHoveredBtn] = useState<"whatsapp" | "lead" | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "SAP Business One",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset and close after a delay
    setTimeout(() => {
      setIsPopupOpen(false);
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "SAP Business One",
        message: "",
      });
    }, 3000);
  };

  const labelCls = "text-[13px] font-semibold text-ink";
  const inputCls = "w-full rounded-xl border border-border-gray/30 bg-bg-1/40 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-body-gray/50 focus:border-primary focus:bg-white";

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 pointer-events-none">
        {/* WhatsApp Button */}
        <div className="relative flex items-center justify-end pointer-events-auto">
          <AnimatePresence>
            {hoveredBtn === "whatsapp" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="mr-3 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600 shadow-md border border-emerald-100 whitespace-nowrap pointer-events-none"
              >
                Chat on WhatsApp
              </motion.div>
            )}
          </AnimatePresence>
          <motion.a
            href="https://wa.me/97142996767"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredBtn("whatsapp")}
            onMouseLeave={() => setHoveredBtn(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#20ba5a] cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            {/* WhatsApp SVG Icon */}
            <img src={whatsapp.src} alt="whatsapp" width={34} />
          </motion.a>
        </div>

        {/* Lead/Contact Button */}
        <div className="relative flex items-center justify-end pointer-events-auto">
          <AnimatePresence>
            {hoveredBtn === "lead" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="mr-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-primary shadow-md border border-blue-100 whitespace-nowrap pointer-events-none"
              >
                Need Support?
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={() => setIsPopupOpen(true)}
            onMouseEnter={() => setHoveredBtn("lead")}
            onMouseLeave={() => setHoveredBtn(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#001545] text-white shadow-lg transition-colors hover:bg-[#000B22] cursor-pointer"
            aria-label="Request Lead"
          >
            {/* Document / Message SVG Icon */}
            <img src={support.src} alt="Support" width={34} />
          </motion.button>
        </div>
      </div>

      {/* Popup Form Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!submitted) setIsPopupOpen(false);
              }}
              className="absolute inset-0 bg-[#000B22]/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-[600px] bg-white rounded-3xl shadow-[0_24px_70px_rgba(0,11,34,0.18)] border border-border-gray/25 p-6 md:p-8 pointer-events-auto overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              {!submitted && (
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-5 right-5 text-body-gray hover:text-ink transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm animate-bounce">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-inter font-bold text-[22px] text-dark-blue">Thank You!</h3>
                  <p className="max-w-[360px] text-[15px] leading-[22px] text-body-gray">
                    Your request for a quote has been received successfully. Our team will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div>
                    <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-primary">
                      Request a Quote
                    </span>
                    <h3 className="font-inter font-bold text-[24px] leading-tight text-dark-blue mt-1 tracking-tight">
                      Let&apos;s Build Something Together
                    </h3>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pop-firstName" className={labelCls}>First Name *</label>
                        <input
                          id="pop-firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Jane"
                          className={inputCls}
                        />
                      </div>

                      {/* Last Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pop-lastName" className={labelCls}>Last Name *</label>
                        <input
                          id="pop-lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Smith"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pop-email" className={labelCls}>Business Email *</label>
                        <input
                          id="pop-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com"
                          className={inputCls}
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pop-phone" className={labelCls}>Phone Number *</label>
                        <input
                          id="pop-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pop-company" className={labelCls}>Company Name *</label>
                      <input
                        id="pop-company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation"
                        className={inputCls}
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pop-service" className={labelCls}>Service of Interest *</label>
                      <div className="relative">
                        <select
                          id="pop-service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`${inputCls} appearance-none cursor-pointer pr-10`}
                        >
                          <option value="SAP Business One">SAP Business One (ERP)</option>
                          <option value="Odoo ERP">Odoo ERP</option>
                          <option value="Technology Consulting">Technology Consulting</option>
                          <option value="Business Intelligence & Power BI">Business Intelligence & Power BI</option>
                          <option value="ERP Integration">ERP Integration</option>
                          <option value="Cloud & IT Services">Cloud & IT Infrastructure</option>
                          <option value="Custom Business Applications">Custom Business Applications</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-body-gray">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pop-message" className={labelCls}>Brief Message (Optional)</label>
                      <textarea
                        id="pop-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements..."
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="mt-2 w-full rounded-xl bg-primary py-3 font-semibold text-white shadow-md hover:bg-primary/95 transition-colors cursor-pointer text-center text-[15px]"
                    >
                      Submit Quote Request
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
