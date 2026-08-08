# Feedback form for a Next.js app

[![CI](https://github.com/jacobfunch/fillo-nextjs-feedback-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/jacobfunch/fillo-nextjs-feedback-starter/actions/workflows/ci.yml)

Use this starter to add a feedback form to a Next.js App Router page. The app
controls the page and styles. Fillo handles the form schema, validation and
responses.

[Read the setup guide](https://fillo.so/guides/nextjs-in-app-feedback-form) ·
[React SDK](https://www.npmjs.com/package/@usefillo/react) ·
[Fillo docs](https://fillo.so/docs)

![Billing settings page with a Fillo feedback form](docs/preview-desktop.png)

<details>
<summary>View the mobile layout</summary>
<br />
<img src="docs/preview-mobile.png" alt="Feedback form on a mobile screen" width="390" />
</details>

## Run the preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You do not need a Fillo
account. Without a key, the page shows **Preview mode**. You can fill in the
fields and see the success message. The preview does not send or save a
response.

## What you get

- One App Router page and one form component.
- A typed form schema written with `<Fillo.Form>` JSX.
- React form controls in the page. There is no iframe.
- A local preview that works before you add a key.
- A build check for each pull request.

## Connect the form to Fillo

1. Create or open a workspace at [fillo.so](https://fillo.so).
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_FILLO_KEY` to the workspace's public `pk_` key.
4. Add `http://localhost:3000` to the workspace's allowed origins.
5. Restart the development server and open the page. This syncs
   `nextjs-settings-feedback`.
6. Review and publish the form in Fillo.
7. Submit one test response.
8. Find the rating, note and delivery state in Fillo.

This example keeps the public key because the form schema lives in the code and
must sync with Fillo. A published form can load and accept responses by form ID.

## Change the example

You can change the headings, help text, colours and position. Keep these IDs
after you collect the first response:

- form: `nextjs-settings-feedback`;
- fields: `score`, `note`.

Fillo uses the field IDs as stored answer keys. Keep field conditions in the
schema. Create respondent HMACs in server-only code. Never expose the identity
secret through a `NEXT_PUBLIC_` variable.

Use `onSubmitted` for changes on this page after submit. Use a signed webhook if
your backend must act on each response.

## Use a coding agent

[AGENTS.md](AGENTS.md) lists the files, IDs and checks for this repository.

Connect an existing Fillo workspace and install the Fillo skill:

```bash
npx @usefillo/cli@latest login
npx @usefillo/cli@latest skill install
```

If you do not have a workspace, run:

```bash
npx @usefillo/cli@latest agent bootstrap --email you@company.com
```

Then give the agent a specific task:

> Use the build-with-fillo skill. Add this feedback form to our signed-in
> settings page. Keep the current page design and the `score` and `note` field
> IDs. Only add verified respondent identity if the app has a server-side user
> ID. Run the production build. List the steps I must complete in Fillo.

The skill supports Codex, Cursor, GitHub Copilot, Gemini CLI, Claude Code and
other compatible agents. [Read the agent setup guide](https://fillo.so/agents).

## Check before production

Run:

```bash
npm run build
```

Then complete these checks:

1. Leave the rating empty and check the error.
2. Use the form with a keyboard and on a phone.
3. Check the success message.
4. Submit a response and find it in Fillo.

## More help

- [Next.js feedback setup guide](https://fillo.so/guides/nextjs-in-app-feedback-form)
- [How Fillo handles a form request](https://fillo.so/guides/native-form-request-lifecycle)
- [Respondent identity](https://fillo.so/docs/respondents)
- [Style the React form](https://fillo.so/docs/styling)
