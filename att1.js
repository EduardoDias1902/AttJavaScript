const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número ', function(numero) {
    if(numero>0){
        console.log("Positivo");
    }
    else if(numero<0){
        console.log("Negativo");
    }
    else{
                console.log("Zero");
    }
    rl.close();
});