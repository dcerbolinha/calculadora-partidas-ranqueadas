function calculadoraRanqueada(vitorias, derrotas){

    let saldoVitorias = parseInt(vitorias) - parseInt(derrotas)

    const niveis = [
        {
            rank: "Ferro",
            range: [0, 10]
        },
        {
            rank: "Bronze",
            range: [11, 20]
        },
        {
            rank: "Prata",
            range: [21, 50]
        },
        {
            rank: "Ouro",
            range: [51, 80]
        },
        {
            rank: "Diamante",
            range: [81, 90]
        },
        {
            rank: "Lendário",
            range: [91, 100]
        },
        {
            rank: "Imortal",
            range: [101, 1000]
        },
    ]

    console.log(defineRank(saldoVitorias, niveis)) 
    
}

function defineRank (saldo, niveis){
    for (let nivel of niveis){
        if(saldo >= nivel.range[0] && saldo <= nivel.range[1]){
            return "O Herói tem de saldo de " + saldo + " e está no nível de " + nivel.rank
        }
    }
}


calculadoraRanqueada(300, 2)