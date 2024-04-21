import { Router, Request, Response } from "express";
import { createCard, listCards } from "../services/CardServices";

export const CardRouter = Router()

CardRouter.post("/create", async (req: Request, res: Response) => {
    const cardProperties = req.body
    const cardCreated = await createCard(cardProperties)
    res.statusCode = 201
    res.send(cardCreated)
})

CardRouter.get("/list", async (req: Request, res: Response) => {
    const list = await listCards()
    res.statusCode = 200
    res.send(list)
})