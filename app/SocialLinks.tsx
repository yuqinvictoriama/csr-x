type SocialLinksProps = { className?: string };

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`} aria-label="CSR-x social media">
      <a href="https://www.instagram.com/csrx.program/" target="_blank" rel="noreferrer" aria-label="CSR-x on Instagram">
        <span className="social-icon instagram-icon" aria-hidden="true"><i /></span>
      </a>
      <a href="https://www.linkedin.com/company/csr-x/" target="_blank" rel="noreferrer" aria-label="CSR-x on LinkedIn">
        <span className="social-icon linkedin-icon" aria-hidden="true">in</span>
      </a>
    </div>
  );
}
