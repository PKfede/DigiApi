"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./models/index");
const Card_1 = require("./controllers/Card");
dotenv_1.default.config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bp = require('body-parser');
const cors = require("cors");
const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
app.listen(PORT, () => {
    try {
        (0, index_1.initSequelize)(db_name, db_username, db_password, db_host);
        console.log(`server has started port ${PORT}`);
    }
    catch (error) {
        console.error(error);
        process.abort();
    }
});
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
//Routes
app.use("/card", Card_1.CardRouter);
