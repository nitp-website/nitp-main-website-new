import { NextResponse } from 'next/server';

export async function GET() {
  const lat = "25.5941";
  const lon = "85.1376";
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;

  if (!API_KEY) {
    return NextResponse.json({ error: "API key is missing." }, { status: 500 });
  }

  const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const pollutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  try {
    const [weatherRes, pollutionRes] = await Promise.all([
      fetch(weatherURL),
      fetch(pollutionURL),
    ]);

    if (!weatherRes.ok || !pollutionRes.ok) {
      const weatherError = await weatherRes.json();
      const pollutionError = await pollutionRes.json();
      return NextResponse.json(
        {
          error: "Failed to fetch data",
          weatherError: weatherError?.message,
          pollutionError: pollutionError?.message,
        },
        { status: 500 }
      );
    }

    const weatherData = await weatherRes.json();
    const pollutionData = await pollutionRes.json();

    return NextResponse.json({
      weather: weatherData,
      pollution: pollutionData,
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
