/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let vNum1=40;
	let vNum2=20;
	let vResul;

	vNum1 = document.getElementById("txtIdNumeroUno").value;
	vNum1 = parseInt(vNum1);
	vNum2 = parseInt( document.getElementById("txtIdNumeroDos").value );
	vResul = vNum1 + vNum2;

	alert("La suma es: "+vResul);

}

function restar()
{  let vNumero1;
	let vNumero2;
	let vResul;

	vNumero1 = document.getElementById("txtIdNumeroUno").value;
	vNumero1 = parseInt(vNumero1);
	vNumero2 = parseInt( document.getElementById("txtIdNumeroDos").value );

	vResul = vNumero1 - vNumero2;

	alert("La resta es: "+vResul);

}

function multiplicar()
{ 
	let vNumero1;
	let vNumero2;
	let vResul;

	vNumero1 = document.getElementById("txtIdNumeroUno").value;
	vNumero1 = parseInt(vNumero1);
	vNumero2 = parseInt( document.getElementById("txtIdNumeroDos").value );

	vResul = vNumero1 * vNumero2;

	alert("La multiplicacion es: "+vResul);	
}

function dividir()
{
	let vNumero1;
	let vNumero2;
	let vResul;

	vNumero1 = document.getElementById("txtIdNumeroUno").value;
	vNumero1 = parseFloat(vNumero1);
	vNumero2 = parseFloat( document.getElementById("txtIdNumeroDos").value );

	vResul = vNumero1 / vNumero2;

	alert("La division es: "+ vResul.toFixed(2));	
}

