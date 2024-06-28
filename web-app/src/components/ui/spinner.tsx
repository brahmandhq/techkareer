"use client"

import { Spinner as CSpinner } from "flowbite-react"

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <CSpinner color="failure" aria-label="Failure spinner example" />
    </div>
  )
}

export default Spinner
