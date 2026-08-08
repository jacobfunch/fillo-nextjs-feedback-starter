"use client";

import { createClient, Fillo } from "@usefillo/react";

const publishableKey = process.env.NEXT_PUBLIC_FILLO_KEY;
const fillo = publishableKey ? createClient({ key: publishableKey }) : null;

export function FeedbackCard() {
  return (
    <section id="feedback" className="feedback-card" aria-labelledby="feedback-title">
      <div className="feedback-heading">
        <div>
          <h2 id="feedback-title">Report product feedback</h2>
          <p>Rate this page and tell us what happened.</p>
        </div>
      </div>

      {!fillo ? (
        <aside className="setup" role="status">
          <strong>Preview mode</strong>
          <span>
            Add <code>NEXT_PUBLIC_FILLO_KEY</code> to sync this form and collect a response.
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
          <Fillo.Rating id="score" label="Overall experience" max={5} required />
          <Fillo.LongText id="note" label="What should we fix?" />
        </Fillo.Form>
      ) : (
        <Fillo.Form
          id="nextjs-settings-feedback"
          title="Settings feedback"
          settings={{ submitLabel: "Send feedback" }}
          showTitle={false}
          renderOnly
        >
          <Fillo.Rating id="score" label="Overall experience" max={5} required />
          <Fillo.LongText id="note" label="What should we fix?" />
        </Fillo.Form>
      )}
    </section>
  );
}
