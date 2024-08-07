"use client";
import React, { useEffect, useState } from "react";


const fetchFacultyDetails = async (email) => {
  try {
    const response = await fetch(`https://admin.nitp.ac.in/api/faculty/${email}`);
    const data = await response.json();
    return {
      name: data.profile.name,
      department: data.profile.department,
    };
  } catch (error) {
    console.error("Error fetching faculty details:", error);
    return { name: "", department: "Computer Science and Engineering" };
  }
};

const ArticlesTable = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsedYears, setCollapsedYears] = useState({});

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://admin.nitp.ac.in/api/publications/all"
      );
      const data = await response.json();

      const articleData = data.filter((item) =>
        item.publications.some(
          (publication) => publication.type === "article"
        )
      );

      const articlesWithFaculty = [];
      for (const article of articleData) {
        const { department } = await fetchFacultyDetails(article.email);
        for (const publication of article.publications) {
          if (publication.type === "article" && /^\d{4}$/.test(publication.year)) {
            articlesWithFaculty.push({
              ...article,
              department,
              year: publication.year,
              title: publication.title,
              authors: publication.authors,
              journal: publication.journal_name,
            });
          }
        }
      }

      // Group and sort articles by department and year
      const groupedByYear = articlesWithFaculty.reduce((acc, article) => {
        if (!acc[article.year]) {
          acc[article.year] = {};
        }
        if (!acc[article.year][article.department]) {
          acc[article.year][article.department] = [];
        }
        acc[article.year][article.department].push(article);
        return acc;
      }, {});

      Object.keys(groupedByYear).forEach((year) => {
        Object.keys(groupedByYear[year]).forEach((department) => {
          groupedByYear[year][department].sort((a, b) => b.year - a.year);
        });
      });

      setArticles(groupedByYear);
    } catch (error) {
      setError(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const formatArticle = (article) => {
    return `${article.authors}, "${article.title}," ${article.journal}, (${article.year})`;
  };

  const toggleYear = (year) => {
    setCollapsedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <div className=" bg-white bg-opacity-70">
    <div className="articles-dashboard text-neutral-900">
      <h1 className="heading text-3xl text-center pb-7 md:pb-10 text-red-800 font-bold">Publications</h1>
      {isLoading ? (
       <div className="flex justify-center items-center ">
       <svg
         version="1.1"
         id="L1"
         height="150px"
         width="150px"
         x="0px"
         y="0px"
         viewBox="0 0 100 100"
         enable-background="new 0 0 100 100"
       >
         <circle
           fill="none"
           stroke="#f87171"
           stroke-width="6"
           stroke-miterlimit="15"
           stroke-dasharray="14.2472,14.2472"
           cx="50"
           cy="50"
           r="47"
         >
           <animateTransform
             attributeName="transform"
             attributeType="XML"
             type="rotate"
             dur="5s"
             from="0 50 50"
             to="360 50 50"
             repeatCount="indefinite"
           />
         </circle>
         <circle
           fill="none"
           stroke="#f87171"
           stroke-width="1"
           stroke-miterlimit="10"
           stroke-dasharray="10,10"
           cx="50"
           cy="50"
           r="39"
         >
           <animateTransform
             attributeName="transform"
             attributeType="XML"
             type="rotate"
             dur="5s"
             from="0 50 50"
             to="-360 50 50"
             repeatCount="indefinite"
           />
         </circle>
         <g fill="#f87171">
           <rect x="30" y="35" width="5" height="30">
             <animateTransform
               attributeName="transform"
               dur="1s"
               type="translate"
               values="0 5 ; 0 -5; 0 5"
               repeatCount="indefinite"
               begin="0.1"
             />
           </rect>
           <rect x="40" y="35" width="5" height="30">
             <animateTransform
               attributeName="transform"
               dur="1s"
               type="translate"
               values="0 5 ; 0 -5; 0 5"
               repeatCount="indefinite"
               begin="0.2"
             />
           </rect>
           <rect x="50" y="35" width="5" height="30">
             <animateTransform
               attributeName="transform"
               dur="1s"
               type="translate"
               values="0 5 ; 0 -5; 0 5"
               repeatCount="indefinite"
               begin="0.3"
             />
           </rect>
           <rect x="60" y="35" width="5" height="30">
             <animateTransform
               attributeName="transform"
               dur="1s"
               type="translate"
               values="0 5 ; 0 -5; 0 5"
               repeatCount="indefinite"
               begin="0.4"
             />
           </rect>
           <rect x="70" y="35" width="5" height="30">
             <animateTransform
               attributeName="transform"
               dur="1s"
               type="translate"
               values="0 5 ; 0 -5; 0 5"
               repeatCount="indefinite"
               begin="0.5"
             />
           </rect>
         </g>
       </svg>
     </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container pl-10 pr-10 ">
          {Object.keys(articles)
            .sort((a, b) => b - a) // Sort years in descending order
            .map((year) => (
              <div key={year} >
                <div className="bg-white">
                <h2 className="year-heading font-bold text-red-950" onClick={() => toggleYear(year)}>
                  {year}
                </h2>
                </div>
                {(year === "2024" || !collapsedYears[year]) && (
                  <div>
                    {Object.keys(articles[year]).map((department) => (
                      <div key={department}>
                        <h3 className="department-heading">{department}</h3>
                        <div className="factable">
                          {articles[year][department].map((article, index) => (
                            <div key={index} className="article">
                              <ul className="py-2">
                                <li>
                                  <div className="P-2 py-2">
                                  <p>{formatArticle(article)}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          ))}
                          <div className="bg-white m-5 p-2">
                          <p className="counttotal">{`${department} Department has published ${articles[year][department].length} articles in ${year}`}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
      <style jsx>{`
        .articles-dashboard {
          padding: 50px;
        }

        .heading {
          text-align: center;
          
          
        }
        .counttotal{
          text-align: center;
          color:#DC143C;
          }

        .year-heading {
          font-size: 24px;
         
          cursor: pointer;
          text-align: center;
        }

        .department-heading {
          margin-top: 20px;
          font-size: 20px;
          color: #A52A2A;
        }

        .factable {
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .article {
          padding: 10px;
          background: #f9f9f9;
          margin-bottom: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .article p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 24px;
          }

          .year-heading {
            font-size: 20px;
          }

          .department-heading {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .heading {
            font-size: 20px;
          }

          .year-heading {
            font-size: 18px;
          }

          .department-heading {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
    </div>
  );
};

const ArticlesPage = () => (

    <ArticlesTable />

);

export default ArticlesPage;
