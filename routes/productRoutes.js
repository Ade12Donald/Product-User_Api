import express from 'express'
import {createProduct, getAllProducts,userProducts,productFilters,updateProduct,deleteProduct} from '../controllers/productsControllers.js'

const route = express.Router()

route.post("/newProduct/:id", createProduct)
route.get("/fetch_All", getAllProducts)
route.get("/fetch/products/:id", userProducts)
route.get("/fetch/products", productFilters)
route.patch("/update/:sellerId/:productId", updateProduct)
route.delete("/delete/:sellerId/:productId", deleteProduct)

export default route