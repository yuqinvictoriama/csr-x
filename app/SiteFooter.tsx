import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function SiteFooter() {
  return (
    <footer>
      <a className="footer-logo" href="/" aria-label="CSR-x home"><Logo /></a>
      <p>Collaborative Summer Research Experience</p>
      <div className="footer-end"><span className="footer-follow-label">Follow us for the latest updates:</span><SocialLinks /></div>
    </footer>
  );
}
