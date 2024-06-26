import Picker from "./Picker";
function Reserv() {
  return (
    <section className="container bg-white rounded-xl p-2 relative -top-12">
      <form action="" className="flex items-center justify-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-user-line"></i>
            <label htmlFor="name">نام و نام خانوادگی</label>
          </div>
          <input type="text" className="w-full p-2 border rounded-md" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-phone-line"></i>
            <label htmlFor="name">شماره تلفن</label>
          </div>
          <input type="text" className="w-full p-2 border rounded-md" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <i className="ri-calendar-2-line"></i>{" "}
            <label htmlFor="name">تاریخ نوبت</label>
          </div>
          <Picker />
        </div>
      </form>
    </section>
  );
}

export default Reserv;
