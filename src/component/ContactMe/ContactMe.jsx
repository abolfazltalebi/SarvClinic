import imageContact from "../../assets/images/female-medical-doctor.webp";
function ContactMe() {
  return (
    <section className="bg-[#F1F8FF] py-4 md:py-0" id="contact">
      <div className="container flex flex-wrap items-center justify-center gap-4">
        <div className="">
          <img src={imageContact} className="md:w-[400px] h-full " alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-title">
            <p className="text-base text-primary font-bold">
              تماس با کلینیک سرو
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-4xl font-bold">
              با مشاوران برتر کلینیک ما صحبت کنید
            </h2>
            <p className="text-gray-600 md:w-[540px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است . لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="tel:09123456789"
                className="border-title bg-white"
              >
                <p className="text-base text-center text-primary font-bold">
                  09123456789
                </p>
              </a> 
              <a
                href="tel:09123456789"
                className="border-title bg-white"
              >
                <p className="text-base text-center text-primary font-bold">
                  09223456789
                </p>
              </a>
              <a
                href="tel:09123456789"
                className="border-title bg-white"
              >
                <p className="text-base text-center text-primary font-bold">
                  02123456789
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
