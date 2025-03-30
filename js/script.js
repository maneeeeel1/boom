
const cuentaAtras = document.getElementById("countdown");
const resultado = document.getElementById("result");
const reset = document.getElementById("restart");
const numeroUserInput = document.getElementById("userInput");


function iniciarJuego (){
    const numerorandom = Math.floor(Math.random()*3)+1;
    let contador = 5;
    cuentaAtras.innerText =`Cuenta atrás: ${contador}`;

const interval = setInterval(() =>{
    contador --;
    cuentaAtras.innerText =`Cuenta atrás: ${contador}`;
    if (contador === 0) clearInterval(interval);
}, 1000);

new Promise((resolve) =>{
    setTimeout(() => resolve(numerorandom), 5000);
}).then((numeroOK) => {
    const numeroUser = parseInt(numeroUserInput.value);
    let msj = numeroUser === numeroOK
    ? `Has salvado la app, escogiste el ${numeroUser}, y el numero correcto era el ${numeroOK}`
    : `Esta app será destruida, escogiste el ${numeroUser}, y el numero correcto era el ${numeroOK}`

    resultado.innerText = msj;
    reset.style.display = "block";

})

}

numeroUserInput.addEventListener("keydown", (event) =>{
    if (event.key === "Enter"){
        iniciarJuego();
    }
});

numeroUserInput.addEventListener("blur", () =>{
    iniciarJuego();
});

reset.addEventListener("click", () =>{
    location.reload();
});

