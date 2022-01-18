<?php
//Include Common Files @1-CEC982DE
define("RelativePath", ".");
define("PathToCurrentPage", "/");
define("FileName", "auth_q.php");
include_once(RelativePath . "/Common.php");
include_once(RelativePath . "/Template.php");
include_once(RelativePath . "/Sorter.php");
include_once(RelativePath . "/Navigator.php");
//End Include Common Files

$nRut = CCGetParam("rut","0");
$tDV = CCGetParam("dv","0");
$db = new clsDBusuarios_extranet();
		
		
$sSalida = "";	
			
if (!validaRut("$nRut-$tDV")){
	$sSalida .= "El RUT ingresado no es correcto.";
}
else{
	$existe_email = CCDLookUp("AUTE_email","portal_autentificacion","AUTE_rut=".$nRut,$db);
	if (strlen($existe_email) > 0){
		$tCorreo = explode("@",$existe_email);
		$nLargo = 0;	
		$tComplemento = "";	
		$tUsuario = $tCorreo[0];
		$tDominio = $tCorreo[1];
		$nLargoUsuario	= strlen($tUsuario);
		if($nLargoUsuario > 6){
			$tUsuario = substr($tUsuario,0,4); 
			$nLargo = 4;
		}
		else{
			$tUsuario = substr($tUsuario,0,2); 
			$nLargo = 2;
		}
		while($nLargo < $nLargoUsuario){
			$tComplemento .= "x";
			$nLargo++;
		}
		
		
		
		$sSalida .= $tUsuario.$tComplemento."@".$tDominio;
	}
	else{
		$sSalida .= "El rut ingresado no tiene correo electrónico registrado";
	}
}

echo $sSalida;
?>