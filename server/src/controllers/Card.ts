import { Router, Request, Response } from "express";
import { createCard, listCards, updateCard, deleteCard } from "../services/CardServices";

export const CardRouter = Router()

CardRouter.post("/create", async (req: Request, res: Response) => {
    const cardProperties = req.body
    const cardInfo = await createCard(cardProperties)
    res.statusCode = 201
    res.send(cardInfo)
})

CardRouter.get("/list", async (req: Request, res: Response) => {
    const list = await listCards()

    res.statusCode = 200
    res.send(list)
})

CardRouter.put("/update/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const cardInfo = req.body
    const update = await updateCard(cardInfo, Number(id))

    res.statusCode = 200
    res.send(update)
})

CardRouter.delete("/delete/:id", async (req: Request, res: Response) => {
    const id = req.params.id
    const cardDeleted = await deleteCard(Number(id))

    res.statusCode = 200
    res.send(cardDeleted)
})