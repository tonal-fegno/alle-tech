"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";

interface CalendarWidgetProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  timezone: string;
  setTimezone: (tz: string) => void;
  isMobile?: boolean;
}

const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Days from previous month to fill the first row
  const prevMonthTotalDays = new Date(year, month, 0).getDate();
  const prevMonthDays = [];
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    prevMonthDays.push({
      day: prevMonthTotalDays - i,
      isCurrentMonth: false,
      date: new Date(year, month - 1, prevMonthTotalDays - i),
    });
  }

  // Days of current month
  const currentMonthDays = [];
  for (let i = 1; i <= totalDays; i++) {
    currentMonthDays.push({
      day: i,
      isCurrentMonth: true,
      date: new Date(year, month, i),
    });
  }

  // Days from next month to fill remaining grid cells
  const totalGridCells = 42;
  const nextMonthDaysCount =
    totalGridCells - (prevMonthDays.length + currentMonthDays.length);
  const nextMonthDays = [];
  for (let i = 1; i <= nextMonthDaysCount; i++) {
    nextMonthDays.push({
      day: i,
      isCurrentMonth: false,
      date: new Date(year, month + 1, i),
    });
  }

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};

const timeZones: string[] = (() => {
  try {
    return Intl.supportedValuesOf("timeZone");
  } catch {
    return [
      "Africa/Cairo",
      "America/Chicago",
      "America/Los_Angeles",
      "America/New_York",
      "Asia/Dubai",
      "Asia/Kolkata",
      "Asia/Riyadh",
      "Asia/Singapore",
      "Asia/Tokyo",
      "Europe/London",
      "Europe/Paris",
      "UTC",
    ];
  }
})();

interface TimeZoneOption {
  value: string;
  label: string;
}

const timeZoneOptions: TimeZoneOption[] = (() => {
  return timeZones.map((tz) => {
    let label = tz.replace(/\//g, " / ").replace(/_/g, " ");
    try {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        timeZoneName: "longOffset",
      });
      const parts = formatter.formatToParts(new Date());
      const offsetPart = parts.find((part) => part.type === "timeZoneName");
      if (offsetPart) {
        let offset = offsetPart.value;
        const match = offset.match(/^GMT([+-])(\d+):(\d+)$/);
        if (match) {
          const sign = match[1];
          const hours = parseInt(match[2], 10);
          const mins = parseInt(match[3], 10);
          if (mins === 0) {
            offset = `GMT${sign}${hours}`;
          } else {
            offset = `GMT${sign}${hours + mins / 60}`;
          }
        }
        label = `${label} (${offset})`;
      }
    } catch {
      // Keep fallback
    }
    return { value: tz, label };
  });
})();

