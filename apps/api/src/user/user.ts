import { Router } from "express";
import { prisma } from "db"
export const userRouter = Router()


userRouter.post('/user', async (req, res) => {

   const email = req.body
//    const user =  await prisma.user.create({
//         data : {
//             email : email
//         }
//     })
console.log(email);



    return res.send({

        message: "vvhjh"//user.email
    })

})