import  { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Picker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <DatePicker
        style={{
          borderRadius: "8px",
          fontSize: "14px",
          padding: "20px",
        }}
        value={selectedDate}
        onChange={handleDateChange}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  );
};

export default Picker;
