import { twMerge } from "tailwind-merge";

export default function BlogCardSmall(props: {
  title: string;
  description: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  const { title, description, className, children } = props;

  return (
    <div
      className={twMerge(
        "flex items-center bg-neutral-900 border border-white/10 rounded-3xl p-3 mt-1",
        className
      )}
    >
      <div className="w-1/3 flex-shrink-0">{children}</div>
      <div className="w-2/3 pl-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-white/50 text-sm">{description}</p>
      </div>
    </div>
  );
}
