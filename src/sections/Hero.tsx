import Button from "@/components/Button";
import Link from "next/link";
import { useTranslations } from "next-intl"; // 1. Importamos la herramienta

export default function Hero() {
  // 2. Activamos la herramienta y le decimos que use la sección "Hero" del JSON
  const t = useTranslations("Hero"); 

  const whatsappLink =
    "https://wa.me/50255116881?text=Hello!,%20I%20would%20like%20to%20book%20a%20shuttle!";

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            {/* 3. Reemplazamos el texto */}
            {t("badge")}
          </div>
        </div>
        <h1 className="text-[5.5rem] lg:text-[6.2rem] font-medium mt-10 leading-[4.3rem]">
          {t("title")}
        </h1>
        <p className="text-start text-xl lg:text-2xl text-white mt-4 md:mt-6 font-bold">
          {/* Aquí usamos las dos partes para mantener el cambio de color de Tailwind */}
          {t("subtitlePart1")}
          <span className="text-gray-400">{t("subtitlePart2")}</span>
        </p>
        <Button variant="secondary" className="mt-8 font-bold flex">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-blue-400"
            aria-label="WhatsApp contact for Blvck Sheep Shuttles"
          >
            {t("cta")}
          </Link>
        </Button>
      </div>
    </section>
  );
}