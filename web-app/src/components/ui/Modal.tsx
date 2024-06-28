"use client"
import React, { useState, ChangeEvent, DragEvent } from "react"
import * as Dialog from "@radix-ui/react-dialog"

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const validateFile = (file: File) => {
    const validTypes = ["application/pdf"]
    const maxSize = 5242880 // 5 MB it is in bytes

    if (!validTypes.includes(file.type)) {
      return "Only PDF files are allowed."
    }

    if (file.size > maxSize) {
      return "File size should not exceed 5 MB."
    }

    return null
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0]
      const validationError = validateFile(selectedFile)
      if (validationError) {
        setErrorMessage(validationError)
        setFile(null)
      } else {
        setErrorMessage(null)
        setFile(selectedFile)
        console.log(selectedFile)
      }
    }
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setDragActive(false)
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const selectedFile = event.dataTransfer.files[0]
      const validationError = validateFile(selectedFile)
      if (validationError) {
        setErrorMessage(validationError)
        setFile(null)
      } else {
        setErrorMessage(null)
        setFile(selectedFile)
        console.log(selectedFile)
      }
    }
  }

  return (
    <Dialog.Root defaultOpen={true} open={true}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] flex h-[50vh] max-h-full w-[80vw] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 p-4 drop-shadow-md focus:outline-none md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px] md:px-[62px] md:py-[48px]">
          <div
            className={`w-96 rounded-lg border-2 border-dashed p-6 ${
              dragActive ? "border-blue-500" : "border-gray-300"
            } relative z-20`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="hidden"
              id="fileUploadInput"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUploadInput"
              className="flex h-full cursor-pointer flex-col items-center justify-center"
            >
              <svg
                className="mb-3 h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V8a4 4 0 018 0v8m4 4H5a2 2 0 01-2-2V8a2 2 0 012-2h1m10-2a2 2 0 00-2-2H9a2 2 0 00-2 2h10m0 14h1a2 2 0 002-2v-8a2 2 0 00-2-2h-1"
                ></path>
              </svg>
              <p className="text-gray-400">
                {file
                  ? file.name
                  : "Drag and drop a file here or click to upload"}
              </p>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </label>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default FileUpload
