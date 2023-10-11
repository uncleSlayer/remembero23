import { prisma } from 'db'
import { Router } from 'express'

export const journalRouter = Router()

journalRouter.post('/journal/create', async (req, res) => {
    try {
        const journalTitle: string = req.body.journalTitle
        const journalBody: string = req.body.journalBody
        const userEmail: string = req.body.email
        const journalCategory: 'STUDY' | 'WORK' | 'FUN' = req.body.category

        const user = await prisma.user.findFirst({
            where: {
                email: userEmail
            }
        })

        if (!user) {
            return res.status(400).send({
                success: false,
                error: 'user not found'
            })
        }

        await prisma.journal.create({
            data: {
                title: journalTitle,
                body: journalBody,
                category: journalCategory,
                imageOne: 'example.com',
                userId: user.id
            }
        })

        return res.status(201).send({
            success: true,
            message: 'journal created'
        })

    } catch (error) {
        return res.status(400).send({
            success: false,
            error: error
        })
    }
})

journalRouter.get('/journal/all', async (req, res) => {
    const userEmail: string = req.body.email
    const journalCategory: 'STUDY' | 'WORK' | 'FUN' = req.body.category

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail
        }
    })

    if (!user) {
        return res.status(400).send({
            success: false,
            error: 'user not found'
        })
    }

    const journals = await prisma.journal.findMany({
        where: {
            category: journalCategory,
            userId: user.id
        }
    })

    return res.status(200).send({
        success: true,
        message: journals
    })

}) 