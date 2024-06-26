import imageSection from "../../assets/images/ms-dental-s1.webp";
function Section1() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-3">
      <div>
        <img src={imageSection} className='w-full h-auto' alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center w-2/3 md:w-1/2 border border-gray-200 rounded-full p-2">
          <p className="text-base text-primary">
          👋 سلام به دندان پزشکی سرو خوش آمدید.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-4xl font-bold">
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
