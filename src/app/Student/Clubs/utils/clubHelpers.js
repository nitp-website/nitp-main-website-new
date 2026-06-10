// --- Helpers ---
function compact(values) {
  return values.filter(Boolean);
}

function mapPerson(person) {
  if (!person || typeof person !== "object") {
    person = {};
  }

  return {
    name: person.name || "",
    email: person.email || "",
    phone: person.phone || "",
    department: person.department || "",
  };
}

function mapImages(images) {
  if (!Array.isArray(images)) return [];

  return compact(
    images.map((image) => {
      // Handle string URLs directly
      if (typeof image === "string") return image;
      // Handle object formats { url: "...", src: "...", etc }
      if (image && typeof image === "object") {
        return image.url || image.src || image.logo || image.logo_url || "";
      }
      return "";
    })
  );
}

// --- Main Mapper ---

export function mapClubData(club = {}) {

  if (!club || typeof club !== "object" || Object.keys(club).length === 0){
    return null;
  }


  const name = club.name || club.club_name || "Club";
  const slug = club.club_login_id || club.id;
  const id = club.id || slug;
  const logo = club.logo || club.logo_url || "";

  const gallery = mapImages(club.pictures);
  const patnaPi = mapPerson(club.patna_campus_pi);
  const bihtaPi = mapPerson(club.bihta_campus_pi);

  return {
    ...club,
    id,
    slug,
    clubId: id,
    clubName: name,
    name,
    email: club.email || club.club_email || "",
    category: club.category || "",
    status: club.status || "",
    logo,
    logoUrl: logo,
    description: club.description || club.about || "",
    about: club.about || club.description || "",
    president: club.club_president || club.president || "",
    secretary: club.club_secretary || club.secretary || "",
    facultyCoordinator: club.facultyCoordinator || club.faculty_coordinator || "",
    patnaPi,
    bihtaPi,
    patnaPiName: patnaPi.name,
    patnaPiEmail: patnaPi.email,
    patnaPiPhone: patnaPi.phone,
    patnaPiDepartment: patnaPi.department,
    bihtaPiName: bihtaPi.name,
    bihtaPiEmail: bihtaPi.email,
    bihtaPiPhone: bihtaPi.phone,
    bihtaPiDepartment: bihtaPi.department,
    gallery,
    pictures: gallery,
  };
}

export function mapClubsData(clubs) {
  if (!Array.isArray(clubs)) return [];
  return clubs.map(mapClubData);
}