import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";
import { resourceHubs } from "./resourceData";

export const metadata: Metadata = {
  title: "Resources | CSR-x",
  description: "Private resource hubs for the CSR-x community.",
};

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  return (
    <InteriorPage title="Resources" compact>
      <div className="resources-shell">
        <div className="resource-hub-grid">
          {resourceHubs.map((hub) => <a className="resource-hub-card" href={`/resources/${hub.slug}`} key={hub.slug}>
            <span>{hub.eyebrow}</span><h2>{hub.label}</h2><strong>Enter hub <b className="action-star" aria-hidden="true">☆</b></strong>
          </a>)}
        </div>
      </div>
    </InteriorPage>
  );
}
