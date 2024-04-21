import dotenv from "dotenv"
import { initSequelize } from "../db/models/index"
import { CardRouter } from "../controllers/Card"

dotenv.config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bp = require('body-parser')

const db_name = <string>process.env.DB_NAME
const db_username = <string>process.env.DB_USERNAME
const db_password = <string>process.env.DB_PASSWORD
const db_host = <string>process.env.DB_HOST


app.listen(PORT, () => {
    try {
        initSequelize(db_name, db_username, db_password, db_host)
        console.log(`server has started port ${PORT}`)

    } catch (error) {
        console.error(error)
        process.abort()
    }

})

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


//Routes

app.use("/card", CardRouter)