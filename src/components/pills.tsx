import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const pillsVariants = cva(
  "flex w-fit items-center gap-1 rounded-full px-5 py-3.5 text-xl font-semibold",
  {
    variants: {
      intent: {
        white: "bg-white",
        light: "bg-light-1",
      },
    },
    defaultVariants: {
      intent: "white",
    },
  },
);

interface PillsProps extends VariantProps<typeof pillsVariants> {
  children: React.ReactNode;
}

const Pills = ({ intent, children }: PillsProps) => {
  return (
    <div className={pillsVariants({ intent })}>
      <CheckCircleIcon className="text-yellow size-8 stroke-2" />
      {children}
    </div>
  );
};

export default Pills;
