
class ServicesEmail {

    validateEmail(email: string) {

        const response = {
            'message': 'isInvalid',
            'email': email
        };


        if (email.length <= 0) {
            return response;
        }

        if (email.indexOf("@") < 0) {
            return response;
        }

        if (email.indexOf(" ") >= 0) {
            return response;
        }

        let splitEmail = email.split('@');

        if (splitEmail[1].indexOf(".") < 0) {
            return response;
        }

        if (splitEmail[0] == '') {
            return response;
        }

        response.message = "isValid";

        return response;

    }

}

export default new ServicesEmail();
