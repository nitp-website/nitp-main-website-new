"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-red-600 mb-6">
        All Events
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {events.map((item) => (
          <Link key={item.id} href={`/latest-news/${item.id}`}>
            <div className="bg-white shadow rounded-lg hover:scale-105 transition cursor-pointer">

              <img src={item.img} className="h-[200px] w-full object-cover" />

              <div className="p-4">
                <h2>{item.title}</h2>
              </div>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}