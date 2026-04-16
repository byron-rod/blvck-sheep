"use client";
import { useParams } from "next/navigation";
import Button from "@/components/Button";
import Features from "@/sections/Features";
import Link from "next/link";

const referralsData: Record<string, { name: string; code: string }> = {
  "rita-murga": { name: "Rita Murga", code: "RM2025" },
  "gilda-coronado": { name: "Gilda Coronado", code: "GC2025" },
  // Add more members here...
};

const ReferralPage = () => {
  const { referralId } = useParams(); // Get referral ID from URL
  const referral = referralsData[referralId as string];

  if (!referral) {
    return <p className="text-center text-2xl mt-20">Referral not found.</p>;
  }

  const whatsappLink = `https://wa.me/50255116881?text=Hello!%20Referral%20code%20${referral.code}%20-%20I%20would%20like%20to%20book%20a%20shuttle!`;

  return (
    <section className="py-24 px-5 md:px-0">
      <div className="container max-w-5xl">
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Explore Guatemala in Comfort
          </div>
        </div>
        <h1 className="text-5xl lg:text-6xl font-medium mt-10 leading-[2.5rem]">
          Blvck Sheep Referrals
        </h1>
        <p className="text-start text-xl lg:text-xl text-white/70 mt-4 md:mt-6">
          Blvck Sheep and {referral.name} bring you a more comfortable shuttle
          experience to make your journey to any of our destinations more
          enjoyable. Whether it&apos;s to Guatemala City, Antigua, Atitlan, or
          El Paredon, we&apos;ve got your ride covered.
        </p>
        <Button variant="secondary" className="mt-8 font-bold flex">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-blue-400"
            aria-label={`WhatsApp contact for ${referral.name}'s referral`}
          >
            Book Your Ride Now
          </Link>
        </Button>
      </div>
      <Features />
    </section>
  );
};

export default ReferralPage;
