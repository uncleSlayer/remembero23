import { log } from "console";
import express from "express";
import { userRouter } from "./user/user";
import { journalRouter } from "./user/journal";

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(journalRouter)


app.listen(8000, () => log('app running on port 8000'))