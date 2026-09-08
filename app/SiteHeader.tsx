import Logo from "./Logo";

export const navigation = [
  { href: "/apply", label: "Apply" },
  { href: "/admin", label: "Admin" },
  { href: "/2026-mentors", label: "2026 Mentors" },
  { href: "/2026-cohorts", label: "2026 Cohorts" },
  { href: "/resources", label: "Resources" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="logo-link" href="/" aria-label="CSR-x home"><Logo /></a>
      <nav className="nav-links" aria-label="Main navigation">
        {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
    </header>
  );
}
