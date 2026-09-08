import type { Metadata } from "next";
import HubPage from "../HubPage";
import { getHub } from "../resourceData";

const hub = getHub("mentees");

export const metadata: Metadata = {
  title: `${hub.label} | CSR-x`,
  description: hub.description,
};

export const dynamic = "force-dynamic";

export default async function MenteeHubPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return <HubPage hub={hub} error={params.error === "1"} />;
}
