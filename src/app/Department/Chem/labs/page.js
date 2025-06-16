'use client'
import BackDepartment from "../../../components/department/BackDepartment";
import Image from "next/image";
import React from "react";

// Chemistry Labs Data 
const labsData = [
	{
		name: "Teaching Lab",
		description:
			"The Teaching Lab is equipped for undergraduate and postgraduate practicals in Chemical Science and Technology, supporting core and elective courses with modern instrumentation and safety features.",
		image: "/tl_01.jpg",
	},
	{
		name: "Instrument Lab",
		description:
			"The Instrument Lab houses advanced analytical instruments for research and teaching, including spectrometers, chromatographs, and other essential chemical analysis tools.",
		image: "/il_01.jpg",
	},
	{
		name: "Research Lab",
		description:
			"The Research Lab supports faculty and student research projects in various areas of chemistry, providing facilities for synthesis, analysis, and advanced experimentation.",
		image: "/rl_01.jpg",
	},
	{
		name: "Applied Chemistry Lab (Dr. Subrata Das)",
		description:
			"Focuses on applied aspects of chemistry including industrial and environmental applications.",
		image: "",
	},
	{
		name: "Bioorganic Lab (Dr. Rima Thakur)",
		description:
			"Specializes in bioorganic synthesis and analysis, supporting research in biomolecules and organic chemistry.",
		image: "",
	},
	{
		name: "Biophysical Chemistry Lab (Dr. Niki Sweta Jha)",
		description:
			"Conducts research in the physical principles underlying chemical systems, including spectroscopy and thermodynamics.",
		image: "",
	},
	{
		name: "Green Synthesis Lab (Dr. Tasneem Parvin)",
		description:
			"Dedicated to environmentally friendly chemical synthesis and green chemistry methodologies.",
		image: "",
	},
	{
		name: "Inorganic Lab (Dr. Mukesh Choudhary)",
		description:
			"Focuses on synthesis and characterization of inorganic compounds and materials.",
		image: "",
	},
	{
		name: "Supramolecular Materials Lab (Dr. Suvankar Dasgupta)",
		description:
			"Researches supramolecular assemblies and advanced materials for various applications.",
		image: "",
	},
	{
		name: "Synthetic Research Lab (Dr. Khursheed Ahmad)",
		description:
			"Engaged in the synthesis of novel organic and inorganic compounds for research and teaching.",
		image: "",
	},
];

function Carousel({ children: pics, autoSlideInterval = 3000, autoSlide = true }) {
	const [curr, setCurr] = useState(0);
	const prev = () => {
		setCurr((curr) => (curr === 0 ? pics.length - 1 : curr - 1));
	};
	const next = () => {
		setCurr((curr) => (curr === pics.length - 1 ? 0 : curr + 1));
	};
	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, []);
	return (
		<div className=' relative overflow-hidden'>
			<div
				className='flex transition-transform ease-out duration-1000'
				style={{ transform: `translateX(-${curr * 100}%)` }}
			>
				{pics}
			</div>
		</div>
	);
}

function Page() {
	return (
		<div className=' flex flex-col p-5 text-black'>
			<div className='flex flex-col md:ml-10'>
				<div>
					<p className='text-red-900 text-xl lg:text-2xl font-bold'>LABS</p>
				</div>
				<div className='mt-2'>
					<p className='text-gray-500 text-sm lg:text-base font-semibold'>
						Chemical Science and Technology
					</p>
				</div>
				<div>
					<BackDepartment navigate={'/Department/Chem'} />
				</div>
				<div className='max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md'>
					<div className='mt-14 mx-auto'>
						<p className='text-red-900 font-semibold lg:text-2xl text-xl'>
							Teaching Lab
						</p>
					</div>
					<div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
						<Carousel autoSlide={true}>
							{labsData[0].image && (
								<Image
									src={labsData[0].image}
									alt='image'
									width={500}
									height={500}
									key={0}
									className='object-fill w-full rounded-lg bg-red-200'
								/>
							)}
						</Carousel>
					</div>
					<div className='mt-14 mx-auto'>
						<p className='text-red-900 font-semibold lg:text-2xl text-xl'>
							Instrument Lab
						</p>
					</div>
					<div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
						<Carousel autoSlide={true}>
							{labsData[1].image && (
								<Image
									src={labsData[1].image}
									alt='image'
									width={500}
									height={500}
									key={1}
									className='object-fill w-full rounded-lg bg-red-200'
								/>
							)}
						</Carousel>
					</div>
					<div className='mt-14 mx-auto'>
						<p className='text-red-900 font-semibold lg:text-2xl text-xl'>
							Research Lab
						</p>
					</div>
					<div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
						<Carousel autoSlide={true}>
							{labsData[2].image && (
								<Image
									src={labsData[2].image}
									alt='image'
									width={500}
									height={500}
									key={2}
									className='object-fill w-full rounded-lg bg-red-200'
								/>
							)}
						</Carousel>
					</div>
					<div className='mt-20'>
						<p className='text-red-900 font-semibold lg:text-2xl text-xl'>
							Individual Faculty Research Lab:-
						</p>
					</div>
					<ol className='mt-10 font-medium text-sm lg:text-base list-decimal ml-4 md:ml-10'>
						<li>
							Applied Chemistry Lab (Dr. Subrata Das)
						</li>
						<li>
							Bioorganic Lab (Dr. Rima Thakur)
						</li>
						<li>
							Biophysical Chemistry Lab (Dr. Niki Sweta Jha)
						</li>
						<li>
							Green Synthesis Lab (Dr. Tasneem Parvin)
						</li>
						<li>
							Inorganic Lab (Dr. Mukesh Choudhary)
						</li>
						<li>
							Supramolecular Materials Lab (Dr. Suvankar Dasgupta)
						</li>
						<li>
							Synthetic Research Lab (Dr. Khursheed Ahmad)
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}
export default Page;