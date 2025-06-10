import React from "react";

const ECEMissionPage = () => {
    return (
        <div className="bg-white text-black">
            <div className="py-1 mt-2">
                <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
                    <div className="w-full">
                        <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
                        <li className="ml-4">
                            To provide globally competitive and high quality human resource by preparing students with broad-based / specialized technical education at UG, PG, and Ph.D. levels.
                        </li>
                        <li className="ml-4">
                            To increase research intensity and become a leading product based innovation centre by significantly contributing towards development of new technologies.
                        </li>
                        <li className="ml-4">
                            To contribute to the country and the society at large by strengthening the interaction between academia and industries for addressing the need of the mankind.
                        </li>
                    </ul>

                    <div className="w-full mt-5">
                        <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
                        <li className="ml-4">
                            To become a centre of excellence to impart up-to-date technical education, which will let our students to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a leading research hub.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ECEMissionPage;
