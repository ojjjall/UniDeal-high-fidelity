# Product & Market Subsystem — Backend

Node.js + Express + MySQL backend for the **Product Listing & Management Module** of UniDeal.
Developer: Lauza Amru Kasyafa

## Architecture (matches the team's Auth backend pattern)
- `db.js` — MySQL connection pool
- `productService.js` — business logic + SQL queries
- `productController.js` — request handlers (validation, responses)
- `productRoutes.js` — REST endpoints
- `server.js` — Express app entry point
- `schema.sql` — database table + sample data

## API Endpoints (base: `/api/products`)
| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | /api/products              | List all products (supports `?search=` and `?category=`) |
| GET    | /api/products/:id          | Get one product |
| POST   | /api/products              | Create a product |
| PUT    | /api/products/:id          | Update a product |
| DELETE | /api/products/:id          | Delete a product |

## Setup
1. `npm install`
2. Create `.env` from `.env.example` and set your MySQL password.
3. In MySQL Workbench, run `schema.sql` to create the `products` table + sample data.
4. `node server.js`  → API runs on http://localhost:5000

## Test (Thunder Client / Postman / browser)
- GET  http://localhost:5000/api/products
- POST http://localhost:5000/api/products  with JSON body:
```json
{ "title": "UTM Hoodie (M)", "category": "Clothing", "condition_grade": "Like New", "price": 35, "description": "Worn twice", "seller_name": "Faiz R." }
```
