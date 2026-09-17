import productsModel from "../model/productsModel.js"
import userModel from "../model/userModel.js" 

export const createProduct = async (req, res) => {
    try {
        const { id: sellersId } = req.params
        const { name, description, category, price, image, colour, size, Stock, Quantity } = req.body
        
        const sellerExists = await userModel.findById(sellersId)

        if (!sellerExists) {
            return res.status(404).json({
                "message": "Seller not found. Check the seller ID."
            })
        }

        const newProduct = await productsModel.create({ seller: sellersId, name, description, category, price, image, colour, size, Stock, Quantity })

        res.status(201).json({
            "message": "Product created successfully",
            "data": newProduct
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}

export const getAllProducts = async (req, res) => {
    try {
        const newProduct = await productsModel.find()

        res.status(200).json({
            "message": "Products fetched successfully",
            "data": newProduct
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}

export const userProducts = async (req, res) => {
    try {
        const { id: sellersId } = req.params
        const newProduct = await productsModel.find({ seller: sellersId })

        res.status(200).json({
            "message": "Products fetched successfully",
            "data": newProduct
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}

export const productFilters = async (req, res) => {
    try {
        const { category, Stock, sellersId, minPrice, maxPrice } = req.query
        const filter = {}

        if (category) filter.category = category;
        if (Stock) filter.Stock = Stock;
        if (sellersId) filter.seller = sellersId;

        if (minPrice || maxPrice) {
            filter.price = {}
            if (minPrice) filter.price.$gte = Number(minPrice)
            if (maxPrice) filter.price.$lte = Number(maxPrice)
        }

        const filteredProducts = await productsModel.find(filter)

        res.status(200).json({
            "message": "Products filtered and fetched successfully",
            "data": filteredProducts
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}

export const updateProduct = async (req, res) => {
    try {
        const {sellerId,productId } = req.params
        const { name, description, category, price, image, colour, size, Stock, Quantity } = req.body

         const updatedProduct = await productsModel.findOneAndUpdate({_id: productId, seller: sellerId}, { name, description, category, price, image, colour, size, Stock, Quantity, updatedAt: Date.now() }, {
            runValidators: true,
            new: true
        })

        if(!updatedProduct){
            return res.status(404).json({
            "message": "User Not Found. Check inputed ID"
        })
        }

        res.status(200).json({
            "message": "Product updated successfully",
            "data": updatedProduct
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}

export const deleteProduct = async (req, res) => {
    try {
        const {sellerId,productId } = req.params

         const deletedProduct = await productsModel.findOneAndDelete({_id: productId, seller: sellerId})

         if(!deletedProduct){
            return res.status(404).json({
            "message": "User Not Found. Check inputed ID"
        })
        }

        res.status(200).json({
            "message": "Product deleted successfully",
            "data": deletedProduct
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}