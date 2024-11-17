"use client";

import React, { createContext, useContext, useState } from "react";
import dayjs from "dayjs";

// Create context
const DateContext = createContext();

// DateProvider component
export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Default date: today's date
  const [recurrenceType, setRecurrenceType] = useState("none");
  const [customRecurrence, setCustomRecurrence] = useState({
    interval: 1,
    daysOfWeek: [],
    nthDay: null,
  });

  // Function to calculate recurring dates based on the selected recurrence type
  const getRecurringDates = () => {
    const recurringDates = [];
    const currentMonth = selectedDate.month();
    const daysInMonth = selectedDate.daysInMonth();

    if (recurrenceType === "daily") {
      for (let i = 1; i <= daysInMonth; i += customRecurrence.interval) {
        recurringDates.push(i);
      }
    } else if (recurrenceType === "weekly") {
      const firstDayOfMonth = dayjs(selectedDate).startOf("month");
      for (let i = 0; i < daysInMonth; i++) {
        const day = firstDayOfMonth.add(i, "day");
        if (customRecurrence.daysOfWeek.includes(day.day())) {
          recurringDates.push(day.date());
        }
      }
    } else if (recurrenceType === "monthly" && customRecurrence.nthDay) {
      recurringDates.push(customRecurrence.nthDay);
    }

    return recurringDates;
  };

  return (
    <DateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        recurrenceType,
        setRecurrenceType,
        customRecurrence,
        setCustomRecurrence,
        getRecurringDates,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

// Custom hook to use the context
export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDateContext must be used within a DateProvider");
  }
  return context;
};
