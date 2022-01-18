<?php

include("f_redirect.php");

//BindEvents Method @1-3015F3B0
function BindEvents()
{
    global $portal_autentificacion;
    $portal_autentificacion->CCSEvents["OnValidate"] = "portal_autentificacion_OnValidate";
    $portal_autentificacion->CCSEvents["BeforeShow"] = "portal_autentificacion_BeforeShow";
    $portal_autentificacion->CCSEvents["AfterInsert"] = "portal_autentificacion_AfterInsert";
    $portal_autentificacion->ds->CCSEvents["BeforeBuildInsert"] = "portal_autentificacion_ds_BeforeBuildInsert";
}
//End BindEvents Method

//portal_autentificacion_OnValidate @2-878447B8
function portal_autentificacion_OnValidate(& $sender)
{
    $portal_autentificacion_OnValidate = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $portal_autentificacion; //Compatibility
//End portal_autentificacion_OnValidate

//Custom Code @38-2A29BDB7
// -------------------------
	$db = new clsDBusuarios_extranet();
	$errores = 0 ; // flag de errores para el formulario, si es 1 se agrega un mensaje a component->errors
	global $Tpl;


	/* Inicio Validacion de rut */    
	$continuar_rut  = 0;   // control de validacion de rut, si no es valido no se llama web service
	$rut = $portal_autentificacion->aute_rut->GetValue(); // campo rut
	$dv = $portal_autentificacion->txt_dv->GetValue();	 // campo dv
	$rut = str_replace(".","",$rut);
	$ch	= $portal_autentificacion->txt_dv->GetValue();


/*** inicio validacion cpatcha ****/
$secret = "6LdG994UAAAAABqp7qXGL9TJphbSg0_6qD_EIR27";
 
// empty response
$response = null;

$ch = CCGetParam("g-recaptcha-response",0);
 
// check secret key
$reCaptcha = new ReCaptcha($secret);

if ($ch) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $ch
    );
}
else{
	$Tpl->setvar("err_captcha",'Debes indicar que no eres un robot');
	$continuar_rut = 0;
	$errores = 1;
	
}

