import { Router } from "express";
import { createDB, getByVin, getInventory, updateDB } from "../controllers/inventory.controller";
import multer from "multer";

const inventarioRouter = Router()
const upload = multer({ dest: "uploads/" })

inventarioRouter.post("/db", createDB)
inventarioRouter.put("/", upload.single("file"), updateDB)
inventarioRouter.get("/", getInventory)
inventarioRouter.get("/:vin", getByVin)

export default inventarioRouter