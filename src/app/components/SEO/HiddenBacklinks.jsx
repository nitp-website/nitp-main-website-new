'use client';

/**
 * HiddenBacklinks Component
 * 
 * This component adds backlinks for SEO purposes while keeping them hidden from the frontend.
 * The links are still crawlable by search engines but invisible to users.
 */
export default function HiddenBacklinks() {
  return (
    <>
      {/* Hidden backlinks for SEO - Multiple placement strategies */}
      
      {/* Method 1: Hidden div with aria-hidden for accessibility */}
      <div className="seo-backlinks" aria-hidden="true">
        <a 
          href="https://www.techscript.in/" 
          rel="noopener noreferrer"
          title="TechScript - Technology Solutions and Services"
        >
          TechScript.in - Tech Solutions
        </a>
        <a 
          href="https://www.ashishk.online/" 
          rel="noopener noreferrer"
          title="Ashish Kumar - Personal Portfolio"
        >
          AshishK.online - Portfolio
        </a>
      </div>

      {/* Method 2: Footer backlinks (alternative placement) */}
      <footer className="seo-footer-links" aria-hidden="true">
        <nav>
          <ul>
            <li>
              <a 
                href="https://www.techscript.in/" 
                rel="noopener noreferrer"
                title="Visit TechScript for innovative technology solutions"
              >
                TechScript - Innovation & Technology
              </a>
            </li>
            <li>
              <a 
                href="https://www.ashishk.online/" 
                rel="noopener noreferrer"
                title="Explore Ashish Kumar's portfolio and projects"
              >
                Ashish Kumar Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </footer>

      {/* Method 3: Sidebar backlinks (for additional coverage) */}
      <aside className="seo-sidebar-links" aria-hidden="true">
        <div>
          <h3>Partner Resources</h3>
          <a 
            href="https://www.techscript.in/" 
            rel="noopener noreferrer"
            title="TechScript - Web Development and IT Services"
          >
            TechScript.in
          </a>
          <a 
            href="https://www.ashishk.online/" 
            rel="noopener noreferrer"
            title="Ashish K - Developer Portfolio"
          >
            AshishK.online
          </a>
        </div>
      </aside>
    </>
  );
}
