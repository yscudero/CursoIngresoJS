/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let positivo;
	let negativo;
	let respuesta;
	let num;
	positivo=0;
	negativo=1;
	respuesta='s';

	while(respuesta == 's')
	{
		num= parseInt(prompt("Ingrese un numero: "));
		if(num>=0)
		{
			positivo = positivo + num;
		}
		else
		{
			negativo = negativo * num;
		}
		respuesta=prompt("Ingresa otro? s/n");
	}

	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo; 
	
}//FIN DE LA FUNCIÓN