# PickBazar - React Frontend Assignment

A grocery e-commerce homepage built with React, replicating the PickBazar reference design. Built as a frontend assignment for Stutzen Corporate.

## 🔗 Links

- **Live Demo:** https://pickbazar-assignment.vercel.app/ 
- **GitHub Repo:** https://github.com/Jaya-sketch/pickbazar-assignment

## ✨ Features

- **Product Listing** — fetched from a mock API (simulated with a Promise + delay)
- **Add to Cart** — products show a "Cart" button which converts into a `− qty +` stepper once added
- **Floating Cart Summary** — a popup in the bottom-right corner showing total items and price
- **Checkout Flow** — clicking the cart popup redirects to a `/checkout` page displaying the selected products, quantities, and total, passed via React Router navigation state
- **Discount Badges** — products on offer show a percentage-off badge
- **Responsive UI** — built with Tailwind CSS, closely matching the provided reference design

## 🛠️ Tech Stack

- **React** (Vite)
- **React Router DOM** — for page navigation (Home → Checkout)
- **Tailwind CSS** — for styling
- **Context API** — global cart state management (`CartContext`)

## 📁 Project Structure
src/

├── components/

│   ├── Header.jsx          # Top navigation bar

│   ├── Sidebar.jsx         # Category sidebar

│   ├── ProductCard.jsx     # Individual product card with cart controls

│   ├── ProductGrid.jsx     # Fetches & renders all products

│   ├── CartPopup.jsx       # Floating cart summary + checkout trigger

│   ├── HomePage.jsx        # Combines Header, Sidebar, ProductGrid, CartPopup

│   └── CheckoutPage.jsx    # Displays selected products after checkout

├── context/

│   └── CartContext.jsx     # Global cart state (add/remove/update quantity)

├── data/

│   └── products.js         # Mock product data + simulated API fetch function

├── App.jsx                 # Routes setup (/ and /checkout)

└── main.jsx                # App entry point

## 🚀 Running Locally

1. Clone the repository
```bash
   git clone https://github.com/Jaya-sketch/pickbazar-assignment.git
   cd pickbazar-assignment
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm run dev
```

4. Open the URL shown in the terminal (typically `http://localhost:5173`)

## 📝 Notes

- Product images are sourced from Unsplash as placeholder/dummy images.
- Top navigation links (Shops, Offers, Contact, Pages) and sidebar category links are styled to match the reference design but are not functional, as the assignment scope was focused on product listing, cart, and checkout flow.