# 🚲 Bicycle Store Application

A **Bicycle Store Management System** built with **Node.js**, **Express**, **TypeScript**, and **MongoDB** using **Mongoose**. This application allows users to manage products (bicycles) and process orders, including CRUD operations, inventory management, and revenue tracking.

---

## ✨ Features

### 🚴 **Product Management**
- Add new bicycles with details such as name, brand, price, type, description, quantity, and stock status.
- View all bicycles with optional search filters (e.g., by name, brand, or type).
- Fetch a specific bicycle by its unique ID.
- Update bicycle details like price, quantity, and stock status.
- Delete bicycles from the inventory.

### 🛒 **Order Management**
- Place an order for bicycles, reducing inventory accordingly.
- Validate product availability and ensure sufficient stock.
- Automatically update stock status when inventory is depleted.

### 💰 **Revenue Tracking**
- Calculate total revenue generated from all orders using MongoDB aggregation.

### 🛠 **Robust Error Handling**
- Validation errors for missing or invalid fields.
- Friendly error messages for not-found resources or insufficient stock.
- Proper status codes and response structures.

---

## 🛠️ Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
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
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/bicycle-store
   ```

4. **Run MongoDB Server**
   Start your local MongoDB instance or ensure your MongoDB Atlas database is running.

5. **Start the Application**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

## 📋 API Endpoints

### 🚴 **Products**
| Method | Endpoint                   | Description                          |
|--------|----------------------------|--------------------------------------|
| POST   | `/api/products`            | Create a new product                |
| GET    | `/api/products`            | Get all products (with filters)     |
| GET    | `/api/products/:productId` | Get a specific product by ID        |
| PUT    | `/api/products/:productId` | Update a product by ID              |
| DELETE | `/api/products/:productId` | Delete a product by ID              |

### 🛒 **Orders**
| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| POST   | `/api/orders`          | Place a new order                   |
| GET    | `/api/orders/revenue`  | Calculate total revenue from orders |


## 🔍 Examples

### Create a New Product
**Request:**
```json
POST /api/products
{
  "name": "TrailBlazer 700",
  "brand": "AdventureCo",
  "price": 800,
  "type": "Mountain",
  "description": "A rugged mountain bike built for challenging trails.",
  "quantity": 15,
  "inStock": true
}
```

**Response:**
```json
{
  "message": "Bicycle created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "TrailBlazer 700",
    "brand": "AdventureCo",
    "price": 800,
    "type": "Mountain",
    "description": "A rugged mountain bike built for challenging trails.",
    "quantity": 15,
    "inStock": true,
    "createdAt": "2024-12-08T10:23:45.123Z",
    "updatedAt": "2024-12-08T10:23:45.123Z"
  }
}
```

### Place an Order
**Request:**
```json
POST /api/orders
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2
}
```

**Response:**
```json
{
  "message": "Order created successfully",
  "success": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 1600,
    "createdAt": "2024-12-08T12:00:00.000Z",
    "updatedAt": "2024-12-08T12:00:00.000Z"
  }
}
```

---

## 📜 License
This project is licensed under the MIT License. 

Feel free to contribute, report issues, or suggest new features! 🚀
