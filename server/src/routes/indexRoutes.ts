import {Router} from 'express';
import { indexController } from '../controllers/indexController';
import clientesController from '../controllers/clientesController';

class IndexRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
    }

}

const indexRoutes = new IndexRoutes();

//Exportar unicamente el enrutador
export default indexRoutes.router;