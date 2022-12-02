import { type ButtonHTMLAttributes } from "react";

interface ButtonProps {
  layoutMode?: "inline" | "fullWidth";
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {}

const Button = ({ layoutMode = "inline", ...rest }: Props) => {
  return (
    <button
      className={
        "flex h-12 items-center justify-center rounded bg-limegreen px-4 text-base font-semibold text-whiteish transition-colors transition-[filter] duration-200 ease-in-out disabled:grayscale-[60%] " +
        (layoutMode === "fullWidth" && "w-full")
      }
      {...rest}
    />
  );
};

export default Button;
