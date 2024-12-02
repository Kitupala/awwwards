import React from "react";
import { cn } from "../lib/utils.ts";

type ButtonProps = {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
  disabled?: boolean;
};

const Button = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass,
  disabled,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass,
        disabled && "pointer-events-none",
      )}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};
export default Button;
