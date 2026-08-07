# Next.js product-feedback card with Fillo

A small App Router example that renders a code-defined Fillo form as native
controls inside an account-settings page.

## Run it

1. Create or open a Fillo workspace at [fillo.so](https://fillo.so).
2. Copy `.env.example` to `.env.local` and set the workspace's `pk_` publishable
   key. Add `http://localhost:3000` to its allowed origins.
3. Install and start the app:

   ```bash
   npm install
   npm run dev
   ```

4. Open `http://localhost:3000`. Review and publish the staged
   `nextjs-settings-feedback` form in Fillo, then submit one real test response.
5. Verify the response appears in the Fillo response workspace.

The browser receives only a publishable key. Keep `fsk_` workspace keys on a
trusted server. See the [native form request lifecycle](https://fillo.so/guides/native-form-request-lifecycle)
for the complete boundary.
