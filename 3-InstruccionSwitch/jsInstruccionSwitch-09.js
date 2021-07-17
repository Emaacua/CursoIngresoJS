//Ejercicio 09 switch.
//Emnauel David Acuña.
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioEstadia;
	var aumento20;
	var descuento10;
	var descuento20;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	precioEstadia = 15000;
	aumento10 = precioEstadia + (15000*0.1);
	aumento20 = precioEstadia + (15000*0.2);
	descuento10 = precioEstadia - (15000*0.1);
	descuento20 = precioEstadia - (15000*0.2);

	switch(destinoIngresado){
		case "Bariloche":
			switch (estacionIngresada){
				case "Invierno"://Aumento de 20%
				mensaje=("El precio final es $" + aumento20 + ", El precio tiene un aumento de 20%");
				break;
				case "Verano"://Descuento de 20%
				mensaje=("El precio final es $" + descuento20 + ", El precio tiene un descuento de 20%");
				break;
				default: //Primavera y Otoño con Aumento de 10%
				mensaje=("El precio final es $" + descuento10 + ", El precio tiene un descuento de 10%");
				break;
			}	
			alert(mensaje);
			break;
		case "Cataratas":
			switch (estacionIngresada){
				case "Invierno"://Descuento de 10%
				mensaje=("El precio final es $" + descuento10 + ", El precio tiene un descuento de 10%");
				break;
				default: //Primavera y Otoño con Aumento de 10%
				mensaje=("El precio final es $" + aumento10 + ", El precio tiene un aumento de 10%");
				break;
			}
			alert(mensaje);
			break;
		case "Cordoba":
			switch (estacionIngresada){
				case "Invierno"://Descuento de 10%
				mensaje=("El precio final es $" + descuento10 + ", El precio tiene un descuento de 10%");
				break;
				case "Verano"://Aumento de 10%
				mensaje=("El precio final es $" + aumento10 + ", El precio tiene un aumento de 10%");
				break;
				default: //Primavera y Otoño no tiene descuento
				mensaje=("El precio final es $" + precioEstadia + ", El precio No tiene descuento");
				break;
			}
			alert(mensaje);
			break;
		case "Mar del plata":
			switch (estacionIngresada){
				case "Invierno"://Descuento de 20%
				mensaje=("El precio final es $" + descuento20 + ", El precio tiene un descuento de 20%");
				break;
				case "Verano"://Descuento de 20%
				mensaje=("El precio final es $" + aumento20 + ", El precio tiene un aumento de 20%");
				break;
				default: //Primavera y Otoño con Aumento de 10%
				mensaje=("El precio final es $" + aumento10 + ", El precio tiene un aumento de 10%");
				break;
			}
			alert(mensaje);
			break;
	}
} //FIN DE LA FUNCIÓN