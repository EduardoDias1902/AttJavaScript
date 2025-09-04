const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual número quer calcular o fatorial?',function(numero1)
{   
    let n1= parseInt(numero1);
    i=1;
    limite=numero1-1;
    while(i<=limite){
        n1=n1*i;
        console.log(n1);
        i++;
    }
    rl.close
    }
    
    )