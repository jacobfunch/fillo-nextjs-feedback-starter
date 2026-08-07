"use client";

import { createClient, Fillo } from "@usefillo/react";

const publishableKey = process.env.NEXT_PUBLIC_FILLO_KEY;
const fillo = publishableKey ? createClient({ key: publishableKey }) : null;

export function FeedbackCard() {
  if (!fillo) {
    return (
      <aside className="setup" role="status">
        Copy <code>.env.example</code> to <code>.env.local</code> and add your Fillo publishable
        key.
      </aside>
    );
  }

  return (
    <section className="feedback-card" aria-labelledby="feedback-title">
      <h2 id="feedback-title">How did this settings page work for you?</h2>
      <Fillo.Form client={fillo} id="nextjs-settings-feedback" title="Settings feedback">
        <Fillo.Rating id="score" label="Overall experience" max={5} required />
        <Fillo.LongText id="note" label="What should we fix?" />
      </Fillo.Form>
    </section>
  );
}
