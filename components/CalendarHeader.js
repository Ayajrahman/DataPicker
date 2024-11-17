import React from "react";

const CalendarHeader = ({ selectedDate }) => {
  return (
    <div className="flex  justify-evenly items-center mb-4">
      <button className="text-gray-500 hover:text-blue-500 text-2xl transition-transform transform hover:scale-125">
        {"<"}
      </button>
      <p className="font-semibold text-2xl">
        {selectedDate.format("MMMM YYYY")}
      </p>
      <button className="text-gray-500 hover:text-blue-500 text-2xl transition-transform transform hover:scale-125">
        {">"}
      </button>
    </div>
  );
};

export default CalendarHeader;
