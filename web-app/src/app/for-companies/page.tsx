import React from 'react';
import { Navbar } from "@/components/Navbar";
import { SectionWrapper } from '@/components/section-wrapper'
import { Pricing } from "./pricing";
import { Footer } from '@/components/footer';

const Page = () => {
    return (
        <>
            <Navbar/>

            <Pricing/>

            <Footer/>
        </>
    )

}

export default Page;