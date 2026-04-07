/**
 * Event API - Get single event by ID
 */
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const events = [
      {
        id: "1",
        title: "Tech Fest 2026",
        desc: "Detailed info about tech fest",
        img: "https://source.unsplash.com/800x400/?technology",
      },
      {
        id: "2",
        title: "Cultural Night",
        desc: "Detailed info about cultural night",
        img: "https://source.unsplash.com/800x400/?concert",
      },
      {
        id: "3",
        title: "Sports Meet",
        desc: "Detailed info about sports meet",
        img: "https://source.unsplash.com/800x400/?sports",
      },
    ];

    const event = events.find((e) => e.id === id);

    if (!event) {
      return Response.json(
        {
          status: "error",
          message: "Event not found",
        },
        { status: 404 }
      );
    }

    return Response.json({
      status: "ok",
      data: event,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    return Response.json(
      {
        status: "error",
        message: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}