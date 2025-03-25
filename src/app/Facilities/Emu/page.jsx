import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDUiIGhlaWdodD0iMzQwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMzQ1IDM0MCI+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTI0OC40NTggNDMuNDgzM0MyNjguNjA4IDYyLjA1OSAyODEuNzk2IDg3Ljk3NjggMzAyLjk2NyAxMjUuMjI5QzMyNC4yMzYgMTYyLjQ4MiAzNTMuNTY2IDIxMS4wNjQgMzQyLjQ0MyAyNDAuMDI4QzMzMS4zMiAyNjguOTkyIDI3OS41NDggMjc4LjMyOSAyMzAuNjY0IDI5Ny4zMjJDMTgxLjc4IDMxNi4zMTYgMTM1Ljc1NyAzNDQuODU3IDkzLjQxOTQgMzM5LjI5M0M1MS4wODE5IDMzMy43MjkgMTIuNDI5NiAyOTQuMDY5IDIuNzA4MzYgMjUwLjIwNUMtNy4xMTE0NCAyMDYuMjM2IDExLjkxMDIgMTU4LjA3MSAyNS42MTIzIDExNC4yMDdDMzkuMjE1OCA3MC4zNDc2IDQ3LjQ5OTcgMzAuNzcwMiA3MS4zMjYgMTIuODUxNUM5NS4xNTIzIC01LjA2NzE3IDEzNC41MyAtMS4yMTY5NSAxNjcuODcyIDYuMjMwOEMyMDEuMjA5IDEzLjc3MDQgMjI4LjMwOCAyNC45MTIyIDI0OC40NTggNDMuNDgzM1oiLz48cGF0aCBzdHJva2U9IiNGRjk4MTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNMTc5LjIzMSA5MS45Mzg0QzIwMS4xMDIgOTguNDQ3MiAyMTkuNzY5IDExMi44NjMgMjMxLjU5NyAxMzIuMzc4QzI0My40MjQgMTUxLjg5MyAyNDcuNTY2IDE3NS4xMTIgMjQzLjIxNSAxOTcuNTEzQzIzOC44NjUgMjE5LjkxNCAyMjYuMzMzIDIzOS44OTQgMjA4LjA2MSAyNTMuNTY0QzE4OS43ODkgMjY3LjIzMyAxNjcuMDgzIDI3My42MTQgMTQ0LjM2NSAyNzEuNDYzQzEyMS42NDcgMjY5LjMxMiAxMDAuNTQzIDI1OC43ODMgODUuMTYwNSAyNDEuOTI3QzY5Ljc3ODQgMjI1LjA3MSA2MS4yMTk3IDIwMy4wOTQgNjEuMTUwOCAxODAuMjc0QzYxLjA4MTkgMTU3LjQ1NSA2OS41MDc2IDEzNS40MjYgODQuNzg3NiAxMTguNDc4QzEwMC4wNjggMTAxLjUyOSAxMjEuMTA4IDkwLjg3MzIgMTQzLjgxMyA4OC41ODUiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjEwLjE0NiAxNDcuODQ0TDk1Ljg1MzUgMzA0LjAzMUwxNjYuNjg5IDE3NS40MDZIMTAyLjM3N0wxNTkuMzg1IDU1Ljk2ODhIMjAwLjcyOUwxNDUuODM0IDE0Ny44NDRIMjEwLjE0NloiLz48L3N2Zz4=",
      subheading: "Electrical Maintenance Unit (EMU)",
      text: [
        `EMU stands for “Electrical Maintenance Unit”. Our objective is to maintain the smooth electric power supply to the Institute Campus, Hostels, Library, Sports grounds, Health centre & Staff Quarters common areas, etc., and maintain all related facilities at these different premises. EMU maintains all electrical equipment such as Transformers, DG, Lights, Fans, Submersible Pumps, STP, AC, VRV, Online UPS, Water Purifiers & Coolers etc., which are installed in NIT Patna campus.`,
        `In the past, EMU has organised training programs for safety & awareness about electrical equipment such as lifts and fire fighting systems. The dedicated staff of EMU ensures 24x7 electrical power availability in odd situations like the Covid-19 pandemic and takes prompt action to restore power during breakdowns. EMU operates an 11KV/415V Electrical Substation (commonly Known as Powerhouse) containing 02 Nos. 1250KVA Transformer, 02 Nos. of 750 KVA Diesel Generator, 01 No. of 365 KVA Diesel Generator, and separate electrical panels for each feeder pillar/building.`,
      ],
      ComplaintForm: (
        <a
          href="https://drive.google.com/drive/folders/1DJjrqjQVvjGdRnU1Hd1sJpqmJM7WGAZe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black  hover:text-red-800"
        >
          Click here
        </a>
      ),
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-8 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Emu</title>
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
                  {place.text.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                  <a
                    href={place.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-800"
                  >
                    {place.linkText}
                  </a>
                  <p className="mt-4 text-gray-600">
                    <strong>{place.extension}</strong>
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
                  <p className="text-gray-600">{place.text}</p>
                  <a
                    href={place.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-800"
                  >
                    {place.linkText}
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
