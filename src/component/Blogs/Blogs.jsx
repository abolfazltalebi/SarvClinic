import blog1 from "../../assets/images/blog-1.webp";
import blog2 from "../../assets/images/blog-2.webp";
import blog3 from "../../assets/images/blog-3.webp";
function Blogs() {
  const Blog = [
    { id: 1, name: "باید ها و نباید های سفید کردن دندان؟", src: blog1 },
    { id: 2, name: "نکات رعات بهداشت و دهان در کودکان؟", src: blog2 },
    { id: 3, name: "بیماری سرطان دهان چیست؟", src: blog3 },
  ];
  return (
    <section className="blogs">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="border-title">
            <p className="text-base text-primary font-bold">وبلاگ کلینیک سرو</p>
          </div>
          <div>
            <h2 className="text-2xl text-center my-1">وبلاگ ما</h2>
            <p className="text-gray-500 text-center w-2/3 md:w-1/2 mx-auto">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-center gap-4 md:gap-10 ">
        {Blog.map((blogItem) => {
          return (
            <div
              className="blogs-box"
              key={blogItem.id}
            >
              <div>
                <img
                  src={blogItem.src}
                  className="w-full h-auto object-cover object-center"
                  alt=""
                />
              </div>
              <div className="space-y-3 px-2 py-4">
                <h2 className="text-xl font-bold">{blogItem.name}</h2>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
                <button className="bg-primary text-white text-sm py-2 px-4 rounded-full mt-2 group-hover:animate-pulse">
                  <a href="/">بیشتر بخوانید</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-primary text-white md:text-lg py-2 px-4 rounded-full mt-2">
          دیدن تمامی وبلاگ ها
        </button>
      </div>
    </section>
  );
}

export default Blogs;
