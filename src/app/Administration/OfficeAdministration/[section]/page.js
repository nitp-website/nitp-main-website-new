import React from "react";
import OfficeAdminLayout from "../components/OfficeAdminLayout";
import { OFFICE_SECTIONS, getSectionBySlug } from "../officeSections";

export function generateStaticParams() {
  const seen = new Set();
  const params = [];
  for (const sec of OFFICE_SECTIONS) {
    for (const key of [sec.path, sec.deptCode]) {
      if (key && !seen.has(key)) {
        seen.add(key);
        params.push({ section: key });
      }
    }
  }
  return params;
}

export default async function OfficeSectionPage({ params }) {
  const resolvedParams = await params;
  const sectionSlug = resolvedParams?.section;
  const currentSection = getSectionBySlug(sectionSlug);

  return <OfficeAdminLayout currentSection={currentSection} />;
}
