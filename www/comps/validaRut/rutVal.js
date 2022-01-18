 function revisarDigito( dvr )
{	
	dv = dvr + ""	
	if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k'  && dv != 'K')	
	{		
		//alert("Debe ingresar un digito verificador valido");		
		//window.document.registro_ate.rut.focus();		
		//window.document.registro_ate.rut.select();		
		return false;	
	}	
	return true;
}

function revisarDigito2( crut )
{	
	largo = crut.length;	
	if ( largo < 2 )	
	{		
		//alert("Debe ingresar el rut completo")		
		//window.document.registro_ate.rut.focus();		
		//window.document.registro_ate.rut.select();		
		return false;	
	}	
	if ( largo > 2 )		
		rut = crut.substring(0, largo - 1);	
	else		
		rut = crut.charAt(0);	
	dv = crut.charAt(largo-1);	
	revisarDigito( dv );	

	if ( rut == null || dv == null )
		return 0	

	var dvr = '0'	
	suma = 0	
	mul  = 2	

	for (z= rut.length -1 ; z >= 0; z--)	
	{	
		suma = suma + rut.charAt(z) * mul		
		if (mul == 7)			
			mul = 2		
		else    			
			mul++	
	}	
	res = suma % 11	
	if (res==1)		
		dvr = 'k'	
	else if (res==0)		
		dvr = '0'	
	else	
	{		
		dvi = 11-res		
		dvr = dvi + ""	
	}
	if ( dvr != dv.toLowerCase() )	
	{		
		//alert("EL rut es incorrecto")		
		//window.document.registro_ate.rut.focus();		
		//window.document.registro_ate.rut.select();		
		return false	
	}

	return true
}

function RutVal(texto)
{	
	var tmpstr = "";	
	for ( z=0; z < texto.length ; z++ )		
		if ( texto.charAt(z) != ' ' && texto.charAt(z) != '.' && texto.charAt(z) != '-' )
			tmpstr = tmpstr + texto.charAt(z);	
	texto = tmpstr;	
	largo = texto.length;	

	if ( largo < 2 )	
	{		
		//alert("Debe ingresar el rut completo")		
		//window.document.registro_ate.rut.focus();		
		//window.document.registro_ate.rut.select();		
		return false;	
	}	

	for (z=0; z < largo ; z++ )	
	{			
		if ( texto.charAt(z) !="0" && texto.charAt(z) != "1" && texto.charAt(z) !="2" && texto.charAt(z) != "3" && texto.charAt(z) != "4" && texto.charAt(z) !="5" && texto.charAt(z) != "6" && texto.charAt(z) != "7" && texto.charAt(z) !="8" && texto.charAt(z) != "9" && texto.charAt(z) !="k" && texto.charAt(z) != "K" )
 		{			
			//alert("El valor ingresado no corresponde a un R.U.T valido");			
			//window.document.registro_ate.rut.focus();			
			//window.document.registro_ate.rut.select();			
			return false;		
		}	
	}	

	var invertido = "";	
	for ( z=(largo-1),j=0; z>=0; z--,j++ )		
		invertido = invertido + texto.charAt(z);	
	var dtexto = "";	
	dtexto = dtexto + invertido.charAt(0);	
	dtexto = dtexto + '-';	
	cnt = 0;	

	for ( z=1,j=2; z<largo; z++,j++ )	
	{		
				
		if ( cnt == 3 )		
		{			
			dtexto = dtexto + '.';			
			j++;			
			dtexto = dtexto + invertido.charAt(z);			
			cnt = 1;		
		}		
		else		
		{				
			dtexto = dtexto + invertido.charAt(z);			
			cnt++;		
		}	
	}	

	invertido = "";	
	for ( z=(dtexto.length-1),j=0; z>=0; z--,j++ )		
		invertido = invertido + dtexto.charAt(z);	

	window.document.getElementById('rut1').value = invertido.toUpperCase().replace(/\./g,"").replace(/\-/g,"");

	if ( revisarDigito2(texto) )		
		return true;	

	return false;
}