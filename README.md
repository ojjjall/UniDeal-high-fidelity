# 🛍️ UniDeal — High Fidelity Prototype

A high-fidelity prototype of the **UniDeal** student marketplace, built as a cross-platform mobile application for the UTM community.

---

## 📋 About

This repository contains the **high-fidelity prototype** of UniDeal, developed as part of the **Application Development Project I** course. It is a working React Native (Expo) application that demonstrates the complete user experience — navigation, screens, and core flows — for buying, selling, and sharing products and services within Universiti Teknologi Malaysia (UTM).

### Main Functions

- User Registration and Authentication
- Product Listing and Marketplace
- Student Verification
- Chat and Communication
- Service and Asset Sharing
- Wallet, Escrow Payment & QR Handover
- Analytics and Monitoring

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

## 📌 Project Overview

UniDeal is a mobile marketplace designed exclusively for UTM students. The platform enables students to trade products, share services and assets, communicate safely, and access analytical insights within a trusted university environment. This prototype showcases the full interface and navigation using realistic sample data.

---

## 🛠️ Tech Stack

| Layer            | Technology                       |
| ---------------- | -------------------------------- |
| Frontend (Mobile)| React Native (Expo)              |
| Navigation       | React Navigation                 |
| Icons            | Ionicons (@expo/vector-icons)    |
| Backend          | Node.js + Express.js             |
| Database         | MySQL                            |
| Design           | Figma                            |
| Version Control  | Git + GitHub                     |

---

## 🧩 System Architecture

### User Management Subsystem
- User Registration & Login
- Profile & Verification
- Access Control & Authorization

### Product & Market Subsystem
- Product Listing & Management
- Search & Filter
- Transaction & Payment

### Analytics & Insights Subsystem
- User Activity Dashboard
- Sales & Performance
- Trust & Safety Monitoring

### Communication & Support Subsystem
- Chat & Messages
- Meet-up & Notifications
- Help Centre, Dispute & Feedback

### Service & Asset Sharing Subsystem
- Academic Services
- Asset Rental
- Booking & Deposit

---

## 🛒 Product & Market Subsystem

**Developer:** Lauza Amru Kasyafa

| Module Number | Module Name | FrontEnd | BackEnd |
| ------------- | ----------- | -------- | ------- |
| 1 | Product Listing & Management Module | • [CreateListingScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/CreateListingScreen.js) &nbsp; • [MyListingsScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/MyListingsScreen.js) &nbsp; • [ProductDetailScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/ProductDetailScreen.js) | — |
| 2 | Search & Filter Module | • [HomeScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/HomeScreen.js) &nbsp; • [ProductCard.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/components/ProductCard.js) | — |
| 3 | Transaction & Payment Module | • [CheckoutScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/CheckoutScreen.js) &nbsp; • [TransactionQRScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/TransactionQRScreen.js) &nbsp; • [WalletScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/WalletScreen.js) &nbsp; • [TopUpScreen.js](https://github.com/ojjjall/UniDeal-high-fidelity/blob/main/frontend/src/screens/TopUpScreen.js) | — |

---

## 📁 Project Structure

```
UniDeal-high-fidelity/
│
├── frontend/                       # React Native (Expo) mobile app
│   ├── App.js                      # Navigation entry point
│   ├── assets/
│   │   └── logo.png
│   └── src/
│       ├── theme/
│       │   └── theme.js            # Design system (colours, typography)
│       ├── data/
│       │   └── sampleData.js       # Sample content for the prototype
│       ├── components/
│       │   └── ProductCard.js
│       └── screens/
│           ├── LoginScreen.js
│           ├── RegisterScreen.js
│           ├── ForgotPasswordScreen.js
│           ├── HomeScreen.js
│           ├── ProductDetailScreen.js
│           ├── CreateListingScreen.js
│           ├── ServicesScreen.js
│           ├── ChatScreen.js
│           ├── ChatConversationScreen.js
│           ├── ProfileScreen.js
│           ├── CheckoutScreen.js
│           ├── TransactionQRScreen.js
│           ├── MyListingsScreen.js
│           ├── MySalesScreen.js
│           ├── WalletScreen.js
│           ├── TopUpScreen.js
│           ├── VerificationScreen.js
│           ├── NotificationsScreen.js
│           └── HelpCenterScreen.js
│
├── backend/                        # Node.js + Express API
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ✨ Features

### User Management
- User Registration & Login
- Password Recovery
- Profile Management
- Student Verification

### Product Marketplace
- Product Listing & Management
- Search & Category Filter
- Product Details
- Escrow Payment with QR Handover
- Wallet & Top-Up

### Communication
- Chat & Messaging
- Notifications
- Help Centre & Feedback

### Service & Asset Sharing
- Academic Services
- Asset Rental

### Analytics
- Sales & Performance Dashboard

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS)
- Expo CLI (bundled — used via `npx expo`)
- Android Studio with an emulator (or a physical device with the Expo Go app)
- MySQL (for the backend)

### Run the Frontend (Mobile App)
```bash
cd frontend
npm install
npx expo start
```
Then start your Android emulator and press **a**, or scan the QR code with the Expo Go app.

### Run the Backend (Optional API)
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=unideal
PORT=5000
```
Then start the server:
```bash
node server.js
```

---

## 👥 Contributors

- @ojjjall — Project Lead
- Garrah Thabit Mohammed
- Lauza Amru Kasyafa
- Saleh Nabil Ahmed
- Zeng Yuxi
- Zahra Aulia Putri

---

## 📝 License

This project is developed for educational purposes under the **Application Development Project I** course.
