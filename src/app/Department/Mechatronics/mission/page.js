import React from "react";

const MechatronicsMissionPage = () => {
    return (
        <div className="bg-white text-black">
            <div className="py-1 mt-2">
                <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
                    <div className="w-full">
                        <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
                        <li className="ml-4">
                            To provide education that transforms young minds through rigorous teaching and thought processes to meet the needs of society and industry.
                        </li>
                        <li className="ml-4">
                            To collaborate with leading industry partners and other academic and research institutes worldwide to strengthen the education and research ecosystem.
                        </li>
                        <li className="ml-4">
                            To prepare students for lifelong learning in their careers by fostering ethical and technical capabilities pertinent to mechatronics, automation, and allied engineering fields.
                        </li>
                    </ul>

                    <div className="w-full mt-5">
                        <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
                        <li className="ml-4">
                            To create well-trained and skilled technocrats with a commitment to lifelong learning in the field of Mechatronics and Automation Engineering.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MechatronicsMissionPage;
