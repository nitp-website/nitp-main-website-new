import Head from "next/head";
import UnnatBharat from "../../components/StudentComponents/UnnatBharat"
export default function Home() {
  return (
    <div className=" mx-auto p-3 pt-6 bg-white bg-opacity-50 text-black">
      <Head>
        <title>Unnat Bharat Abhiyaan</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-2 text-red-800">
        Unnat Bharat Abhiyaan
      </h1>
      <h2 className="text-lg font-semibold text-center py-2 text-red-800">(A flagship program of Ministry of Education, GoI)</h2>
      <h2 className="text-lg font-semibold text-center mb-16 text-red-800">Regional Coordinating Institute-NIT Patna</h2>
      <UnnatBharat/>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: ' Student | NIT Patna',
  };
}
