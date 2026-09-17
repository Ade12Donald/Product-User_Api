# Online Marketplace / E-commerce REST API

A simple REST API for registering sellers and buyers. Sellers can list products for sale with images, while buyers can search for products or sellers and filter results by criteria such as stock availability, price, and category. All data is stored in a database.

---

## Features
- Authentication — Register and log in as either a seller or a buyer
- Seller capabilities
    - Create, update, and delete product listings (with image upload)
    - View all products they have listed
- Buyer capabilities
    - Search for products or sellers
    - Filter search results by criteria such as stock availability, price range, and category
    - View all products from a specific seller
    
---

## Tech Stack
- Node.js/Express.js
- MongoDB/Mongoose
- Multer & Cloudinary

---
## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- A [MongoDB](https://www.mongodb.com/) database (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account (for image storage)

Note: node_modules and .env are gitignored.

---

## Clone repository 
```bash
git clone https://github.com/Ade12Donald/Product-User_Api/
cd Product-User_Api
```

---

## Installation
```bash
npm install
```
---

## Configure environment variables

Create a .env file in the project root:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Running the Server
```bash
npm start
```

## API Endpoints
_Coming soon — will be added once the routes are finalized._