"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import userPlaceholder from "@/assets/placholder-jobseeker.webp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profileSchema } from "@/schema/form-schema";
import { Edit2, Loader } from "lucide-react";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/hooks/useUser";
import { Textarea } from "@/components/ui/textarea";
import { FormSkeleton } from "./form-sekleton";
import Image from "next/image";
export function EditProfileForm({ userId }: { userId: string }) {
  const [loading, setIsLoading] = React.useState(false);
  const [isNoInfoAvail, setIsNoInfoAvail] = React.useState(false);
  const { user } = useUserInfo(userId);
  const [previewImage, setPreviewImage] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      twitterProfile: "",
      linkedInProfile: "",
      email: "",
      description: "",
      github: "",
      portfolio: "",
      jobseeker: false,
    },
  });

  const handleFileChange = (event:any) => {
    const file = event.target?.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };


  useEffect(() => {
    if (user) {
      console.log("user", user);
      if (user?.userType == "Jobseeker") {
        form.setValue("jobseeker", true);
      }
      if (user.name) {
        form.setValue("name", user.name);
      }
      if (user.twitter) {
        form.setValue("twitterProfile", user.twitter);
      }
      if (user.linkedIn) {
        form.setValue("linkedInProfile", user.linkedIn);
      }
      if (user.email) {
        form.setValue("email", user.email);
      }
      if (user.github) {
        form.setValue("github", user.github);
      }
      if (user.description) {
        form.setValue("description", user.description);
      }
      if (user.portfolio) {
        form.setValue("portfolio", user.portfolio);
      }
      if (!user.name || !user.twitter || !user.linkedIn) {
        setIsNoInfoAvail(true);
      }
    }
  }, [user]);

  useEffect(() => {
    if (isNoInfoAvail) {
      toast.warn(
        "We will use this form to update your information in our database. Please fill the form with the correct information."
      );
    }
  }, [isNoInfoAvail]);
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof profileSchema>) {
  setIsLoading(true);
   const {profilePic, resume, ...rest} = values
   const formData = new FormData();
   formData.append("id", userId);
    if(profilePic){
      formData.append("profilePic", profilePic[0]);
    }
    if(resume){
      formData.append("resume", resume);
    }
    for (const key in rest) {
      //@ts-ignore
      formData.append(key, rest[key]);
    }
   console.log(formData)
    try {
      const res = await axios.post('/api/user/edit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 200) {
        toast.success("Profile Updated");
        router.push(`/profile/${userId}`);
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (!user) {
    return (
      <FormSkeleton/>
    );
  }

  const fileRef = form.register("profilePic");
  const resumeRef = form.register("resume")
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-8 flex justify-start items-center mr-6 gap-4">
            {user.profilePic ? (
              <Image
                src={previewImage ? previewImage : user.profilePic}
                alt=""
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <Image
                src={previewImage ? previewImage : userPlaceholder}
                alt=""
                width={100}
                height={100}
                className="rounded-full"
              />
            )}
            <FormField
              control={form.control}
              name="profilePic"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg ">
                      Update Picture
                    </FormLabel>
                    <FormControl>
                    <Input
                        type="file"
                        {...fileRef}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-200 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        onChange={(event) => {
                          field.onChange(event?.target?.files?.[0] ?? undefined);
                          handleFileChange(event);
                        }}
                        accept="image/*"
                        name="profilePic"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
           
          </div>

          <div className="flex justify-center items-center gap-2 lg:gap-8 mb-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base md:text-lg ">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your name"
                      className="border-gray-700 text-lg rounded-xl lg:min-w-[200px]"
                      type="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base md:text-lg ">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="border-gray-700 text-lg rounded-xl  lg:min-w-[200px]"
                      type="email"
                      disabled={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg ml-2">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className=" border-gray-700 text-lg rounded-xl"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex-col my-8">
            <div className="flex gap-8 mb-8 ">
              <FormField
                control={form.control}
                name="linkedInProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg ml-2">
                      LinkedIn
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Linkedin Link"
                        className="border-gray-700 text-lg   rounded-xl"
                        type="link"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitterProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg ">
                      Twitter
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Twitter Link"
                        className="border-gray-700 text-lg   rounded-xl"
                        type="link"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-8 ">
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg ">
                      Github
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Github Link"
                        className="border-gray-700 text-lg   rounded-xl"
                        type="link"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg ">
                      Portfolio
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Portfolio Link"
                        className="border-gray-700 text-lg   rounded-xl"
                        type="link"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base md:text-lg ">
                Roles
              </FormLabel>
              <FormControl>
                <Input {...field} className="border-gray-700 text-lg" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg ">Resume</FormLabel>
                <FormControl>
                <Input
                        type="file"
              
                           {...resumeRef}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-200 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        onChange={(event) => {
                          field.onChange(event.target?.files?.[0] ?? undefined);
                        }}
                        accept=".pdf, .docx"
                        name="profilePic"
                      />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full rounded-xl py-2 border-[1px] border-gray-700 h-fit border-solid px-2 mt-8">
            <h1 className="mb-4">Optional</h1>
            <FormField
              control={form.control}
              name="jobseeker"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md  justify-start  ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-lg">
                      Want to register as a jobseeker ?
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-base md:text-lg mt-8 rounded-full"
          >
            {loading ? <Loader size={24} className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
}
