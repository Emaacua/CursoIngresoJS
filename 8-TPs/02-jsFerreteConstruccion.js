/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var calculo1;
var calculo2;


largo = document.getElementById("txtIdLargo").value;
laego = parseInt(largo);

ancho = document.getElementById("txtIdAncho").value;
ancho = parseInt(ancho);

calculo1 = largo * ancho;

calculo2 = calculo1 * 3;

alert("la cantidad de alambre a usar es: " + calculo2 +   " Metros de alambre");


}
function Circulo () 
{
	var radio;
    var calculo1;
    var calculo2;
    var total;

    radio = document.getElementById("txtIdRadio" ).value;
    radio = parseInt(radio);

    calculo1 = radio * 2;
    calculo2 = 3.14 * calculo1;
    total = calculo2 * 3;

    alert("el total de alambre a comprar es: " + total +  " mts");


}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;

    largo = document.getElementById("txtIdLargo").value;
    laego = parseInt(largo);

    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    superficie = largo * ancho;
    cemento = superficie * 2;
    cal = superficie * 3;

    alert("para un contrapiso de: " + superficie + " metros cuadrados se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}