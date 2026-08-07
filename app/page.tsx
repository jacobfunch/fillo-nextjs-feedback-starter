import { FeedbackCard } from "./FeedbackCard";

export default function Page() {
  return (
    <main>
      <section className="product-copy" aria-labelledby="settings-title">
        <p className="eyebrow">Account settings</p>
        <h1 id="settings-title">Billing preferences</h1>
        <p>This is ordinary product UI. The feedback card below is a native Fillo form.</p>
      </section>
      <FeedbackCard />
    </main>
  );
}
