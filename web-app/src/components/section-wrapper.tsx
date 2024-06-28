import React from "react";
type SectionWrapperProps = {
  children: React.ReactNode;
};
export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="mx-auto px-4 py-16 max-w-[1300px] mb-18">{children}</section>
  );
};