"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

interface RangeCalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const RangeCalendar: React.FC<RangeCalendarProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  return (
    <DateRange
      showDateDisplay={false}
      onChange={onChange}
      moveRangeOnFirstSelection={false}
      ranges={[value]}
      minDate={new Date()}
      disabledDates={disabledDates}
      months={2}
      calendarFocus="forwards"
      direction="horizontal"
      rangeColors={["#000"]}
    />
  );
};

export default RangeCalendar;
