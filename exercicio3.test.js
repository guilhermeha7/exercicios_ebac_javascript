// exercicio3.test.js
const { somaMultiplosDe5e7 } = require('./exercicio3');

test('calcula a soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {
    expect(somaMultiplosDe5e7()).toBe(156361);
});
