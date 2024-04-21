import { Card } from "../models/Card";

export const createCard = async (cardProperties: Card
) => {
    try {
        console.log(cardProperties.name)
        // name: string, card_type: string, color: string, digivolve_requirement: object,
        //     level: number, dP: number, type: string, attribute: string, stage_Level: string, rarity: string, artist: string,
        //         card_Number: string, effect: string, inherited_Effect: string, source: string, notes: string, image: string
        const card = await Card.create({ ...cardProperties })
        console.log("Card Created")
        return card
    } catch (error) {
        console.error(error)
    }
}

export const listCards = async () => {
    try {
        const list = await Card.findAll({ nest: true, raw: true, plain: true })
        console.log(list)
        return list
    } catch (error) {
        console.error(error)
    }
}

export const updateCard = async (cardProperties: Card, id: number) => {
    try {

        const update = await Card.update({ ...cardProperties }, { where: { id } })
        const cardInfo = await Card.findByPk(id, { nest: true, raw: true, plain: true })
        console.log(cardInfo?.color)
        return update
    } catch (error) {
        console.error(error)
    }
}

export const deleteCard = async (id: number) => {
    try {
        return await Card.destroy({ where: { id } })
    } catch (error) {
        console.error(error)
    }
}