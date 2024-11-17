import React from "react";

const RecurrenceOptions = ({
  recurrenceType,
  setRecurrenceType,
  customRecurrence,
  setCustomRecurrence,
}) => {
  const handleIntervalChange = (e) => {
    setCustomRecurrence({
      ...customRecurrence,
      interval: e.target.value,
    });
  };

  const handleDaysOfWeekChange = (day) => {
    const newDaysOfWeek = customRecurrence.daysOfWeek.includes(day)
      ? customRecurrence.daysOfWeek.filter((d) => d !== day)
      : [...customRecurrence.daysOfWeek, day];

    setCustomRecurrence({
      ...customRecurrence,
      daysOfWeek: newDaysOfWeek,
    });
  };

  const handleNthDayChange = (e) => {
    setCustomRecurrence({
      ...customRecurrence,
      nthDay: e.target.value,
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <label className="text-lg font-semibold">Recurrence Type</label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="border p-3 rounded-lg bg-gray-50 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="none">None</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      {recurrenceType !== "none" && (
        <div className="flex flex-col">
          <label className="text-sm">Custom Recurrence Interval</label>
          <input
            type="number"
            value={customRecurrence.interval}
            onChange={handleIntervalChange}
            className="border p-3 rounded-lg bg-gray-50 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Interval"
          />
        </div>
      )}

      {recurrenceType === "weekly" && (
        <div className="flex flex-col mt-4">
          <label className="text-sm">Select Days of the Week</label>
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <button
                  key={index}
                  onClick={() => handleDaysOfWeekChange(index)}
                  className={`border p-2 rounded-lg transition-all duration-200 ease-in-out transform ${
                    customRecurrence.daysOfWeek.includes(index)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {recurrenceType === "monthly" && (
        <div className="flex flex-col mt-4">
          <label className="text-sm">Select Nth Day of the Month</label>
          <input
            type="number"
            value={customRecurrence.nthDay || ""}
            onChange={handleNthDayChange}
            className="border p-3 rounded-lg bg-gray-50 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Day of the month"
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
