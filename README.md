
# 🛒 বাজার দর | BazarDor

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক জায়গায়

**BazarDor** is a Bengali-language web application that helps users explore the latest available prices of everyday products, check price changes over time, and compare prices across different markets. It is designed to make market price information easier to access through a clean, responsive, and user-friendly interface.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-App%20Router-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict%20Typing-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-Styling-38B2AC?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Language-Bengali-green" alt="Bengali Language" />
</p>

---

## ✨ Key Features

### 1. 📦 Product Categories

Browse everyday products by category with Bengali category names, icons, and product counts for easy navigation.

### 2. 💰 Current & Historical Prices

View today's prices alongside previous prices, including yesterday, last week, and last month, to understand how product prices change over time.

### 3. 📊 Market Price Comparison

Explore market-wise minimum and maximum prices and view average-price summaries to compare the available market data.

### 4. 🔃 Smart Price Sorting

Sort products by price from lowest to highest or highest to lowest, making it easier to find products based on their current prices.

### 5. 📱 Responsive User Interface

Access product cards, price summaries, and market information through a responsive layout designed for mobile, tablet, and desktop screens.

### 6. Use Authenticeation for user

Use betterauth for authentication and mongodb for data store. 

---

## 📂 Project Structure

The following shows the main files and folders used in the project. The `app` route filenames are illustrative; keep your existing route names if they differ.

```text
bazar-dor/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── product/
│   │       └── [productId]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── AllProductApi.tsx
│   │   ├── AllProductCard.tsx
│   │   ├── ProductDetailsPage.tsx
│   │   ├── Banner.tsx
│   │   ├── PriceChange.tsx
│   │   └── Footer.tsx
│   └── types/
│       └── products.ts
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | Application framework, routing, and server-side rendering |
| [React](https://react.dev/) | Reusable components and user interface |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe data structures and component props |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling and layout |
| REST API | Fetching product, category, and market-price data |
| Next.js Image | Optimized product image rendering |
| Betterauth and mongodb and heroUi also.

---

> **Note:** The component and type filenames above reflect the project files discussed during development. The route paths and `public/images/` directory are illustrative, not a verified listing of every file in the repository.

---

## 🔌 API Integration

BazarDor retrieves product and category information from a REST API.

**API Base URL:**

```text
https://api.abcz.workers.dev/api/bazardor
```

The application uses API data to display product details, category information, current prices, historical prices, and market-wise price ranges.

Product data includes fields such as:

- `nameBn` — Bengali product name
- `categoryNameBn` — Bengali category name
- `today` — Current price
- `yesterday` — Previous day's price
- `lastWeek` — Price from the previous week
- `lastMonth` — Price from the previous month
- `markets` — Market names, divisions, and minimum/maximum prices

The application also uses Next.js data revalidation to refresh cached API data periodically.

---

## 🎯 Project Goal

The goal of BazarDor is to make everyday market-price information more accessible to people in Bangladesh through a simple, informative, and Bengali-friendly digital experience.

---

## 👨‍💻 Developer

Built by ahassh ❤️ using Next.js, React, TypeScript, betterauth, heroui, mongodb and Tailwind CSS.

**বাজার দর — বাজারের দাম জানুন, সচেতন সিদ্ধান্ত নিন।**


# API's

## BASE_URL_1: https://api.api-store.workers.dev/api/bazardor
## BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)

### 6. Authentication (`/signin`, `/signup`)

- **Sign In**: User Login: The user will  show  a Login page with a form , so that the user can Log in this application. 
    - Show a Title for Login.  & Form with following fields ( Email , Password , Login button ) 
    - If the user Login successfully then navigate him to his Home page. If not, show him an error with toast / error message anywhere in the form.

    - There will be some other options like:
        - Show the user a Link for Register  so that he can go to the register page. 
        - Show users a Social Login Button ( Google/GitHub/any other social login ) . on Clicking it user authenticate with Google Navigate him to  his Home page.
- **Sign Up**: User Registration: Create a register page with a form , so that the user can register himself in this application. 
    - Show a Title for registration and a Form with following fields( Name , Email, Password & Register Button ) 
    - If the user Register successfully then navigate him to his login page.
    - If not, show him an error with toast / error message anywhere in the form.


    - There will be some other options like 
        - Show the user a Link for Login so that he can go to the Login page. 
        - Show users a Social Login Button ( Google/GitHub/any other social login ) . on Clicking it user authenticate with Google Navigate the user to the Home page.

- Use **BetterAuth** (email/password + Google + GitHub), toast on success/error, skeleton loaders.
- Show relevant **toast notification** on login / signup / logout / validation error.
-  💡Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

---

#	Requirement
- Add a 404 Page for any unknown/invalid route (e.g. `/category/invalid`, `/product/unknown` → friendly  404 + “হোম পেজে ফিরে যান”)
- Show a loading animation ( `skeleton`) while the product data is being fetched on the Home / Category page
- Show a relevant toast notification for auth + protected-route redirects (use `react-hot-toast` / `data-rht-toaster`).
- Make sure reloading any page after deployment does not cause an error (dynamic `[slug]` routes must work on Vercel — no hard 404 on refresh)

---

### C3. - Update Information Feature
- In My Profile route there will be an update button. On clicking it,  Take user to another route 
- Show user a form with an input field (  Name ), An Update Information button.

Follow this documentation: https://better-auth.com/docs/concepts/users-accounts#update-user 