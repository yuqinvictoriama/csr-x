import type { Metadata } from "next";
import HubPage from "../HubPage";
import { getHub } from "../resourceData";

const hub = getHub("admin");

export const metadata: Metadata = {
  title: `${hub.label} | CSR-x`,
  description: hub.description,
};

export const dynamic = "force-dynamic";

export default async function AdminHubPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return <HubPage hub={hub} error={params.error === "1"} />;
}
