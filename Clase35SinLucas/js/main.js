// let nombreIngresado   = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// if((nombreIngresado !="") && (apellidoIngresado !="")){
//     alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
// }else{
//     alert("Error: Ingresar nombre y apellido");
// }









/* let acumuladorNotas = 0;
let contadorNotas = 0;
let nota; 

do {
    nota = Number(prompt("Ingrese una nota. Ingrese -1 para finalizar."));
    if (nota >= 1 && nota <=10){
        contadorNotas++;
        acumuladorNotas+=nota; 
    } else {
        break;
    }
} while(nota >= 1 && nota <=10)

document.write("El promedio es: " + acumuladorNotas / (contadorNotas)); */





/* let contador = 0 ;
let dado;

do {
    dado = Math.trunc(Math.random()*6)+1;
    console.log("Dado " + contador + ": " + dado);
    contador++;
} while(dado!==3)

console.log(contador) */






/* Vamos a armar un juego de puntos con dados.
Tendremos dos participantes a los que se les pedirá el nombre antes de comenzar.
Cada participante va a tirar dos dados de 6 caras tres veces.
Donde el mínimo puntaje será: 6 y el máximo 36 en total dependiendo lo que saque. 
Ganará quien saque MENOS puntos.
El programa nos debe avisar qué participante ganó mencionándolo por su nombre. */

let jugador1 = prompt("Por favor, ingrese el nombre del jugador 1")
let jugador2 = prompt("Por favor, Ingrese el nombre del jugador 2")

contador1 = 0
contador2 = 0

puntaje1 = 0
puntaje2 = 0

 do {
    dado1 = Math.trunc(Math.random()*6)+1;
    dado2 = Math.trunc(Math.random()*6)+1;
    console.log("Tirada " + (contador1+1) + ": " + (dado1 + dado2));
    console.log(dado1)
    console.log(dado2)
    contador1++;
    puntaje1 += (dado1 + dado2)
} while(contador1 < 3)
console.log(jugador1 + " saco "+ puntaje1 + " puntos")
do {
    dado3 = Math.trunc(Math.random()*6)+1;
    dado4 = Math.trunc(Math.random()*6)+1;
    console.log("Tirada " + (contador2+1) + ": " + (dado3 + dado4));
    console.log(dado3)
    console.log(dado4)
    contador2++;
    puntaje2 += (dado3 + dado4)
} while(contador2 < 3)
console.log(jugador2 + " saco "+ puntaje2 + " puntos") 

if (puntaje1 < puntaje2){
    console.log("¡Ha ganado: " + jugador1 + " con " + puntaje1 + " puntos!")
    alert("¡Ha ganado: " + jugador1 + " con " + puntaje1 + " puntos!")
} else if (puntaje1 > puntaje2){
    console.log("¡Ha ganado: " + jugador2 + " con " + puntaje2 + " puntos!") 
    alert("¡Ha ganado: " + jugador2 + " con " + puntaje2 + " puntos!")
} else {
    console.log("Empate!!")
    alert("Empate!!")
}



