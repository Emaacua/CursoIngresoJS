function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		case "Bariloche":
			mensaje=("Este");
			break;
		case "Cataratas":
			mensaje=("Norte");
			break;
		case "MarDelPlata":
			mensaje=("Oeste");
			break;
		case "Ushuaia":
			mensaje=("Sur");
			break;
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN