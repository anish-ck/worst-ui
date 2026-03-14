# ShopChaos – Worst E-Commerce UI

A deliberately terrible e-commerce interface built for the **Worst UI Challenge**.
This project intentionally violates common UI/UX design principles to create a confusing, frustrating, and chaotic shopping experience.

---

# Project Overview

ShopChaos is a fake online store where buying products becomes unnecessarily difficult.
The interface intentionally includes misleading buttons, excessive popups, broken navigation, poor color contrast, random layouts, and unnecessary animations.

The goal is to **demonstrate why good UI/UX design matters** by showing the opposite.

---

# Tech Stack

Frontend Framework

* React (with Vite)

Styling

* Tailwind CSS

Animations

* Framer Motion

3D Elements

* Spline 3D

Icons

* Lucide React

Routing

* React Router DOM

UI Utilities

* clsx
* tailwind-merge

Optional Component Helpers

* Headless UI (for dialogs and menus)

---

# Project Type

Frontend Only

No backend, authentication, or database is required.
All product data can be mocked with JSON objects.

---

# Installation

Clone the repository

git clone https://github.com/yourusername/shopchaos-worst-ui

Navigate into the project

cd shopchaos-worst-ui

Install dependencies

npm install

Start development server

npm run dev

---

# Dependencies

Install core libraries

npm install react-router-dom framer-motion lucide-react clsx tailwind-merge

Install Spline React viewer

npm install @splinetool/react-spline

Tailwind installation

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

---

# Tailwind Configuration

tailwind.config.js

export default {
content: [
"./index.html",
"./src/**/*.{js,jsx,ts,tsx}"
],
theme: {
extend: {},
},
plugins: [],
}

---

# Folder Structure

src
components
Navbar.jsx
ProductCard.jsx
PopupAd.jsx
MovingCartIcon.jsx
MovingButton.jsx
ChaosBanner.jsx
RandomLoader.jsx
SplineHero.jsx

pages
Home.jsx
Products.jsx
ProductDetail.jsx
Cart.jsx
Checkout.jsx

data
products.js

utils
randomPosition.js
fakeDelay.js

App.jsx
main.jsx
index.css

---

# UI Component Library (Custom Components)

These components intentionally create bad UX.

---

## Navbar

Features

* Too many menu items
* Misleading labels
* Links go to wrong pages

Example menu items

Home
Products
Products Again
Deals
Real Deals
Secret Deals
Support?
Support??

---

## ProductCard

Problems intentionally created

* Price hidden until hover
* Image extremely large
* Buttons misleading

Bad UI behaviour

* Hover once → price appears
* Hover again → price disappears

---

## PopupAd

Purpose

Show annoying popups repeatedly.

Popup examples

Subscribe to Newsletter
Limited Time Deal
Are you sure you want to continue?
Confirm confirmation

Popups should appear randomly and block content.

---

## MovingCartIcon

Cart icon randomly changes position on every render.

Possible positions

top-left
top-right
bottom-right
center

This creates confusion because the cart location is inconsistent.

---

## MovingButton

Buy button moves slightly when user tries to click it.

Purpose

Make checkout difficult and frustrating.

---

## ChaosBanner

Large flashing banners on homepage.

Example banners

MEGA SALE
SUPER SALE
FLASH SALE
ULTRA SALE

All banners should be oversized and animated.

---

## RandomLoader

Fake loading screen that lasts too long.

Example messages

Processing order
Still processing
Almost done
Still waiting

---

## SplineHero (3D Background)

Uses Spline to create an animated hero section.

Library

@splinetool/react-spline

Example usage

import Spline from "@splinetool/react-spline"

function SplineHero() {
return ( <div className="h-[600px]"> <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" /> </div>
)
}

Purpose

Add unnecessary heavy 3D visuals that distract users.

---

# Pages

---

# Home Page

Features

* Massive banners
* 3D spline hero
* Huge product images
* Random navigation

Bad UI ideas

* Multiple flashing sale banners
* Buttons with unclear labels
* Too many products per row

---

# Product Listing Page

Problems included

Price hidden until hover

Filters reset automatically when scrolling.

Sorting options

Best
Better
Worst
Random
Surprise

Sorting does not actually sort correctly.

---

# Product Detail Page

Major issues

* Giant product image covering most of the screen
* Buy button same color as background
* Multiple fake purchase buttons

Example button labels

Buy Now
Buy Later
Buy Maybe
Buy Eventually

Only one actually works.

---

# Cart Page

Intentional confusion

Quantity buttons reversed

* button decreases quantity

- button increases quantity

Delete item button labeled

Save Item

Cart icon moves randomly on refresh.

---

# Checkout Page

Worst UX experience.

Problems

* 10 popups before checkout
* Massive unnecessary form
* Confusing error messages

Example useless fields

Favorite color
Pet name
First school
Childhood best friend

Error messages

Something went wrong
Invalid something
Try again later

---

# Framer Motion Animations

Animations intentionally overused.

Install

npm install framer-motion

Examples

Bouncing buttons
Spinning icons
Pulsing text
Rotating images

Example usage

import { motion } from "framer-motion"

<motion.button
animate={{ x: [0, 10, -10, 0] }}
transition={{ repeat: Infinity, duration: 1 }}

>

Buy Now
</motion.button>

Purpose

Create distracting UI elements.

---

# Bad Design Patterns Implemented

Hidden price information
Misleading buttons
Excessive animations
Random navigation
Low contrast colors
Too many popups
Moving cart icon
Fake loading screens
Broken filters
Confusing checkout flow

---

# Color Scheme (Intentionally Bad)

Examples

yellow text on white background
red text on blue background
neon gradients

Example Tailwind classes

bg-yellow-200 text-yellow-300
bg-red-500 text-blue-500
bg-gradient-to-r from-pink-500 to-green-500

---

# Demo Video Outline

1. Open homepage with chaotic banners
2. Try to find product price
3. Attempt to click moving buy button
4. Show cart icon changing position
5. Attempt checkout but blocked by popups
6. Show confusing error messages

End message

Good UI improves usability.
Bad UI creates chaos.

---

# Deployment

Deploy frontend using

Vercel
Netlify
GitHub Pages

---

# Learning Outcome

This project demonstrates why good UI/UX design is essential.

Users struggle when interfaces include

* unclear navigation
* misleading controls
* poor visual hierarchy
* inconsistent interactions

Good design improves usability, accessibility, and user satisfaction.

---

# License

MIT License
