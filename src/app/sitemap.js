/**
 * Dynamic Sitemap Generator for NIT Patna Website
 * 
 * This file generates a sitemap.xml for search engines
 * URL: https://www.nitp.ac.in/sitemap.xml
 */

export default function sitemap() {
    const baseUrl = 'https://www.nitp.ac.in';

    // Current date for lastModified
    const currentDate = new Date();

    // Static routes with their priorities and change frequencies
    const routes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },

        // Department Pages (High Priority)
        {
            url: `${baseUrl}/Department/CSE`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Department/ECE`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Department/EE`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Department/ME`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Department/CE`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Department/Archi`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Department/Chem`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Department/Humanities`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Department/Math`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Department/Mechatronics`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Department/Phy`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // Academic Pages (High Priority)
        {
            url: `${baseUrl}/Academic/Admission`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/Academic/Projects`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Academic/Holidays`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Academic/Publication`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Academic/Patent`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Academic/Calender`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Academic/Fee`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Academic/Curriculam`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Administration Pages
        {
            url: `${baseUrl}/Administration/BOG`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Administration/Senate`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Administration/Deans`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Administration/HOD`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Administration/Registrar`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Administration/Proctorial_Board`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Student Pages
        {
            url: `${baseUrl}/Student/NSS`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },

        // Facilities Pages
        {
            url: `${baseUrl}/Facilities/Hostel`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/Facilities/Emu`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },

        // Course Pages
        {
            url: `${baseUrl}/Course/Ug`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Course/Pg`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Course/MTech`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Course/MCA`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Course/MSc`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Other Important Pages
        {
            url: `${baseUrl}/Gallery`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/Notices`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ];

    return routes;
}
