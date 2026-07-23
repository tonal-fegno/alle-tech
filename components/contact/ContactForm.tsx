"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Calendar } from "lucide-react";

import { SwapLabel, SwapArrow } from "@/components/common/HoverSwap";
import CalendarWidget from "@/components/contact/CalendarWidget";
import ContactInfoList from "@/components/contact/ContactInfoList";
import { PAIN_POINTS, fadeUpOnly, staggerContainer } from "@/app/(site)/contact/constants";
import UIButton from "@/components/ui-button";
declare global {
  interface Window {
    onRecaptchaSuccess?: (token: string) => void;
    onRecaptchaExpired?: () => void;
    grecaptcha?: {
      reset: () => void;
    };
  }
}

export default function ContactForm() {
  // Main Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    message: "",
  });
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Timezone and Calendar scheduling state
  const [timezone, setTimezone] = useState("Asia/Dubai");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 6, 15)); // Default to July 15, 2026 as in screenshot
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2026, 6, 1)); // July 2026

  const [showCalendar, setShowCalendar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    window.onRecaptchaSuccess = (_token: string) => {
      setRecaptchaChecked(true);
    };
    window.onRecaptchaExpired = () => {
      setRecaptchaChecked(false);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      delete window.onRecaptchaSuccess;
      delete window.onRecaptchaExpired;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCalendarActive = isDesktop || showCalendar;

  const handlePainPointToggle = (label: string) => {
    setSelectedPainPoints((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label],
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !recaptchaChecked) return;

    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        country: "",
        message: "",
      });
      setSelectedPainPoints([]);
      setRecaptchaChecked(false);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
      // Clear success message after 6 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    }, 1500);
  };

  const formattedSelectedDate = selectedDate.toLocaleDateString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="bg-white rounded-2xl sm:rounded-4xl border border-neutral-100 p-4 sm:p-6 md:p-10 lg:p-12"
    >
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center py-16 md:py-24"
        >
          <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-6 shadow-sm">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
            {isCalendarActive ? "Demo Requested!" : "Inquiry Received!"}
          </h3>
          <p className="text-neutral-500 mt-4 text-sm md:text-base max-w-xl leading-relaxed font-medium">
            Thank you.{" "}
            {isCalendarActive ? (
              <>
                We have successfully booked your live demo for{" "}
                <strong className="text-blue-600 font-bold">
                  {formattedSelectedDate}
                </strong>{" "}
                in timezone{" "}
                <strong className="text-blue-600 font-bold">
                  {timezone.replace(/\//g, " / ").replace(/_/g, " ")}
                </strong>
                . A calendar invitation and meeting link have been sent to
                your email.{" "}
              </>
            ) : (
              <>
                We have successfully received your inquiry and project
                details.{" "}
              </>
            )}
            One of our technology advisors will reach out to you shortly.
          </p>
          <motion.button
            onClick={() => setFormSubmitted(false)}
            className="mt-8 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Submit another request
          </motion.button>
        </motion.div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Team Details */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <motion.div variants={fadeUpOnly}>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Tell us about your team
                </h2>
              </motion.div>

              {/* First & Last Name */}
              <motion.div
                variants={fadeUpOnly}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-400 text-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-400 text-neutral-800"
                  />
                </div>
              </motion.div>

              {/* Email & Company Name */}
              <motion.div
                variants={fadeUpOnly}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-400 text-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="companyName"
                    className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
                  >
                    Company Name{" "}
                    <span className="text-neutral-400">(Optional)</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-400 text-neutral-800"
                  />
                </div>
              </motion.div>

              {/* Country */}
              <motion.div
                variants={fadeUpOnly}
                className="flex flex-col gap-2"
              >
                <label
                  htmlFor="country"
                  className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-neutral-800 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select country...
                    </option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Oman">Oman</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Qatar">Qatar</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 sm:right-4 flex items-center pointer-events-none text-neutral-400">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </motion.div>

              {/* Main Pain Points */}
              <motion.div
                variants={fadeUpOnly}
                className="flex flex-col gap-3"
              >
                <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                  Main Pain Point{" "}
                  <span className="text-neutral-400">
                    (Select all that apply)
                  </span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                  {PAIN_POINTS.map((point) => (
                    <label
                      key={point.id}
                      className="flex items-start gap-3 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selectedPainPoints.includes(point.label)}
                        onChange={() => handlePainPointToggle(point.label)}
                      />
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          selectedPainPoints.includes(point.label)
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-neutral-300 bg-white hover:border-neutral-400"
                        }`}
                      >
                        {selectedPainPoints.includes(point.label) && (
                          <svg
                            className="w-3.5 h-3.5 stroke-2 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs text-neutral-600 font-semibold leading-5">
                        {point.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* How can we help? */}
              <motion.div
                variants={fadeUpOnly}
                className="flex flex-col gap-2"
              >
                <label
                  htmlFor="message"
                  className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
                >
                  How can we help?{" "}
                  <span className="text-neutral-400">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us a bit about your current IT setup..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-neutral-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-400 text-neutral-800 resize-none"
                />
              </motion.div>

              {/* Bottom Form Actions Group */}
              <div className="flex flex-col gap-4">
                {/* Real Google reCAPTCHA */}
                <motion.div
                  variants={fadeUpOnly}
                  className="flex flex-col gap-2 overflow-hidden"
                >
                  <Script
                    src="https://www.google.com/recaptcha/api.js"
                    strategy="afterInteractive"
                  />
                  <div className="w-full flex justify-start overflow-hidden h-[62.4px] min-[360px]:h-[66.3px] sm:h-19.5">
                    <div className="origin-left scale-[0.8] min-[360px]:scale-[0.85] sm:scale-100">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        data-callback="onRecaptchaSuccess"
                        data-expired-callback="onRecaptchaExpired"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Calendar Toggle & Widget */}
                <motion.div
                  variants={fadeUpOnly}
                  className="block lg:hidden"
                >
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-neutral-50 border border-neutral-200 rounded-2xl transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar
                        className="text-blue-600 shrink-0"
                        size={20}
                      />
                      <span className="text-sm font-bold text-neutral-800">
                        {showCalendar
                          ? "Remove Scheduled Meeting"
                          : "Schedule a Live Demo (Optional)"}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: showCalendar ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-neutral-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {showCalendar && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CalendarWidget
                          selectedDate={selectedDate}
                          setSelectedDate={setSelectedDate}
                          currentMonth={currentMonth}
                          setCurrentMonth={setCurrentMonth}
                          timezone={timezone}
                          setTimezone={setTimezone}
                          isMobile={true}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={fadeUpOnly}>
                  <UIButton
                    type="submit"
                    disabled={loading || !recaptchaChecked}
                    className="justify-between py-3.5 px-6 disabled:opacity-50 disabled:cursor-not-allowed text-[14px]"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent/20 rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Request"
                    )}
                  </UIButton>
                  <p className="text-[11px] text-neutral-400 text-center mt-3 font-medium">
                    By submitting this form, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-neutral-500 underline hover:text-neutral-700"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Calendar Booking & Contacts */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* Desktop Calendar Section (Hidden on mobile) */}
              <div className="hidden lg:flex flex-col gap-6">
                <motion.div variants={fadeUpOnly}>
                  <div className="flex items-center gap-3 mb-1">
                    <Calendar
                      className="text-blue-600 shrink-0"
                      size={24}
                    />
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                      Book a Live Demo
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 font-semibold mb-6">
                    Optional — pick a time and we&rsquo;ll send a calendar
                    invite.
                  </p>
                </motion.div>

                <CalendarWidget
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  currentMonth={currentMonth}
                  setCurrentMonth={setCurrentMonth}
                  timezone={timezone}
                  setTimezone={setTimezone}
                />

                {/* Separator Line */}
                <motion.div
                  variants={fadeUpOnly}
                  className="h-px bg-neutral-100 my-2"
                />
              </div>

              {/* Contact Information Details */}
              <motion.div
                variants={fadeUpOnly}
                className="flex flex-col gap-3"
              >
                <ContactInfoList />
              </motion.div>
            </motion.div>
          </div>
        </form>
      )}
    </div>
  );
}
