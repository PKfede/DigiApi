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
exports.deleteCard = exports.updateCard = exports.listCards = exports.createCard = void 0;
const Card_1 = require("../models/Card");
const createCard = (cardProperties) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // name: string, card_type: string, color: string, digivolve_requirement: object,
        //     level: number, dP: number, type: string, attribute: string, stage_Level: string, rarity: string, artist: string,
        //         card_Number: string, effect: string, inherited_Effect: string, source: string, notes: string, image: string
        const card = yield Card_1.Card.create(Object.assign({}, cardProperties));
        console.log("Card Created");
        return card;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createCard = createCard;
const listCards = (where, limit, offset) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const object = {
            where
        };
        if (where) {
            object.where = JSON.parse(object.where);
        }
        const list = yield Card_1.Card.findAll({
            where: object.where,
            limit,
            offset,
            nest: true,
            raw: true
        });
        return list;
    }
    catch (error) {
        console.error(error);
    }
});
exports.listCards = listCards;
const updateCard = (cardProperties, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = yield Card_1.Card.update(Object.assign({}, cardProperties), { where: { id } });
        const cardInfo = yield Card_1.Card.findByPk(id, { nest: true, raw: true });
        console.log(cardInfo === null || cardInfo === void 0 ? void 0 : cardInfo.color);
        return update;
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateCard = updateCard;
const deleteCard = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Card_1.Card.destroy({ where: { id } });
    }
    catch (error) {
        console.error(error);
    }
});
exports.deleteCard = deleteCard;
