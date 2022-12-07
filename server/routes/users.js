import express from "express"
import UCTRL from "../controllers/users.js"
const router = express.Router()

router.get("/", UCTRL.fetchUser )

router.post("/new", UCTRL.createUser)

router.delete("/:id", UCTRL.deleteUser)


export default router