import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "border h-14 rounded-full px-7 py-4 font-medium items-center",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black border-white hover:bg-transparent hover:text-white",
        secondary:
          "border-white text-white bg-transparent hover:bg-white hover:text-black",
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
