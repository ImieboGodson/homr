"use client";

import { useState } from "react";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

interface BasicCalendarProps {
  value: Date;
  onChange: (value: Date) => void;
}

const BasicCalendar: React.FC<BasicCalendarProps> = ({ value, onChange }) => {
  return (
    <Calendar
      displayMode="date"
      date={value}
      color="#000"
      minDate={new Date()}
      onChange={(value) => onChange(value)}
    />
  );
};

export default BasicCalendar;
