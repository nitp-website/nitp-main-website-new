

export default function Home() {
  const places = [
    {
    
      subheading: "SC/ST Cell",
      text: `The Institute is committed to maintain a work environment wherein faculty members, staff and students from different communities can work in a coherent environment. It is the Institute's endeavor to ensure that no discrimination takes place at the workplace or inside the Institute campus.

The Institute has appointed a Liaison Officer who can be contacted in the event of any incident of discrimination. Particulars of Liaison Officer are as under:

Liaison Officer

Prof. Fulena Rajak
Professor, Department of Architecture & Planning
Email: sc.st.cell@nitp.ac.in

For reporting any grievance related to SC / ST community of NIT Patna, kindly use this email ID:
sc.st.cell@nitp.ac.in`,
    },
    
    
    
  ];

  return (
    <div className="mx-auto pl-5 pr-5 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className="flex flex-col md:flex-row  gap-10 items-center">
            {index % 2 === 0 ? (
              <>
              <div className="md:pl-4 ">
                  <h2 className="text-3xl font-bold mb-2 text-red-800 items-start" >{place.subheading}</h2>
                  <p className="text-gray-600 "> {place.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}</p>
                </div>
               
                
              </>
            ) : (
              <>
                
               
                <div className="md:pr-4">
                  <h2 className="text-xl font-bold mb-2 text-neutral-800">{place.subheading}</h2>
                  <p className="text-gray-600"> {place.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
    return {
      title: 'Computer Centre | NIT Patna',
    }
  }