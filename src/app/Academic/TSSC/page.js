import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className=" mx-auto sm:px-4 py-8 text-black w-11/12 md:w-4/5 bg-white bg-opacity-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-800">Centre Of Excellence</h1>
      

      <h2 className="text-2xl font-bold mb-4 text-center md:text-start text-red-800">Centre of Excellence set up by TSSC at NIT Patna</h2>
      <p className="m-4 text-start bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-lg">
      A Memorandum of Understanding (MOU) has been signed between Telecom Sector Skill Council and National Institute of Technology Patna for setting up a Centre of Excellence (CoE) to create a facility for practical training on the domain of Information and Communications Technology on 22nd January, 2021. Skill development training is being imparted by the CoE to enhance the employability of aspiring students on the cutting-edge technologies in the domain of Information and Communications Technology including Technical, Services and allied fields. The CoE will provide training on the base line courses and also on the advance courses like IOT, 5G and beyond, cyber security and robotics etc. Almost 190 students have been trained on different job roles by this centre. A state-of-art laboratory on internet of things (IOT) is being developed. Hopefully the lab will be ready shortly where training/research will be conducted on IOT/5G technologies.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-center md:text-start text-red-800 pt-5"> Centre of Excellence set up by ISRO RACS at NIT Patna <Link href="/Academic/ISRO" className='text-neutral-400'>[Website Link]</Link></h2>
      
      <p className="m-4 text-start bg-red-200/50 p-3 rounded-lg">
      As we joyfully unveil, it's all hues of bliss. The Indian Space Research Organization (ISRO) intends to open a Regional Academic Centre for Space at the National Institute of Technology, Patna (NITP) to encourage students to pursue careers in space research. The NITP and the ISRO signed a memorandum of understanding (MoU) in this regard on Wednesday, November 25, 2021. The ISRO headquarters were represented by Sudheer Kumar N, director of CBPO (Capacity Building Programme Office), and MA Paul, associate director (response and academic interface-CBPO), while our esteemed director Prof. P. K. Jain was present from our side.
      </p>
      <p className="m-4 text-start bg-red-200/50 p-3 rounded-lg">
      The Regional Academic Centre for Space is a regional-level project that seeks to conduct advanced research in areas relevant to the future technological and programmatic needs of the space program. Other current Regional Academic Centres for Space are located in prestigious colleges such as MNIT, Jaipur, NIT Kurukshetra, IIT (BHU) Varanasi, Gauhati University, and NIT K, Surathkal.
      </p>
      <p className="m-4 text-start bg-red-200/50 p-3 rounded-lg">
      The ISRO's research and development operations in the Eastern India region (including Bihar, Jharkhand, West Bengal, Odisha, Andaman, the Nicobar Islands, and Sikkim) would be coordinated through NIT-Patna. Sudheer, Director of CBPO, stated that the RAC-S center will serve as a facilitator for space technology operations. He also discussed the research areas and how to get involved in the initiative. The ISRO will also provide financial assistance in the amount of Rs. 2 crores per year.
      </p>
      <p className="m-4 text-start bg-red-200/50 p-3 rounded-lg">
      Director, NIT Patna, Prof. P. K. Jain, addressing the event, promised that NITP will encourage research activities in different fields, including electronics, communication, material science, information technology, and remote sensing, by the needs of the ISRO. If any institute in eastern India requires experimental help, our facility would be available. The funding is available not just for research initiatives, but also for undergraduate, postgraduate, Ph.D., and teaching faculty.
      </p>
      <p className="m-4 text-start bg-gradient-to-r from-blue-200 to-cyan-200 p-3 rounded-lg">
      The short-term projects will be for NITP and other institutes' B. Tech and M. Tech students. The center will also provide Ph.D. scholars and faculty members with long-term research and development projects. The projects can be individual projects or projects in collaboration with another institute. The projects will be scrutinized twice, first by the NITP and subsequently by the ISRO.For website visit : <a href="https://sites.google.com/view/isroracs/home" target="_blank" className='text-blue-600'> ISRO RAC</a>
      </p>
      
      
    </div>
  );
};

export default page;