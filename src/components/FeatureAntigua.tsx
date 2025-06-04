import Image from "next/image";
import bigPic from "@/assets/images/antigua.jpg";
import BlogCardFeat from "./BlogCardFeat";

const FeatureAntigua = () => {
  return (
    <section className="group inline-block overflow-hidden rounded-xl">
      <BlogCardFeat
        title="Antigua Guatemala"
        description="Charming colonial streets, vibrant cafes, and rich history beneath majestic volcanoes."
        className="col-span-2 lg:col-span-1"
      >
        <div className="aspect-video flex items-center justify-center overflow-hidden rounded-3xl">
          <div className="group relative">
            <Image
              src={bigPic}
              alt="Antigua Guatemala"
              className="transition-transform duration-500 group-hover:scale-105 opacity-80"
              width={700}
              height={500}
            />
          </div>
        </div>
      </BlogCardFeat>
    </section>
  );
};

export default FeatureAntigua;
