import {services} from '../../constants/index'
function Services() {
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
                <img src={serviceItem.src} className="rounded-xl w-full h-auto" alt="" />
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
