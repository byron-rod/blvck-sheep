import Image from "next/image";
import bigPic from "@/assets/images/semuc.webp";
import BlogCardFeat from "./BlogCardFeat";

const FeatureSemuc = () => {
  return (
    <section className="group inline-block overflow-hidden rounded-xl">
      <BlogCardFeat
        title="Semuc Champey"
        description="Prices per passenger starting at: Guate-Semuc Champey: $48 | Pana-Semuc Champey: $60"
        className="col-span-2 lg:col-span-1"
      >
        <div className="aspect-video flex items-center justify-center overflow-hidden rounded-3xl">
          <div className="group relative">
            <Image
              src={bigPic}
              alt="Semuc Champey"
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

export default FeatureSemuc;
