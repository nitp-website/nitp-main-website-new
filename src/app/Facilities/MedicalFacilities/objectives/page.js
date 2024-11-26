import React from 'react'
import Sidebar from '../components/Sidebar';
export default function page() {
    return (
        <div className="flex flex-col md:flex-row px-4 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8">
            <div className="mt-6 mb-12 md:mt-10 ">
                <Sidebar />
            </div>
            <div className="mt-8 text-base text-gray-500 mx-4">

                <h3 className='font-semibold text-black '>The prime objectives of this SoP are as following:</h3>
                <div className="mt-5">
                    <li className='text-justify'>
                        <span className='font-semibold text-gray'>
                            Helping the students of NIT Patna in their physical and psychological
                            health issues or those concerned about a friend's health find competent
                            treatments.
                        </span>
                    </li>
                    <li className='text-justify'>
                        <span className='font-semibold text-gray'>
                            To advise the officials of Health centre, Hostels and other stake holder of
                            the Institute on how to deal with the situation related to student’s physical
                            or psychological health or in case of emergency.
                        </span>
                    </li>
                    <li className='text-justify'>
                        <span className='font-semibold text-gray'>
                            To advise the officials of Health centre, Hostels and other stake holder of
                            the Institute on how to deal with the situation related to student’s physical
                            or psychological health or  in case of emergency.
                        </span>
                    </li>
                    <li className='text-justify'>
                        <span className='font-semibold text-gray'>
                            To uphold the commitment of the Institute in providing personalized
                            counselling and health and safety to all the students of the Institute.
                        </span>
                    </li>
                    <li className='text-justify'>
                        <span className='font-semibold text-gray'>
                            To promote and foster a positive and inclusive campus culture between
                            the students of the Institute.
                        </span>
                    </li>
                </div>
            </div>

        </div>
    )
}
