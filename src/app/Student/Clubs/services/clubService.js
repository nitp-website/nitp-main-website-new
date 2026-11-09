import axios from "axios";

const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
const BASE_URL = BACKEND_API_URL.replace(/\/$/, "");
const REQUEST_TIMEOUT = 10_000; // 10 seconds

// Create a pre-configured Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

/**
 * Safely handles the axios request, uniformly logs errors, and returns data.
 */
async function handleFetch(config, fallbackValue, errorContext = {}) {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    let errorMessage = error.message;

    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      errorMessage = `Request timed out after ${REQUEST_TIMEOUT}ms`;
    } else if (error.response) {
      errorMessage = `API request failed (${error.response.status} ${error.response.statusText})`;
    }

    console.error("API Error:", {
      url: config.url,
      message: errorMessage,
      ...errorContext,
    });

    return fallbackValue;
  }
}

// --- Public API Functions ---
// Fetches all clubs (cached in-memory to prevent repeated fetches across page loads).
let clubsCache = null;
let clubsPromise = null;

export async function getClubs() {
  if (clubsCache) return clubsCache;
  if (!clubsPromise) {
    clubsPromise = handleFetch({ url: "/api/club", params: { type: "all" } }, []).then((data) => {
      clubsCache = data;
      return data;
    }).finally(() => {
      clubsPromise = null;
    });
  }
  return clubsPromise;
}

// Fetches a specific club by its ID and explicitly arranges its member data by most recent session.
function cleanUrl(url) {
  if (typeof url !== "string") return url;
  // Remove leading/trailing quotes and backslashes
  let cleaned = url.replace(/^["'\s\\/]+|["'\s\\/]+$/g, "").trim();
  // If it's a URL starting with http, ensure it starts with http:// or https:// (restoring protocol slash structure if stripped)
  if (cleaned.startsWith("http:") && !cleaned.startsWith("http://")) {
    cleaned = cleaned.replace("http:", "http://");
  } else if (cleaned.startsWith("https:") && !cleaned.startsWith("https://")) {
    cleaned = cleaned.replace("https:", "https://");
  }
  // Replace remaining backslashes
  return cleaned.replace(/\\/g, "");
}

function sanitizeEvent(event) {
  if (!event) return null;
  if (event.poster) event.poster = cleanUrl(event.poster);
  if (Array.isArray(event.gallery)) {
    event.gallery = event.gallery.map(cleanUrl).filter(Boolean);
  }
  if (Array.isArray(event.attachments)) {
    event.attachments = event.attachments.map(att => ({
      ...att,
      url: att.url ? cleanUrl(att.url) : ""
    }));
  }
  return event;
}

export async function getClub(id) {
  if (!id) return null;
  const clubData = await handleFetch({ url: "/api/club", params: { type: id } }, null, { id });

  // Arrange member session data if present
  if (clubData && clubData.members && typeof clubData.members === "object") {
    const sortedMembers = {};

    Object.keys(clubData.members)
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' }))
      .forEach((key) => {
        sortedMembers[key] = clubData.members[key];
      });

    clubData.members = sortedMembers;
  }

  return clubData;
}

// Fetches all Events of a specific club by its ID.
export async function getEvents(clubId) {
  if (!clubId) return [];

  const data = await handleFetch({ url: "/api/events", params: { clubId: clubId } }, { data: [] }, { clubId });
  const events = data?.data || [];
  return events.map(sanitizeEvent).filter(Boolean);
}

// Fetches a specific Event by its ID.
export async function getEvent(id) {
  if (!id) return null;

  const data = await handleFetch({ url: "/api/events", params: { id } }, null, { id });
  return sanitizeEvent(data);
}