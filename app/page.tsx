import type { Metadata } from "next";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import OrbitGraphic from "./OrbitGraphic";
import HeroTitle from "./HeroTitle";
import AdminOrbit from "./admin/AdminOrbit";
import { admins } from "./adminData";

export const metadata: Metadata = {
  title: "CSR-x | Research Without Borders",
  description:
    "A free, online summer research experience connecting high school students across the globe.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const Star = () => <span className="action-star" aria-hidden="true">☆</span>;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Research without borders</p>
          <HeroTitle />
          <p className="hero-dates">July 14-August 22, 2026</p>

          <div className="action-grid" aria-label="Explore CSR-x">
            <a className="action-card action-primary" href="/apply">
              <span className="action-label">Apply</span>
              <Star />
            </a>
            <a className="action-card" href="/2026-cohorts">
              <span className="action-label">View 2026 research</span>
              <Star />
            </a>
            <a className="action-card" href="/2026-mentors">
              <span className="action-label">Meet 2026 Mentors</span>
              <Star />
            </a>
          </div>
        </div>

        <OrbitGraphic />

      </section>

      <section className="statements" aria-label="Our purpose">
        <article className="statement" id="mission">
          <div className="statement-meta"><p>Mission</p></div>
          <div className="statement-copy">
            <p>The CSR-x (Collaborative Summer Research Experience) program is a free, summer, online research experience. Each summer, CSR-x engages high school students across the globe to research into distinct topics across scientific disciplines.</p>
          </div>
        </article>

        <article className="statement statement-dark" id="vision">
          <div className="statement-meta"><p>Vision</p></div>
          <div className="statement-copy">
            <p>Keeping our program free of charge and online, we want to democratize access to interdisciplinary research and encourage everyone to engage deeply with academic research and scholarly works to prepare them for life in a globalizing world.</p>
          </div>
        </article>
      </section>

      <section className="home-admin" aria-label="The CSR-x team">
        <div className="home-admin-heading">
          <p className="eyebrow"><span /> The people behind the program</p>
          <h2>Meet the team</h2>
          <p>Working tirelessly to design and bring to life the CSR-x Program for mentees across the world every summer.</p>
        </div>
        <AdminOrbit admins={admins} layout="row" />
      </section>

      <section className="closing" id="contact">
        <p className="eyebrow"><span /> Contact us</p>
        <h2>Direct any<br />inquiries to</h2>
        <a href="mailto:csrx.admin@gmail.com">csrx.admin@gmail.com <Arrow /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
