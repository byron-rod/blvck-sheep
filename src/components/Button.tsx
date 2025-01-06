import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "border rounded-full min-w-[48px] px-7 py-4 font-semibold items-center",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black border-white hover:bg-transparent hover:text-white h-14",
        secondary:
          "border-white text-white bg-transparent hover:bg-white hover:text-black h-14 text-lg",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        className,
      })}
      {...otherProps}
    />
  );
}
