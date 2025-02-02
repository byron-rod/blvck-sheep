import BlogCardSmall from "@/components/BlogCardSmall";
import Tag from "@/components/Tag";
import Image, { StaticImageData } from "next/image";

interface BlogCard {
  title: string;
  description: string | React.ReactNode;
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

interface DestinationsSectionProps {
  tag: string;
  featurePost: React.ReactNode;
  blogCards: BlogCard[];
}

export default function DestinationsSection({
  tag,
  featurePost,
  blogCards,
}: DestinationsSectionProps) {
  return (
    <div className="mt-12">
      <div className="flex justify-start p-2">
        <Tag>{tag}</Tag>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-y-3 gap-x-6 mt-5">
        <article className="col-span-1 row-span-2 mt-2">{featurePost}</article>
        {blogCards.map((card, index) => (
          <article key={index} className="col-span-1 row-span-1">
            <BlogCardSmall title={card.title} description={card.description}>
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                className="rounded-xl object-cover"
                width={700}
                height={500}
              />
            </BlogCardSmall>
          </article>
        ))}
      </div>
    </div>
  );
}
