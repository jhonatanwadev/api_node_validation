import servicesCPF from './servicesCPF'

describe('Services CPF', () => {

    it('Deve funcionar normalmente', () => {
        const test1 = servicesCPF.validateCPF('05639761601')
        const test2 = servicesCPF.validateCPF('111111111-11');
        expect(test1).toHaveProperty('message');
        expect(test2).toHaveProperty('message');
        expect(test1.message).toEqual('isValid');
        expect(test2.message).toEqual('isInvalid');
    });
});
