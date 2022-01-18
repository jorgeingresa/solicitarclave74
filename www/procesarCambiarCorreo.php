<?php
//Include Common Files @1-4CFCA459
define("RelativePath", ".");
define("PathToCurrentPage", "/");
define("FileName", "procesarCambiarCorreo.php");
include_once(RelativePath . "/Common.php");
include_once(RelativePath . "/Template.php");
include_once(RelativePath . "/Sorter.php");
include_once(RelativePath . "/Navigator.php");
include_once("recaptchalib.php");
include("f_redirect.php");


//var_dump($_POST);

/* Inicio Validacion de rut */    
$continuar_rut  = 0;   // control de validacion de rut, si no es valido no se llama web service
$rut 				= CCGetParam("aute_rut"); // campo rut
$dv 				= CCGetParam("txt_dv"); // campo dv
$rut 				= str_replace(".","",$rut);
$email 				= CCGetParam("aute_email");
$conf_email 		= CCGetParam("txt_email_conf");
$pregunta  			=  str_replace(" ", "", CCGetParam("aute_pregunta"));
$respuesta 			=  str_replace(" ", "", CCGetParam("aute_respuesta"));
$fecha_nacimiento 	= CCGetParam("lb_dia");
$fecha_nacimiento 	.= "/".CCGetParam("lb_mes");
$fecha_nacimiento 	.= "/".CCGetParam("lb_ano");
$acepto 			= CCGetParam("chk_acepto");
$secret 			= "6LdG994UAAAAABqp7qXGL9TJphbSg0_6qD_EIR27";
$ch 				= CCGetParam("g-recaptcha-response",0);
$tErrores			= "";
$tErrorGeneral 		= "";
$tErrorMostrar		= "";
$tErrorFecha 		= "";
$tErroresRespuesta	= "";
// empty response
$response = null;

 
// check secret key
$reCaptcha = new ReCaptcha($secret);


$db = new clsDBusuarios_extranet();
$db2 = new clsDBusuarios_extranet();
$errores = 0 ; // flag de errores para el formulario, si es 1 se agrega un mensaje a component->errors
global $Tpl;


/*** inicio validacion cpatcha ****/
 