if ($response == null || !$response->success) {
	$Tpl->setvar("err_captcha",'Debes indicar que no eres un robot');
	$continuar_rut = 0;
	$errores = 1;
}


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
		$portal_autentificacion->err_rut->SetValue("Escribe tu RUT.");	
	}

	if (strlen($dv) > 0) // Escribe dv
	{
		$continuar_rut = 1;
	}
	else
	{
		$continuar_rut = 0;
		$errores = 1;
		$portal_autentificacion->err_dv->SetValue("Escribe tu Dígito Verificador.");	
	}
	
	if ($continuar_rut) // El rut es correcto
	{
		if (!is_numeric($rut))
		{
			$continuar_rut = 0;
			$errores = 1;
			$portal_autentificacion->err_rut->SetValue("El RUT ingresado no es válido.");	
		}
	}

	if ($continuar_rut)
	{
		if ((!is_numeric($dv) && ( $dv != 'k') && ($dv != 'K')) || strlen($dv) > 1)
		{
			$continuar_rut = 0;
			$errores = 1;
			$portal_autentificacion->err_dv->SetValue("El Dígito Verificador no es válido.");	
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
			$portal_autentificacion->err_dv->SetValue("El RUT ingresado es incorrecto.");	
		}
	}

	if ($continuar_rut)
	{
		$existe = CCDLookUp("count(aute_rut)", "portal_autentificacion", "aute_rut = ".$rut, $db);
		
		if ($existe > 0)
		{
			$portal_autentificacion->Errors->addError("Ya dispones de una clave. Si no la recuerdas, utiliza el link Recordar Clave en la página anterior.");
			$continuar_rut = 0; $errores = 1;
		}
	}
	
	/* Término Validacion de rut */   

	/* Inicio Validacion de Email */
	$email = $portal_autentificacion->aute_email->GetValue();
	$conf_email = $portal_autentificacion->txt_email_conf->GetValue();
	
	if ( strlen($email) < 1)
	{
		$errores = 1;
		$portal_autentificacion->err_email_conf->SetValue("Ingresa tu E-mail.");
	}
	else if ( $email != $conf_email )
	{
		$errores = 1;
		$portal_autentificacion->err_email_conf->SetValue("Los E-mail ingresados son distintos.");
	}
	/* Término Validacion de Email */

	/* Inicio Validacion de Clave */
	$clave  = str_replace(" ", "", $portal_autentificacion->aute_clave->GetValue());
	$clave_conf =  str_replace(" ", "", $portal_autentificacion->txt_clave_conf->GetValue());

	if (strlen($clave) < 5 || strlen($clave) > 10 )
	{
		$errores = 1;
		$portal_autentificacion->err_clave->SetValue("Escribe una Clave de al menos 5 caracteres y máximo 10 caracteres.");	
	}
	else if ($clave != $clave_conf)
	{
		$errores = 1;
		$portal_autentificacion->err_clave->SetValue("Las Claves escritas son distintas.");	
	}
	/* Término Validacion de Clave */
	
	/* Inicio Validacion de Pregunta y Respuesta */
	$pregunta  =  str_replace(" ", "", $portal_autentificacion->aute_pregunta->GetValue());
	$respuesta =  str_replace(" ", "", $portal_autentificacion->aute_respuesta->GetValue());
	
	if (strlen($pregunta) < 1)
	{
		$errores = 1;
		$portal_autentificacion->err_preg->SetValue("Selecciona tu Pregunta.");
	}

	if (strlen($respuesta) < 1)
	{
		$errores = 1;
		$portal_autentificacion->err_resp->SetValue("Ingresa tu Respuesta.");
	}
	/* Término Validacion de Pregunta y Respuesta */

	/* Inicio Validacion de Acepto */
	$acepto = $portal_autentificacion->chk_acepto->GetValue();

	if ($acepto != '1')
	{
		$errores = 1;
		$portal_autentificacion->err_acepto->SetValue("Debes aceptar las condiciones para solicitar tu Clave.");
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
			$error = "<p>No te encuentras en el registro de beneficiarios del Crédito CAE. Revisa los datos que ingresaste. Si no hubo errores, solicita asistencia al 600 901 1000.</p><p>¡ATENCIÓN! Si estás postulando al Crédito CAE, sólo podrás registrarte en este portal cuando ya seas beneficiario/a y te corresponda renovar esta ayuda para el siguiente año académico.</p>";
			$portal_autentificacion->Errors->addError($error);
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
		$fecha_nacimiento = $portal_autentificacion->lb_dia->GetValue();
		$fecha_nacimiento .= "/".$portal_autentificacion->lb_mes->GetValue();
		$fecha_nacimiento .= "/".$portal_autentificacion->lb_ano->GetValue();
		
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
				$error_fec_nac = "Tu fecha de nacimiento no corresponde a lo informado por tu institución a Comisión Ingresa.<br>Tus dudas y preguntas serán atendidas en el Sistema de Atención de Consultas de www.ingresa.cl";
				$portal_autentificacion->Errors->addError($error_fec_nac);
				$continuar_rut = 0; $errores = 1;
			}
		
		}
	}		
	/* Término Validacion de fecha */

	/* Inicio Mensaje de Error */
	if ($errores && $flag_muestra_error_general)
	{
		$portal_autentificacion->Errors->addError("<br>Existen errores en el formulario, por favor revisa los datos ingresados.");
	}
	/* Término Mensaje de Error */

	//variable utilizada en el insert
	if ($continuar_rut && $errores ==0)
	{
		global $gbl_rut_completo;
		global $gbl_fecha_nacimiento;
		global $gbl_nombre;
		global $gbl_n_nombre;
		global $gbl_n_paterno;
		global $gbl_n_materno;
		global $gbl_n_dv;

		$gbl_fecha_nacimiento = $fecha_nacimiento;
		$gbl_rut_completo = $rut_completo;
		
		/* Variables nuevas para Contingencia */
		$gbl_n_nombre = CCDLookUp("rhi_nombres_txt", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
		$gbl_n_paterno = CCDLookUp("rhi_ap_paterno_txt", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
		$gbl_n_materno = CCDLookUp("rhi_ap_materno_txt", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
		$gbl_n_dv = CCDLookUp("rhi_dv_rut_txt", "usr_renovantes_historicos_rhi", "rhi_rut_num = ".$rut, $db);
		
		if(strlen($gbl_n_nombre) > 0)
			$gbl_nombre = $gbl_n_nombre;

		if(strlen($gbl_n_paterno) > 0)
			$gbl_nombre .= " ".$gbl_n_paterno;

		if(strlen($gbl_n_materno) > 0)
			$gbl_nombre .= " ".$gbl_n_materno;
	}
// -------------------------
//End Custom Code

//Close portal_autentificacion_OnValidate @2-0F5EFDC7
    return $portal_autentificacion_OnValidate;
}
//End Close portal_autentificacion_OnValidate

//portal_autentificacion_BeforeShow @2-149D88E3
function portal_autentificacion_BeforeShow(& $sender)
{
    $portal_autentificacion_BeforeShow = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $portal_autentificacion; //Compatibility
//End portal_autentificacion_BeforeShow

//Custom Code @42-2A29BDB7
// -------------------------
  	global $Tpl;

	$dia_seleccionado = CCGetFromPost("lb_dia");
	$mes_seleccionado = CCGetFromPost("lb_mes");
	$anio_seleccionado = CCGetFromPost("lb_ano");
	$anios = "";
	$opciones_meses = "";
	$opciones_dias = "";
	$temp_selected = "";
	$meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
// aqui decia 2010
	for ($i = 1930 ; $i < 2011 ; $i++)
	{
		if	($i == $anio_seleccionado)
			$temp_selected = 'selected = "true"';

		$anios .= '<option value="'.$i.'" '.$temp_selected.'>'.$i."</option>";	
		$temp_selected = "";
	}

	$contador_meses = 1;
			
	foreach($meses as $mes )
	{
		if ($contador_meses == $mes_seleccionado)
			$temp_selected = 'selected = "true"';
		$opciones_meses .= '<option value="'.$contador_meses.'"'.$temp_selected.' >'.$mes."</option>";	
		$contador_meses++;
		$temp_selected = "";
	}

	for ($i = 1 ; $i < 32 ; $i++)
	{
		if ($i == $dia_seleccionado)
			$temp_selected = 'selected = "true"';
		$opciones_dias .= '<option value="'.$i.'"'.$temp_selected.'>'.$i."</option>";	
		$temp_selected = "";
	}

	$Tpl->setvar("select_anios_opciones", $anios);
	$Tpl->setvar("select_mes_opciones", $opciones_meses);
	$Tpl->setvar("select_dia_opciones", $opciones_dias);
// -------------------------
//End Custom Code

//Close portal_autentificacion_BeforeShow @2-30A5994E
    return $portal_autentificacion_BeforeShow;
}
//End Close portal_autentificacion_BeforeShow

//portal_autentificacion_AfterInsert @2-983A5B2D
function portal_autentificacion_AfterInsert(& $sender)
{
    $portal_autentificacion_AfterInsert = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $portal_autentificacion; //Compatibility
//End portal_autentificacion_AfterInsert

//Custom Code @49-2A29BDB7
// -------------------------
   	global $Redirect;

	//Envío de Email
	$mail1 = $portal_autentificacion->aute_email->GetValue();
	$pass = $portal_autentificacion->aute_clave->GetValue();
	$continuar = 1;

	if ($continuar)
	{
		global $gbl_rut_completo;

		//Parametros para envío de mail
		$params_email[0] = $gbl_rut_completo;
		$params_email[1] = $pass;	

		// Envío email
		generar_mail($mail1, 0, $params_email);		
	}

	$vnum_id_referer = f_redirect_get_param();
	$Redirect = "info_pass_creada.php?ref=" . $vnum_id_referer;
// -------------------------
//End Custom Code

//Close portal_autentificacion_AfterInsert @2-E8F9F3C1
    return $portal_autentificacion_AfterInsert;
}
//End Close portal_autentificacion_AfterInsert

//portal_autentificacion_ds_BeforeBuildInsert @2-6A9BBD3D
function portal_autentificacion_ds_BeforeBuildInsert(& $sender)
{
    $portal_autentificacion_ds_BeforeBuildInsert = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $portal_autentificacion; //Compatibility
//End portal_autentificacion_ds_BeforeBuildInsert

//Custom Code @62-2A29BDB7
// -------------------------
	global $gbl_fecha_nacimiento;
	global $gbl_nombre;
	global $gbl_n_nombre;
	global $gbl_n_paterno;
	global $gbl_n_materno;
	global $gbl_n_dv;
	global $DefaultDateFormat;

    $portal_autentificacion->ds->cp["aute_pregunta"] = new clsSQLParameter("ctrlaute_pregunta", ccsInteger, "", "", $portal_autentificacion->ds->aute_pregunta->GetValue(true), NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_respuesta"] = new clsSQLParameter("ctrlaute_respuesta", ccsText, "", "", $portal_autentificacion->ds->aute_respuesta->GetValue(true), NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_email"] = new clsSQLParameter("ctrlaute_email", ccsText, "", "", $portal_autentificacion->ds->aute_email->GetValue(true), NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_pass_creada"] = new clsSQLParameter("ctrlaute_clave", ccsText, "", "", $portal_autentificacion->ds->aute_clave->GetValue(true), NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_rut"] = new clsSQLParameter("ctrlaute_rut", ccsInteger, "", "", $portal_autentificacion->ds->aute_rut->GetValue(true), NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_nivel"] = new clsSQLParameter("expr28", ccsInteger, "", "", 1, 1, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_nombre"] = new clsSQLParameter("expr29", ccsText, "", "", $gbl_nombre, NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_fecha_nacimiento"] = new clsSQLParameter("expr30", ccsDate, $DefaultDateFormat, $portal_autentificacion->ds->DateFormat, $gbl_fecha_nacimiento, NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_nombres"] = new clsSQLParameter("expr54", ccsText, "", "", $gbl_n_nombre, NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_dv_rut"] = new clsSQLParameter("expr55", ccsText, "", "", $gbl_n_dv, NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_ap_paterno"] = new clsSQLParameter("expr56", ccsText, "", "", $gbl_n_paterno, NULL, false, $portal_autentificacion->ds->ErrorBlock);
    $portal_autentificacion->ds->cp["aute_ap_materno"] = new clsSQLParameter("expr57", ccsText, "", "", $gbl_n_materno, NULL, false, $portal_autentificacion->ds->ErrorBlock);
// -------------------------
//End Custom Code

//Close portal_autentificacion_ds_BeforeBuildInsert @2-8660F1F0
    return $portal_autentificacion_ds_BeforeBuildInsert;
}
//End Close portal_autentificacion_ds_BeforeBuildInsert
?>
