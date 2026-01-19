# Next.js Starter Repository

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** MongoDB with Mongoose
- **Authentication:** Clerk
- **Styling:** Tailwind CSS + shadcn/ui
- **Payments:** Stripe
- **Hosting:** Vercel

## Setup Instructions

### 1. Initialize Project

```bash
npx create-next-app@latest my-starter --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd my-starter
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install mongoose stripe @clerk/nextjs

# shadcn/ui setup
npx shadcn@latest init -d
```

### 3. Environment Variables

Create `.env.local`:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 4. Project Structure

```
my-starter/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── api/
│   │   ├── stripe/
│   │   │   └── webhooks/route.ts
│   │   └── users/route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── navbar.tsx
├── lib/
│   ├── db.ts
│   ├── stripe.ts
│   └── utils.ts
├── models/
│   └── user.ts
└── middleware.ts
```

### 7. Configure Webhooks

**Stripe Webhook:**
- Dashboard → Developers → Webhooks
- Add endpoint: `https://yourdomain.com/api/stripe/webhooks`
- Select events: `customer.subscription.*`

**Clerk Webhook (optional):**
- Dashboard → Webhooks
- Add endpoint for user sync if needed

## Useful Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Next Steps

1. Install shadcn components as needed: `npx shadcn@latest add button card`
2. Set up MongoDB Atlas cluster
3. Configure Clerk application
4. Set up Stripe products/prices
5. Add your business logic

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
