function calcularMDC(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

let numero1 = 12;
let numero2 = 18;
let resultado = calcularMDC(numero1, numero2);

console.log("O MDC de " + numero1 + " e " + numero2 + " é: " + resultado);
