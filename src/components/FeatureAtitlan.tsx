import Image from "next/image";
import bigPic from "@/assets/images/atitlan.jpg";
import BlogCardFeat from "./BlogCardFeat";

const FeatureAtitlan = () => {
  return (
    <section className="group inline-block overflow-hidden rounded-xl">
      <BlogCardFeat
        title="Lake Atitlan"
        description="Prices per passenger starting at: Pana-Guate: $23 | Pana-Antigua: $14 | Pana-El Paredon: $27"
        className="col-span-2 lg:col-span-1"
      >
        <div className="flex items-center justify-center overflow-hidden rounded-3xl">
          <div className="group relative">
            <Image
              src={bigPic}
              alt="Atitlan Lake"
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

export default FeatureAtitlan;
