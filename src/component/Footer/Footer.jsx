import logoFooter from "../../assets/images/logo-footer.webp";
import "remixicon/fonts/remixicon.css";
import logo from "../../assets/images/log.png"
function Footer() {
  const fItem2 = [
    { id: 1, name: "صفحه اصلی", link: "" },
    { id: 2, name: "درباره ما", link: "" },
    { id: 3, name: "خدمات ما", link: "" },
    { id: 4, name: "تماس با ما", link: "" },
    { id: 5, name: "وبلاگ ما", link: "" },
  ];
  const fItem3 = [
    { id: 1, name: "بلیچینگ دندان", link: "" },
    { id: 2, name: "بریس های دندانی", link: "" },
    { id: 3, name: "امپلنت دندان", link: "" },
    { id: 4, name: "چکاپ دندان", link: "" },
    { id: 5, name: "بریس های ارتودنسی", link: "" },
  ];
  return (
    <footer className="footer bg-[#000A2D] p-4 px-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 my-12">
        <div className="footer-item1">
          <div>
            <img src={logoFooter} alt="" />
          </div>
          <div>
            <p className="text-white text-sm text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است .لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
        <div className="footer-item2 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-white text-xl">دسترسی سریع</p>
            <div className="w-12 h-2 bg-primary animate-bounce rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            {fItem2.map((footerItem) => {
              return (
                <div className="" key={footerItem.id}>
                  <a
                    href={footerItem.link}
                    className="text-white  hover:text-primary text-md"
                  >
                    {footerItem.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-item2 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-white text-xl">خدمات ما</p>
            <div className="w-12 h-2 bg-primary animate-bounce rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            {fItem3.map((footerItem3) => {
              return (
                <div className="" key={footerItem3.id}>
                  <a
                    href={footerItem3.link}
                    className="text-white  hover:text-primary text-md"
                  >
                    {footerItem3.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-item2 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-white text-xl">تماس با ما</p>
            <div className="w-12 h-2 bg-primary animate-bounce rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-white">
              <a href="/">تماس با کلینیک مرکزی</a>
            </div>
            <div className="flex gap-2 text-white">
              <a href="/">تماس با شعبه نیاوران</a>
            </div>
            <div className="flex gap-2 text-white">
              <a href="/">تماس با شعبه فرمانیه</a>
            </div>
            <div className="flex gap-2 text-white">
              <a href="/">تماس با شعبه زعفرانیه</a>
            </div>
            <div className="flex gap-2 text-white">
              <a href="/">تماس با شعبه اقدسیه</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 rounded-full bg-primary"></div>
      <div className="flex items-center justify-between my-2">
        <div>
            <img src={logo} className="w-36" alt="" />
        </div>
            <div>
                <p className="text-white text-sm">تمامی حقوق طراحی این صفحه توسط 
                <a href="www.abolfazltalebii.ir" className="text-primary bg-white mx-1 rounded-full animate-bounce p-1"> ابوالفضل طالبی </a>
                 انجام شده است.</p>
            </div>
      </div>
    </footer>
  );
}

export default Footer;
