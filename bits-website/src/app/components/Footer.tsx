import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* This is the first column which includes : logo, blurb, social media icons*/}
      <div className="footer-brand">
        <div className="footer-logo">Bits Logo</div>

        <p className="footer-blurb">Blurb</p>

        <div className="footer-socials">
          <a href="#" className="social-icon" aria-label="Instagram"></a>
          <a href="#" className="social-icon" aria-label="LinkedIn"></a>
          <a href="#" className="social-icon" aria-label="GitHub"></a>
          <a href="#" className="social-icon" aria-label="Discord"></a>
        </div>
      </div>

      {/* Column 2 which includes nav links */}
      <nav className="footer-nav" aria-label="Footer">
        <h3>Explore</h3>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>

      {/* Column 3 is the application card (will change to email list soon) */}
      <div className="footer-apply">
        <p>Join Our Team!</p>
        <a href="#" className="apply-button">Click Link</a>
      </div>
    </footer>
  );
}