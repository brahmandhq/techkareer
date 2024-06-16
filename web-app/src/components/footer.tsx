import { Linkedin, Twitter } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import Image from "next/image";
import Link from "next/link";
import textLogo from "@/assets/techkareer(2).webp";
export const Footer = () => {
  return (
    <SectionWrapper>
      <footer className="border-t-[1px] border-solid border-white/80 flex justify-center items-center pt-12 flex-col ">
        <Image
          src={textLogo}
          alt="Techkareer"
          width={200}
          height={200}
          className="mb-8"
        />
        <div className="flex flex-row gap-6 mb-5">
          <Link href="https://twitter.com/_techkareer">
            <Twitter size={30} fill="white" />
          </Link>
          <Link href="https://www.linkedin.com/showcase/techkareer/about/">
            <Linkedin size={30} />
          </Link>
        </div>
        <p className="text-sm text-gray-200/60 mb-5">
          © 2024 Techkareer. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link target="_blank" href="/privacy-policy" className="text-sm">
            Privacy Policy
          </Link>
          <Link target="_blank" href="/terms-of-service" className="text-sm">
            Terms of service
          </Link>
        </div>
      </footer>
    </SectionWrapper>
  );
};
