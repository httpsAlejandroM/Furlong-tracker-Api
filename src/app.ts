import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import router from "./routes"

const app: Application = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())
app.use(router)

export default app