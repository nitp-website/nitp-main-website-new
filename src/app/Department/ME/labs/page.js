import Image from "next/image";
import React from "react";

const MELabPage = () => {
    return (
        <div>
            <div className="py-1 mt-2">
                <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
                    <div className="w-full">
                        <h2 className="text-center text-4xl text-red-700 mt-2">LABS</h2>
                    </div>

                    <div className="w-full text-black mt-4">
                        <div className="mb-10 ">
                            <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Laboratory Facilities Available in the Department:-</div>
                            <div className=" grid grid-cols-2 max-md:grid-cols-1">
                                <ol className="list-decimal list-inside ml-5 space-y-4 text-sm lg:text-base">
                                    <li>Strength of Materials Lab.</li>
                                    <li>Internal Combustion Gas Turbine Lab.</li>
                                    <li>Engine Testing Lab.</li>
                                    <li>Heat and Mass Transfer Lab.</li>
                                    <li>Applied Thermodynamics Lab.</li>
                                    <li>Refrigeration and Air Conditioning Lab.</li>
                                    <li>Dynamics of Machinery Lab.</li>
                                    <li>Fuel Cell Lab.</li>
                                    <li>Renewable Energy Lab.</li>
                                    <li>Computer Aided Manufacturing Lab.</li>
                                    <li>Flexible Manufacturing System Lab.</li>
                                    <ul className="ml-10 list-disc">
                                        <li>Machine Shop</li>
                                        <li>Welding Shop</li>
                                        <li>Carpentry Shop</li>
                                        <li>Fitting Shop</li>
                                        <li>Black Smithy Shop</li>
                                    </ul>
                                </ol>
                                {/* <div className=" flex  flex-col items-center mt-4">
                                    <div className="flex flex-col">
                                        <Image src={"/melab1.jpg"}
                                            width={350}
                                            height={300}
                                            alt="labsPic"
                                            className="mb-4 rounded-lg bg-rose-200" />
                                        <Image src={"/melab2.jpg"}
                                            width={350}
                                            height={300}
                                            alt="labsPic"
                                            className="rounded-lg bg-rose-200" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MELabPage;
