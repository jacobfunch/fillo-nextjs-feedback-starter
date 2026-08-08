"use client";

import { createClient, Fillo } from "@usefillo/react";

const publishableKey = process.env.NEXT_PUBLIC_FILLO_KEY;
const fillo = publishableKey ? createClient({ key: publishableKey }) : null;

export function FeedbackCard() {
  return (
    <section id="feedback" className="feedback-card" aria-labelledby="feedback-title">
      <div className="feedback-heading">
        <div>
          <h2 id="feedback-title">Tell us about this page</h2>
          <p>Give it a rating and tell us what we should fix.</p>
        </div>
      </div>

      {!fillo ? (
        <aside className="setup" role="status">
          <strong>Preview mode</strong>
          <span>
            Add <code>NEXT_PUBLIC_FILLO_KEY</code> to connect this form to Fillo. You can then
            collect responses.
          </span>
        </aside>
      ) : null}

      {fillo ? (
        <Fillo.Form
          client={fillo}
          id="nextjs-settings-feedback"
          title="Settings feedback"
          settings={{ submitLabel: "Send feedback" }}
          showTitle={false}
        >
          <Fillo.Rating id="score" label="Rate this page" max={5} required />
          <Fillo.LongText id="note" label="What went wrong?" />
        </Fillo.Form>
      ) : (
        <Fillo.Form
          id="nextjs-settings-feedback"
          title="Settings feedback"
          settings={{ submitLabel: "Send feedback" }}
          showTitle={false}
          renderOnly
          renderSuccess={() => (
            <div className="preview-success">
              <span aria-hidden="true">✓</span>
              <h3>Preview finished</h3>
              <p>
                We did not send or save your feedback. Add a publishable key to collect responses.
              </p>
            </div>
          )}
        >
          <Fillo.Rating id="score" label="Rate this page" max={5} required />
          <Fillo.LongText id="note" label="What went wrong?" />
        </Fillo.Form>
      )}
    </section>
  );
}
