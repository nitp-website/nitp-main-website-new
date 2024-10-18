
import Head from "next/head";
import SCSTCell from "../../components/StudentComponents/SCSTCell"
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
      <Head>
        <title>SC/ST Cell</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-2 text-red-800">
      SC/ST Cell , NIT Patna
      </h1>
      <SCSTCell/>
    </div>
  );
}

export async function generateMetadata({ params }) {
    return {
      title: 'SC/ST Cell | NIT Patna',
    }
  }