/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;//reservo espacio para guardar el nombre del usuario
	nombre = prompt ("Ingrese su nombre");//guardo la variable nombre, el tecto que escribio el usuario dentro de la ventana prompt
	document.getElementById("tctIdNombre").value = nombre;//copio el nombre que tengo en la variable de nombre edentro de la ventana

}
/*function mostrar()
{	
	var nombre;
	var mensaje;
	nombre = prompt ("Ingrese su nombre", "Emanuel");
	mensaje ="su nombre es" + nombre;
	document.getElementById("txtIdNombre").Value=nmensaje;

}

function mostrar()
{	
	var nombre;
	var apellido;
	var mensaje;
	nombre = prompt ("Ingrese su nombre", "Emanuel");
	apellido = prompt ("Ingrese su apellido");
	mensaje ="su nombre es" + nombre + "y su apellido es" + apellido;
	document.getElementById("txtIdNombre").Value=nmensaje;

}
*/

