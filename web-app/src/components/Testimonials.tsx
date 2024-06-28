import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import {
  SAKET_SARIN_PHOTO,
  PARAS_WAYKOLE_PHOTO,
  AYUSH_SINGHAL_PHOTO,
} from "@/utils/constants"

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Thanks to TechKareer by harsh Agrawal, I landed this super cool gig at an emerging AI startup based in the US. His advice and the connections I made with TechKareer were total game-changers. If you're hunting for a tech job, seriously, give it a shot!",
      name: "Saket Sarin",
      title: "Software Engineer Intern at BanterAI ",
      photo: SAKET_SARIN_PHOTO,
    },
    {
      quote:
        "TechKareer made tech hiring very convenient and easy for Slashbase. Would love to use it again for future hirings.",
      name: "Paras Waykole",
      title: " SDE 3 at Loco | Founder of Slashbase",
      photo: PARAS_WAYKOLE_PHOTO,
    },
    {
      quote: `Big shoutout to my boii @itsharshag 🫡, his curated list of talented folks really helps in hiring for a good developer. Anyone looking out for tech talent, do reachout to him🙌`,
      name: "Ayush Singhal",
      title: "Founder of Codemate.ai",
      photo: AYUSH_SINGHAL_PHOTO,
    },
    // {
    //   quote:
    //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    //   name: "Jane Austen",
    //   title: "Pride and Prejudice",
    // },
    // {
    //   quote:
    //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    //   name: "Herman Melville",
    //   title: "Moby-Dick",
    // },
  ]

  return (
    <section className="py-12">
      <h1 className="text-center text-xl font-bold text-white sm:text-4xl">
        Testimonials
      </h1>
      <div className="dark:bg-grid-white/[0.05] relative flex h-[25rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-black">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  )
}

export default Testimonials