function TimezoneSearchSelect({
  value,
  onChange,
  id,
}: {
  value: string;
  onChange: (tz: string) => void;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = timeZoneOptions.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = timeZoneOptions.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : value;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white border rounded-xl text-xs sm:text-sm font-medium focus:outline-none transition-all text-neutral-800 cursor-pointer text-left shadow-xs ${
          isOpen
            ? "border-blue-500 ring-2 ring-blue-500/20"
            : "border-neutral-200 hover:border-neutral-300"
        }`}
      >
        <span className="truncate">{displayLabel || "Select timezone..."}</span>
        <ChevronDown
          size={16}
          className={`text-neutral-400 shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 z-50 w-full mt-1 bg-white border border-neutral-200 rounded-xl shadow-xl max-h-60 overflow-hidden flex flex-col">
          <div className="p-3 border-b border-neutral-100 flex items-center gap-2 bg-slate-50">
            <Search size={14} className="text-neutral-400 shrink-0" />
            <input
              type="text"
              placeholder="Search timezone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none text-neutral-800 placeholder-neutral-400"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto flex-1 max-h-48">
            {filtered.length > 0 ? (
              filtered.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm hover:bg-neutral-50 transition-colors ${
                    value === opt.value
                      ? "bg-blue-50 font-bold text-blue-600 hover:bg-blue-100/50"
                      : "text-neutral-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-xs text-neutral-400 text-center font-medium">
                No timezones found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CalendarWidget({
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
  timezone,
  setTimezone,
  isMobile = false,
}: CalendarWidgetProps) {
  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const yearLabel = currentMonth.getFullYear();
  const daysInMonth = getDaysInMonth(currentMonth);

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 mt-4 border border-neutral-100 rounded-2xl p-3 bg-slate-50/50">
        {/* Timezone Selector */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="mobile-timezone"
            className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
          >
            Your Timezone
          </label>
          <TimezoneSearchSelect
            id="mobile-timezone"
            value={timezone}
            onChange={setTimezone}
          />
        </div>

        {/* Calendar Widget */}
        <div className="border border-neutral-100 rounded-xl p-3 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-neutral-800 capitalize select-none">
              {monthName} {yearLabel}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 hover:bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 hover:bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Calendar Days Header */}
          <div className="grid grid-cols-7 gap-0.5 text-center mb-2">
            {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((d) => (
              <span key={d} className="text-[9px] font-bold text-neutral-400 tracking-wider">
                {d}
              </span>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-0.5 text-center">
            {daysInMonth.map((d, idx) => {
              const isSelected =
                selectedDate &&
                d.date.getDate() === selectedDate.getDate() &&
                d.date.getMonth() === selectedDate.getMonth() &&
                d.date.getFullYear() === selectedDate.getFullYear();

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => d.isCurrentMonth && setSelectedDate(d.date)}
                  className={`text-[10px] font-semibold h-7 w-7 mx-auto flex items-center justify-center transition-all ${
                    !d.isCurrentMonth
                      ? "text-neutral-200 pointer-events-none"
                      : isSelected
                        ? "bg-blue-600 text-white rounded-full font-bold shadow-sm shadow-blue-500/20"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 rounded-full cursor-pointer"
                  }`}
                >
                  {d.day}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <>
      {/* Timezone Selector */}
      <div className="flex flex-col gap-2 mb-6">
        <label
          htmlFor="timezone"
          className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider"
        >
          Your Timezone
        </label>
        <TimezoneSearchSelect
          id="timezone"
          value={timezone}
          onChange={setTimezone}
        />
      </div>

      {/* Calendar Widget */}
      <div className="border border-neutral-100 rounded-2xl p-3 sm:p-4 bg-slate-50">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-neutral-800 capitalize select-none">
            {monthName} {yearLabel}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 hover:bg-white border border-transparent hover:border-neutral-200 rounded-lg text-neutral-600 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 hover:bg-white border border-transparent hover:border-neutral-200 rounded-lg text-neutral-600 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Calendar Days Header */}
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center mb-2">
          {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((d) => (
            <span
              key={d}
              className="text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-wider"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Calendar Days Grid */}
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 text-center">
          {daysInMonth.map((d, idx) => {
            const isSelected =
              selectedDate &&
              d.date.getDate() === selectedDate.getDate() &&
              d.date.getMonth() === selectedDate.getMonth() &&
              d.date.getFullYear() === selectedDate.getFullYear();

            return (
              <button
                key={idx}
                type="button"
                onClick={() => d.isCurrentMonth && setSelectedDate(d.date)}
                className={`text-[11px] sm:text-xs font-semibold h-7 w-7 sm:h-8 sm:w-8 mx-auto flex items-center justify-center transition-all ${
                  !d.isCurrentMonth
                    ? "text-neutral-200 pointer-events-none"
                    : isSelected
                      ? "bg-blue-600 text-white rounded-full font-bold shadow-sm shadow-blue-500/20"
                      : "text-neutral-600 hover:bg-white hover:border hover:border-neutral-200 hover:text-neutral-900 rounded-full cursor-pointer"
                }`}
              >
                {d.day}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
