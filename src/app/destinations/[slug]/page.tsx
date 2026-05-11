import { Metadata } from "next";
import { destinationsData } from "@/data/destinations";
import DestinationSlugClient from "./DestinationSlugClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // We just get the English one for default metadata
  const destination = destinationsData.find(
    (item) => item.id === slug && item.language === "en"
  );

  if (!destination) {
    return {
      title: "Destination Not Found - Black Sheep Tourist Services",
    };
  }

  return {
    title: `${destination.title} - Black Sheep Tourist Services`,
    description: destination.overview.substring(0, 160),
    openGraph: {
      title: `${destination.title} - Black Sheep Tourist Services`,
      description: destination.overview.substring(0, 160),
      images: [{ url: destination.heroImage }],
    },
  };
}

export default function DestinationDetailPage({ params }: Props) {
  return <DestinationSlugClient params={params} />;
}
