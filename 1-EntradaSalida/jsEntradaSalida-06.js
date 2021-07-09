/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
	var resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert ("el resultado es: " + resultado);
	
	//variantes de alert
	//alert("la suma es: " + total);
	//alert(`su total es: ${total}`);

}

