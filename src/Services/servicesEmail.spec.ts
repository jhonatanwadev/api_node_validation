import servicesEmail from './servicesEmail'

describe('Services Name', () => {

    it('Deve funcionar normalmente', () => {
        const test1 = servicesEmail.validateEmail('jhonatanwa@outlook.com');
        const test2 = servicesEmail.validateEmail('@gmail.com');
        const test3 = servicesEmail.validateEmail('@');
        const test4 = servicesEmail.validateEmail('teste@');
        const test5 = servicesEmail.validateEmail('teste');

        expect(test1).toHaveProperty('message');
        expect(test2).toHaveProperty('message');
        expect(test3).toHaveProperty('message');
        expect(test4).toHaveProperty('message');
        expect(test5).toHaveProperty('message');

        expect(test1.message).toEqual('isValid');
        expect(test2.message).toEqual('isInvalid');
        expect(test3.message).toEqual('isInvalid');
        expect(test4.message).toEqual('isInvalid');
        expect(test5.message).toEqual('isInvalid');
    });
});
