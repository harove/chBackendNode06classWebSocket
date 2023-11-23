import { Router, json } from "express";
import { MensajesManager } from "../services/personasManager.js";

export const apiRouter = Router()

const mensajesManager = new MensajesManager('')

apiRouter.use(json())
apiRouter.post('/mensajes', async()=>{
    const mensaje = req.body
    await mensajesManager.create()
})