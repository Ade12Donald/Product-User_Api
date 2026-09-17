import express from 'express'
import {createUser, getAllUser, getsingleUser, updateUser, deleteUser} from '../controllers/userContollers.js'

const route = express.Router()

route.post("/", createUser)
route.get("/fetch", getAllUser)
route.get("/fetch_One/:id", getsingleUser)
route.patch("/update/:id", updateUser)
route.delete("/delete/:id", deleteUser)

export default route