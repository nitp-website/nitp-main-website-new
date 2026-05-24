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
