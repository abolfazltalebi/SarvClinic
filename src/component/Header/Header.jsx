import "remixicon/fonts/remixicon.css";
import headerLogo from "../../assets/images/logo-header-desktop.webp";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  const listMenu = [
    { id: 1, name: "صفحه اصلی", link: "/" },
    { id: 2, name: "درباره ما", link: "/about" },
    { id: 3, name: "خدمات ما", link: "/orders" },
    { id: 4, name: "تماس با ما", link: "/contact" },
    { id: 5, name: "وبلاگ ما", link: "/contact" },
  ];
  AOS.init();
  return (
    <header>
      <div className="hidden md:flex items-center justify-between px-4  bg-white py-3  border-b-2">
        <div className="flex items-center gap-4">
          {/* right-item */}
          <div className="flex items-center gap-2">
            <i className="ri-map-2-line size-6"></i>
            <p className="text-base">تهران , سعادت آباد , خیابان سرو</p>
          </div>
          {/* underline */}
          <div className="w-1 h-8 bg-primary rounded-full"></div>
          <div className="flex items-center gap-2">
            <i className="ri-customer-service-line size-6"></i>
            <p className="text-base">021-468-569-445</p>
          </div>
        </div>
        {/* left-item */}
        <div className="flex items-center gap-4">
          <i className="ri-calendar-event-line"></i>
          <p className="text-base">
            شنبه تا پنج شنبه از ساعت 8 تا 6 بعد از ظهر
          </p>
        </div>
      </div>
      <navbar className="flex items-center justify-between bg-white px-4">
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <nav className="hidden md:flex items-center list-none ">
          {listMenu.map((navItem) => {
            return (
              <li
                key={navItem.id}
                className="px-4 transition-all hover:text-primary hover:translate-y-[-5px] hover:border-primary hover:border-b-2 py-2"
              >
                <a href="{navItem.link}">{navItem.name}</a>
              </li>
            );
          })}
        </nav>
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center bg-primary p-3 rounded-xl text-white gap-3 transition-all hover:bg-accent cursor-pointer hover:translate-y-[-5px]">
            <i className="ri-phone-line"></i>
            <a className=" transition-all ">تماس با ما</a>
          </div>
          <div className="flex items-center bg-primary p-3 rounded-xl text-white gap-3 transition-all hover:bg-accent cursor-pointer hover:translate-y-[-5px]">
            <i className="ri-calendar-2-fill"></i>
            <a className=" transition-all ">رزرو نوبت</a>
          </div>
        </div>
      </navbar>
    </header>
  );
}

export default Header;
