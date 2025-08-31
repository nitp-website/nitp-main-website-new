export default function formatDate(startDate, endDate) {

  if (!startDate) return "";
  
  const start = new Date(startDate);
  const startFormatted = start.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let endFormatted;
  if (!endDate || endDate.toLowerCase() === "ongoing") {
    endFormatted = "Ongoing";
  } else {
    const end = new Date(endDate);
    endFormatted = end.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  return `${startFormatted} – ${endFormatted}`;
}