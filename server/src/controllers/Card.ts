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
    const where = req.query.where
    const limit = req.query.limit
    const offset = req.query.offset
    console.log(where, limit, offset)
    const list = await listCards(where, limit, offset)

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