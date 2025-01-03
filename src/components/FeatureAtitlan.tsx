import Image from "next/image";
import bigPic from "@/assets/images/lake-atitlan.jpg";
import BlogCardFeat from "./BlogCardFeat";

const FeatureAtitlan = () => {
  return (
    <section className="group inline-block overflow-hidden rounded-xl">
      <BlogCardFeat
        title="Where to Stay"
        description="Santa Cruz La Laguna"
        className="col-span-2 lg:col-span-1"
      >
        <div className="aspect-video flex items-center justify-center overflow-hidden rounded-3xl">
          <div className="group relative">
            <Image
              src={bigPic}
              alt="Atitlan Lake"
              className="transition-transform duration-500 group-hover:scale-105 opacity-80"
            />
          </div>
        </div>
      </BlogCardFeat>
    </section>
  );
};

export default FeatureAtitlan;
