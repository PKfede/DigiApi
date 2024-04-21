import {
    Model, CreationOptional, DataTypes, Sequelize,
} from "sequelize"

export class Card extends Model {
    declare id: CreationOptional<number>
    declare name: string
    declare card_type: string
    declare color: string
    declare digivolve_requirement: object
    declare level: number
    declare dP: number
    declare type: string
    declare attribute: string
    declare stage_Level: string
    declare rarity: string
    declare artist: string
    declare card_Number: string
    declare effect: string
    declare inherited_Effect: string
    declare source: string
    declare notes: string
    declare image: string
}

export const initCardModel = (sequelize: Sequelize) => {
    Card.init(
        {

            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: { type: DataTypes.STRING },
            card_type: { type: DataTypes.STRING },
            color: { type: DataTypes.STRING },
            digivolve_requirement: { type: DataTypes.JSON },
            level: { type: DataTypes.INTEGER },
            dP: { type: DataTypes.INTEGER },
            type: { type: DataTypes.STRING },
            attribute: { type: DataTypes.STRING },
            stage_Level: { type: DataTypes.STRING },
            rarity: { type: DataTypes.STRING },
            artist: { type: DataTypes.STRING },
            card_Number: { type: DataTypes.STRING },
            effect: { type: DataTypes.STRING },
            inherited_Effect: { type: DataTypes.STRING },
            source: { type: DataTypes.STRING },
            notes: { type: DataTypes.STRING },
            image: { type: DataTypes.STRING }
        },
        {
            freezeTableName: true,
            sequelize
        }
    )
}