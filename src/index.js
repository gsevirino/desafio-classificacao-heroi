let nomeDoHeroi = "Gislaine";
let batalhasVencidas = 100;
let batalhasPerdidas = 0;

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói ${nomeDoHeroi} tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`;
}

console.log(calcularNivel(batalhasVencidas, batalhasPerdidas));