import { Router } from "express";

export const userRouter = Router()

userRouter.get('/user', (req, res) => {
    return res.send({
        message: 'success'
    })
})