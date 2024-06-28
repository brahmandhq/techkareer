"use client"
import { Navbar } from "./Navbar"
import { Feature } from "./feature"
import { InfiniteMovingCards } from "./infinite-card"
import { Welcome } from "./welcome"
import testimonials from "@/assets/testimonials/testimonials"
import { Opportunities } from "./opportunities"
import { Companies } from "./companies"
import { Footer } from "./footer"
import { useSession } from "next-auth/react"
import BootCamps from "./BootCamps"

const LandingPage = () => {
  const { data: session, status } = useSession()

  return (
    <main className="relative min-h-screen scroll-smooth">
      <Navbar />
      <Welcome />
      <InfiniteMovingCards
        items={testimonials}
        className="mt-0"
        direction="left"
        speed="slow"
      />
      <Feature />
      <Opportunities />
      <BootCamps />
      <Companies />
      <Footer />
    </main>
  )
}

export default LandingPage
