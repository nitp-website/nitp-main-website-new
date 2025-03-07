import React from 'react';
import { Download } from 'lucide-react';

const DocumentsTable = () => {

     const dataUG= [
      {
        link:
         "https://drive.google.com/file/d/1NLUkqhhwj_ytZL1Rq4T2pASMcKok2nEt/view?usp=sharing",
        para:
         "Notification regarding Multiple Exit option,UG.",
       },
      {
       link:
        "https://drive.google.com/file/d/1Jobn8OBYPUf1ekffjTS0ZIzXuzfQ8CNa/view?usp=sharing",
       para:
        "UG Regulation 2022(Effective from academic session 2021-22 and onwards)",
      },
      {
       link:
        "https://drive.google.com/file/d/1aW72cez0wwGQ5N29U2mj2zK2RgW682dv/view?usp=sharing",
       para:
        "UG Regulation 2020 (Effective for Academic Session 2020-21 )",
      },
      {
       link:
        "https://drive.google.com/file/d/14Q4K9hvmK9iOi2GWrh0tNsFW91R-ShwU/view?usp=sharing",
       para:
        "UG Regulation 2016 (Effective for the Academic session 2016-17 to 2019-20)",
      },
      {
       link: "https://drive.google.com/file/d/1fP3jFeeWI1E3hSSOhL6vj37TIZYzk8U2/view?usp=sharing",
       para: "UG Regulation 2013 (Effective from the Academic session 2013-14 to 2015-16)",
      },
     ]
   
    const dataPG=[
      {
       link:
        "https://drive.google.com/file/d/1MkSM_cgd1ZIF-zqUAE1TFJIf42idIpyp/view?usp=sharing",
       para: "Postgraduate Program Regulation",
      },
      
     ]

     
     const dataPhD=[
      {
       link:
        "https://drive.google.com/file/d/17IzwBvYtiyR8iEV27fXr6rBMQGHOHCeb/view?usp=sharing",
       para: "Regulation for PhD Programme",
      },
        {
       link:
        "https:https://drive.google.com/file/d/1d1qCh0Br7pHcz7nT60VTXrYN6ny0heH7/view?usp=sharing",
       para: "PhD updated D-1 to D-10 forms",
      },
     ]
   
     const datatrans= [
      {
       link:
        "https://drive.google.com/file/d/1iytqtAcQRWSVdg_s3bbfa01dITJB5vUr/view?usp=sharing",
       para:
        "Notice: regarding Declaration and Copyright transfer certificate (UG,PG & Ph.D) required to be included in the dissertation/thesis",
      },
     
   ]

   

  const TableComponent = ({ data, title }) => (
    <>
      {title && (
        <h2 className="text-xl font-bold mb-6 text-red-950 text-center">{title}</h2>
      )}
      <div className="overflow-hidden rounded-lg shadow-md border border-gray-100 mb-8">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-[#421010] text-white">
              <th className="text-left px-6 py-4 font-semibold">Document</th>
              <th className="text-center px-6 py-4 font-semibold w-48">Download Now</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="text-left px-6 py-4 text-gray-800">{item.para}</td>
                <td className="text-center px-6 py-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Regulation & Curriculum
        </h1>
        
        <TableComponent data={dataUG} title="UG" />
        <TableComponent data={dataPG} title="PG" />
        <TableComponent data={dataPhD} title="PhD" />
        <TableComponent 
          data={datatrans} 
          title="Notice related to Copyright transfer certificate (UG,PG & Ph.D)" 
        />
      </div>
    </div>
  );
};

export default DocumentsTable;
