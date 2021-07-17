function mostrar()
{
	var edad;
	var estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	

	if(edad <= 17	&&	estadoCivil != "Soltero"){
		alert("Es muy pequeño para No ser soltero");
	}
			

}//FIN DE LA FUNCIÓN