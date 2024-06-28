"use client"
import Image, { StaticImageData } from "next/image"
import { SectionWrapper } from "./section-wrapper"
import feature from "@/constants/features"
import bg from '@/assets/bg.webp'
import { motion } from "framer-motion"
import React from "react"
export const Feature = () => {
    return (
        <SectionWrapper>
            <div className="flex justify-center items-center flex-col" id="features">
                <h3 className="self-end md:self-center bg-gradient-to-r from-blue-400 via-ping-200 to-pink-400 inline-block text-transparent bg-clip-text">Included</h3>
                <h2 className="text-right w-full md:text-center text-3xl tracking-wide mt-4 mb-16">Powerful features tailored to your needs</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 ">
                    {feature.map((item, index) => (
                        <FeatureCard
                            key={index}
                            icon={item.icon}
                            name={item.name}
                            description={item.description}
                            duration={index * 0.1}
                        />
                    ))}
                </div>

            </div>
        </SectionWrapper>
    )
}
type featureCardProps = {
    icon:   React.ReactNode;
    name: string;
    description: string;
    duration?: number;
}
const FeatureCard: React.FC<featureCardProps> = ({ icon, name, description, duration }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, }}

            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: duration, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="p-4 rounded-2xl flex flex-col justify-center items-center max-w-[368px] max-h-[278px] cursor-pointer"
        >
            <div className="bg-[#5287FA] p-2 rounded-full">
               {icon}
            </div>
            <h3 className="text-xl font-bold mt-4 text-center text-[#02015A]">{name}</h3>
            <p className="text-sm mt-2  w-[80%] text-center font-lighter text-gray-700 tracking-wider leading-6">{description}</p>
        </motion.div>
    )
}
