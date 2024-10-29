// exercicio2.test.js
const { indicesMaiorMenor } = require('./exercicio2');

test('encontra índices do maior e menor valor em um array de números', () => {
    expect(indicesMaiorMenor([10, 20, 30, 40, 50, 60, 70])).toEqual({ indiceMaior: 6, indiceMenor: 0 });
});

test('encontra índices em um array com números negativos', () => {
    expect(indicesMaiorMenor([-10, -20, -30, -40])).toEqual({ indiceMaior: 0, indiceMenor: 3 });
});

test('encontra índices em um array com valores iguais', () => {
    expect(indicesMaiorMenor([5, 5, 5, 5])).toEqual({ indiceMaior: 0, indiceMenor: 0 });
});
