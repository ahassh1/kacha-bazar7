
# 🛒   কাঁচা বাজার

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক জায়গায়

**BazarDor** is a Bengali-language web application that helps users explore the latest available prices of everyday products, check price changes over time, and that compare prices across different markets. It is designed to make market price information easier to access through a clean, responsive, and user-friendly interface

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-App%20Router-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict%20Typing-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-Styling-38B2AC?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Language-Bengali-green" alt="Bengali Language" />
</p>

---

## ✨ Key Features

### 1. 📦 Product Categories

Any person can buy their own product everyday products by category with Bengali category names, icons, and product counts for easy navigation.

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
https://openapi.programming-hero.com/api/bazardor
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


---

## 🎯 Project Goal

The goal of BazarDor is to make everyday market-price information more accessible to people in Bangladesh through a simple, informative, and Bengali-friendly digital experience.

---

## 👨‍💻 Developer

Built by ahassh ❤️ using Next.js, React, TypeScript, betterauth, heroui, mongodb and Tailwind CSS.

**বাজার দর — বাজারের দাম জানুন, সচেতন সিদ্ধান্ত নিন।**


# API's

## BASE_URL_1: https://openapi.programming-hero.com/api/bazardor
## BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)
