import Inventory from "../models/inventory.model";
import { parseInventoryData, parseUnityData } from "../utils/parseInventory";
import { promises as fs } from "fs";

const createInventory = async (rawInventory: string) => {
    const inventory = parseInventoryData(rawInventory)
    try {
        const existInventory = await getAllInventory()

        if (existInventory && existInventory.length) {
            return existInventory
        } else {
            const createdInventory = await Inventory.bulkCreate(inventory, {returning: true})

            return createdInventory
        }

    } catch (error) {
        console.log(error);
    }
}

const getAllInventory = async () => {
    try {
        const allInventory = await Inventory.findAll()

        return allInventory
    } catch (error) {
        console.log(error);
    }
}

const getUnityById = async (vinId: string) => {
    try {
        const unityById = await Inventory.findByPk(vinId.toUpperCase())

        if(!unityById) return {message: `No se encontró unidad con VIN: ${vinId.toUpperCase()}`}
        else return unityById
    } catch (error) {
        console.log(error);
    }
}

// const createNewUnity = async (numero: number) => {
//     const rawInventory = await fs.readFile('src/assets/inventario.txt', "utf-8")
//     const unidad = parseUnityData(rawInventory, numero)

//     try {
//         const newUnity = await Inventory.create(unidad)
//         return newUnity
//     } catch (error) {
//         console.log(error);

//     }
// }

export {
    getAllInventory,
    createInventory,
    getUnityById
}