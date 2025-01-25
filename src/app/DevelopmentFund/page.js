import React from "react";
import Link from "next/link";
import Image from "next/image";

const DevelopmentFundPage = () => {
  return (
    <div className="mx-auto px-5 md:px-20 py-5 md:py-8 bg-white bg-opacity-60">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-5 text-red-800">
        NIT Patna Development Fund
      </h1>
      <h2 className="text-md md:text-lg lg:text-2xl text-center mb-2 md:mb-5 text-red-800">
        (Centenary Year Celebration - 1924-2024 - BCE-NIT Patna’s glorious 100
        years)
      </h2>
      <img
        src="/home2.png"
        alt="Development Fund"
        className="mx-auto w-full md:w-[90%]"
      />

      <section>
        <p className="text-sm md:text-lg px-2 py-1 mt-5 text-black">
          NIT Patna marked its humble beginnings in 1886 with the establishment
          of pleader’s survey training school which was subsequently elevated to
          the Bihar College of Engineering Patna in 1924, & subsequently to NIT
          Patna in 2004. In the year 2024 it completed its 100 glorious years of
          imparting Engineering Education. Being a firm believer of continuous
          growth, we are in the process of upgrading our Institute’s
          infrastructure and other facilities for the students and presently the
          development work of our state-of-the-art additional campus at Bihta is
          underway, which is spread over 125 Acres. We are also constantly
          improvising the academics and research activities to match the
          evolving needs of the Industry & Society.
        </p>
        <p className="text-sm md:text-lg font-bold px-2 py-1 mt-5 text-black">
          NIT Patna is glad to announce that vide order dated 10.12.2024, Income
          Tax Department, Ministry of Finance, Govt. of India, has granted the
          approval under sub clause (iiif) of sub section 2(a) of section 80G to
          NIT Patna for receiving donations which shall be utilised for
          achievement of its objects for which it was established. Donations
          made to NIT Patna under this section shall have 100% exemption under
          Income Tax. Moreover, NIT Patna has got registration from the office
          of the Registrar of Companies, Ministry of Corporate Affairs, New
          Delhi, vide Registration Number CSR00060203 by which NIT Patna under
          CSR.
        </p>
        <p className="text-sm md:text-lg px-2 py-1 mt-5 text-black">
          Accordingly, NIT Patna has established “National Institute of
          Technology Development Fund” where we welcome our alumni, other
          interested parties to become the stakeholders in 360° progress of the
          institute. Bank and other details for this generous gesture are given
          below.
        </p>
        <div className="px-2 py-1 mt-5 text-black border-2 border-black">
          <h2 className="text-lg md:text-2xl font-bold mb-5">
            (A) <span className="underline">Bank Details</span>
          </h2>
          <h3 className="text-sm md:text-xl mb-2">
            Account Name:{" "}
            <span className="font-bold">
              National Institute of Technology Patna Development Fund Account
            </span>
          </h3>
          <div className="text-sm md:text-xl flex flex-col md:flex-row justify-between pr-5">
            <h3 className="text-sm md:text-xl mb-2">
              Account Number: <span className="font-bold">43633480545</span>
            </h3>
            <h3 className="mb-2">
              IFSC: <span className="font-bold">SBIN0003129</span>
            </h3>
            <h3 className="mb-2">
              SWIFT Code: <span className="font-bold">SBININBB156</span>
            </h3>
          </div>
          <div className="text-sm md:text-xl flex flex-col md:flex-row md:gap-20">
            <h3 className="mb-2">
              Account Type: <span className="font-bold">Saving Bank</span>
            </h3>
            <h3 className="mb-2">
              Bank Name & Branch:
              <span className="font-bold"> SBI Mahendru, Patna Branch</span>
            </h3>
          </div>
        </div>
        <div className="px-2 py-1 text-black border-2 border-t-0 border-black">
          <h2 className="text-lg md:text-2xl font-bold mb-5">
            (B){" "}
            <span className="underline">
              Information to be furnished by the donor for issue of 80G
              Certificate
            </span>
          </h2>
          <div className="text-sm md:text-xl flex flex-col md:flex-row md:gap-20">
            <h3 className="mb-2">
              Name:
              <span className="font-bold"> _____________</span>
            </h3>
            <h3 className="mb-2">
              Email: <span className="font-bold"> _____________</span>
            </h3>
          </div>
          <div className="text-sm md:text-xl flex flex-col md:flex-row md:gap-20">
            <h3 className="mb-2">
              PAN: <span className="font-bold"> ______________</span>
            </h3>
            <h3 className="mb-2">
              Address: <span className="font-bold"> _____________</span>
            </h3>
          </div>
          <div>
            <h3 className="text-sm md:text-xl mb-2">
              TAN (In case of Company):
              <span className="font-bold"> _____________</span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentFundPage;

export async function generateMetadata({ params }) {
  return {
    title: "Development Fund | NIT Patna",
  };
}
