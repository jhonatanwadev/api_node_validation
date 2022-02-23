import { Request, Response } from "express";
import servicesBirthDate from "../Services/servicesBirthDate";
import servicesCPF from "../Services/servicesCPF";
import servicesEmail from "../Services/servicesEmail";
import servicesName from "../Services/servicesName";

class ValidateController {

    name(req: Request, res: Response) {

        const { name } = req.body;

        const checkName = servicesName.validateName(name);

        return res.json(checkName);

    }

    cpf(req: Request, res: Response) {

        const { cpf } = req.body;

        const response = servicesCPF.validateCPF(cpf);

        return res.json(response);

    }

    email(req: Request, res: Response) {

        const { email } = req.body;

        const response = servicesEmail.validateEmail(email);

        return res.json(response);
    }

    birthDate(req: Request, res: Response){

        //Range Max de idade permitido e Range Min de idade permitida, caso não tenha nenhum range enviar valor NULL
        const { birthDateDay, birthDateMonth, birthDateDaYear, rangeMax, rangeMin } = req.body;

        const response = servicesBirthDate.validatebirthDate(birthDateDay, birthDateMonth, birthDateDaYear, rangeMax, rangeMin);

        return res.json(response);

    }
    
}

export default new ValidateController();