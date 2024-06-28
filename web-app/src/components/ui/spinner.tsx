"use client";

import { Spinner as CSpinner } from "flowbite-react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CSpinner color="failure" aria-label="Failure spinner example" />
    </div>
  );
};

export default Spinner;
