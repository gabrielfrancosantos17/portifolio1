function calcular (){
    let nota1trim = Number (prompt("Qual sua nota do 1 trimestre:"));
    let nota2trim = Number (prompt("Qual sua nota do 2 trimestre:"));
    let resultado =180 -(nota1trim+nota2trim);
    

    if (resultado <= 0 ){
      alert ("Parabéns! você está aprovado por nota!!!");
    } else {
        alert("Você precisa de " + resultado + " de nota!");
    }

}