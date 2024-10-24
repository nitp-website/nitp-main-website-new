import Head from "next/head";
import ECell from "../../components/StudentComponents/ECell"
export default function Home() {
  return (
    <div className="mx-auto p-4 pt-6 bg-opacity-50">
      <Head>
        <title>ECell</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-2 text-red-800">
      Entrepreneurship Cell, NIT Patna
      </h1>
      <h2 className="text-lg font-semibold text-center text-red-800 mb-12">(Making Dreamers into Entrepreneurs)</h2>
      <ECell/>
      
    </div>
  );
}
export async function generateMetadata({ params }) {
  return {
    title: "E-Cell | NIT Patna",
  };
}