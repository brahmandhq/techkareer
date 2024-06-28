import React from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import './page.css';
import { motion } from 'framer-motion';

export const Pricing = () => {
    return (
        <div>
            <div className="pt-6 md:pt-6">
                <h1 className="text-center font-black text-3xl heading-blue">
                    For Companies
                </h1>
                <p className="text-center text-blue pt-1">
                    Hire employees for your company
                </p>
            </div>

            



            <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0 ml-20 mr-20 pt-14">
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-custom rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white" id="card1">
                    <h3 className="mb-4 text-2xl font-semibold heading-blue">Solo Starters</h3>
                    <p className="font-light text-gray-500 sm:text-lg text-blue">Best option for personal use & for your next project.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold heading-blue">$49</span>
                        {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">Hire: <span className="font-semibold">1 person</span></span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">50% first month compensation</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-custom rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white" id="card2">
                    <h3 className="mb-4 text-2xl font-semibold heading-blue">Company</h3>
                    <p className="font-light text-gray-500 sm:text-lg text-blue">Relevant for extended & premium support.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold heading-blue">$99</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">Hire: <span className="font-semibold">2-4 people</span></span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">50% first month compensation</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-custom rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white" id="card3">
                    <h3 className="mb-4 text-2xl font-semibold heading-blue">Growing Business</h3>
                    <p className="font-light text-gray-500 sm:text-lg text-blue">Best for large scale uses and extended redistribution.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold heading-blue">$199</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">Hire: <span className="font-semibold">4-10 people</span></span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">45% first month compensation</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-custom rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"  id="card4">
                    <h3 className="mb-4 text-2xl font-semibold heading-blue">Enterprise</h3>
                    <p className="font-light text-gray-500 sm:text-lg text-blue">Best for enterprises and larger team.</p>
                    <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold heading-blue">$499</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">Hire: <span className="font-semibold">10+ people</span></span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="text-blue">Contact Us!</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="pt-16 md:pt-6">
                <h1 className="text-center font-black text-3xl heading-blue pt-16">
                    FAQ
                </h1>
                <p className="text-center text-blue pt-1">
                    Some of the frequently asked questions about techkareer
                </p>
            </div>
            <br/>

            <div className="grid grid-cols-2 gap-2 faq bg-custom ml-20 mr-20 py-3 ">
                <div className="questions">
                    What is techkareer?


                    <p className="pt-12">How does TechKareer improve the recruitment process?</p>

                    <p className="pt-12">What types of businesses can benefit from TechKareer?</p>
                </div>

                <div className="answers">
                    TechKareer is a comprehensive recruitment platform designed to streamline and enhance your screening and hiring processes.

                    <br/>

                    <p className="pt-6">TechKareer leverages advanced algorithms and data analytics to match candidates' skills and experience with job requirements.</p>

                    <br/>
                    
                    <p className="">TechKareer is versatile and can be used by companies of all sizes and industries. Whether you are a small startup or a large enterprise, TechKareer can help you find the right talent quickly and efficiently.</p>
                </div>
            </div>
        </div>
    )
}