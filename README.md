# podcastr

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Credits

https://youtu.be/zfAb95tJvZQ?feature=shared

## Getting Started

copy `.env.development` to `.env`

```bash
cp .env.development .env
```

connect to convex project, and generate`CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL` in `.env.local` automatically

```bash
npx convex dev
```

go to clerk to create a new project and paste secret keys to `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` into `.env.local`

create a new webhook on clerk dashboard and paste the secret key to `CLERK_WEBHOOK_SECRET`

go openai playground to create a new api key and paste it to the `OPENAI_API_KEY`

finally, run the development server on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
