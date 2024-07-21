import { useState } from "react";
import headerLogo from "../../../assets/images/logo-header-desktop.webp";

function HeaderMobile() {
  const listMenu = [
    { id: 1, name: "صفحه اصلی", link: "/" },
    { id: 2, name: "درباره ما", link: "/about" },
    { id: 3, name: "خدمات ما", link: "/orders" },
    { id: 4, name: "تماس با ما", link: "#contact" },
    { id: 5, name: "وبلاگ ما", link: "/contact" },
  ];
  const [isClosed, setIsClosed] = useState(true);
  const handleClose = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div className="header-mobile w-2/3 absolute top-0 left-0 h-screen bg-white/80 backdrop-filter backdrop-blur-sm z-50 p-4">
      <div className="flex items-center justify-between ">
        <div>
          <div>
            <img src={headerLogo} alt="" />
          </div>
        </div>
        <button onClick={handleClose}>
          <i className="ri-close-large-line ri-xl cursor-pointer" />
        </button>
      </div>
      <div>
        <nav className="flex flex-col list-none ">
          {listMenu.map((navItem) => {
            return (
              <li key={navItem.id} className="py-5 px-1">
                <a href="{navItem.link}" className="nav-item">
                  {navItem.name}
                </a>
              </li>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center justify-between gap-4 absolute bottom-0 left-0 w-full p-4">
        <div className="btn-header-1">
          <i className="ri-phone-line"></i>
          <a className=" transition-all ">تماس با ما</a>
        </div>
        <div className="btn-header-2">
          <i className="ri-calendar-2-fill"></i>
          <a className=" transition-all ">رزرو نوبت</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
