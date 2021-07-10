function mostrar()
{
	var edad;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13){
		alert("es niño");
	}
	else if(edad < 17){
		alert("La persona es adolecente");	
		}
		else{
			alert("La persona es adulto");
		}

}