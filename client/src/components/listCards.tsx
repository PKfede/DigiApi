import React, { Fragment, useEffect, useState } from "react";

interface Card {
    id: number
    name: string
    card_type: string
    color: string
    digivolve_requirement: object
    level: number
    dP: number
    type: string
    attribute: string
    stage_Level: string
    rarity: string
    artist: string
    card_Number: string
    effect: string
    inherited_Effect: string
    source: string
    notes: string
    image: string
}


const ListCards = () => {
    const [cards, setCards] = useState<Card[]>([])

    const getCards = async () => {
        try {
            const response = await fetch("http://localhost:3000/card/list")
            const jsonData = await response.json()

            console.log(cards)

            setCards(jsonData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <Fragment>
            <h1>List Cards</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>dp</th>
                        <th>color</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        cards.map(card => (
                            <tr key={card.id}>
                                <td>{card.name}</td>
                                <td>{card.dP}</td>
                                <td>{card.color}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </Fragment>
    )

}


export default ListCards