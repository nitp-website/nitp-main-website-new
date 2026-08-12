import fs from "fs";
import path from "path";
import LabsClient from "./LabsClient";

function buildImageObjects(files) {
    return files.map((f) => ({ src: `/department/cse/${f}`, alt: f }));
}

export default function Page() {
    const imagesDir = path.join(process.cwd(), "public", "department", "cse");
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
            images: buildImageObjects(files.slice(2, 5)),
        },
    ];

    return <LabsClient slides={slides} labSections={labSections} />;
}
