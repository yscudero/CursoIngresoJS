function mostrar()
{
  let vEdad;

  vEdad = parseInt(document.getElementById("txtIdEdad").value);

  if(vEdad < 13)
  {
	alert("Es Niño");
  }
  else if(vEdad < 18 )
  {
		alert("Es adolescente");
  }
  else if(vEdad < 65)
  {
	    alert("Es mayor");
  }
  else 
  {
	  alert("Es adulto mayor");
  }
 
}//FIN DE LA FUNCIÓN