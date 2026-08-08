import { FeedbackCard } from "./FeedbackCard";

export default function Page() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Northstar workspace home">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          Northstar
        </a>
        <p className="breadcrumb">
          Workspace <span>/</span> <strong>Billing feedback</strong>
        </p>
        <span className="avatar" aria-label="Signed in as Jamie Diaz">
          JD
        </span>
      </header>

      <div className="product-shell">
        <aside className="product-nav" aria-label="Workspace navigation">
          <span className="workspace-icon" aria-hidden="true">
            N
          </span>
          <p>Workspace</p>
          <span>Overview</span>
          <span>Projects</span>
          <span className="active">Billing</span>
          <span>Team</span>
        </aside>

        <section className="product-route">
          <div className="product-copy">
            <p className="eyebrow">Help us improve Northstar</p>
            <h1>Something feel off?</h1>
            <p>Send the product team the page and enough context to investigate.</p>
            <div className="page-context">
              <span>Current page</span>
              <code>/settings/billing</code>
            </div>
          </div>

          <FeedbackCard />
        </section>
      </div>
    </main>
  );
}
