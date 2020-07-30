function mostrar()
{
		let vMaximo = 10;
		let vMinimno = 1;
		let vNum;
	
		vNum = Math.round( Math.random() * (vMaximo - vMinimno) + vMinimno);
	
		if (vNum == 9 || vNum == 10) 
		{
			alert (vNum + " Excelente.");
		}
		else if (vNum >= 4 ) 
		{
			alert (vNum +  " APROBÓ.");
		} 
		else 
		{
			alert(vNum + " Vamos, la proxima se puede");
		}
	
}