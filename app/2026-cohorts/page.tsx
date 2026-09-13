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
      <aside className="cohort-display-notice" aria-label="Important note about displayed projects">
        <p><strong>Important note:</strong> CSR-x displays projects to recognize participants’ efforts and encourage program completion. These works are <strong className="policy-emphasis">not</strong> peer-reviewed. Display does <strong className="policy-emphasis">not</strong> constitute peer-reviewed publication, scientific certification, or assurance by CSR-x of the work’s accuracy or validity. Projects reflect only their listed authors’ work and perspectives. <strong className="policy-emphasis">The listed authors alone are responsible for the content and conclusions.</strong> For more details, please refer to <a href="/program-policy">Program Policy</a>.</p>
      </aside>
    </InteriorPage>
  );
}
