import React from "react";
import { Navbar } from "@/components/Navbar";

import './page.css';
import { records } from "@/constants/records";

const Page = () => {
    return (
        <div>
            <Navbar/>

            <h1 className="text-blue-500 font-bold text-3xl text-center">Success Stories</h1>
            <div className="grid grid-cols-3 gap-6 mx-10 my-10 flex-wrap justify-center">
                {records.map((record) => (
                    <div key={record.id} className="bg-gray-900/30 p-4 px-5 rounded-lg">
                        <h2 className="font-semibold py-3 text-2xl tracking-wide">
                            <a href={record.fields['Website']}>{record.fields['Name']}</a><span className="text-gray-400 px-2"> {record.fields['Founder Name']}</span>
                        </h2>

                        <p>{record.fields['About']}</p>

                        <br/>

                        <p>Hired {record.fields['Hired Role']}</p>

                        <br/>

                        <p>{record.fields['Hire Person Name']} {record.fields.Notes}</p>
                    </div>
                ))}
            </div>
        </div>
      );
}

export default Page;