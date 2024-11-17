import React from "react";

const DatePreview = ({ selectedDate }) => {
  return (
    <div className=" container content-center p-4 bg-gray-100 flex flex-col items-center">
      <p className="text-sm text-gray-500 mb-2">Selected Date</p>
      <p className="text-2xl font-semibold">
        {selectedDate.format("ddd, MMM D")}
      </p>
    </div>
  );
};

export default DatePreview;
