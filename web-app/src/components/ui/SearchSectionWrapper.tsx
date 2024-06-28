import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchSectionWrapper({children}:{children: React.ReactNode}) {
  return (
    <>
        <div className="search-section w-full flex justify-center items-center h-[7vh]  ">
              <div className=" input-search-container w-[90%] flex justify-between pr-6 py-3 rounded-3xl items-center overflow-hidden border-[1px] border-solid border-gray-700  ps-1 pe-1 ">
                    {children}
                    <CiSearch  className="cursor-pointer"></CiSearch>
              </div>
            </div>
</>
  )
}

export default SearchSectionWrapper