import Button from "@/components/Button";
import Link from "next/link";

const ReferralProgramPage = () => {
  const whatsappLink =
    "https://wa.me/50255116881?text=Hello!%20I'm%20interested%20in%20joining%20the%20Blvck%20Sheep%20Referral%20Program!";

  return (
    <section className="py-16 px-5 md:px-0">
      <div className="container max-w-5xl">
        {/* Badge Section */}
        <div className="flex justify-start">
          <div className="inline-flex py-1 px-3 bg-white text-black rounded-md font-semibold">
            Earn with Blvck Sheep
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-medium mt-10 leading-[2.5rem]">
          Blvck Sheep Referral Program
        </h1>

        {/* Description */}
        <p className="text-start text-xl lg:text-xl text-white/70 mt-4 md:mt-6">
          Do you love sharing great travel experiences? Join the
          <strong> Blvck Sheep Referral Program</strong> and earn rewards by
          referring travelers to our comfortable and private shuttle service.
          Whether you&apos;re a traveler, blogger, or influencer, this is a
          great way to make extra income while helping people explore Guatemala.
        </p>

        <p className="text-start text-xl lg:text-xl text-white/70 mt-4">
          Interested? Contact us today and become part of the Blvck Sheep
          community!
        </p>

        {/* Contact Button */}
        <Button variant="secondary" className="mt-8 font-bold flex">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-blue-400"
            aria-label="WhatsApp contact to join the Blvck Sheep Referral Program"
          >
            Contact Us to Join
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReferralProgramPage;
