import React from "react";
import { SectionWrapper } from "./section-wrapper";
import { motion } from "framer-motion";
import bootCamp from "@/constants/bootcamp";
import Image  from "next/image";

console.log(bootCamp);

const BootCamps = () => {
    return (
        <SectionWrapper>
            <div className="flex justify-center items-center flex-col" id="features">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="text-3xl"
                >
                    Our Partners
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4"
                >
                <h2 className="text-right w-full md:text-center text-3xl tracking-wide mt-5 mb-15">Our Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4">
                    {bootCamp.map((item) => (
                        <div key={item.name}>
                            <Image src={item.logo} alt={item.name} layout="responsive" width={300} height={100} />
                        </div>
                    ))}
                </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}


export default BootCamps;