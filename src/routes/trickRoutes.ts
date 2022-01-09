import express, { Request, Response } from "express";

var trickController = require('../controllers/trickController')

const router = express.Router()


router.get("/getAll", (req: Request, res: Response) => {
    console.log("in trick routes")
    trickController.trickList(req, res)
})

router.get("/:id", (req: Request, res: Response) => {
    console.log("in trick routes")
    trickController.getTrick(req, res)
})


module.exports = router