// exercicio1.test.js
const { calcularMDC } = require('./exercicio1');

test('calcula o MDC de 12 e 18', () => {
    expect(calcularMDC(12, 18)).toBe(6);
});

test('calcula o MDC de 48 e 18', () => {
    expect(calcularMDC(48, 18)).toBe(6);
});

test('calcula o MDC de números iguais', () => {
    expect(calcularMDC(7, 7)).toBe(7);
});

test('calcula o MDC quando um número é 0', () => {
    expect(calcularMDC(0, 5)).toBe(5);
});
