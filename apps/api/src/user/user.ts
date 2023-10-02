import { Router } from "express";
import { prisma } from "db"
export const userRouter = Router()


userRouter.post('/login', async (req, res) => {

    try {
        const email = req.body.userEmail

        const user = prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            const newUser = await prisma.user.create({
                data: {
                    email: email
                }
            })

            return res.send({
                success: true,
                message: 'new user created'
            })
        } else {
            // login the user
            return
        }

        return res.send({

            message: "vvhjh"//user.email
        })
    } catch (error) {
        return res.status(400).send({
            success: false,
            error: error
        })
    }

})