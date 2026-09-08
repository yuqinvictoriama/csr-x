import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";

export const metadata: Metadata = { title: "Program Format | CSR-x", description: "Program format for the CSR-x experience." };

export default function ProgramFormatPage() {
  return <InteriorPage eyebrow="Program reference" title="Program Format" description="A place to outline how the CSR-x program is structured."><div className="draft-page"><p className="eyebrow"><span /> Your notes</p><h2>Program format content will be added here.</h2><p>Use this page to describe the program’s phases, schedule, milestones, and symposium.</p></div></InteriorPage>;
}
