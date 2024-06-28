"use client"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import logo from "@/assets/logo.webp"
import { toast } from "react-toastify"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"
import Link from "next/link"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginSignupSchema } from "@/schema/form-schema"
import { Loader } from "lucide-react"
import Image from "next/image"

function LoginBox() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof loginSignupSchema>>({
    resolver: zodResolver(loginSignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginSignupSchema>) {
    try {
      setLoading(true)

      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      })

      if (signInData?.error) {
        throw new Error("Incorrect Details")
      }
      toast.success("Onboarding Successful")
      router.push("/")
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="md:justify-left flex h-screen flex-col justify-center break-words border-0 border-solid border-white leading-6 text-white md:flex-row">
        <div
          className="login-left-side flex flex-1 flex-col break-words border-0 border-solid border-white bg-cover bg-no-repeat p-10 text-center max-sm:hidden md:flex-shrink md:text-left"
          style={{
            backgroundImage: `url(/login.png)`,
            backgroundPosition: "center center",
          }}
        >
          <div className="flex justify-center text-center md:mb-36 md:block md:text-left">
            <Link href="/">
              <div className="title-font mb-6 flex cursor-pointer items-center font-medium md:mb-0">
                <Image
                  className="w-40 cursor-pointer"
                  src={logo}
                  alt="TechKareer"
                  onClick={() => router.push("/")}
                />
              </div>
            </Link>
          </div>
          <p className="mt-12 text-center text-4xl font-bold sm:text-6xl md:text-left md:font-extrabold lg:pr-10">
            Making <br />
            Hiring <br />
            Easier <br />
            Than <br />
            Ever.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center border-0 border-solid border-white px-8 py-6 text-white md:px-20">
          <div className="flex flex-col items-center break-words border-0 border-solid border-white">
            <div className="w-128 flex flex-col items-center border-0 border-solid border-white">
              <div className="w-128 flex flex-col items-center border-0 border-solid border-white">
                <h2 className="text-center text-2xl font-bold sm:text-4xl md:font-extrabold">
                  {"Skyrocket your career"}
                </h2>
              </div>
              <h2 className="mt-2 max-w-lg p-0 text-center tracking-tight sm:mt-4 sm:text-lg md:block">
                Join our community of 1000+ people
              </h2>
              {/* <div className="my-4 w-full border-t border-white"></div> */}
              <div className="my-4"></div>
            </div>

            <div>
              <center>
                <button
                  className="next-ui-gradient-btn mx-auto mb-3 w-9/12 rounded-xl"
                  color="gradient"
                  style={{ padding: "10px 24px" }}
                  onClick={() => signIn("google")}
                >
                  <GoogleIcon className="mr-4" />
                  Login with Google
                </button>

                {/* <h5 className="text-center text-md mt-2 mb-5 text-gray-400 font-semibold">
                  or
                </h5> */}
                {/* <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-9/12"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Email"
                              className="border-gray-700 text-lg py-6"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                              className="border-gray-700 py-6 text-lg border flex items-center"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center items-center w-full">
                      <button
                        type="submit"
                        className="text-xl flex items-center justify-center next-ui-gradient-btn bg-blue-600 text-white px-5 py-3 rounded-xl min-w-[170px]"
                      >
                        {loading ? (
                          <Loader className="animate-spin" />
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                  </form>
                </Form> */}
              </center>
              <div className="mx-auto w-9/12 text-left">
                <div className="mt-4 border-0 border-solid border-white">
                  <p className="border-0 border-solid border-white text-left text-xs text-neutral-400">
                    By logging in, you acknowledge that you have read,
                    understood, and agree to our&nbsp;
                    <Link
                      href="/terms-of-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                      }}
                      className="text-neutral-400"
                    >
                      Terms of Service
                    </Link>
                    &nbsp;and&nbsp;
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "underline",
                      }}
                      className="text-neutral-400"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginBox
