export default function Logo({ className = "" }: { className?: string }) {
  return <img className={`site-logo ${className}`} src="/assets/white-logo.png" alt="CSR-x" />;
}
