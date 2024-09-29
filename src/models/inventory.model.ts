import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Inventory = sequelize.define("Inventory",{
    vinId: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    client: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    pre: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    ubi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fila: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    serie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    turno: {
        type: DataTypes.STRING,
        defaultValue: "-"
    }
})

export default Inventory