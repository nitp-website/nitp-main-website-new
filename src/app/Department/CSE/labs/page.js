import fs from "fs";
import path from "path";
import LabsClient from "./LabsClient";

function buildImageObjects(files) {
    return files.map((f) => ({
        src: `/department/cse/${f}`,
        alt: f,
    }));
}

export default function Page() {
    const imagesDir = path.join(
        process.cwd(),
        "public",
        "department",
        "cse",
    );

    let files = [];

    try {
        if (fs.existsSync(imagesDir)) {
            files = fs
                .readdirSync(imagesDir)
                .filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
                .sort();
        }
    } catch (e) {
        files = [];
    }

    const slides = buildImageObjects(files);

    const labSections = [
        {
            title: "Computing Lab-1 (CSE, Bihta Campus)",
            description:
                "Computing Lab- 1 is located on the first floor of the Department of Computer Science and Engineering, Bihta Campus, and is equipped with 113 desktop computers to support practical sessions, programming, project work, and research activities. The laboratory comprises eighty-five Acer Veriton X4240G systems with AMD Ryzen 7 processors, 16 GB DDR4 RAM, 500 GB storage, Acer V227Q monitors, and Windows 11 Home, twenty-one Acer Veriton X4240G systems with AMD Ryzen 3 processors, 8 GB RAM, 500 GB storage, Acer V227Q monitors, and Windows 11 Home, six Acer S2690G systems featuring Intel Core i7 processors, 8 GB RAM, 1 TB storage, Acer V227Q LCD monitors, and Windows 11 Home, and one Acer M200-P500 system configured with an AMD Ryzen 7 processor, 8 GB RAM, 1 TB storage, an Acer V227Q LCD monitor, and Windows 11 Home.\n\nThe laboratory provides students with a modern computing environment to acquire practical knowledge through hands-on experiments, programming, database development, web application design, data analysis, and cybersecurity practices. It bridges the gap between theoretical learning and practical implementation by enabling students to develop analytical thinking, technical proficiency, and problem-solving skills using contemporary software tools and technologies. Computing Lab- 1 supports practical courses such as Database Management Systems (DBMS), Data Analytics, Web Technology, Applied Cryptography, and Operating Systems. The laboratory facilitates experiments in database design, SQL programming, database administration, data preprocessing, visualization and analytical techniques, web application development using front-end and back-end technologies, and the implementation of cryptographic algorithms and security mechanisms. It also provides basic exposure to operating system concepts through experiments on process management, memory management, and file system operations. In addition, the laboratory supports course assignments, mini-projects, major projects, demonstrations, and research-oriented activities, thereby enhancing students' practical competencies and preparing them for industry and research careers.",
            images: buildImageObjects(files.slice(0, 2)),
        },

        {
            title: "Computing Lab-2 (CSE, Bihta Campus)",
            description:
                "Computing Lab- 2 is located on the second floor of the Department of Computer Science and Engineering (Bihta Campus). The laboratory is equipped with 94 desktop computers to support practical sessions, programming exercises, software development, and research activities. Of these, 92 desktop computers are Acer Veriton M200 P500 systems featuring AMD Ryzen 7 processors with Radeon Graphics, 16 GB RAM, 1 TB HDD, and Windows 11 Home operating system. The remaining two desktop computers are HP ProDesk systems equipped with Intel Core i7 processors, 8 GB RAM, 1 TB HDD, and Windows 11 Pro operating system.\n\nThis laboratory provides a state-of-the-art computing environment designed to equip students with practical exposure to intelligent computing, software development, algorithm design, data-driven problem solving, and secure computing practices. The laboratory supports both undergraduate and postgraduate programmes by offering a hands-on learning platform that effectively bridges theoretical concepts with real-world applications, fostering innovation, analytical thinking, and research-oriented learning.\n\nThe laboratory supports practical courses such as Machine Learning, Software Engineering, Design and Analysis of Algorithms, Information Security, Natural Language Processing (NLP), and Bioinformatics. Students gain practical experience in implementing machine learning models, software design and testing methodologies, algorithm development and performance analysis, cryptographic techniques and secure computing practices, natural language processing applications, and computational methods for biological data analysis. The laboratory also facilitates course assignments, laboratory experiments, mini-projects, major projects, research activities, and the use of modern software tools and frameworks, thereby enhancing students' technical competencies and preparing them for careers in industry, research, and academia.",
            images: buildImageObjects(files.slice(2, 4)),
        },

        {
            title: "Operating System Lab",
            description:
                "Core Focus: System Architecture, Data Management, & Networking\n\nHosted Subjects: Operating Systems, Database Management Systems (DBMS), Computer Organization, Web Technology & Programming, Computer Hardware and Networking, and Data Communication and Networks.\n\nDescription: Housing more than 50 computers with modern hardware configurations, this lab focuses on the core architecture and infrastructure of computer systems. It provides a practical environment for students to experiment with process scheduling, memory management, and relational database design. Additionally, the lab supports web development and networking courses, allowing students to build, configure, and secure interconnected software environments.",
            images: buildImageObjects(["Operating System Lab.jpg"]),
        },

        {
            title: "Simulation Lab",
            description:
                "Core Focus: Advanced Analytics, AI, Cyber Security, & Specialized Electives\n\nHosted Subjects: Machine Learning, Deep Learning, Internet of Things (IoT/AIoT), Big Data Analytics, Pattern Recognition, Computer Vision, Natural Language Processing, Applied Cryptography, Network Security System, and Design and Analysis of Algorithms.\n\nDescription: The Simulation Lab is a cutting-edge facility featuring 50+ modern-configuration machines tailored for computationally intensive workloads. This lab hosts advanced courses in Artificial Intelligence, Machine Learning, Deep Learning, and Big Data Analytics. It also serves as the testing ground for complex cryptographic protocols, algorithmic simulations, and Internet of Things (IoT) network modelling, enabling students to solve complex, real-world analytical problems.",
            images: buildImageObjects(["Simulation Lab.jpg"]),
        },

        {
            title: "Computing Lab",
            description:
                "Core Focus: First-Year Fundamentals, Data Science, & Professional Development\n\nHosted Subjects: Fundamentals of Information Technology, Introduction to Data Science, Python for AI and Data Science, Mathematical Foundations of Data Science, Data Visualization, Technical Seminar, and Communicative English.\n\nDescription: With a capacity of over 50 computers with modern hardware configurations, the Computing Lab is a versatile space catering to foundational computing, modern data science entry points, and professional development. It bridges the gap between basic digital literacy and advanced analytics through data visualization and mathematical modelling. The lab also serves as a collaborative hub for technical seminars, presentations, and interactive language learning to enhance students' communication skills.",
            images: buildImageObjects(["Computing Lab.jpg"]),
        },

        {
            title: "Programming Lab",
            description:
                "Core Focus: Foundational Programming & Core Software Engineering\n\nHosted Subjects: Problem Solving using C, Computing with Python, Object Oriented Programming (Java/C++), Data Structures, and Software Engineering.\n\nDescription: Equipped with over 30 computers with modern hardware configurations, the Programming Lab serves as the launchpad for students entering the world of computer science. It is designed to cultivate fundamental coding skills, logical reasoning, and robust software development practices. Here, students gain hands-on experience in core data structures, object-oriented paradigms, and software engineering methodologies, establishing the vital technical groundwork required for advanced computing.",
            images: buildImageObjects(["Programming Lab.jpg"]),
        },

        {
            title: "LRS Workstation",
            description:
                "Core Focus: Advanced Post-Graduate\n\nDescription: The Learning and Research Support (LRS) Workstation is an exclusive, high-end research facility housing around 15 advanced, high-performance computing nodes. Tailored specifically for research scholars, this workstation supports deep experimental work, heavy simulations, and academic publishing. It provides an uninterrupted, specialized environment dedicated to driving innovation in advanced computing domains.",
            images: buildImageObjects(["LRS Workstation.jpg"]),
        },
    ];

    return (
        <LabsClient
            slides={slides}
            labSections={labSections}
        />
    );
}