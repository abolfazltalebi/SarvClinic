import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-jalaali';
import jalaali from 'jalaali-js';
import { parseISO } from 'date-fns';

import { FaCalendarAlt, FaClock } from 'react-icons/fa';

moment.loadPersian({ usePersianDigits: true });

const Picker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => {
    const jalaaliDate = jalaali.toJalaali(date);
    const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    return (
      <div className="flex justify-between items-center px-2 py-1">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          {'<'}
        </button>
        <select
          value={jalaaliDate.jm}
          onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
        >
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={jalaaliDate.jy}
          onChange={({ target: { value } }) => changeYear(parseInt(value))}
        >
          {[...Array(20).keys()].map((option) => (
            <option key={option} value={jalaaliDate.jy - 10 + option}>
              {jalaaliDate.jy - 10 + option}
            </option>
          ))}
        </select>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          {'>'}
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-5 p-5 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">انتخاب تاریخ و زمان</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          تاریخ
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          renderCustomHeader={renderCustomHeader}
          customInput={<CustomInput />}
          dateFormat="yyyy/MM/dd"
          calendarClassName="rtl"
          className="form-input mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
          زمان
        </label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={handleTimeChange}
          className="form-input mt-1 block w-full"
        />
      </div>
      <div>
        <p>تاریخ انتخاب شده: {moment(startDate).format('jYYYY/jMM/jDD')}</p>
        <p>زمان انتخاب شده: {selectedTime}</p>
      </div>
    </div>
  );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <button className="form-input mt-1 block w-full text-right" onClick={onClick} ref={ref}>
    <FaCalendarAlt className="inline mr-2" />
    {value}
  </button>
));

export default Picker;
