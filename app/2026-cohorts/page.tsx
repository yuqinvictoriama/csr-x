import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";
import { researchCohorts } from "../cohortData";
import CohortMaterials from "./CohortMaterials";

const title = "2026 Cohorts | CSR-x";
const description = "Explore the CSR-x research cohorts for summer 2026.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function CohortsPage() {
  return (
    <InteriorPage title="2026 Cohorts" compact>
      <CohortMaterials cohorts={researchCohorts} />
    </InteriorPage>
  );
}
