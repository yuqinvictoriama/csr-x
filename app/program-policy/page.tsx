import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";

export const metadata: Metadata = { title: "Program Policy | CSR-x", description: "Program policy for the CSR-x community." };

export default function ProgramPolicyPage() {
  return <InteriorPage eyebrow="Program reference" title="Program Policy" description="A place to outline the policies that guide the CSR-x community."><div className="draft-page"><p className="eyebrow"><span /> Your notes</p><h2>Program policy content will be added here.</h2><p>Use this page to add expectations, participation guidelines, safety information, and other policies.</p></div></InteriorPage>;
}
