import { Card } from "../db/models/Card";

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
        const list = await Card.findAll()
        return list
    } catch (error) {
        console.error(error)
    }
}