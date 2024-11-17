import React from "react";
import { useDateContext } from "../context/DateContext";
import CalendarHeader from "./CalendarHeader";
import RecurrenceOptions from "./RecurrenceOptions";
import DatePreview from "./DatePreview";

const DatePicker = () => {
  const {
    selectedDate,
    setSelectedDate,
    recurrenceType,
    setRecurrenceType,
    customRecurrence,
    setCustomRecurrence,
    getRecurringDates,
  } = useDateContext();
  

  // Render each day in the calendar and mark recurring days
  const renderCalendarDays = () => {
    const daysInMonth = selectedDate.daysInMonth();
    const firstDayOfMonth = selectedDate.startOf("month").day();
    const recurringDates = getRecurringDates();

    return Array.from({ length: 42 }).map((_, index) => {
      const day = index - firstDayOfMonth + 1;
      const isCurrentMonth = day > 0 && day <= daysInMonth;
      const isSelected = day === selectedDate.date() && isCurrentMonth;
      const isRecurring = recurringDates.includes(day) && isCurrentMonth;

      return (
        <button
          key={index}
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            isSelected
              ? "bg-blue-500 text-white"
              : isRecurring
              ? "bg-green-300 text-gray-800"
              : "text-gray-800"
          } ${isCurrentMonth ? "cursor-pointer" : "opacity-50 cursor-default"}`}
          onClick={() =>
            isCurrentMonth && setSelectedDate(selectedDate.set("date", day))
          }
        >
          {isCurrentMonth ? day : ""}
        </button>
      );
    });
  };

  return (
    <div className="container mx-auto p-5 bg-green-100 shadow-lg rounded-lg flex flex-col space-y-6">
      <DatePreview selectedDate={selectedDate} />
      <div className="flex flex-col space-y-4">
        <CalendarHeader selectedDate={selectedDate} />
        <div className="grid grid-cols-7 gap-2">{renderCalendarDays()}</div>
        <RecurrenceOptions
          recurrenceType={recurrenceType}
          setRecurrenceType={setRecurrenceType}
          customRecurrence={customRecurrence}
          setCustomRecurrence={setCustomRecurrence}
        />
      </div>
    </div>
  );
};

export default DatePicker;
