import React from "react";
import OfficeAdminLayout from "../components/OfficeAdminLayout";
import { OFFICE_SECTIONS, getSectionBySlug } from "../officeSections";

export function generateStaticParams() {
  return OFFICE_SECTIONS.flatMap((sec) => [
    { section: sec.path },
    { section: sec.id },
    { section: sec.deptCode },
  ]);
}

export default async function OfficeSectionPage({ params }) {
  const resolvedParams = await params;
  const sectionSlug = resolvedParams?.section;
  const currentSection = getSectionBySlug(sectionSlug);

  return <OfficeAdminLayout currentSection={currentSection} />;
}