if ($ch) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $ch
    );
}
else{
	$tErrores .="<br>Debes indicar que no eres un robot.";
	$continuar_rut = 0;
	$errores = 1;
	
}
/*
if ($response == null || !$response->success) {
	$tErrores .="<br>Debes indicar que no eres un robot..";
	$continuar_rut = 0;
	$errores = 1;
}
*/
/*** fin validación captcha ****/

	
	// Validacion tipo datos
	if (strlen($rut) > 0) // Escribe rut
	{
		$continuar_rut = 1;
	}
	else
	{
		$continuar_rut = 0;
		$errores = 1;
		$tErrores .="<br>Escribe tu RUT.";	
	}

	if (strlen($dv) > 0) // Escribe dv
	{
		$continuar_rut = 1;
	}
	else
	{
		$continuar_rut = 0;
		$errores = 1;
		$tErrores .="<br>Escribe tu Dígito Verificador.";	
	}
	
	if ($continuar_rut) // El rut es correcto
	{
		if (!is_numeric($rut))
		{
			$continuar_rut = 0;
			$errores = 1;
			$tErrores .="<br>El RUT ingresado no es válido.";	
		}
	}

	if ($continuar_rut)
	{
		if ((!is_numeric($dv) && ( $dv != 'k') && ($dv != 'K')) || strlen($dv) > 1)
		{
			$continuar_rut = 0;
			$errores = 1;
			$tErrores .="<br>El Dígito Verificador no es válido.";	
		}
	} 

	// Si validan los datos, verificar rut/dv
	if ($continuar_rut)
	{
		$rut_completo = $rut."-".$dv; // rut con guion para funcion validaRut
		if (!validaRut($rut_completo))	
		{
			$continuar_rut = 0;
			$errores = 1;
			$tErrores .="<br>El RUT ingresado es incorrecto.";	
		}
	}

	/* Término Validacion de rut */   

	/* Inicio Validacion de Email */
	
	if ( strlen($email) < 1)
	{
		$errores = 1;
		$tErrores .="<br>Ingresa tu E-mail.";
	}
	else if ( $email != $conf_email )
	{
		$errores = 1;
		$tErrores .="<br>Los E-mail ingresados son distintos.";
	}
	
	if(!preg_match ("/^[\w\.-]{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]+$/", $email)){
		$errores = 1;
		$tErrores .="<br>Ingresa un E-mail valido.";
		
	}
	
	if(!preg_match ("/^[\w\.-]{1,}\@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]+$/", $conf_email)){
		$errores = 1;
		$tErrores .="<br>Ingresa un E-mail de confirmación valido.";
		
	}
	
	/* Término Validacion de Email */

	
	/* Inicio Validacion de Pregunta y Respuesta */
	
	
	if (strlen($pregunta) < 1)
	{
		$errores = 1;
		$tErrores .="<br>Selecciona tu Pregunta.";
	}

	if (strlen($respuesta) < 1)
	{
		$errores = 1;
		$tErrores .="<br>Ingresa tu Respuesta.";
	}
	
	$respuesta_correcta = CCDLookUP("aute_respuesta","portal_autentificacion","aute_rut=".$rut,$db);
	$respuesta_correcta =  str_replace(" ","",strtoupper ($respuesta_correcta));			
	$respuesta =  str_replace(" ","",strtoupper ($respuesta));


	if (strcmp($respuesta,$respuesta_correcta) != 0){
		$errores = 1;
		//$tErroresRespuesta .="Tu correo electrónico <b>NO</b> ha sido actualizado, pues no seleccionaste tu pregunta secreta o la respondiste incorrectamente.<br>¡Inténtalo de nuevo! Si el problema persiste, comunícate con nuestro Call Center 600 901 1000 ó 2261 86 854.";
		
		$tErroresRespuesta .="Tu correo electrónico <b>NO</b> ha sido actualizado, pues no seleccionaste tu pregunta secreta o la respondiste incorrectamente.<br/>¡Inténtalo de nuevo! Si el problema persiste, escribe a <a href='mailto:recuperaclave@ingresa.cl' target='_blank'>recuperaclave@ingresa.cl</a>, con tus datos personales y una copia adjunta de tu carnet por ambos lados, indicando el correo electrónico donde quieres recibir tu contraseña.";
	}
	
	
	/* Término Validacion de Pregunta y Respuesta */

	/* Inicio Validacion de Acepto */
	

	if ($acepto != '1')
	{
		$errores = 1;
		$tErrores .="<br>Debes aceptar las condiciones para cambiar tu correo.";
	}
	/* Término Validacion de Acepto */

	$flag_muestra_error_general = true;

	/* Inicio Validacion de RUT permitido */
	if ($continuar_rut)
	{
		$existe_rut = CCDLookUp("COUNT(rhi_rut_num)", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
		$existe_rut = intval($existe_rut);

		if ($existe_rut == 0)
		{
			//$error = "No eres beneficiario(a) del Crédito con Garantía Estatal, por lo tanto no puedes solicitar clave.<br>Tus dudas y preguntas serán atendidas en el Sistema de Atención de Consultas de www.ingresa.cl";
			$tErrorGeneral = "<p>No te encuentras en el registro de beneficiarios del Crédito CAE. Revisa los datos que ingresaste. Si no hubo errores, solicita asistencia al 600 901 1000.</p><p>¡ATENCIÓN! Si estás postulando al Crédito CAE, sólo podrás registrarte en este portal cuando ya seas beneficiario/a y te corresponda renovar esta ayuda para el siguiente año académico.</p>";
			//$portal_autentificacion->Errors->addError($error);
			$continuar_rut = 0;
			$errores = 1;
			$flag_muestra_error_general = false;
		}
	}
	/* Término Validacion de RUT permitido */

	/* Inicio Validacion de fecha */
	//Solo realizar cuando el rut es correcto.
	if ($continuar_rut)
	{
		
		/* Validacion Especial para ruts corfo
		 * , no se valida la fecha de nacimiento */
		
		$const_estado_renovante_corfo = 300;
		$rhi_estado_renovante = CCDLookUp("rhi_estado_renovantes_num", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
		
		//echo $rhi_estado_renovante;
		//echo $const_estado_renovante_corfo;
		
		$flag_valida_fecha_nac = true;
		
		if ( $const_estado_renovante_corfo == $rhi_estado_renovante )
			{
				$flag_valida_fecha_nac = false;
				
				}
		
		//echo $flag_valida_fecha_nac;
			
		if ($flag_valida_fecha_nac )
		{
			$fecha_nacimiento = arreglar_fecha($fecha_nacimiento);
			$rhi_fecha_nacimiento = CCDLookUp("TO_CHAR(rhi_fecha_nacimiento_date, 'DD/MM/YYYY')", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
			if ($rhi_fecha_nacimiento != $fecha_nacimiento)
			{
				$tErrorFecha = "Tu fecha de nacimiento no corresponde a lo informado por tu institución a Comisión Ingresa.<br>Tus dudas y preguntas serán atendidas en el Sistema de Atención de Consultas de www.ingresa.cl";
				//$continuar_rut = 0; 
				$errores = 1;
			}
		
		}
	}		
	/* Término Validacion de fecha */

	/* Inicio Mensaje de Error */
	if($errores > 0){
		if($tErrorGeneral != ""){
			$tErrorMostrar = $tErrorGeneral;
		}
		if($tErrorFecha != ""){
			$tErrorMostrar = $tErrorFecha;
		}
		if($tErroresRespuesta != ""){
			$tErrorMostrar = $tErroresRespuesta;
		}
		if($tErroresRespuesta == "" && $tErrorGeneral == "" && $tErrorFecha == "" && $tErrores !=""){
			$tErrorMostrar = "Existen errores en el formulario:$tErrores";
		}

	}
	else{
		$sqlUpdate = "update portal_autentificacion set aute_email = ".CCToSQL($email,ccsText)." where aute_rut = ".CCToSQL($rut,ccsInteger);
		
		if($db2->query($sqlUpdate)){
			$tErrorMostrar = 1;
			$tErrorMostrar = "<span style='font-size:16px !important;color:#333 !important;'>¡Tu correo electrónico ha sido actualizado! Recupera tu clave, <a href='auth_recordar.php' >AQUÍ</a>.</span>";
			$tErrorMostrar = "¡Tu correo electrónico ha sido actualizado! Recupera tu clave, <a href='auth_recordar.php' >AQUÍ</a>.";
		}
		else{			
			$tErrorMostrar = 0;
			$tErrorMostrar = "Ocurrió un inconveniente en el proceso, favor intentar nuevamente.";
		}

	}
	
echo $tErrorMostrar;
	/* Término Mensaje de Error */
?>