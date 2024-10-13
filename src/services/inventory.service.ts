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
            const createdInventory = await Inventory.bulkCreate(inventory, { returning: true })

            return createdInventory
        }

    } catch (error) {
        console.log(error);
    }
}

const updateInventory = async (rawInventory: string) => {
    if (!rawInventory) return {message: "Es necesario nuevo inventario txt"}
    const inventory = parseInventoryData(rawInventory)
    try {
        if (inventory) {
            await Inventory.destroy({ truncate: true })
            const createdInventory = await Inventory.bulkCreate(inventory, { returning: true })
            return { data: createdInventory, message: "Base de datos actualizada" }
        } else {
            return { message: "Fallo la actualizacion" }
        }
    } catch (error) {
        console.error("Error al actualizar la base de datos:", error);
        return { message: "Ocurrió un error durante la actualización" };
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

        if (!unityById) return { message: `No se encontró unidad con VIN: ${vinId.toUpperCase()}` }
        else return unityById
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllInventory,
    createInventory,
    getUnityById,
    updateInventory
}