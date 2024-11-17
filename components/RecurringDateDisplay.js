// src/components/RecurringDateDisplay.js

import React from "react";

const RecurringDateDisplay = ({ recurringDates }) => {
  return (
    <div className="text-sm text-green-500 mt-2">
      <p>Recurring Dates:</p>
      <ul>
        {recurringDates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringDateDisplay;
