function mostrar()
{
	let vMes;
	vMes = document.getElementById("txtIdMes").value;
	
	switch(vMes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 dias o mas");
			break;
	}
	
	


}//FIN DE LA FUNCIÓN