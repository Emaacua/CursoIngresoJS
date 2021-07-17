function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		case "Bariloche":
			mensaje=("Frio");
			break;
		case "Cataratas":
			mensaje=("Calor");
			break;
		case "MarDelPlata":
			mensaje=("Calor");
			break;
		case "Ushuaia":
			mensaje=("Frio");
			break;
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN