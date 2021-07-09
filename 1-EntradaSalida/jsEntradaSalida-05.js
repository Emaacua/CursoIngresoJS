/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var mensaje;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	mensaje="usted se llama  "+nombre+" y tiene "+edad+" años";
	alert(mensaje);


/*var altura;
	salida de datos
	alert("ok");
	alert(altura);
	alert("la altura es" + altura);

	document.getElementById("idExistente").value="";
	document.getElementById("idExistente").value=altura;
	document.getElementById("idExistente").value="la altura es:" + altura;
*/


}

