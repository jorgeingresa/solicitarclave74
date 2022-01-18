<?php

//BindEvents Method @1-95DFB643
function BindEvents()
{
    global $record_recordar;
    $record_recordar->CCSEvents["AfterInsert"] = "record_recordar_AfterInsert";
    $record_recordar->CCSEvents["OnValidate"] = "record_recordar_OnValidate";
    $record_recordar->CCSEvents["BeforeShow"] = "record_recordar_BeforeShow";
}
//End BindEvents Method


// record_recordar_BeforeShow @2-149D88E3
function  record_recordar_BeforeShow(& $sender)
{
    $record_recordar_BeforeShow = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $record_recordar; //Compatibility
//End  record_recordar_BeforeShow

//Custom Code @42-2A29BDB7
// -------------------------
  	global $Tpl;


// -------------------------
//End Custom Code

//Close  record_recordar_BeforeShow @2-30A5994E
    return $record_recordar_BeforeShow;
}
//End Close  record_recordar_BeforeShow

//record_recordar_AfterInsert @4-8C89B548
function record_recordar_AfterInsert(& $sender)
{
    $record_recordar_AfterInsert = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $record_recordar; //Compatibility
//End record_recordar_AfterInsert

//Custom Code @8-2A29BDB7
// -------------------------
    // Write your own code here.
// -------------------------
//End Custom Code

//Close record_recordar_AfterInsert @4-C9F43E6E
    return $record_recordar_AfterInsert;
}
//End Close record_recordar_AfterInsert

//record_recordar_OnValidate @4-F8294D8B
function record_recordar_OnValidate(& $sender)
{
    $record_recordar_OnValidate = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $record_recordar; //Compatibility
//End record_recordar_OnValidate

//Custom Code @9-2A29BDB7
// -------------------------
  //Validar RUT
  
				
					$continuar = 1;

				

					global $numero_rut;
					global $Tpl;


					$numero_rut = $record_recordar->TextBox1->GetText();
					$numero_rut = str_replace(".","",$numero_rut);
					
					//validacion de rut numerico, luego validacion con dv
					if( ( !is_numeric($numero_rut) ) &&  (strlen($numero_rut) > 0 )  )
						{
							$record_recordar->Errors->addError("El Rut ingresado no es vÃ¡lido (debe ser numerico)");
							$continuar = 0;
						}

					if ($continuar)
						{
							//validacion con dv
							$rut = $numero_rut."-".$record_recordar->TextBox2->GetText();
							if (!validaRut($rut))
								{
									$record_recordar->Errors->addError("El RUT ingresado no es correcto.");
									$continuar = 0;
								}
						}			


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
	//$Tpl->setvar("err_captcha",'Debes indicar que no eres un robot');
	$record_recordar->Errors->addError("Debes indicar que no eres un robot.");	
	$continuar = 0;
	
}
if ($continuar && ($response == null || !$response->success)) {
	//$Tpl->setvar("err_captcha",'Debes indicar que no eres un robot');
	$record_recordar->Errors->addError("Debes indicar que no eres un robot.");	
	$continuar = 0;
}

/*** fin validación captcha ****/


	//Validar que exista en db
	
	if ($continuar)
	{	



			$db = new clsDBusuarios_extranet();
			$existe_email = CCDLookUp("AUTE_email","portal_autentificacion","AUTE_rut=".$numero_rut,$db);
	
			/*
			>> Chequear operacion realizada
			*/
			// 
			if (CCGetparam("btn_cam"))
				{
				$operacion = "cam"; // cambio de clave
				}
			if (CCGetparam("btn_cor"))
				{
				$operacion = "cor"; // correo
				}

			/*
			<<			
			*/
			if (strlen($existe_email) > 0)//si existe , Enviar mail y mostrar mensaje
			{

				

					$estado = CCDLookUp("aute_nivel","portal_autentificacion","AUTE_rut=".$numero_rut,$db);
					if ($estado == 0)
						$campo_clave = "pass_generada";
					if ($estado == 1)
						$campo_clave = "aute_pass_creada";
						
					if (strlen($campo_clave) > 0)
									{
											$contrasenia = CCDLookUp($campo_clave,"portal_autentificacion"," AUTE_rut=".$numero_rut,$db);
											$tDV = CCDLookUp("aute_dv_rut","portal_autentificacion"," AUTE_rut=".$numero_rut,$db);
											//Enviar Mail
											//Envio de Email

											if ($operacion == "cam")
											{
												CCSetSession("q_rut",$numero_rut);
												header ('Location: auth_q.php');
												exit();											
											}
											//Parametros para envÃ­o de mail
													$params_email[0] = $numero_rut;
													$params_email[1] = $contrasenia;	
													$params_email[2] = $tDV;											
											
											// EnvÃ­o email
											generar_mail($existe_email,0,$params_email);
									
											global $Redirect;
											$Redirect = "auth_recordar_conf.php";
		


						}	//if campo clave

				
			
			} //existe mail
		else
		{	
			$record_recordar->Errors->addError("Tu RUT no se encuentra registrado. Para ingresar a Mi Cr&eacute;dito CAE, deber&aacute;s seleccionar la opci&oacute;n \"Solicitar clave\" en la p&aacute;gina inicial de esta misma plataforma y seguir las indicaciones. ");
			$continuar = 0;
		}
	} // if continuar
// -------------------------
//End Custom Code

//Close record_recordar_OnValidate @4-B667E7F3
    return $record_recordar_OnValidate;
}
//End Close record_recordar_OnValidate


?>
