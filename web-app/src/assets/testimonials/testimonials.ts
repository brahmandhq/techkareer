// import test1 from "./test1.webp";
// import test2 from "./test2.webp";
// import test3 from "./test3.webp";
// import test4 from "./test4.webp";
// import test5 from "./test5.webp";
import paras from "./paras.jpeg";
import ayush from "./ayush.jpeg";
import saket from "./saket.jpeg";

import { StaticImageData } from "next/image";

type testimonialsProp = {
  image: StaticImageData;
  name: string;
  role: string;
  des: string;
};

const testimonials: testimonialsProp[] = [
  {
    name: "Paras Waykole",
    image: paras,
    role: "SDE 3 at Loco | Founder of Slashbase",
    des: "TechKareer made tech hiring very convenient and easy for Slashbase. Would love to use it again for future hirings.",
  },
  {
    name: "Ayush Singhal",
    image: ayush,
    role: "Founder and CEO at Codemate.ai ",
    des: "Big shoutout to my friend Harsh, his curated list of talented folks really helps in hiring a good developer. Anyone looking out for tech talent, do reachout to him 🙌",
  },
  {
    name: "Saket Sarin",
    image: saket,
    role: "Software Engineer Intern at BanterAI",
    des: "Thanks to TechKareer by Harsh Agrawal, I landed this super cool gig at an emerging AI startup based in the US. His advice and the connections I made with TechKareer were total game-changers. If you're hunting for a tech job, seriously, give it a shot!",
  },
  //   {
  //     image: test4,
  //     role: "Product desginer",
  //     des: "Cant wait for the battles",
  //   },
  //   {
  //     image: test5,
  //     role: "Manager",
  //     des: "Love to hire",
  //   },
];

export default testimonials;
