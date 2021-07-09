/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma= precio1 + precio2 + precio3;
    alert("El precio es $ " + suma);
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma= precio1 + precio2 + precio3;
    promedio=suma / 3;
    alert("el promedio es $ " + promedio);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var iva;
    var precioFinal;

    precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma= precio1 + precio2 + precio3;
    iva=suma *21 / 100;
    precioFinal= suma + iva;

    alert("el total es $ " + precioFinal);
}