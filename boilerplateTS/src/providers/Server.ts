//const express= require('express'); //NodeJS
import express from 'express';

class Server{
    //Atributos de la clase
    private app: express.Application;
    private port: number;
    private env:string;

    //Metodo constructor
    constructor(appInit:{port:number;env:string;middlewares:any[]}){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddlewares(appInit.middlewares);
    }

    //Cargar los middlewares
    private loadMiddlewares(middlewares:any[]):void{
        middlewares.forEach((middleware:any)=>{
            this.app.use(middleware);
        });
    }

    public async init(){
        this.app.listen(this.port,()=>{
            console.log(`Server: Running @'http://localhost:${this.port}'`);
        })
    }
}

export default Server;