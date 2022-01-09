import { Request, Response } from "express";
var trickModel = require("../models/trickModel")

exports.trickList  = (req: Request, res: Response) => {
    console.log("in trick controller")
    res.json(trickModel.getAll())
}

exports.getTrick = (req: Request, res: Response) => {
    console.log("in getTrick controller param: " + req.params.id)
    res.json(trickModel.getTrickById(req.params.id))
}