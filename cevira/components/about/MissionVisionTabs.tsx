"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const tabContent = {
  mission: {
    title: "Our Mission",
    description:
      "To provide reliable, high-quality cleaning services that create healthier, more comfortable spaces while ensuring a seamless and stress-free experience for every client.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be the most trusted and reliable cleaning service provider, known for exceptional quality, customer satisfaction, and environmental responsibility in every community we serve.",
  },
};

export default function MissionVisionTabs() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <div className="flex w-full flex-col items-center">
      {/* Tab Navigation */}
      <div className="mb-10 flex gap-4">
        <button
          onClick={() => setActiveTab("mission")}
          className={`rounded-lg px-8 py-3 text-body-16 font-semibold transition-all duration-300 ${
            activeTab === "mission"
              ? "bg-gradient-primary text-white"
              : "border border-border-gray bg-white text-body-gray hover:bg-bg-1"
          }`}
        >
          Our Mission
        </button>
        <button
          onClick={() => setActiveTab("vision")}
          className={`rounded-lg px-8 py-3 text-body-16 font-semibold transition-all duration-300 ${
            activeTab === "vision"
              ? "bg-gradient-primary text-white"
              : "border border-border-gray bg-white text-body-gray hover:bg-bg-1"
          }`}
        >
          Vision
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-[900px] rounded-section bg-white p-12 shadow-lg">
        {/* Icon Badge */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-bg-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
          </svg>
        </div>

        <h3 className="heading-4 mb-4">{tabContent[activeTab].title}</h3>
        <p className="text-body-18 leading-[1.7] text-body-gray">
          {tabContent[activeTab].description}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <Button href="/contact">Schedule Now</Button>
      </div>
    </div>
  );
}
