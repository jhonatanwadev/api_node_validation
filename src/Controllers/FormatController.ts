import { Request, Response } from "express";
import servicesCPF from "../Services/servicesCPF";


class FormatController {

    cpf(req: Request, res: Response) {

        const { cpf } = req.body;

        const response = {
            'message': '',
            'cpf': ''
        };

        const returnValidate = servicesCPF.validateCPF(cpf);

        if (returnValidate.message == 'isInvalid') {
            response.message = returnValidate.message;
            res.json(response);
            return false;
        }

        const cpfUser = servicesCPF.formatCPF(returnValidate.cpf);

        response.message = returnValidate.message;
        response.cpf = cpfUser;
        res.json(response);

    }


}

export default new FormatController();