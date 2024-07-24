import Icon1 from "../../assets/images/icons/best-dentist.svg";
import Icon2 from "../../assets/images/icons/best-dentist-2.svg";
import Icon3 from "../../assets/images/icons/best-dentist-3.svg";
function Section2() {
  const service = [
    { id: 1, name: "بهترین دندانپزشکان", src: Icon1 },
    { id: 2, name: "مناسب ترین قیمت ها", src: Icon2 },
    { id: 3, name: "بهترین خدمات", src: Icon3 },
  ];
  return (
    <section className="bg-[#F1F8FF] py-20 ">
      <div
        className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 container "
        data-aos="fade-left"
      >
        {service.map((serviceItems) => {
          return (
            <div
              key={serviceItems.id}
              className="card-box"
            >
              <div>
                <img src={serviceItems.src} alt="" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-bold text-center">
                  {serviceItems.name}
                </p>
                <p className="text-gray-800 text-sm text-center leading-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section2;
