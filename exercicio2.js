function indicesMaiorMenor(array) {
    let maiorValor = Math.max(...array);  // Encontra o maior valor
    let menorValor = Math.min(...array);  // Encontra o menor valor

    let indiceMaior = array.indexOf(maiorValor);  // Índice do maior valor
    let indiceMenor = array.indexOf(menorValor);  // Índice do menor valor

    return {
        indiceMaior: indiceMaior,
        indiceMenor: indiceMenor
    };
}

// Testando a função com um array numérico
let numeros = [10, 20, 30, 40, 50, 60, 70];
let resultado = indicesMaiorMenor(numeros);

console.log("O índice do maior valor é: " + resultado.indiceMaior);
console.log("O índice do menor valor é: " + resultado.indiceMenor);
