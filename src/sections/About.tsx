import Tag from "@/components/Tag";

const text = `With our 7-passenger SUVs, it's all about comfort, and a personalized touch. Whether you're sharing a ride or booking privately, we've got you covered with flexible schedules, curated Spotify playlists, and the best local tips through our exclusive WhatsApp chat service.`;

export default function About() {
  return (
    <section className="py-24 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing BlvckSheep</Tag>
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mt-6">
          <span className="text-white/80">
            At BlvckSheep, we believe your journey should be as incredible as
            your destination.
          </span>{" "}
          <span className="text-white/15">{text}</span>
          <span className="text-white font-semibold block">
            Because travel should be an enjoyable experience.
          </span>
        </div>
      </div>
    </section>
  );
}
