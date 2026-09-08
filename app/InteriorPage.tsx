import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type InteriorPageProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Shorter hero band with a smaller heading, for pages that lead with content. */
  compact?: boolean;
  children?: ReactNode;
};

export default function InteriorPage({ eyebrow, title, description, compact = false, children }: InteriorPageProps) {
  return (
    <main className="interior-page">
      <SiteHeader />
      <section className={`interior-hero${compact ? " interior-hero-compact" : ""}`}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="interior-heading">
          {eyebrow && <p className="eyebrow"><span /> {eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className="interior-intro">{description}</p>}
        </div>
      </section>
      {children !== null && (
        <section className={`interior-content${children ? " has-content" : ""}`}>
          {children ?? (
            <div className="coming-soon">
              <span className="pulse" aria-hidden="true" />
              <p>Details will be published here soon.</p>
            </div>
          )}
        </section>
      )}
      <SiteFooter />
    </main>
  );
}
