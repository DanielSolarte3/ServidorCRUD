import {Request, Response } from 'express';

class IndexController{
    public index (req: Request,res: Response){
        res.json({text:'API is /api/clientes'})
    } 
}

export const indexController = new IndexController();