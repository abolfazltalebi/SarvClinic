import icon1 from "../../assets/images/svg/Bleaching.svg";
import icon2 from "../../assets/images/svg/braces.svg";
import icon3 from "../../assets/images/svg/implant.svg";
import icon4 from "../../assets/images/svg/tooth-insurance.svg";
import icon5 from "../../assets/images/svg/denture.svg";
import icon6 from "../../assets/images/svg/dental-fillings.svg";
import image1 from "../../assets/images/service-image-1.webp";
import image2 from "../../assets/images/service-image-2.webp";
import image3 from "../../assets/images/service-image-3.webp";
import image4 from "../../assets/images/service-image-4.webp";
import image5 from "../../assets/images/service-image-5.webp";
import image6 from "../../assets/images/service-image-6.webp";
function Services() {
  const services = [
    { id: 1, name: "بلیچینگ دندان", icon: icon1, src: image1 },
    { id: 2, name: "بریس های دندانی", icon: icon2, src: image2 },
    { id: 3, name: "امپلنت دندان", icon: icon3, src: image3 },
    { id: 4, name: "چکاپ دندان", icon: icon4, src: image4 },
    { id: 5, name: "بریس های ارتودنسی", icon: icon5, src: image5 },
    { id: 6, name: "ارتودنسی دندان", icon: icon6, src: image6 },
  ];
  return (
    <section className="container my-4 space-y-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="border-title">
          <p className="text-base text-primary font-bold">خدمات کلینیک سرو</p>
        </div>
        <div>
          <h2 className="text-2xl text-center my-1">خدمات ما</h2>
          <p className="text-gray-500 text-center w-2/3 md:w-1/2 mx-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
      <div className="services-container">
        {services.map((serviceItem) => {
          return (
            <div className="relative group" key={serviceItem.id}>
              <div className="group-hover:opacity-50 group-hover:scale-105  transition duration-300 ease-in-out">
                <img src={serviceItem.src} className="rounded-xl" alt="" />
              </div>
              <div className="services-box">
                <div className="flex items-center gap-2">
                  <img src={serviceItem.icon} alt="" className="w-10 h-10" />
                  <p className="font-bold text-lg">{serviceItem.name}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm text-justify px-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است
                  </p>
                  <button className="bg-primary text-white text-sm py-2 px-4 rounded-full mt-2">
                    بیشتر بخوانید
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
