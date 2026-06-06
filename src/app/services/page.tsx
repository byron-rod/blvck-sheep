import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Express Detours | Blvck Sheep",
  description: "Modify your journey with strategic stops at Mayan ruins or local restaurants.",
  keywords: "express tours guatemala, ruinas de iximche, hobbitenango, volcan pacaya, auto safari chapin",
};

export default function ServicesPage() {
  return <ServicesClient />;
}