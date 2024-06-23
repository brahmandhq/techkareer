"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

const scrollingStyles = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.scroller {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
}

.scroller ul {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll var(--animation-duration) linear infinite var(--animation-direction);
}

.scroller ul.paused {
  animation-play-state: paused;
}
`;

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: StaticImageData;
    name: string;
    role: string;
    des: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (container && scroller) {
      const scrollerContent = Array.from(scroller.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scroller.appendChild(duplicatedItem);
      });

      container.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
      container.style.setProperty("--animation-duration", speed === "fast" ? "20s" : speed === "slow" ? "40s" : "80s");
    }
  }, [direction, speed]);

  return (
    <div>
      <style>{scrollingStyles}</style>
      <div
        ref={containerRef}
        className={cn("scroller", className)}
      >
        <ul
          ref={scrollerRef}
          className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
          onMouseEnter={() => pauseOnHover && scrollerRef.current?.classList.add('paused')}
          onMouseLeave={() => pauseOnHover && scrollerRef.current?.classList.remove('paused')}
        >
          {items.map((item, idx) => (
            <TestimonialCard
              key={idx}
              image={item.image}
              name={item.name}
              role={item.role}
              des={item.des}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

type TestimonialCardProps = {
  image: StaticImageData;
  name: string;
  role: string;
  des: string;
};
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  role,
  des,
}) => {
  return (
    <div className="bg-transparent p-4 flex max-w-[700px] justify-start items-center gap-5">
      <div>
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full min-w-[60px] min-h-[60px]"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <h3 className="font-light">{role}</h3>
        <h5 className="mt-1 text-sm font-light opacity-70">{des}</h5>
      </div>
    </div>
  );
};
