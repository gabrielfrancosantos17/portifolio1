function horas(){
let agora = new Date;
let hora = agora.getHours();
let min = agora.getMinutes();

let mostrar = document.getElementById('resultado');

mostrar.innerHTML = `<p>Agora são ${hora}:${min}</p>`;

if (hora >= "12" && min >= "20"){
    mostrar.innerHTML = `<p>Agora são ${hora}:${min}</p>
    <img src="coleiocucomfita.jpg">`

}

}