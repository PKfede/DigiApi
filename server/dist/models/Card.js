"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCardModel = exports.Card = void 0;
const sequelize_1 = require("sequelize");
class Card extends sequelize_1.Model {
}
exports.Card = Card;
const initCardModel = (sequelize) => {
    Card.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: { type: sequelize_1.DataTypes.STRING },
        card_type: { type: sequelize_1.DataTypes.STRING },
        color: { type: sequelize_1.DataTypes.STRING },
        digivolve_requirement: { type: sequelize_1.DataTypes.JSON },
        level: { type: sequelize_1.DataTypes.INTEGER },
        dP: { type: sequelize_1.DataTypes.INTEGER },
        type: { type: sequelize_1.DataTypes.STRING },
        attribute: { type: sequelize_1.DataTypes.STRING },
        stage_Level: { type: sequelize_1.DataTypes.STRING },
        rarity: { type: sequelize_1.DataTypes.STRING },
        artist: { type: sequelize_1.DataTypes.STRING },
        card_Number: { type: sequelize_1.DataTypes.STRING },
        effect: { type: sequelize_1.DataTypes.STRING },
        inherited_Effect: { type: sequelize_1.DataTypes.STRING },
        source: { type: sequelize_1.DataTypes.STRING },
        notes: { type: sequelize_1.DataTypes.STRING },
        image: { type: sequelize_1.DataTypes.STRING }
    }, {
        freezeTableName: true,
        sequelize
    });
};
exports.initCardModel = initCardModel;
