    let cont_sorte = 0;
    let cont_azar = 0;
    let supersorte = 0;

function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);



    if (num == 67){
        supersorte++; 
        let mostrar = document.getElementById('resultado');
     mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                         <p>Azar: ${cont_azar}</p>
                         <p>Secret: ${supersorte}</p>
                          <img src="Davi_Brito_.webp">`;
    }

    if (num > 68){
        cont_sorte++;
     let mostrar = document.getElementById('resultado');
     mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                         <p>Azar: ${cont_azar}</p>
                        <p>Secret: ${supersorte}</p>
                         <img src="unnamed.png">`;
    } else if (num < 66) {
        cont_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                             <p>Azar: ${cont_azar}</p>
                            <p>Secret: ${supersorte}</p>
                             <img src="images.png">`;
    }
}