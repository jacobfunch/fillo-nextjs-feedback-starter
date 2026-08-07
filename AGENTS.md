# AGENTS.md

This is a deliberately small Next.js App Router starter for a product-native
Fillo feedback form. Keep it understandable in one sitting.

## Goal

The host application owns the settings route, layout, styling, account context,
and after-submit behavior. Fillo owns the form schema, validation, accepted
response, versions, exports, and delivery workflow.

## Start here

1. Read `README.md` and inspect `app/FeedbackCard.tsx`.
2. Run `npm install`, `npm run build`, and then `npm run dev`.
3. Without a key, verify that the page renders the labeled non-submitting preview.
4. For a Fillo task, run `npx @usefillo/cli@latest skill install` and use the
   installed `build-with-fillo` skill.

## Repository map

- `app/page.tsx`: product-owned settings surface.
- `app/FeedbackCard.tsx`: code-defined form and preview/connected states.
- `app/styles.css`: host UI and scoped renderer styling.
- `app/layout.tsx`: global SDK stylesheet and metadata.

## Stable contract

- Form ID: `nextjs-settings-feedback`
- Rating field ID: `score`
- Note field ID: `note`

Once real responses exist, preserve those IDs. Labels and helper copy may change
without changing stored answer keys.

## Guardrails

- Keep the form inside the product route; do not replace it with an iframe or a
  separate survey page.
- Keep the preview fallback. A clone should show the form without making a
  network request or accepting a response.
- Never put an `fsk_` key, identity secret, webhook secret, login token, or
  storage credential in browser code or committed files.
- Use only a public `pk_` key for code-schema sync. Published form reads and
  submissions do not use that key as response authentication.
- Compute verified respondent hashes in server-only code.
- Keep field conditions in the schema. Do not change schema shape per visitor.
- Use the default accessible controls unless the task explicitly requires a
  custom renderer. Preserve labels, errors, focus, and keyboard behavior.
- Do not add analytics, a state library, or a second form backend to this starter.

## Verification

- `npm run build` passes.
- The no-key page shows `Preview mode` and a visible Fillo form.
- Desktop and mobile layouts do not overflow.
- With a configured key, the form stages or resolves successfully according to
  workspace sync policy.
- The required rating exposes an accessible error.
- One authorized test submission appears in the Fillo response workspace before
  claiming the integration is complete.

When handing work back, state the build result and the exact remaining dashboard
action: connect, publish, or verify a response. Never report private workspace URLs.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
