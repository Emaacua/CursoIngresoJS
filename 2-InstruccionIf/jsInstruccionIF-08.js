function mostrar()
{
	var edad;
	var estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	

	if(edad >= 18	&&	estadoCivil == "Soltero"){
		alert("'Es soltero y no es menor");
	}
			

}//FIN DE LA FUNCIÓN