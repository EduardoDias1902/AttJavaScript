const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual temperatura em Celsius para Fahrenheit?',function(temperatura){
    let temp = parseFloat(temperatura);
    temp=(temp*1.8)+32
    console.log(temp)
})