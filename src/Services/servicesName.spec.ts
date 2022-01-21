import servicesName from './servicesName'

describe('Services Name', () => {

    it('Deve funcionar normalmente', () => {
        const test1 = servicesName.validateName('Jonathan');
        const test2 = servicesName.validateName('234324');
        expect(test1).toHaveProperty('message');
        expect(test2).toHaveProperty('message');
        expect(test1.message).toEqual('isValid');
        expect(test2.message).toEqual('isInvalid');
    });
});
