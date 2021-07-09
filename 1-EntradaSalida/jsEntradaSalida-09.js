/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;
	var porcentaje;

	sueldo = document.getElementById("txtIdSueldo"). value;
	sueldo = parseInt(sueldo);

	aumento = sueldo *10/100;

	resultado = aumento +sueldo;

	document.getElementById("txtIdResultado"). value = aumento;
	
	porcentaje = 10

	alert ("el porcentaje es: " + porcentaje + "%");

}
