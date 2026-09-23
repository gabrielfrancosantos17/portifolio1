function maior(){
let numero1
let numero2

numero1 = Number (prompt("digite seu primeiro numero."));
numero2 = Number (prompt("Digite seu segundo numero."));

if (numero1 > numero2){
    alert ("O numero " + numero1 + " é maior que o numero" + numero2 + ".")
} else if(numero2 > numero1){
    alert ("O numero " + numero2 + "é maior que o numero " + numero2 + ".")
} else {
    alert ("Os numero são iguais")
}
}