function somaMultiplosDe5e7() {
    let soma = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

console.log(somaMultiplosDe5e7());

module.exports = { somaMultiplosDe5e7 };