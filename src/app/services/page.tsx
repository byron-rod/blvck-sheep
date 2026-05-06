import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Rides & Services | Blvck Sheep",
  description: "Travel Differently. Find the perfect transit solution for your journey across Guatemala, from shared shuttles to private, eco-conscious electric SUVs.",
  keywords: "guatemala shuttles, shared transit, private driver guatemala, electric suv guatemala, premium transportation, Blvck Sheep services, hybrid cars guatemala, guatemala transportation, guatemala travel",
};

export default function ServicesPage() {
  return <ServicesClient />;
}