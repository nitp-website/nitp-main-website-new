export const DESIGNATION_ORDER = [
  "Assistant Engineer (SG-II)",
  "Technical Assistant (SG-II)",
  "Sr Technical Assistant",
  "Technical Assistant",
  "Jr. Engineer",
  "Technician (SG-II)",
  "Technician",
];

const normalize = (str) =>
  (str || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

const NORMALIZED_ORDER = DESIGNATION_ORDER.map(normalize);

export const sortByDesignation = (staff) => {
  const orderIndex = (designation) => {
    const index = NORMALIZED_ORDER.indexOf(normalize(designation));
    return index === -1 ? DESIGNATION_ORDER.length : index;
  };

  return [...staff].sort(
    (a, b) => orderIndex(a.designation) - orderIndex(b.designation)
  );
};