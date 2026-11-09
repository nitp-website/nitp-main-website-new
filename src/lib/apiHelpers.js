export const BACKEND_API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://admin.nitp.ac.in";

export function getBackendApiUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BACKEND_API_BASE_URL}${normalizedPath}`;
}

export function extractApiArray(response) {
  if (!response) return [];
  const payload = response.data ?? response;

  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload?.data && Array.isArray(payload.data)) {
    return payload.data;
  }

  if (payload?.conference_data && Array.isArray(payload.conference_data)) {
    return payload.conference_data;
  }

  return [];
}

export function extractApiPagination(response, currentPage, limit, itemCount) {
  const candidates = [
    response?.pagination,
    response?.meta,
    response?.data?.pagination,
    response?.data?.meta,
    response,
  ].filter(Boolean);

  const findNumber = (keys) => {
    for (const source of candidates) {
      for (const key of keys) {
        const value = Number(source?.[key]);
        if (Number.isFinite(value) && value > 0) return value;
      }
    }
    return null;
  };

  const totalPages =
    findNumber(["totalPages", "total_pages", "lastPage", "last_page", "pages"]) ||
    (() => {
      const totalItems = findNumber([
        "total",
        "totalItems",
        "total_items",
        "totalCount",
        "total_count",
        "recordsTotal",
        "count",
      ]);
      return totalItems ? Math.max(1, Math.ceil(totalItems / limit)) : null;
    })();

  return {
    totalPages: totalPages || currentPage + (itemCount >= limit ? 1 : 0),
    hasNext: totalPages ? currentPage < totalPages : itemCount >= limit,
  };
}

let memoryActiveDepts = null;
let activeDeptsPromise = null;

export async function getActiveDeptSet() {
  if (memoryActiveDepts) return memoryActiveDepts;

  if (typeof window !== "undefined") {
    try {
      const stored = sessionStorage.getItem("nitp_active_depts");
      if (stored) {
        memoryActiveDepts = new Set(JSON.parse(stored));
        return memoryActiveDepts;
      }
    } catch {}
  }

  if (!activeDeptsPromise) {
    activeDeptsPromise = (async () => {
      try {
        let allStaff = [];
        let page = 1;
        let totalPages = 1;
        do {
          const res = await fetch(
            `${BACKEND_API_BASE_URL}/api/staff2?type=all&page=${page}&limit=100`
          );
          if (!res.ok) break;
          const data = await res.json();
          if (data && Array.isArray(data.data)) {
            allStaff.push(...data.data);
            totalPages = data.totalPages || 1;
          } else if (Array.isArray(data)) {
            allStaff.push(...data);
            totalPages = 1;
          } else {
            totalPages = 1;
          }
          page++;
        } while (page <= totalPages);

        const set = new Set(
          allStaff.map((s) => s.department?.toLowerCase().trim()).filter(Boolean)
        );
        memoryActiveDepts = set;
        if (typeof window !== "undefined") {
          try {
            sessionStorage.setItem("nitp_active_depts", JSON.stringify(Array.from(set)));
          } catch {}
        }
        return set;
      } catch (err) {
        console.error("Failed to fetch staff department codes:", err);
        return new Set();
      } finally {
        activeDeptsPromise = null;
      }
    })();
  }
  return activeDeptsPromise;
}
