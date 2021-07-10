function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
		if(edad >= 18){
			alert("La persona es mayor");
		}
		else{
			alert("La persona es menor de edad");
		}

}