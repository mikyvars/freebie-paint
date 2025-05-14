import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

const buttonVariants = cva(
  "box-border flex h-fit w-fit items-center gap-14 rounded-full border-2 border-transparent px-12 py-6 transition-all duration-100 hover:box-content",
  {
    variants: {
      intent: {
        yellow:
          "bg-yellow hover:border-dark hover:shadow-button-dark hover:border-2",
        white:
          "hover:border-yellow hover:shadow-button-yellow bg-white hover:border-2",
        dark: "bg-dark hover:shadow-button-white text-white hover:border-2 hover:border-white",
      },
    },
    defaultVariants: {
      intent: "yellow",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showIcon?: boolean;
  children: React.ReactNode;
}

const Button = ({ intent, showIcon, children }: ButtonProps) => {
  return (
    <button className={buttonVariants({ intent })}>
      {children}
      {showIcon && <ArrowLongRightIcon className="size-10" />}
    </button>
  );
};

export default Button;
