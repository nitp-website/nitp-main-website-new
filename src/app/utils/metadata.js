// Metadata configuration templates for different page types
// This file provides reusable metadata configurations for SEO optimization

/**
 * Base metadata template that includes partner attributions
 */
export const baseMetadata = {
    keywords: "NIT Patna, National Institute of Technology, Engineering College, Technical Education, Bihar, India, TechScript, Ashish Kumar",
    authors: [
        { name: "NIT Patna Web Team" },
        { name: "TechScript", url: "https://www.techscript.in/" },
        { name: "Ashish Kumar", url: "https://www.ashishk.online/" }
    ],
    creator: "NIT Patna",
    publisher: "National Institute of Technology Patna",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

/**
 * Generate metadata for department pages
 */
export function generateDepartmentMetadata(departmentName, description) {
    return {
        title: `${departmentName} | NIT Patna`,
        description: `${description} - Department of ${departmentName} at National Institute of Technology Patna. Excellence in education and research.`,
        keywords: `${departmentName}, NIT Patna Department, Engineering, Research, ${baseMetadata.keywords}`,
        ...baseMetadata,
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: `https://www.nitp.ac.in/Department/${departmentName.replace(/\s+/g, '-')}`,
            siteName: "NIT Patna",
            title: `${departmentName} | NIT Patna`,
            description: `${description} - Department of ${departmentName} at NIT Patna`,
        },
        twitter: {
            card: "summary_large_image",
            title: `${departmentName} | NIT Patna`,
            description: `${description}`,
        },
        alternates: {
            canonical: `https://www.nitp.ac.in/Department/${departmentName.replace(/\s+/g, '-')}`
        }
    };
}

/**
 * Generate metadata for academic pages
 */
export function generateAcademicMetadata(pageName, description) {
    return {
        title: `${pageName} | Academic | NIT Patna`,
        description: `${description} - ${pageName} at National Institute of Technology Patna`,
        keywords: `${pageName}, Academic, NIT Patna, ${baseMetadata.keywords}`,
        ...baseMetadata,
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: `https://www.nitp.ac.in/Academic/${pageName.replace(/\s+/g, '-')}`,
            siteName: "NIT Patna",
            title: `${pageName} | Academic | NIT Patna`,
            description: description,
        },
        twitter: {
            card: "summary_large_image",
            title: `${pageName} | Academic | NIT Patna`,
            description: description,
        },
        alternates: {
            canonical: `https://www.nitp.ac.in/Academic/${pageName.replace(/\s+/g, '-')}`
        }
    };
}

/**
 * Generate metadata for administration pages
 */
export function generateAdministrationMetadata(pageName, description) {
    return {
        title: `${pageName} | Administration | NIT Patna`,
        description: `${description} - ${pageName} at National Institute of Technology Patna`,
        keywords: `${pageName}, Administration, NIT Patna, ${baseMetadata.keywords}`,
        ...baseMetadata,
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: `https://www.nitp.ac.in/Administration/${pageName.replace(/\s+/g, '-')}`,
            siteName: "NIT Patna",
            title: `${pageName} | Administration | NIT Patna`,
            description: description,
        },
        twitter: {
            card: "summary_large_image",
            title: `${pageName} | Administration | NIT Patna`,
            description: description,
        },
        alternates: {
            canonical: `https://www.nitp.ac.in/Administration/${pageName.replace(/\s+/g, '-')}`
        }
    };
}

/**
 * Generate metadata for student pages
 */
export function generateStudentMetadata(pageName, description) {
    return {
        title: `${pageName} | Student | NIT Patna`,
        description: `${description} - ${pageName} at National Institute of Technology Patna`,
        keywords: `${pageName}, Student Activities, NIT Patna, ${baseMetadata.keywords}`,
        ...baseMetadata,
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: `https://www.nitp.ac.in/Student/${pageName.replace(/\s+/g, '-')}`,
            siteName: "NIT Patna",
            title: `${pageName} | Student | NIT Patna`,
            description: description,
        },
        twitter: {
            card: "summary_large_image",
            title: `${pageName} | Student | NIT Patna`,
            description: description,
        },
        alternates: {
            canonical: `https://www.nitp.ac.in/Student/${pageName.replace(/\s+/g, '-')}`
        }
    };
}

/**
 * Generate metadata for facilities pages
 */
export function generateFacilitiesMetadata(pageName, description) {
    return {
        title: `${pageName} | Facilities | NIT Patna`,
        description: `${description} - Facilities at National Institute of Technology Patna`,
        keywords: `${pageName}, Facilities, Campus, NIT Patna, ${baseMetadata.keywords}`,
        ...baseMetadata,
        openGraph: {
            type: "website",
            locale: "en_IN",
            url: `https://www.nitp.ac.in/Facilities/${pageName.replace(/\s+/g, '-')}`,
            siteName: "NIT Patna",
            title: `${pageName} | Facilities | NIT Patna`,
            description: description,
        },
        twitter: {
            card: "summary_large_image",
            title: `${pageName} | Facilities | NIT Patna`,
            description: description,
        },
        alternates: {
            canonical: `https://www.nitp.ac.in/Facilities/${pageName.replace(/\s+/g, '-')}`
        }
    };
}

/**
 * Specific metadata for popular pages
 */
export const popularPagesMetadata = {
    admissions: generateAcademicMetadata(
        "Admissions",
        "Admission information for B.Tech, M.Tech, MCA, PhD programs at NIT Patna through JoSAA, CCMT, NIMCET, and DASA"
    ),

    placement: generateAcademicMetadata(
        "Placements",
        "Placement information and statistics for NIT Patna students. Top recruiters and placement records"
    ),

    cse: generateDepartmentMetadata(
        "Computer Science and Engineering",
        "Leading department in Computer Science and Engineering offering B.Tech, M.Tech and PhD programs"
    ),

    ece: generateDepartmentMetadata(
        "Electronics and Communication Engineering",
        "Department of Electronics and Communication Engineering with state-of-the-art facilities and research"
    ),

    ee: generateDepartmentMetadata(
        "Electrical Engineering",
        "Department of Electrical Engineering focused on power systems, control systems, and electrical machines"
    ),

    me: generateDepartmentMetadata(
        "Mechanical Engineering",
        "Department of Mechanical Engineering offering programs in thermal engineering, manufacturing, and design"
    ),
};
