import React from "react"
type SectionWrapperProps = {
  children: React.ReactNode
}
export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="mb-18 mx-auto max-w-[1300px] px-4 py-16">
      {children}
    </section>
  )
}
