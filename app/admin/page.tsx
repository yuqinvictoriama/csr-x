import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import AdminOrbit from "./AdminOrbit";
import { admins } from "../adminData";

const title = "Admin | CSR-x";
const description = "Meet the administrative team behind CSR-x.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};


export default function AdminPage() {
  return (
    <main className="interior-page admin-page">
      <SiteHeader />
      <section className="interior-hero admin-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="admin-hero-glow" aria-hidden="true" />
        <div className="interior-heading">
          <p className="eyebrow"><span /> The people behind the program</p>
          <h1>Admin</h1>
          <p className="interior-intro">Working tirelessly to design and bring to life the CSR-x Program for mentees across the world every summer</p>
        </div>
        <AdminOrbit admins={admins} />
      </section>
      <SiteFooter />
    </main>
  );
}
