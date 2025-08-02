import BackDepartment from "../../../components/department/BackDepartment";

function Page() {
  return (
    <div className=" flex flex-col p-5 sm:p-2 text-black">
      <div className="flex flex-col  mb-6">
        <div>
          <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
            ABOUT
          </p>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-xl font-semibold">
            Chemical Science and Technology
          </p>
        </div>
        <div>
          <BackDepartment navigate={"/Department/Chem"} />
        </div>
      </div>
      <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
        {/* section 1 */}
        <div className="mb-10">
          <p className="text-justify">
            The Department of Chemical Science and Technology at the National
            Institute of Technology Patna are committed to excellence in
            education and research, fostering innovation and collaboration
            across various disciplines. The Department of Chemistry, established
            in 1924, has significantly expanded its academic and research
            offerings. The Department has expanded to include the discipline of
            Chemical Engineering in 2023, to emerge as a leader in field of
            chemical sciences and engineering education as well as technological
            advancements.{" "}
          </p>
          <p className="text-justify my-4">
            The department offers a five-year UG-PG B. Tech. - M. Tech dual
            degree program in Chemical Technology to bridge the gap between
            chemistry and technological applications, preparing students for
            careers in both academia and industry. The curriculum covers core
            subjects such as material and energy balance, thermodynamics, heat
            and mass transfer, fluid mechanics, chemical reaction engineering,
            process control, and computational systems. By integrating
            traditional chemical engineering principles with emerging
            specializations, the program aims to produce industry-ready
            professionals capable of addressing complex engineering challenges.
            The Department offers several compulsory and elective courses to
            B.Tech. and B.Arch. students of the Institute in 1st, 2nd and 3rd
            years of the UG and UG-PG dual degree programs. The department has
            been and will remain committed to quality teaching and research with
            a conscious effort to achieve excellence.
          </p>
          <p className="text-justify my-4">
            The department has an active Ph.D. program since 2010 where the
            number of research scholars have been steadily rising with new
            admission every semester. Currently, the department has 26 full-time
            Ph.D. students and 19 part-time Ph.D. students. With the increase in
            motivated researchers, the research output in terms of both quality
            and quantity has escalated in the recent years. The department has
            14 regular faculty members who are PIs of independent research
            groups and focus on different areas of chemistry like synthetic
            glycochemistry, supramolecular chemistry, graphene chemistry,
            heterocycles, nanomaterials, spectroscopy, co-ordination complexes.
          </p>
          <p className="text-justify my-4">
            To promote the ongoing and future research activities, DST has
            recently granted research funds under FIST programme with a total
            grant amount of Rs. 220 Lakhs for the period of 2023 – 2028. Capital
            fund received from Institute, TEQIP and externally funded projects
            have facilitated in installation of advanced small equipment
            necessary to execute day to day research work. The research groups
            are also collaborating within the department as well as with other
            Institutions to encourage inter-disciplinary work. Collaborative
            work with faculty/scientists in IIT Patna, CSIR-NML, IIT
            Gandhinagar, CSIR-CSIO, NIPER Hajipur, IACS Kolkata, NIT Rourkela,
            Algappa University Karaikudi is currently under way to carry out
            characterization work, theoretical study, and extend the application
            of synthesized products. The research facilities in the department
            are frequently extended to students from Civil Engg., Mechanical
            Engg., Physics departments to enable their UG and PG thesis works.
            Further, UG and PG students from nearby Universities/Institutions
            like Mahatma Gandhi Central University Motihari, Central University
            South Bihar Gaya, NIPER Hajipur, Patna University have visited our
            department for carrying out research work mandatory in their
            curricula.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
