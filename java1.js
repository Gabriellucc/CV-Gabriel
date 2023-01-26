/**

document.getElementById("boton") .onclick = function () {
console.log("capturamos el evento click");
document.getElementById('demo').innerHTML = 'Aparece esto';

}
**/
document.getElementById("boton").addEventListener('click', function() {
	console.log("Hola mundo desde eventlistener");
	document.getElementById("demo").innerHTML ='cambiamos el texto por esto';
});

document.getElementById("boton-fondocolor").addEventListener('click', function() {
	console.log("cambio  color del fondo desde eventlistener");
	document.body.style.backgroundColor = '#FF0000';
});

document.getElementById("boton-borrartexto").addEventListener('click', function() {
	console.log("borro el texto desde eventlistener");
	document.getElementById('demo').style.display = 'none';
});

//comentario de 1 linea

/**
comentario de varias lineas

**/

console.log("Hola Mundo");

let num1 =43;
let num2 =5;

let resultado = num1 + num2;

console.log ("La suma de ambos numeros es " + resultado);
