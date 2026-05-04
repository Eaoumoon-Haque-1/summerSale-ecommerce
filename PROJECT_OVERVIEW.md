# Project Overview: Summer Sale E-commerce (SunCart)

This project is a modern e-commerce web application built with Next.js 16, designed for summer essentials shopping. It features authentication, product browsing, and a clean, responsive UI.

---

## 1. Project Structure

```
├── public/                  # Static assets (SVGs, images, redirects)
├── src/
│   ├── app/                 # Next.js app directory (routing, layouts, pages)
│   │   ├── (auth)/          # Auth-related layouts and pages
│   │   │   ├── layout.jsx   # Auth layout (header, footer, navigation)
│   │   │   ├── login/       # Login page (email/password, Google)
│   │   │   └── register/    # Registration page (email/password, Google)
│   │   ├── (main)/          # Main app layout and pages
│   │   │   ├── layout.jsx   # Main layout (navbar, footer)
│   │   │   ├── page.jsx     # Home page (banner, popular products, tips, brands)
│   │   │   └── products/    # Product listing and details
│   │   │       ├── page.jsx # All products page
│   │   │       └── [id]/    # Dynamic product details page
│   │   ├── api/
│   │   │   └── auth/[...all]/route.js # API route for authentication
│   │   ├── globals.css      # Tailwind CSS global styles
│   │   └── layout.js        # Root layout (font, global wrappers)
│   ├── assests/             # Project images (e.g., summersale.jpg)
│   ├── components/          # Reusable React components
│   │   ├── Home/            # Home page sections (Banner, PopularProducts, Tips, Brands)
│   │   └── shared/          # Shared UI (Navbar, Footer)
│   ├── data/                # Static data (products.json)
│   └── lib/                 # Library code (auth, auth-client)
├── .env                     # Environment variables (DB, Auth, API keys)
├── package.json             # Project dependencies and scripts
├── next.config.mjs          # Next.js configuration (image domains, etc.)
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS/Tailwind config
├── jsconfig.json            # Path aliases
├── README.md                # Project instructions
└── vercel.json              # Vercel deployment config
```

---

## 2. Key Features

- **Authentication:**
  - Email/password and Google OAuth via Better Auth
  - Auth-protected product details page
- **Product Management:**
  - Product data in `src/data/products.json`
  - Product listing and detail views
- **UI/UX:**
  - Responsive design with Tailwind CSS
  - Home page with banner, popular products, summer care tips, and top brands
  - Shared Navbar and Footer
- **API:**
  - Custom API route for authentication (`/api/auth`)
- **Deployment:**
  - Ready for Vercel deployment

---

## 3. Main Components & Pages

- **Home Page:**
  - `Banner`: Hero section with summer sale promo
  - `PopularProducts`: Highlights top 3 products
  - `SummerCareTips`: Tips for summer health
  - `TopBrands`: Featured brands
- **Products:**
  - `ProductsPage`: Lists all products
  - `ProductDetailsPage`: Shows details (protected route)
- **Auth:**
  - `LoginPage` & `RegisterPage`: Email/password and Google sign-in
- **Shared:**
  - `Navbar`, `Footer`: Consistent site navigation and info

---

## 4. Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Better Auth** (with MongoDB adapter)
- **MongoDB Atlas** (cloud database)
- **Vercel** (deployment)

---

## 5. Environment Variables (`.env`)

- `MONGODB_URI`: MongoDB connection string
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: Google OAuth
- `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `NEXT_PUBLIC_BETTER_AUTH_URL`: Auth config

---

## 6. How to Run

1. Install dependencies: `npm install`
2. Set up `.env` with your credentials
3. Start dev server: `npm run dev`
4. Visit [http://localhost:3000](http://localhost:3000)

---

## 7. Folder/Component Map

- `src/app/(main)/products/page.jsx` — All products
- `src/app/(main)/products/[id]/page.jsx` — Product details (protected)
- `src/app/(auth)/login/page.jsx` — Login
- `src/app/(auth)/register/page.jsx` — Register
- `src/components/Home/` — Home page sections
- `src/components/shared/` — Navbar, Footer
- `src/lib/` — Auth logic
- `src/data/products.json` — Product data

---

## 8. Deployment

- Deploy on Vercel (see `vercel.json`)
- Configure environment variables in Vercel dashboard

---

## 9. Notes

- This project uses the new Next.js App Router and may differ from older Next.js projects.
- For more, see `README.md` and `AGENTS.md`.
