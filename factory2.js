function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: (preco * 0.1).toFixed(2)
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
