import imageSection from "../../assets/images/ms-dental-s1.webp";
function Section1() {
  return (
    <section className="section1">
      <div>
        <img src={imageSection} className='w-full h-auto' alt="" />
      </div>
      <div className="space-y-3">
        <div className=" border-box">
          <p className="text-base text-primary">
          👋 سلام به دندان پزشکی سرو خوش آمدید.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="title-section1">
            دندانپزشکی سرو اینجاست , تا به شما کمک کند چهره شما با لبخند زیبا تر
            شود.
          </h2>
          <p className="text-base text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </section>
    
  );
}

export default Section1;
