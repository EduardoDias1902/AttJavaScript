const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite nota 1 ', function(nota1) {
    rl.question('Digite nota 2 ', function(nota2) {
        rl.question('Digite nota 3 ', function(nota3) {
            const n1= parseInt(nota1)
            const n2= parseInt(nota2)
            const n3= parseInt(nota3)
            const soma=n1+n2+n3
            const media=soma/3

    if(media<3 ){
        console.log("Reprovado");
    }
    else if(media>3 && media<6){
        console.log("Exame");
    }
    else if(media>6){
        console.log("Aprovado");
    }
    rl.close();
        })
    })
})