import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  client: {
    NEXT_PUBLIC_APIBASEURL: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APIBASEURL: process.env.NEXT_PUBLIC_APIBASEURL,
  },
  /**
   * skip env validation when running build or dev scripts by passing the SKIP_ENV_VALIDATION environment variable.
   *  e.g when running `npm run dev` write: `SKIP_ENV_VALIDATION=true npm run dev` in terminal instead.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * By setting emptyStringAsUndefined as true, environmental variables with blank string (e.g: SOME_ENV_VAR='')
   * will be considered as undefined. While running `build` or `dev` scripts it will throw an error
   * if environmental variables are blank
   */
  emptyStringAsUndefined: true,
})
