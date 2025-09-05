# Backend-for-Inventory-Billing-Management-System

This is a **Node.js + Express + MongoDB** backend for a simple Inventory and Billing Management System.  
It allows small businesses to manage products, customers, vendors, and basic transactions.

## **Features**

### 1. User Authentication
- Register / Login with email & password
- JWT-based authentication
- Each business user manages their own data

### 2. Product Management
- Add, edit, delete, and list products
- Stock tracking (increase/decrease)
- Search products by name or category

### 3. Customer & Vendor Management
- Add, edit, delete customers and vendors
- List and search functionality

### 4. Transaction Management
- Record sales (to customers) and purchases (from vendors)
- Automatically updates product stock
- Calculates total amounts

### 5. Reports
- List all transactions with filters (date, type)
- Current inventory with stock levels
- Customer/vendor transaction history

---

## **Technologies Used**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- dotenv for environment variables

## **Environment Variables**
Create a `.env` file in the root folder and add:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret


---

## **Run the Project**

```bash
# Install dependencies
npm install

# Start server in dev mode
npm run dev
```
## **Postman Collection**

-You can import the Postman collection to test all API endpoints:

https://web.postman.co/workspace/My-Workspace~04fadf19-adfd-45ec-8983-b90f3f2f9c08/collection/39075050-173a2394-3a46-46dd-9e97-b1acbe8761b2?action=share&source=copy-link&creator=39075050

## **Postman API Screenshots**
![Alt Text](https://github.com/Prabh7170/Backend-for-Inventory-Billing-Management-System/blob/6905e70bf90414c615a6f153d4f1bde0cafeb9b5/Screenshot%20(172).png)
![Alt Text]()

