import express from "express";
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import { webRouter } from "./routers/web.router.js";
import { apiRouter } from "./routers/api.router.js";

const app = express()

app.engine('handlebars', handlebars.engine())



const PORT = 8080
const server = app.listen(8080, () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
})

const webSocketServer = new Server(server)

app.use((req,res,next)=>{
    res['notificarNuevoMensaje']= async()=>{
        webSocketServer.emit('mensajes', await mensajesManager.findAll())
    }
    next()
})


app.use('/static', express.static('./static'))
app.use(webRouter)
app.use('/api', apiRouter)

webSocketServer.on('connection', (socket) => {
    console.log(socket.id)
    // console.log(socket.handshake.auth.username)
    // socket.broadcast.emit('nuevoUsuario', socket.handshake.auth.username)


    // socket.emit('mensajes', mensajesManager.verTodos())

    // socket.on('mensaje', async mensaje => {
    //     mensajesManager.guardar({ 
    //         usuario: socket.handshake.auth.username, 
    //         texto: mensaje })

    //     webSocketServer.emit('mensajes', mensajesManager.findAll())
    // })


    // socket.on('disconnecting', () => {
    //     socket.broadcast.emit('usuarioDesconectado', socket.handshake.auth.username)
    // })
})