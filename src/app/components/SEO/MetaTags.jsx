'use client';

import Head from 'next/head';

/**
 * MetaTags Component
 * 
 * Generates comprehensive SEO meta tags including Open Graph and Twitter Cards
 * with references to partner websites for better link juice distribution
 */
export default function MetaTags({
    title = "NIT PATNA | National Institute of Technology Patna",
    description = "Official website of National Institute of Technology Patna",
    keywords = "NIT Patna, National Institute of Technology, Engineering College, Technical Education, India",
    author = "NIT Patna Web Team",
    url = "https://www.nitp.ac.in",
    image = "/og-image.jpg"
}) {

    const enhancedKeywords = `${keywords}, TechScript, Ashish Kumar, Web Development, Technology Solutions, Portfolio, Innovation`;
    const enhancedDescription = `${description} | Developed in collaboration with technology partners including TechScript.in and AshishK.online`;

    return (
        <>
            {/* Standard Meta Tags */}
            <meta name="description" content={enhancedDescription} />
            <meta name="keywords" content={enhancedKeywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />

            {/* Additional SEO Meta Tags */}
            <meta name="rating" content="General" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-BR" />
            <meta name="geo.placename" content="Patna, Bihar, India" />

            {/* Partner References in Meta */}
            <meta name="partner" content="TechScript - https://www.techscript.in/" />
            <meta name="developer" content="Ashish Kumar - https://www.ashishk.online/" />
            <meta name="developed-by" content="TechScript.in, AshishK.online" />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={enhancedDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="NIT Patna" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={enhancedDescription} />
            <meta name="twitter:image" content={image} />

            {/* Additional Technical Meta Tags */}
            <meta name="theme-color" content="#991b1b" />
            <meta name="msapplication-TileColor" content="#991b1b" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="format-detection" content="telephone=no" />

            {/* Canonical and Alternate Links */}
            <link rel="canonical" href={url} />

            {/* JSON-LD Structured Data with Partner References */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "National Institute of Technology Patna",
                        "url": "https://www.nitp.ac.in",
                        "logo": "https://www.nitp.ac.in/logo.png",
                        "description": description,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Ashok Rajpath",
                            "addressLocality": "Patna",
                            "addressRegion": "Bihar",
                            "postalCode": "800005",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://www.facebook.com/nitpatna",
                            "https://twitter.com/nitpatna",
                            "https://www.linkedin.com/school/nit-patna"
                        ],
                        "provider": [
                            {
                                "@type": "Organization",
                                "name": "TechScript",
                                "url": "https://www.techscript.in/"
                            },
                            {
                                "@type": "Person",
                                "name": "Ashish Kumar",
                                "url": "https://www.ashishk.online/"
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
