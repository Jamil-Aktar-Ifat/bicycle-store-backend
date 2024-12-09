
# 🚲 Bicycle Store Application

A Bicycle Store Management System built with Node.js, Express, TypeScript, and MongoDB.

---

## ✨ Features

### 🚴 Product Management
- Add new bicycles with details such as name, brand, price, type, description, quantity, and stock status.
- View all bicycles with optional search filters (e.g., by name, brand, or type).
- Fetch a specific bicycle by its unique ID.
- Update bicycle details like price, quantity, and stock status.
- Delete bicycles from the inventory.

### 🛒 Order Management
- Place an order for bicycles, reducing inventory accordingly.
- Validate product availability and ensure sufficient stock.
- Automatically update stock status when inventory is depleted.

### 💰 Revenue Tracking
- Calculate total revenue generated from all orders using MongoDB aggregation.

### 🛠 Robust Error Handling
- Validation errors for missing or invalid fields.
- Friendly error messages for not-found resources or insufficient stock.
- Proper status codes and response structures.

---

## 🛠️ Installation and Setup

### Prerequisites
- **Node.js** (v14+)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)

### Steps to Set Up Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/bicycle-store.git
   cd bicycle-store
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory with the following variables:
     ```bash
     PORT=5000
     DATABASE_URL=mongodb://localhost:27017/bicycle-store
     ```

4. **Run MongoDB Server**
   - Start your local MongoDB instance or ensure your MongoDB Atlas database is running.

5. **Start the Application**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the Application**
   - Open your browser and navigate to:
     ```bash
     http://localhost:5000
     ```

---

## 📋 API Endpoints

### 🚴 Products

| Method | Endpoint                | Description                      |
|--------|-------------------------|----------------------------------|
| POST   | `/api/products`         | Create a new product            |
| GET    | `/api/products`         | Get all products (with filters) |
| GET    | `/api/products/:id`     | Get a specific product by ID    |
| PUT    | `/api/products/:id`     | Update a product by ID          |
| DELETE | `/api/products/:id`     | Delete a product by ID          |

### 🛒 Orders

| Method | Endpoint                | Description                      |
|--------|-------------------------|----------------------------------|
| POST   | `/api/orders`           | Place a new order               |
| GET    | `/api/orders/revenue`   | Calculate total revenue from orders |

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to contribute, report issues, or suggest new features! 🚀
