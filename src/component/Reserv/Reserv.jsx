// import Picker from "./Picker";
function Reserv() {
  return (
    <section className="reserve-section">
      <form
        action=""
        className="flex flex-wrap md:flex-nowrap  items-center justify-center gap-3 space-y-3"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-user-line"></i>
            <label htmlFor="name">نام و نام خانوادگی</label>
          </div>
          <input type="text" className="w-full p-2 border rounded-md " placeholder={"ابوالفضل طالبی"} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-phone-line"></i>
            <label htmlFor="name">شماره تلفن</label>
          </div>
          <input type="text" className="w-full p-2 border rounded-md" placeholder={"0912900000"}/>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-calendar-2-line"></i>
            <label htmlFor="name">تاریخ نوبت</label>
          </div>
          <input type="text" className="w-full p-2 border rounded-md" />
          {/* <Picker /> */}
        </div>
        <div className="btn-reserve">
          <i className="ri-calendar-2-fill"></i>
          <a className=" transition-all ">رزرو نوبت</a>
        </div>
      </form>
    </section>
  );
}

export default Reserv;
