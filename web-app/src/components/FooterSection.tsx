import { FaXTwitter } from "react-icons/fa6"
import { useState, useEffect } from "react"

const FooterSection = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="max-w-md">
          <p className="text-lg leading-7">
            The biggest tech opportunities aggregator. Find your next gig,
            internship, and job at our platform.
          </p>
          <p className="mt-4">
            &copy; {currentYear} Techkareer. All rights reserved.
          </p>
          <a
            href="https://twitter.com/_techkareer"
            className="mr-4 text-gray-400 hover:text-white"
          >
            <FaXTwitter className="mt-5 h-6 w-6" />
          </a>
        </div>
        <div className="flex items-center">
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <nav className="sm:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
