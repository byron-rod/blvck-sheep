import { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Blvck Sheep",
  description: "Viaja diferente. Encuentra la solución de transporte perfecta para tu viaje por Guatemala, desde shuttles compartidos hasta SUVs eléctricas privadas y ecológicas.",
  keywords: "shuttles guatemala, transporte compartido, conductor privado guatemala, suv eléctrica guatemala, transporte premium, servicios Blvck Sheep, buses guatemala, transporte privado guatemala",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}