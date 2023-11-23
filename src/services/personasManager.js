import fs from 'fs/promises'
import { Mensaje } from '../models/Mensaje.js'


export class MensajesManager{
    
    #route
    constructor(route){
        this.#route = route
    }

    async create(){
        const pojos = JSON.parse(await fs.readFile(this.#route,'utf-8'))
        return pojos
    }

    async findAll(){
        const pojos = JSON.parse(await fs.readFile(this.#route,'utf-8'))
        return pojos
    }
}