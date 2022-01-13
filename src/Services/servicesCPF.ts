import { Request, Response } from "express";



class ServicesCPF {

    formatCPF(cpf: String) {

        let cpfUser = cpf.replace(/\.|-/gm, '');

        const cpfFormat = cpfUser.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

        return cpfFormat;

    }

    validateCPF(cpf: String) {

        const cpfUser = cpf.replace(/\.|-/gm, '');;

        const response = {
            'message': 'isInvalid',
            'cpf': cpfUser
        };

        let sum;
        let rest;
        sum = 0;

        // Verificação basica se o cpfUser é zerado
        if (cpfUser == "00000000000") {
            return response;
        }

        // Captura os caracteres da posição 1 até 9
        // Multiplica o caractere da posição 1 até 9 de 10 até 2 Ex( 5 x 10, 2 x 9, 4 x 8... Caractere do cpfUser x até o 2  )
        // Conforme ele captura e multiplica ele já faz a soma total dos resultados
        for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpfUser.substring(i - 1, i)) * (11 - i);

        // O resultado total é multiplicado por 10 e divido por 11 e capturamos o resto da divisão que o resultado terá que ser igual ao primeiro digíto verificador ( Caso for igual a 10 ou 11 é inválido )
        rest = (sum * 10) % 11;

        // Verificação do valor do resto com 10 ou 11
        if ((rest == 10) || (rest == 11)) rest = 0;
        if (rest != parseInt(cpfUser.substring(9, 10))) {
            return response;
        }

        // Captura os caracteres da posição 1 até 10
        // Multiplica o caractere da posição 1 até 10 de 11 até 2 Ex( 5 x 12, 2 x 11, 4 x 10... Caractere do cpfUser x até o 2  )
        // Conforme ele captura e multiplica ele já faz a soma total dos resultados
        sum = 0;
        for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpfUser.substring(i - 1, i)) * (12 - i);

        // O resultado total é multiplicado por 10 e divido por 11 e capturamos o resto da divisão que o resultado terá que ser igual ao segundo digíto verificador ( Caso for igual a 10 ou 11 é inválido )
        rest = (sum * 10) % 11;

        // Verificação do valor do resto com 10 ou 11
        if ((rest == 10) || (rest == 11)) rest = 0;
        if (rest != parseInt(cpfUser.substring(10, 11))) {
            return response;
        }


        response.message = "isValid";

        return response;

    }

}

export default new ServicesCPF();