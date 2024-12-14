import { type DestinationsType } from "@/sections/Destinations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function DestinationsColumn(props: {
  destinations: DestinationsType;
  className?: string;
}) {
  const { destinations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {destinations.map((destination) => (
        <div
          key={destination.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              src={destination.icon}
              alt={destination.name}
              className="size-24 rounded-3xl"
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{destination.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {destination.description}
          </p>
        </div>
      ))}
    </div>
  );
}
