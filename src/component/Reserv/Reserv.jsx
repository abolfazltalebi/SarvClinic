import Picker from "./Picker";
import { useState } from "react";

function Reserv() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const showPopUp = () => {
    setIsFormSubmitted(!isFormSubmitted);
  };

  return (
    <section className="reserve-section">
      <form className="flex flex-col md:flex-row items-center justify-center gap-3 space-y-3 md:space-y-0 relative">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-user-line"></i>
            <label htmlFor="name">نام و نام خانوادگی</label>
          </div>
          <input
            type="text"
            className="w-full p-2 border border-primary rounded-md  "
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
            className="w-full p-2 border border-primary rounded-md "
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
          <button type="submit" onClick={showPopUp} className="transition-all duration-300">
            رزرو نوبت
          </button>
        </div>
      </form>
      {isFormSubmitted && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-primary bg-opacity-85 rounded-md md:rounded-full">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p>رزرو شما با موفقیت ثبت شد.</p>
            <button onClick={() => setIsFormSubmitted(false)} className="bg-primary text-white p-2 rounded-md mx-auto">بستن</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reserv;