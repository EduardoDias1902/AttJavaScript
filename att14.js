const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('DIgite uma palavra: ', function(palavra){
    {
        const reversa = palavra.split('').reverse('')
        console.log(reversa)
    }
    rl.close();

})
