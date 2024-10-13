import { Request, Response } from "express";
import { promises as fs } from "fs";
import { createInventory, getAllInventory, getUnityById, updateInventory } from "../services/inventory.service";
import { parseInventoryData } from "../utils/parseInventory";

const createDB = async (req: Request, res: Response) => {
    try {
        const rawInventory = await fs.readFile('src/assets/inventario.txt', "utf-8")
        const inventoryData = await createInventory(rawInventory)

        res.status(200).json({ data: inventoryData, message: "Base de datos actualizada exítosamente" })
    } catch (error) {
        console.log(error);
    }
}

const updateDB = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(200).json({ message: "No se ha subido ningún archivo" })
        }
        if (req.file.mimetype !== 'text/plain') {
            return res.status(400).json({ message: "El archivo debe ser de tipo .txt" });
        } else {
            const rawInventory = await fs.readFile(req.file.path, "utf-8")
            const inventory = await updateInventory(rawInventory)
            res.status(200).json(inventory)
        }
    } catch (error) {
        console.error("Error en la solicitud de actualización:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

const getInventory = async (req: Request, res: Response) => {
    try {
        const inventoryData = await getAllInventory()

        res.status(200).json({ data: inventoryData })
    } catch (error) {
        console.log(error);
    }
}

const getByVin = async (req: Request, res: Response) => {
    const { vin } = req.params
    try {
        const unityById = await getUnityById(vin)
        res.status(200).json(unityById)
    } catch (error) {
        console.log();
    }
}

export {
    createDB,
    getInventory,
    updateDB,
    getByVin
}