import React from "react"
import { CiSearch } from "react-icons/ci"

function SearchSectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="search-section flex h-[7vh] w-full items-center justify-center">
        <div className="input-search-container flex w-[90%] items-center justify-between overflow-hidden rounded-3xl border-[1px] border-solid border-gray-700 py-3 pe-1 pr-6 ps-1">
          {children}
          <CiSearch className="cursor-pointer"></CiSearch>
        </div>
      </div>
    </>
  )
}

export default SearchSectionWrapper
