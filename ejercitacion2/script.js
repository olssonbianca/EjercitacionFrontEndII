// Programaremos un pequeño juego interactivo de piedra, papel o tijera. El usuario podrá
// elegir entre una de las 3 opciones y la computadora elegirá al azar otra de las 3 opciones,
// entonces, se mostrará si ganó o perdió. Para realizar esta actividad recordemos las reglas
// de este juego:
// - Piedra gana contra tijera.
// - Tijera gana contra papel.
// - Papel gana contra piedra
let puntajeComputadora = 0;
let puntajeUsuario = 0;

/* ---------------------------------- Juego --------------------------------- */
function jugada(){
        let usuario = parseInt(prompt("Elige tu jugada: 1-Piedra 2-Papel 3-Tijera"))
        let computadora=Math.round(Math.random() * (3-1) + 1); 
        if(usuario == 1 && computadora == 3  || usuario == 3 && computadora == 2 || usuario == 2 && computadora == 1){
            puntajeUsuario++
            alert("gano el usuario")
        } else if(usuario == 3 && computadora == 1  || usuario == 2 && computadora == 3 || usuario == 1 && computadora == 2){
            puntajeComputadora++
            alert("gano el computador")
        }else{
            alert("empate")
        }
}

function validacion(){
    if(puntajeUsuario==3){
        alert("¡Ganaste!")
    }else if(puntajeComputadora==3){
        alert("¡Perdiste!")
    }else if(puntajeComputadora==3&puntajeUsuario==3){
        alert("¡Empate!")
    }
}

function partidas(){
    while(confirm()){
        jugada()
        validacion();
    }
    
}

partidas();
// Ya hemos programado un juego de piedra papel o tijera, pero ahora resulta que no
// queremos dejar las cosas tan a la suerte y decidimos hacer que gane solo el mejor de 3
// juegos.