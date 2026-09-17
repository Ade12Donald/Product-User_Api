import userModel from '../model/userModel.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const genSalt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, genSalt)
        const existingEmail = await userModel.findOne({ email });

        if (existingEmail) {
            return res.status(409).json({
                message: "Email already in use"
            });
        }


        const user = await userModel.create({
            name,
            email,
            password: hashedpassword
        })

        res.status(201).json({
            "message": "User created successfully",
            "data": user
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }
}

export const getAllUser = async (req, res) => {
    try {
        const user = await userModel.find()

        if (user == "") {
            return res.status(404).json({
                "message": "No user available",
                "data": user
            })
        }

        res.status(200).json({
            "message": "Users fetched successfully",
            "data": user
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }
}

export const getsingleUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)

        if (!user) {
            return res.status(404).json({
                "message": "User Not Found",
            })
        }

        res.status(200).json({
            "message": "User fetched successfully",
            "data": user
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password } = req.body
        let updateData = {name, email}

        if(password){
            const genSalt = await bcrypt.genSalt(10)
            updateData.password = await bcrypt.hash(password, genSalt)
        }

        const user = await userModel.findByIdAndUpdate(id, updateData, { returnDocument: "after" })

        if (!user) {
            return res.status(404).json({
                "message": "User not Found"
            })
        }

        res.status(200).json({
            "message": "User updated successfully",
            "data": user
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }

}
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await userModel.findByIdAndDelete(id)

        if (!user) {
            return res.status(404).json({
                "message": "User not Found"
            })
        }

        res.status(200).json({
            "message": "User deleted successfully",
            "data": user
        })
    } catch (error) {
        res.status(500).json({
            "message": error.message
        })
    }
}