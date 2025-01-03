import Image from "next/image";
import bigPic from "@/assets/images/el-paredon.webp";
import BlogCardFeat from "./BlogCardFeat";

const FeatureElParedon = () => {
  return (
    <section className="group inline-block overflow-hidden rounded-xl">
      <BlogCardFeat
        title="Learn To Surf"
        description="El Paredon"
        className="col-span-2 lg:col-span-1"
      >
        <div className="aspect-video flex items-center justify-center overflow-hidden rounded-3xl">
          <div className="group relative">
            <Image
              src={bigPic}
              alt="El Paredon"
              className="transition-transform duration-500 group-hover:scale-105 opacity-80"
            />
          </div>
        </div>
      </BlogCardFeat>
    </section>
  );
};

export default FeatureElParedon;