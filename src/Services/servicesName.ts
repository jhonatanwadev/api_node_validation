

class ServicesName {

    validateName(nameUser: string) {

        const regex = /[0-9]/;
        let checkValidate = true;
        let name = nameUser;

        const response = {
            'message': 'isInvalid',
            'name': name
        };

        //Verifica se o nome tem números
        if (regex.test(name)) {
            return response;
        }

        // //Verifica se o nome é maior que 55 caracteres, menor que 3 ou igual 0
        if (name.length > 55 || name.length < 3 || name.length == 0) {
            return response;
        }

        response.message = "isValid";

        return response;

    }

}

export default new ServicesName();