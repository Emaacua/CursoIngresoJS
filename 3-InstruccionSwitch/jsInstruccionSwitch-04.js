function mostrar()
{
var mesDelAño;
mesDelAño =txtIdMes.value;
switch (mesDelAño)
	{
	case "Febrero":
		alert("Tiene 28 dias");
		break;
	case "Abril":
	case "Junio":
	case "septiembre":
	case "noviembre":
		alert("tiene 30 dias");
		break;
	default:
		alert("tiene 31 dias");
		break
	}
}