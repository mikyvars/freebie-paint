"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col rounded-4xl bg-white px-10 py-5 md:px-20 md:py-10">
      <div className="flex items-center justify-between">
        <p>{question}</p>
        <div onClick={handleClick} className="cursor-pointer">
          {isOpen ? (
            <MinusIcon className="text-yellow size-12 stroke-2" />
          ) : (
            <PlusIcon className="text-yellow size-12 stroke-2" />
          )}
        </div>
      </div>
      <div
        className={twMerge(
          isOpen
            ? "mt-5 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
          "grid overflow-hidden transition-all duration-300 ease-in-out",
        )}
      >
        <div className="overflow-hidden">
          <p className="font-medium">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
