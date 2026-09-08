import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";

export const metadata: Metadata = { title: "Statement on AI Usage | CSR-x", description: "CSR-x statement on AI usage." };

export default function AIUsagePage() {
  return <InteriorPage eyebrow="Program reference" title="Statement on AI Usage" description="A place to share CSR-x guidance on responsible AI use."><div className="draft-page"><p className="eyebrow"><span /> Your notes</p><h2>AI usage statement content will be added here.</h2><p>Use this page to explain how AI tools may or may not be used in research, writing, and collaboration.</p></div></InteriorPage>;
}
