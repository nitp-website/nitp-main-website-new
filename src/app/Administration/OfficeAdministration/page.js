import React from "react";
import OfficeAdminLayout from "./components/OfficeAdminLayout";
import { OFFICE_SECTIONS } from "./officeSections";

export default function OfficeAdministrationMainPage() {
  return <OfficeAdminLayout currentSection={OFFICE_SECTIONS[0]} />;
}
