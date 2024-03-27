"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClientesController {
    ListClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaClientes = yield new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM Cliente', (err, rows, fields) => {
                    if (err)
                        reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
            });
            res.json(listaClientes);
        });
    }
    getCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM Cliente WHERE idCliente = ?', [req.params.id], (err, rows, fields) => {
                    if (err)
                        reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
            });
            res.json(cliente);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Cliente set ?', [req.body]);
            res.json({ message: 'Client saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM Cliente WHERE idCliente = ?', [req.params.id]);
            res.json({ text: 'deleting client ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE Cliente set ? WHERE idCliente = ?', [req.body, req.params.id]);
            res.json({ text: 'updating client ' + req.params.id });
        });
    }
}
const clientesController = new ClientesController();
exports.default = clientesController;
