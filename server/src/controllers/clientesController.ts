import {Request, Response } from 'express';

import pool from '../database';

class ClientesController{
    public async ListClientes (req: Request,res: Response){
        const listaClientes=await new Promise<any>((resolve, reject) => {
            pool.query('SELECT * FROM Cliente',
                (err: any, rows: any, fields: any) => {
                    if (err) reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
        });
        res.json(listaClientes);
    } 

    public async getCliente(req: Request, res:Response){
        const cliente = await new Promise<any>((resolve, reject) => {
                pool.query('SELECT * FROM Cliente WHERE idCliente = ?', [req.params.id],
                    (err: any, rows: any, fields: any) => {
                        if (err) reject(err); // En caso de error, resolvemos la Promise con error
                        resolve(rows); // Si no, resolvemos con el resultado
                    });
            });
        res.json(cliente);
    }

    public async create (req: Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO Cliente set ?', [req.body])
        res.json({message: 'Client saved'});
    }

    public async delete (req: Request, res:Response){
        await pool.query('DELETE FROM Cliente WHERE idCliente = ?', [req.params.id])
        res.json({text: 'deleting client '+req.params.id});
    }

    public async update (req: Request, res:Response){
        await pool.query('UPDATE Cliente set ? WHERE idCliente = ?',[req.body, req.params.id]);
        res.json({text: 'updating client '+req.params.id});
    }
}

const clientesController = new ClientesController();
export default clientesController;