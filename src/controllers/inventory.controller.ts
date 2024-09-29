import { Request, Response } from "express";
import { promises as fs } from "fs";
import { createInventory, getAllInventory, getUnityById } from "../services/inventory.service";

const createDB = async (req: Request, res: Response) => {
    try {
        const rawInventory = await fs.readFile('src/assets/inventario.txt', "utf-8")
        const inventoryData = await createInventory(rawInventory)

        res.status(200).json({ data: inventoryData, message: "Base de datos actualizada exítosamente" })
    } catch (error) {
        console.log(error);
    }
}

// const postUnity = async (req: Request, res: Response) => {
//     const { numero } = req.query
//     try {
//         const newUnity = await createNewUnity(Number(numero))
//         res.status(200).json(newUnity)
//     } catch (error) {
//         console.log();
//     }
// }

const getInventory = async (req: Request, res: Response) => {
    try {
        const inventoryData = await getAllInventory()

        res.status(200).json({data: inventoryData})
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
    //postUnity
    getByVin
}