import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSR-x",
  description:
    "A free, online summer research experience connecting high school students across the globe.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
