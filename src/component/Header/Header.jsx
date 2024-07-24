import { useState } from "react";
import { listMenu } from "../../constants/index";
import "remixicon/fonts/remixicon.css";
import headerLogo from "../../assets/images/logo-header-desktop.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
function Header() {
  AOS.init();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <header>
      <div className="back-header">
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
      <navbar className="nav">
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <nav className="hidden md:flex items-center list-none ">
          {listMenu.map((navItem) => {
            return (
              <li key={navItem.id} className="nav-item">
                <a href="{navItem.link}">{navItem.name}</a>
              </li>
            );
          })}
        </nav>
        <div className="flex items-center justify-between gap-4">
          <div className="btn-header-1 hidden md:inline-flex">
            <i className="ri-phone-line"></i>
            <a className=" transition-all ">تماس با ما</a>
          </div>
          <div
            className="md:hidden"
            onClick={() => {
              handleOpenMenu();
            }}
          >
            <i className="ri-menu-line ri-lg"></i>
          </div>
          {isOpen && <HeaderMobile onClose={handleCloseMenu} />}
          <div className="btn-header-2">
            <i className="ri-calendar-2-fill"></i>
            <a className=" transition-all ">رزرو نوبت</a>
          </div>
        </div>
      </navbar>
    </header>
  );
}

export default Header;
