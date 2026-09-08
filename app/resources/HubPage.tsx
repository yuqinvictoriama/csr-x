import type { ResourceHub, ResourceLink, ResourceSection } from "./resourceData";
import InteriorPage from "../InteriorPage";
import { cookies } from "next/headers";
import { unlockHub, lockHub } from "./actions";

type HubPageProps = { hub: ResourceHub; error?: boolean };

export default async function HubPage({ hub, error = false }: HubPageProps) {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get(`csr-x-${hub.slug}-access`)?.value === "granted";
  if (!unlocked) return <PasswordGate hub={hub} error={error} />;

  const shortName = hub.label.replace(" Hub", "");

  return (
    <InteriorPage eyebrow={hub.eyebrow} title={hub.label}>
      <div className="resource-hub-shell">
        <div className="resource-userbar">
          <span>{shortName} workspace</span>
          <form action={lockHub}>
            <input type="hidden" name="hub" value={hub.slug} />
            <button type="submit">Lock hub</button>
          </form>
        </div>

        <nav className="hub-toc" aria-label={`${shortName} hub sections`}>
          <span>Jump to</span>
          <ul>
            {hub.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {hub.sections.map((section, index) => (
          <HubSection key={section.id} section={section} index={index + 1} />
        ))}

        <div className="hub-footnote">
          <p>
            Something missing or out of date? Tell the CSR-x admin team and it will be updated here.
          </p>
        </div>
      </div>
    </InteriorPage>
  );
}

function HubSection({ section, index }: { section: ResourceSection; index: number }) {
  return (
    <section className="hub-section" id={section.id}>
      <div className="hub-section-heading">
        <p className="hub-section-index">{String(index).padStart(2, "0")}</p>
        <h2>{section.title}</h2>
        <p className="hub-section-blurb">{section.blurb}</p>
      </div>
      <ul className="hub-link-grid">
        {section.links.map((link) => (
          <li key={link.label}>
            <HubLink link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function HubLink({ link }: { link: ResourceLink }) {
  const isExternal = link.external ?? Boolean(link.href && /^https?:\/\//.test(link.href));

  if (!link.href) {
    return (
      <div className="hub-link is-pending">
        <p className="hub-link-label">{link.label}</p>
        {link.description && <p className="hub-link-description">{link.description}</p>}
        <p className="hub-link-meta">Link pending</p>
      </div>
    );
  }

  return (
    <a
      className="hub-link"
      href={link.href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      <p className="hub-link-label">
        {link.label}
        <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
      </p>
      {link.description && <p className="hub-link-description">{link.description}</p>}
      <p className="hub-link-meta">{isExternal ? "External site" : "On this site"}</p>
    </a>
  );
}

function PasswordGate({ hub, error }: { hub: ResourceHub; error: boolean }) {
  const shortName = hub.label.replace(" Hub", "");

  return (
    <InteriorPage title={hub.label}>
      <div className="resource-password-gate">
        <p className="eyebrow"><span /> Password required</p>
        <h2>Enter the {shortName} Hub password.</h2>
        {error && (
          <p className="resource-gate-error" role="alert">
            That password was not recognised. Check it with the CSR-x admin team and try again.
          </p>
        )}
        <form action={unlockHub}>
          <input type="hidden" name="hub" value={hub.slug} />
          <label htmlFor={`${hub.slug}-password`}>Hub password</label>
          <div className="resource-password-row">
            <input id={`${hub.slug}-password`} name="password" type="password" autoComplete="current-password" required />
            <button type="submit">Unlock hub ↗</button>
          </div>
        </form>
      </div>
    </InteriorPage>
  );
}
