import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "border h-12 rounded-full px-4 font-medium font-bold items-center",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black border-white hover:bg-transparent hover:text-white",
        secondary: "border-white text-white bg-transparent",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
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
