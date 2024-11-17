// pages/index.js
"use client";

import React from "react";
import DatePicker from "../components/DatePicker";
import "../app/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen w-screen h-screen  bg-gray-50 flex items-center justify-center">
      <DatePicker />
    </main>
  );
}
