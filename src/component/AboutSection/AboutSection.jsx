import about from "../../assets/images/ms-dental-section-about.webp";
function AboutSection() {
  return (
    <section className="about-section grid grid-cols-1 md:grid-cols-2 items-center gap-3 container">
      <div className="space-y-6 order-2 md:order-1">
        <div className="flex items-center justify-center w-2/5 md:w-2/6 border border-gray-200 rounded-full p-2">
          <p className="text-base text-primary font-bold">درباره کلینیک سرو</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            شما با ما بهترین حس اعتماد را تجربه می کنید
          </h2>
          <p className="text-gray-600 mt-4 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
            هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className="flex items-center flex-wrap justify-center gap-2 j md:gap-6 mt-4">
            <div className="flex items-center justify-center w-2/5 md:w-2/6 border border-gray-200 rounded-full p-2 gap-2">
              <i className="ri-checkbox-circle-line text-primary"></i>
              <p className="text-base text-primary font-bold">بهترین تجهیزات</p>
            </div>
            <div className="flex items-center justify-center w-2/5 md:w-2/6 border border-gray-200 rounded-full p-2 gap-2">
              <i className="ri-checkbox-circle-line text-primary"></i>
              <p className="text-base text-primary font-bold">رزرو نوبت آسان</p>
            </div>
            <div className="flex items-center justify-center w-2/5 md:w-2/6 border border-gray-200 rounded-full p-2 gap-2">
              <i className="ri-checkbox-circle-line text-primary"></i>
              <p className="text-base text-primary font-bold">بهترین قیمت ها</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-primary p-3 rounded-xl text-white gap-3 transition-all hover:bg-accent cursor-pointer hover:translate-y-[-5px]">
              <a className=" transition-all ">بیشتر بخوانید</a>
            </div>
            <div className="flex items-center border-2 border-primary p-3 rounded-xl text-primary gap-3 transition-all hover:bg-accent hover:text-white hover:border-white cursor-pointer hover:translate-y-[-5px]">
              <a className=" transition-all ">رزرو نوبت</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={about} alt="" />
      </div>
    </section>
  );
}

export default AboutSection;
