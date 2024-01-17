This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Important!!!

To run project locally open src/app/page.tsx file and remove `https://` from fetch url input: 

```
const fetchData = async () => {
    const response = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/content`);
    const data = await response.json();
    return data;
};
```
