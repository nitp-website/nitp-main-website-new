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
