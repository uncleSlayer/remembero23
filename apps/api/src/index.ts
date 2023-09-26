import { log } from "console";
import express from "express";
import { userRouter } from "./user/user";

const app = express()
app.use(express.json())
app.use(userRouter)


app.listen(8000, () => log('working'))