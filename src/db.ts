import { Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(`${process.env.DB_URL}`, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false
})


// const sequelize = new Sequelize(`${process.env.DB_URL}`, "",{
//     dialect: "postgres",
//     protocol: "postgres",
//     logging: false
// })


export {
 sequelize
}