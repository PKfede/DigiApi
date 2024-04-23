"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRouter = void 0;
const express_1 = require("express");
const CardServices_1 = require("../services/CardServices");
exports.CardRouter = (0, express_1.Router)();
exports.CardRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardProperties = req.body;
    const cardInfo = yield (0, CardServices_1.createCard)(cardProperties);
    res.statusCode = 201;
    res.send(cardInfo);
}));
exports.CardRouter.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const where = req.query.where;
    const limit = req.query.limit;
    const offset = req.query.offset;
    console.log(where, limit, offset);
    const list = yield (0, CardServices_1.listCards)(where, limit, offset);
    res.statusCode = 200;
    res.send(list);
}));
exports.CardRouter.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const cardInfo = req.body;
    const update = yield (0, CardServices_1.updateCard)(cardInfo, Number(id));
    res.statusCode = 200;
    res.send(update);
}));
exports.CardRouter.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const cardDeleted = yield (0, CardServices_1.deleteCard)(Number(id));
    res.statusCode = 200;
    res.send(cardDeleted);
}));
