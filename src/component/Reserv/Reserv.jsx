import Picker from "./Picker";
import { useState,useRef  } from 'react';

function Reserv() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const popupRef = useRef(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsFormSubmitted(false);
    }
  };
  return (
    <section className="reserve-section" onClick={handleOutsideClick}>
      <form onSubmit={handleSubmit} className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 space-y-3 md:space-y-0 relative">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-user-line"></i>
            <label htmlFor="name">نام و نام خانوادگی</label>
          </div>
          <input
            type="text"
            className="w-full p-2 border rounded-md "
            placeholder={"ابوالفضل طالبی"}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-phone-line"></i>
            <label htmlFor="name">شماره تلفن</label>
          </div>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder={"0912900000"}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-calendar-2-line"></i>
            <label htmlFor="name">تاریخ نوبت</label>
          </div>
          <Picker />
        </div>
        <div className="btn-reserve">
          <i className="ri-calendar-2-fill"></i>
          <button type="submit" className="transition-all">رزرو نوبت</button>
        </div>
      </form>
      {isFormSubmitted && (
        <div ref={popupRef} className="absolute inset-0 flex items-center justify-center z-50 bg-primary bg-opacity-85 rounded-full">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p>رزرو شما با موفقیت ثبت شد.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reserv;
