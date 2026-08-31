export default function formatDate(startDate, endDate) {
  if (!startDate) return "";

  const startFormatted = startDate.toString().split("T")[0];

  let endFormatted = "";
  if (!endDate) {
    endFormatted = "";
  } else if (
    typeof endDate === "string" &&
    ["ongoing", "present", "continue"].includes(endDate.toLowerCase())
  ) {
    endFormatted = endDate.charAt(0).toUpperCase() + endDate.slice(1);
  } else {
    endFormatted = endDate.toString().split("T")[0];
  }

  return endFormatted ? `${startFormatted} – ${endFormatted}` : startFormatted;
}