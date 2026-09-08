"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const passwordKeys = {
  admin: "ADMIN_HUB_PASSWORD",
  mentors: "MENTOR_HUB_PASSWORD",
  mentees: "MENTEE_HUB_PASSWORD",
} as const;

type HubSlug = keyof typeof passwordKeys;

function isHubSlug(value: string): value is HubSlug {
  return value === "admin" || value === "mentors" || value === "mentees";
}

export async function unlockHub(formData: FormData) {
  const hub = String(formData.get("hub") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!isHubSlug(hub)) redirect("/resources/");

  // With no password configured for a hub, the gate stays closed rather than open.
  const expectedPassword = process.env[passwordKeys[hub]];
  const granted = Boolean(expectedPassword) && password === expectedPassword;

  if (granted) {
    const cookieStore = await cookies();
    cookieStore.set(`csr-x-${hub}-access`, "granted", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: `/resources/${hub}`,
      maxAge: 60 * 60 * 12,
    });
  }

  redirect(`/resources/${hub}?${granted ? "unlocked=1" : "error=1"}`);
}

export async function lockHub(formData: FormData) {
  const hub = String(formData.get("hub") ?? "");
  if (isHubSlug(hub)) {
    const cookieStore = await cookies();
    cookieStore.set(`csr-x-${hub}-access`, "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: `/resources/${hub}`,
      maxAge: 0,
    });
  }
  redirect(`/resources/${hub}`);
}
