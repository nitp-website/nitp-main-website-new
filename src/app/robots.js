/**
 * Robots.txt Generator for NIT Patna Website
 * 
 * This file creates a robots.txt to guide search engine crawlers
 * URL: https://www.nitp.ac.in/robots.txt
 */

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
        ],
        sitemap: 'https://www.nitp.ac.in/sitemap.xml',
    };
}
