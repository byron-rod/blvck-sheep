import { twMerge } from "tailwind-merge";

export default function BlogCardFeat(props: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { title, description, children, className } = props;

  return (
    <div
      className={twMerge(
        "relative bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden -mt-2",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-video">{children}</div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-4xl font-medium text-white mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
