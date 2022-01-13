import { Router, Request, Response } from 'express';
import FormatController from './Controllers/FormatController';
import ValidateController from './Controllers/ValidateController';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const users = [
        {
            "name": "Jhonatan Willian",
            "email": "jhonatanwa@outlook.com",
            "age": 22
        },
        {
            "name": "João",
            "email": "joao@outlook.com",
            "age": 30
        },
        {
            "name": "Maria",
            "email": "maria@outlook.com",
            "age": 20
        }
    ]

    return res.json(users).status(200);
});

router.post('/validate/name', ValidateController.name);
router.post('/validate/cpf', ValidateController.cpf);
router.post('/validate/email', ValidateController.email);


router.post('/format/cpf', FormatController.cpf);


export default router;