import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNDA0IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDEwIDQwNCI+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTI5NS4yMjYgNTEuNjY4NEMzMTkuMTY5IDczLjc0MDcgMzM0LjgzOSAxMDQuNTM3IDM1OS45OTUgMTQ4LjgwMkMzODUuMjY4IDE5My4wNjcgNDIwLjExOCAyNTAuNzk0IDQwNi45MDIgMjg1LjIxQzM5My42ODUgMzE5LjYyNiAzMzIuMTY4IDMzMC43MiAyNzQuMDgyIDM1My4yODlDMjE1Ljk5NyAzNzUuODU4IDE2MS4zMTEgNDA5Ljc3MiAxMTEuMDA0IDQwMy4xNkM2MC42OTcyIDM5Ni41NDkgMTQuNzY5MyAzNDkuNDI0IDMuMjE4MTYgMjk3LjMwM0MtOC40NTAwNCAyNDUuMDU2IDE0LjE1MjEgMTg3LjgyNiAzMC40MzMzIDEzNS43MDVDNDYuNTk3NSA4My41ODk1IDU2LjQ0MDcgMzYuNTYyMyA4NC43NTE5IDE1LjI3MDZDMTEzLjA2MyAtNi4wMjA5OSAxNTkuODUzIC0xLjQ0NjAyIDE5OS40NzEgNy40MDM2NkMyMzkuMDgzIDE2LjM2MjUgMjcxLjI4MyAyOS42MDE1IDI5NS4yMjYgNTEuNjY4NFoiLz48cGF0aCBmaWxsPSIjRkVBNDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODUgMzQ5QzE4NSAzNDkgNTkgMzAxLjMyMyA1OSAxOTguNTM1VjEwMy4xODFDNTkgMTAzLjE4MSAxNDEuNSAxMDMuMTgxIDE4NSA1NVYzNDlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODUgMzQ5QzE4NSAzNDkgMzExIDMwMS4zMjMgMzExIDE5OC41MzVWMTAzLjE4MUMzMTEgMTAzLjE4MSAyNjIgMTEwIDE4NSA1NVYzNDlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",
      subheading: "Security",
      text: `Prof. Vivekanand Singh : Chief Proctor
Prof. Prabhat Kumar  : Dy. Chief Proctor
Dr. A. K. Das      : Dy. Proctor
Sri J. P.  Sharma     : Assistant Registrar

The institute administration gives utmost attention to the security of the lives of the students and employees. Ex-servicemen security personnel provides 24x7 security cover all over the campus which includes the hostels and the staff quarters. State security personals carry out regular patrolling outside the campus during night time. The girls’ hostels are specially taken care of and are carefully guarded. Entry inside the campus is restricted for outsiders to prevent security breaches.The security of the institute, hostels and its inmates is headed by the Asst.Registrar, Mr.J P Sharma who was a defence officer.He served the Indian Air Force for more than 18 years.At present, 72 ex - serviceman were recruited by the institute on contract basis for additional security.`,
    },
  ];

  return (
    <div className="mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Security</title>
      </Head>

      <div className="grid grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:pl-4">
                  <h2 className="text-3xl font-bold mb-2 text-red-800">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {place.text}
                  </p>
                </div>
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-3/4 md:w-2/5 rounded-md"
                />
              </>
            ) : (
              <>
                <img
                  src={place.image}
                  alt={place.subheading}
                  className="w-full md:w-1/2 rounded-md"
                />
                <div className="md:pr-4">
                  <h2 className="text-3xl font-bold mb-2 text-red-800">
                    {place.subheading}
                  </h2>
                  <p className="text-gray-600 whitespace-pre-line">
                    {place.text}
                  </p>
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
    title: "Security | NIT Patna",
  };
}
