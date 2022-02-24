

class servicesBirthDate {

    validatebirthDate(birthDateDay: number, birthDateMonth: number, birthDateDaYear: number, rangeMax: number, rangeMin: number) {

        const response = {
            'message': 'isInvalid',
            'age': 0,
        };

        let dayBirthDateUser = birthDateDay;
        let monthBirthDateUser = birthDateMonth;
        let yearBirthDateUser = birthDateDaYear;
        let rangeMaxAge = rangeMax;
        let rangeMinAge = rangeMin;
        let dateNow = new Date();
        
        let ageUser = 0;
        let messageRange = '';

        let agePerYear = dateNow.getFullYear() - yearBirthDateUser;
        let monthNow = dateNow.getMonth() + 1;
        let dayNow = dateNow.getDay();

        if(monthNow < monthBirthDateUser) ageUser = agePerYear--;
            else if(monthNow === monthBirthDateUser) dayNow < dayBirthDateUser ? '' : ageUser = agePerYear; 

        //Veirifica se existe um range de idade e se a idade está dentro desse range
        if(rangeMinAge != 0 || rangeMaxAge != 0){
            if (ageUser >= rangeMinAge && ageUser <= rangeMaxAge) {
                messageRange = "User age is within range.";
            } else {
                messageRange = "User age is withou range.";           
            }
        }else{
            messageRange = 'isValid';
        }
        
        response.message = messageRange ?? 'isValid'; 
        response.age = ageUser;

        return response;

    }


}

export default new servicesBirthDate();