let pontuacao= herois ("Maria", 100 , 18)
pontuacao = herois ("joao", 1000 , 15)
pontuacao = herois ("sansão", 3 , 15)
function herois (name, vitorias , derrotas){
    let ranking = vitorias - derrotas
    if(ranking <10 ){
        console.log(`Parabéns, ${name} Voce esta no nivel ferro com o saldo de ${ranking} vitorias`)}
    else if(ranking< 20 & ranking >10 ){
        console.log(`Parabéns, ${name} Voce esta no nivel bronze com o saldo de ${ranking} vitorias`)}
    else if(ranking<= 50 & ranking >=21 ){
        console.log(`Parabéns, ${name} Voce esta no nivel prata com o saldo de ${ranking} vitorias`)}
    else if(ranking <= 80 & ranking >= 51 ){
        console.log(`Parabéns, ${name} Voce esta no nivel ouro com o saldo de ${ranking} vitorias`)}
    else if(ranking <= 90 & ranking >= 81 ){
         console.log(`Parabéns, ${name} Voce esta no nivel diamante com o saldo de ${ranking} vitorias`)}
    else if(ranking <= 100 & ranking >= 91 ){
        console.log(`Parabéns, ${name} Voce esta no nivel lendário com o saldo de ${ranking} vitorias`)}
    else if(ranking >= 101 ){
        console.log(`Parabéns, ${name} Voce esta no nivel imortal com o saldo de ${ranking} vitorias`)}}

