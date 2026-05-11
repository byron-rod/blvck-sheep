import { Metadata } from "next";
import DestinationsClient from "./DestinationsClient";

export const metadata: Metadata = {
  title: "Our Destinations - Black Sheep Tourist Services",
  description:
    "Usefull information about the destinations you can visit with Black Sheep's personalized shuttle services in Guatemala.",
  keywords:
    "Panajachel, Antigua, El Paredon, Semuc Champey, Flores, Lake Izabal, Guatemala",
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}
