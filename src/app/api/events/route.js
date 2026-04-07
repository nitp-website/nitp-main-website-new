/**
 * Events API - Get all events
 */
export async function GET() {
  try {
    const events = [
      {
        id: "1",
        title: "Tech Fest 2026",
        desc: "Biggest tech fest of NIT Patna",
        img: "https://res.cloudinary.com/dxmyyw7cn/image/upload/v1774206645/download_2_vycwnx.jpg",
        date: "20 MAR 2026",
      },
      {
        id: "2",
        title: "Cultural Night",
        desc: "Dance, music and fun",
        img: "https://res.cloudinary.com/dxmyyw7cn/image/upload/v1774206644/Game_fest_flyer_Tech_flyer_n36wrt.jpg",
        date: "25 MAR 2026",
      },
      {
        id: "3",
        title: "Artificial Intelligence Concert Nitp",
        desc: "Inter college competition",
        img: "https://res.cloudinary.com/dxmyyw7cn/image/upload/v1774206644/National_Technology_day_ijtlvb.jpg",
        date: "28 MAR 2026",
      },
      {
        id : "4",
        title : "Annual Sports Fest",
        desc:"Inter College Participation",
        img:"https://res.cloudinary.com/dxmyyw7cn/image/upload/v1774207698/download_p0izrz.jpg",
        date:"29 MAR 2006"
      },
      {
        id : "5",
        title : "24-Hour Hackthon Nitp",
        desc:"INter Nit Hackathon",
        img:"https://res.cloudinary.com/dxmyyw7cn/image/upload/v1774207814/Hackathon_Round_Icon_Set_Royalty-Free_Vector___VectorStock_o4dx9l.jpg",
        date:"29 MAR 2006"
      },

    ];

    return Response.json({
      status: "ok",
      count: events.length,
      data: events,
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