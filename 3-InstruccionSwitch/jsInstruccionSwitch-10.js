//Ejercicio switch 10.
//Emanuel David Acuña.
function mostrar()
{
	var estacion;
	var destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
				mensaje=("Se viaja");
				break;
				default:
				mensaje=("No se viaja");
				break;
			}
			alert(mensaje);
			break;
		case "Verano":
			switch(destino)
			{
				case"Cataratas":
				case "Mar del plata":
				mensaje=("Se viaja");
				break;
				default:
				mensaje=("No se viaja");
				break;
			}
			alert(mensaje);
			break;
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
				mensaje=("Se viaja");
				break;
			}
			alert(mensaje);
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
				mensaje=("No se viaja");
				break;
				default:
				mensaje=("Se viaja");
				break;
			}
			alert(mensaje);
			break;
		
	}
}