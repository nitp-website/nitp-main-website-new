import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto px-4 md:px-8 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>NSS</title>
      </Head>

      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:pl-4">
            <h2 className="text-3xl font-bold mb-2 text-red-800 text-center">
              National Service Scheme (NSS)
            </h2>
            <div className="text-base">
              <p className="text-gray-600 mb-4">
                At <strong>NSS NIT Patna</strong>, we believe in transforming
                society through the power of youth! Established as part of the
                nationwide initiative launched in 1969 by the Government of
                India, NSS aims to nurture young minds by engaging them in
                meaningful community service. Our mission is to install values
                of social responsibility, compassion, and leadership in
                students, empowering them to be the changemakers of tomorrow.
              </p>
              <p className="text-gray-600 mb-4">
                NSS NIT Patna is dedicated to making a tangible impact. We work
                towards bridging the gap between the campus and the community,
                ensuring that our efforts touch lives and inspire a brighter,
                more inclusive future.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Sankalp</strong> is a non-profit organization operating
                under the National Service Scheme (NSS). Dedicated to uplifting
                underprivileged children, it offers free coaching to students
                from classes 1st to 10th, conducted by the passionate students
                of National Institute of Technology Patna, who volunteer their
                time and knowledge to ensure a brighter future for the children.
                Sankalp embodies the spirit of community service and educational
                empowerment, helping to bridge the gap for those in need.
              </p>
              <p className="text-gray-600 mb-4">
                Join us in this journey of selfless service, nation-building,
                and personal growth. Together, we can ensure that every
                individual in need is given the opportunity to live with dignity
                and hope. Be a part of NSS NIT Patna, where{" "}
                <strong>Service meets Learning and Youth meet Purpose!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
