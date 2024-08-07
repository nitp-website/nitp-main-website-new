import Head from "next/head";

export default function Home() {
  const places = [
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNDA0IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDEwIDQwNCI+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTI5NS4yMjYgNTEuNjY4NEMzMTkuMTY5IDczLjc0MDcgMzM0LjgzOSAxMDQuNTM3IDM1OS45OTUgMTQ4LjgwMkMzODUuMjY4IDE5My4wNjcgNDIwLjExOCAyNTAuNzk0IDQwNi45MDIgMjg1LjIxQzM5My42ODUgMzE5LjYyNiAzMzIuMTY4IDMzMC43MiAyNzQuMDgyIDM1My4yODlDMjE1Ljk5NyAzNzUuODU4IDE2MS4zMTEgNDA5Ljc3MiAxMTEuMDA0IDQwMy4xNkM2MC42OTcyIDM5Ni41NDkgMTQuNzY5MyAzNDkuNDI0IDMuMjE4MTYgMjk3LjMwM0MtOC40NTAwNCAyNDUuMDU2IDE0LjE1MjEgMTg3LjgyNiAzMC40MzMzIDEzNS43MDVDNDYuNTk3NSA4My41ODk1IDU2LjQ0MDcgMzYuNTYyMyA4NC43NTE5IDE1LjI3MDZDMTEzLjA2MyAtNi4wMjA5OSAxNTkuODUzIC0xLjQ0NjAyIDE5OS40NzEgNy40MDM2NkMyMzkuMDgzIDE2LjM2MjUgMjcxLjI4MyAyOS42MDE1IDI5NS4yMjYgNTEuNjY4NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMTQxLjExIDEzNC40OTlMMTIyLjU5NSAyMDAuMThDMTE4LjYyOCAyMTQuNTM4IDEzNS42MzEgMjIwLjE0MyAxMzkuNzg3IDIwNi42NjZMMTU2LjM0OSAxNDYuMDg2SDE2MS4wMDlMMTMyLjU0NSAyNTIuNTExSDE1OS4xMlYzMzIuNDg3QzE1OS4xMiAzNDYuOTcxIDE3OS4yNzIgMzQ2Ljk3MSAxNzkuMjcyIDMzMi40ODdWMjUyLjUxMUgxODUuNTY5VjMzMi40ODdDMTg1LjU2OSAzNDYuOTcxIDIwNS4wOTEgMzQ2Ljk3MSAyMDUuMDkxIDMzMi40ODdWMjUyLjUxMUgyMzIuNDIxTDIwMy4zMjggMTQ2LjA4NkgyMDguNjE3TDIyNS4xNzkgMjA2LjY2NkMyMjkuMjczIDIyMC40NTggMjQ2LjE1IDIxNC41MzggMjQyLjM3MSAyMDAuMjQzTDIyMy44NTcgMTM0LjQ5OUMyMjEuMzM4IDEyNy4wNjggMjEyLjM5NiAxMTMuOTcgMTk3LjQwOCAxMTMuMzRIMTY3LjYyMkMxNTIuMTMgMTEzLjk3IDE0My4yNTEgMTI2Ljk0MiAxNDEuMTEgMTM0LjQ5OVoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjA1LjQ3NiA4NC40ODkxQzIwNS40NzYgNzEuNTE2NiAxOTUuMTQ5IDYxIDE4Mi40MjggNjFDMTY5LjcwOCA2MSAxNTkuMzggNzEuNTE2NiAxNTkuMzggODQuNDg5MUMxNTkuMzggOTcuNDYxNiAxNjkuNzA4IDEwNy45NzggMTgyLjQyOCAxMDcuOTc4QzE5NS4xNDkgMTA3Ljk3OCAyMDUuNDc2IDk3LjQ2MTYgMjA1LjQ3NiA4NC40ODkxWiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0yNDYuMDQ4IDE2NS44ODRMMjMxLjQ2OSAyMTcuNjA2QzIyOC4zNDUgMjI4LjkxMyAyNDEuNzM0IDIzMy4zMjYgMjQ1LjAwNyAyMjIuNzE0TDI1OC4wNDkgMTc1LjAwOEgyNjEuNzE5TDIzOS4zMDQgMjU4LjgxNkgyNjAuMjMxVjMyMS43OTZDMjYwLjIzMSAzMzMuMjAxIDI3Ni4xIDMzMy4yMDEgMjc2LjEgMzIxLjc5NlYyNTguODE2SDI4MS4wNTlWMzIxLjc5NkMyODEuMDU5IDMzMy4yMDEgMjk2LjQzMiAzMzMuMjAxIDI5Ni40MzIgMzIxLjc5NlYyNTguODE2SDMxNy45NTVMMjk1LjA0NCAxNzUuMDA4SDI5OS4yMDlMMzEyLjI1MiAyMjIuNzE0QzMxNS40NzUgMjMzLjU3NCAzMjguNzY1IDIyOC45MTMgMzI1Ljc5IDIxNy42NTZMMzExLjIxIDE2NS44ODRDMzA5LjIyNyAxNjAuMDMyIDMwMi4xODUgMTQ5LjcxNyAyOTAuMzgyIDE0OS4yMjFIMjY2LjkyNkMyNTQuNzI3IDE0OS43MTcgMjQ3LjczNSAxNTkuOTMzIDI0Ni4wNDggMTY1Ljg4NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjk2Ljc0MSAxMjYuNDk3QzI5Ni43NDEgMTE2LjI4MiAyODguNjA4IDEwOCAyNzguNTkxIDEwOEMyNjguNTczIDEwOCAyNjAuNDQgMTE2LjI4MiAyNjAuNDQgMTI2LjQ5N0MyNjAuNDQgMTM2LjcxMyAyNjguNTczIDE0NC45OTQgMjc4LjU5MSAxNDQuOTk0QzI4OC42MDggMTQ0Ljk5NCAyOTYuNzQxIDEzNi43MTMgMjk2Ljc0MSAxMjYuNDk3WiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik01NC4wNDg1IDE2NS44ODRMMzkuNDY4OSAyMTcuNjA2QzM2LjM0NDcgMjI4LjkxMyA0OS43MzQxIDIzMy4zMjYgNTMuMDA3MSAyMjIuNzE0TDY2LjA0OTQgMTc1LjAwOEg2OS43MTkxTDQ3LjMwNDIgMjU4LjgxNkg2OC4yMzE0VjMyMS43OTZDNjguMjMxNCAzMzMuMjAxIDg0LjEwMDMgMzMzLjIwMSA4NC4xMDAzIDMyMS43OTZWMjU4LjgxNkg4OS4wNTk0VjMyMS43OTZDODkuMDU5NCAzMzMuMjAxIDEwNC40MzIgMzMzLjIwMSAxMDQuNDMyIDMyMS43OTZWMjU4LjgxNkgxMjUuOTU1TDEwMy4wNDQgMTc1LjAwOEgxMDcuMjA5TDEyMC4yNTIgMjIyLjcxNEMxMjMuNDc1IDIzMy41NzQgMTM2Ljc2NSAyMjguOTEzIDEzMy43OSAyMTcuNjU2TDExOS4yMSAxNjUuODg0QzExNy4yMjcgMTYwLjAzMiAxMTAuMTg1IDE0OS43MTcgOTguMzgyNCAxNDkuMjIxSDc0LjkyNjFDNjIuNzI2OCAxNDkuNzE3IDU1LjczNDYgMTU5LjkzMyA1NC4wNDg1IDE2NS44ODRaIi8+PHBhdGggZmlsbD0iI0ZGOTgxMSIgZD0iTTEwNC43NDEgMTI2LjQ5N0MxMDQuNzQxIDExNi4yODIgOTYuNjA3OCAxMDggODYuNTkwNSAxMDhDNzYuNTczMyAxMDggNjguNDQwNCAxMTYuMjgyIDY4LjQ0MDQgMTI2LjQ5N0M2OC40NDA0IDEzNi43MTMgNzYuNTczMyAxNDQuOTk0IDg2LjU5MDUgMTQ0Ljk5NEM5Ni42MDc4IDE0NC45OTQgMTA0Ljc0MSAxMzYuNzEzIDEwNC43NDEgMTI2LjQ5N1oiLz48L3N2Zz4=",
      subheading: "Woman Cell",
      text: `As per the directives of the Chairman UGC a Women’s cell has been set up under a committee to ensure safe working environment and inspiring learning environment for the women employees and girl students of the Institute in order to enable them to discharge their academic and professional responsibilities efficiently. The committee constantly monitors the existing arrangements and suggests additional measures to be put into operation to ensure that the Institute is free of any kind of harassment.

`,
    },
  ];

  return (
    <div className=" mx-auto pl-4 pr-4 md:pl-32 md:pr-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Woman Cell</title>
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
    title: "Woman Cell | NIT Patna",
  };
}
