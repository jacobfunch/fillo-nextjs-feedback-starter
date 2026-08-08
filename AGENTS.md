# AGENTS.md

This repository contains a small feedback form for the Next.js App Router. Keep
the example small enough to understand in one sitting.

## Purpose

The app controls the settings page, session, layout, styles and success state.
Fillo controls the form schema, validation, responses, versions, exports and
delivery.

## Start

1. Read `README.md`.
2. Read `app/FeedbackCard.tsx`.
3. Run `npm install`.
4. Run `npm run build`.
5. Run `npm run dev`.
6. Remove the Fillo key and check Preview mode.
7. For Fillo work, run `npx @usefillo/cli@latest skill install`.
8. Follow the installed `build-with-fillo` skill.

## Files

- `app/page.tsx`: settings page and product layout.
- `app/FeedbackCard.tsx`: form schema and connected or preview state.
- `app/styles.css`: page styles and Fillo form styles.
- `app/layout.tsx`: global Fillo stylesheet and page metadata.

## IDs to keep

- Form ID: `nextjs-settings-feedback`
- Rating field ID: `score`
- Note field ID: `note`

Keep these IDs after the first response. Fillo uses the field IDs as stored
answer keys. You can change labels and help text.

## Rules

- Keep the form in the product page. Do not replace it with an iframe or another
  survey page.
- Keep Preview mode. It must show the form without sending a response.
- Do not put an `fsk_` key, identity secret, webhook secret, login token or
  storage credential in browser code or committed files.
- Use only a public `pk_` key to sync the form schema. A published form does not
  use this key to accept a response.
- Create verified respondent hashes in server-only code.
- Put field conditions in the form schema. Do not change the schema for each
  visitor.
- Use the default accessible controls unless the task requires a custom
  renderer. Keep labels, errors, focus and keyboard controls accessible.
- Do not add analytics, a state library or another form backend.

## Checks

- `npm run build` passes.
- Preview mode shows the form and does not send a response.
- The desktop and mobile pages do not overflow.
- With a key, Fillo stages or loads the form according to the workspace sync
  setting.
- An empty rating shows an accessible error.
- Submit one authorised test response. Find it in Fillo before you report that
  the form works.

When you finish, report the build result. State the next action in Fillo:
connect the form, publish it or check the response. Do not report private
workspace URLs.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
