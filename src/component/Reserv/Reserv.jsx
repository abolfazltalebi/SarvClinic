// import Picker from "./Picker";
function Reserv() {
  return (
    <section className="max-w-4xl mx-8 md:mx-auto bg-white rounded-xl shadow-lg md:rounded-full p-7 relative top-7 md:-top-2">
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
        <div className="w-2/6 md:w-auto flex items-center justify-center mx-auto bg-primary p-2.5 mt-12 rounded-xl text-white gap-3 transition-all hover:bg-accent cursor-pointer hover:translate-y-[-5px]">
          <i className="ri-calendar-2-fill"></i>
          <a className=" transition-all ">رزرو نوبت</a>
        </div>
      </form>
    </section>
  );
}

export default Reserv;
