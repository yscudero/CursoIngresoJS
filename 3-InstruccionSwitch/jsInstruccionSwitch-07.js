function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;

	if(destino == "Bariloche")
	{
		alert("Oeste");
	}
	else if(destino == "Mar del plata")
	{
		alert("Este");
	}
	else if(destino == "Cataratas")
	{
		alert("Norte");
	}
	else //if(destino == "Ushuaia")
	{
		alert("Sur");
	}

/*	else
	{
		alert("Esta provincia no está contemplada");
	}*/
	/*
	switch (destino) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Mar del Plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		default:
			alert("Esta provincia no está contemplada");
			break;
	}

*/

}//FIN DE LA FUNCIÓN