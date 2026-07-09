# 🛍️ UniDeal — High Fidelity Prototype

A cross-platform mobile marketplace for UTM students to buy, sell, and share products and services within a trusted campus environment. This repository contains the **high-fidelity prototype** (React Native) and a **working backend** for the Product & Market subsystem.

---

## 📋 About

Developed for the **Application Development Project I** course, UniDeal enables UTM students to trade preloved items, share academic services and assets, communicate safely, and manage transactions through a protected (escrow) payment flow — all within a verified student community.

---

## 👥 Team Members

| No. | Name                   | Matric No. | Responsibility                    |
| --- | ---------------------- | ---------- | --------------------------------- |
| 1   | Garrah Thabit Mohammed | A24CS4013  | User Management Subsystem         |
| 2   | Lauza Amru Kasyafa     | A24CS4018  | Product & Market Subsystem        |
| 3   | Saleh Nabil Ahmed      | A24CS0028  | Analytics & Insights Subsystem    |
| 4   | Zeng Yuxi              | A24CS4041  | Communication & Support Subsystem |
| 5   | Zahra Aulia Putri      | A24CS9006  | Service & Asset Sharing Subsystem |

---

## 🛠️ Tech Stack

| Layer             | Technology                    |
| ----------------- | ----------------------------- |
| Frontend (Mobile) | React Native (Expo)           |
| Navigation        | React Navigation              |
| Icons             | Ionicons (@expo/vector-icons) |
| Backend           | Node.js + Express.js          |
| Database          | MySQL                         |
| Version Control   | Git + GitHub                  |

---

## 🧩 System Architecture

- **User Management** — Registration & Login, Profile & Verification, Access Control
- **Product & Market** — Product Listing & Management, Search & Filter, Transaction & Payment
- **Analytics & Insights** — User Activity Dashboard, Sales & Performance, Trust & Safety
- **Communication & Support** — Chat & Messages, Meet-up & Notifications, Help Centre
- **Service & Asset Sharing** — Academic Services, Asset Rental, Booking & Deposit

---

## 🛒 Product & Market Subsystem

**Developer:** Lauza Amru Kasyafa

| Module Number | Module Name | FrontEnd | BackEnd |
| ------------- | ----------- | -------- | ------- |
| 1 | Product Listing & Management Module | • [CreateListingScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/CreateListingScreen.js) <br> • [MyListingsScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/MyListingsScreen.js) <br> • [ProductDetailScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/ProductDetailScreen.js) | ✅ **Implemented (Node + Express + MySQL):** <br> • [server.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/product-backend/server.js) <br> • [productRoutes.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/product-backend/productRoutes.js) <br> • [productController.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/product-backend/productController.js) <br> • [productService.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/product-backend/productService.js) <br> • [db.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/product-backend/db.js) <br> • [schema.sql](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/product-backend/schema.sql) |
| 2 | Search & Filter Module | • [HomeScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/HomeScreen.js) <br> • [ProductCard.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/components/ProductCard.js) | — |
| 3 | Transaction & Payment Module | • [CheckoutScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/CheckoutScreen.js) <br> • [TransactionQRScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/TransactionQRScreen.js) <br> • [WalletScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/WalletScreen.js) <br> • [TopUpScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/TopUpScreen.js) | — |

### Product & Market API Endpoints
| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | /api/products      | List products (supports `?search=` and `?category=`) |
| GET    | /api/products/:id  | Get one product |
| POST   | /api/products      | Create a product |
| PUT    | /api/products/:id  | Update a product |
| DELETE | /api/products/:id  | Delete a product |

---

## 📁 Project Structure

```
UniDeal-high-fidelity/
├── frontend/                       # React Native (Expo) mobile app
│   ├── App.js
│   ├── assets/
│   │   └── logo.png
│   └── src/
│       ├── theme/theme.js
│       ├── data/sampleData.js
│       ├── components/ProductCard.js
│       └── screens/                # 20 screens (Login, Home, Checkout, etc.)
│
├── product-backend/                # Node.js + Express + MySQL API
│   ├── server.js
│   ├── productRoutes.js
│   ├── productController.js
│   ├── productService.js
│   ├── db.js
│   └── schema.sql
│
└── README.md
```

---

## 🚀 Getting Started

### Frontend (Mobile App)
```bash
cd frontend
npm install
npx expo start
```
Start an Android emulator and press **a**, or scan the QR code with the Expo Go app.

### Backend (Product & Market API)
```bash
cd product-backend
npm install
```
Create a `.env` file (see `.env.example`):
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=unideal
PORT=5000
```
Run `schema.sql` in MySQL Workbench to create the `products` table, then start the server:
```bash
node server.js
```
API runs on http://localhost:5000

---

## 📝 License

Developed for educational purposes under the **Application Development Project I** course.
