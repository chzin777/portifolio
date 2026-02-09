import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-3xl font-medium capitalize text-center">
        {children}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
    </div>
  );
}
