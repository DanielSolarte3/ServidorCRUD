import {Router} from 'express';
import clientesController from '../controllers/clientesController';

class ClientesRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', clientesController.ListClientes);
        this.router.get('/:id', clientesController.getCliente);
        this.router.post('/', clientesController.create);
        this.router.delete('/:id', clientesController.delete);
        this.router.put('/:id', clientesController.update);
    }

}

const clientesRoutes = new ClientesRoutes();

//Exportar unicamente el enrutador
export default clientesRoutes.router;