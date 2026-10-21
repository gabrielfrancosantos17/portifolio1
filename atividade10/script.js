 let mostrar = document.getElementById('resultado');
 
 function estacao (){
    let mes = prompt("Diga o mês por extenso (ex: Setembro):")
   
    mes = mes.toUpperCase();

    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
      mostrar.innerHTML = `<p>A estação do mês é <b> Verão. </b> </p>`
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
      mostrar.innerHTML = `<p>A estação do mês é <b> Outono. </b> </p>`
    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
    mostrar.innerHTML = `<p>A estação do mẽs é <b> Inverno. </b> </p>`
    }
    if (mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO' ){
    mostrar.innerHTML = `<p>A estação do mẽs é <b> Primaveira. </b> </p>`
    }
}