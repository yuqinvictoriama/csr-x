import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";

const title = "Apply | CSR-x";
const description = "Apply to join the Collaborative Summer Research Experience.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function ApplyPage() {
  return (
    <InteriorPage title="Apply to CSR-x" description="The CSR-x Program usually runs for 6-10 weeks. Many research areas are offered, but exact details can change from year to year based on availability. In previous years, the program has been split into multiple phases and milestones, with a finale Symposium at the end. Stay tuned and follow our socials for latest updates about future cycles.">
      {null}
    </InteriorPage>
  );
}
