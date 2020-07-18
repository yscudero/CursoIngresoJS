/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;
	var resul;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resul = numUno + numDos;

	alert("La suma da " + resul);

}

