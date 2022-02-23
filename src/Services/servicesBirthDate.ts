

class servicesBirthDate {

    validatebirthDate(birthDateDay: number, birthDateMonth: number, birthDateDaYear: number, rangeMax: number, rangeMin: number) {

        const response = {
            'message': 'isInvalid',
            'age': '',
        };

        let dayBirthDateUser = birthDateDay;
        let monthBirthDateUser = birthDateMonth;
        let yearBirthDateUser = birthDateDaYear;
        let rangeMaxAge = rangeMax;
        let rangeMinAge = rangeMin;
        let dateNow = new Date();

        

        return response;

    }

}

export default new servicesBirthDate();