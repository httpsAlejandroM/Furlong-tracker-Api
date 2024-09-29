import { Router } from "express";
import { createDB, getByVin, getInventory } from "../controllers/inventory.controller";

const inventarioRouter = Router()

inventarioRouter.post("/db", createDB)
inventarioRouter.get("/", getInventory)
inventarioRouter.get("/:vin", getByVin)
//inventarioRouter.post("/unity", postUnity)

export default inventarioRouter