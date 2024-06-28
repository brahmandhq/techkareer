import { randomUUID } from "crypto"
import { initializeApp } from "firebase/app"
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.FIRESTORAGE_APIKEY,
  authDomain: process.env.FIRESTORAGE_AUTHDOMAIN,
  projectId: process.env.FIRESTORAGE_PROJECTID,
  storageBucket: process.env.FIRESTORAGE_STORAGEBUCKET,
  messagingSenderId: process.env.FIRESTORAGE_MESSAGINGSENDERID,
  appId: process.env.FIRESTORAGE_APPID,
  measurementId: process.env.FIRESTORAGE_MEASUREMENTID,
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
export const uploadFileFirebase = async (
  userType: "jobseeker" | "organization",
  fileType: "resume" | "profilepic" | "project",
  file: File,
) => {
  const reference = ref(
    storage,
    `${userType}/${fileType}/${file.name}-${randomUUID()}`,
  )
  await uploadBytes(reference, file, {
    contentType: file.type,
  })
  return await getDownloadURL(reference)
}
