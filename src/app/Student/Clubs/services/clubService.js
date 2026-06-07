import { cache } from "react";
import { mapClubData, mapClubsData } from "../utils/clubHelpers";

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const REQUEST_TIMEOUT = 10000; // 10s

function getClubApiUrl(type) {
  const baseUrl = BACKEND_API_URL.replace(/\/$/, "");
  return `${baseUrl}/api/club?type=${encodeURIComponent(type)}`;
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout after ${REQUEST_TIMEOUT}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const getClubs = cache(async () => {
  try {
    const response = await fetchWithTimeout(
      getClubApiUrl("all"),
      {
        next: { revalidate: 1800 },
      }
    );
    const data = await response.json();
    return mapClubsData(data);

  } catch (error) {
    console.error("Get Clubs error:", {
      message: error.message,
      api: getClubApiUrl("all"),
    });

    return [];
  }
});

export const getClubBySlug = cache(async(slug) => {
  if (!slug) return null;

  try {
    const response = await fetchWithTimeout(
      getClubApiUrl(slug),
      {
        next: { revalidate: 300 }, // 5 min cache
      }
    );
    const data = await response.json();
    return mapClubData(data);

  } catch (error) {
    console.error("Get Club by Id error:", {
      slug,
      message: error.message,
      api: getClubApiUrl(slug),
    });

    return null;
  }
});