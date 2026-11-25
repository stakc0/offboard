# OFFBOARD

A cinematic crypto exit manifesto with an existing public wallet ledger.

- Manifesto: `/`
- Wallet ledger: `/app.html`
- Review log: `/reviews`
- Wallet records: `/token?wallet=<address>`

The public identity is OFFBOARD: a restrained editorial signal to leave the loop. The manifesto makes no market prediction and is not financial advice. Existing wallet indexing, profiles, voting, reviews, and launch infrastructure remain operational behind the new public framing.

## Wallet ledger

- `GET /api/wallet?address=<solana-wallet>` fetches the current SOL balance, recent activity, and the existing transparent wallet score.
- `GET /api/reviews?wallet=<solana-wallet>` reads community reviews.
- `POST /api/reviews` stores an evidence-backed review and invalidates the wallet score cache.
- `GET/POST /api/profile` attaches public profile context to a wallet.
- `GET/POST /api/index/kolscan` imports the current Kolscan leaderboard records into the index.

Cielo, Supabase, and SVS credentials remain server-only environment variables. Apply `supabase/migrations/20261015_rep.sql` for the existing database schema; its historical filename is intentionally unchanged.
