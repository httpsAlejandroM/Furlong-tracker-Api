import { Router } from "express";
import inventarioRouter from "./inventario.routes";

const router = Router()

router.use("/inventario", inventarioRouter)

export default router