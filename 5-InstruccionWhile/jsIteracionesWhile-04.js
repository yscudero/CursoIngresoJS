/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	
		let numeroIngresado;
		
		
		do {
			numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

		} while(numeroIngresado < 0 || numeroIngresado > 9 ||isNaN(numeroIngresado));
	
		document.getElementById("txtIdNumero").value = `El dato es correcto, el número valido es ${numeroIngresado} `;
		

	/*
	let num;
	//num = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	do
	{
		num = parseInt(prompt("ingrese un número entre 0 y 10."));
	}while(!(num>=0 && num<=9));
	*/
	
}//FIN DE LA FUNCIÓN