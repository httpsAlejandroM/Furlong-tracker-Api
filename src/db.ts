import { Sequelize} from "sequelize";

const sequelize = new Sequelize("furlong_inventory", "postgres", "admin",{
    host: "localhost",
    dialect: "postgres",
    logging: false
})

export {
 sequelize
}