<?php
//BindEvents Method @1-C1E4B131
asas
function BindEvents() 
{
    global $PORTAL_AUTENTIFICACION;
    $PORTAL_AUTENTIFICACION->CCSEvents["OnValidate"] = "PORTAL_AUTENTIFICACION_OnValidate";
    $PORTAL_AUTENTIFICACION->CCSEvents["BeforeShow"] = "PORTAL_AUTENTIFICACION_BeforeShow";
    $PORTAL_AUTENTIFICACION->CCSEvents["AfterUpdate"] = "PORTAL_AUTENTIFICACION_AfterUpdate";
}
//End BindEvents Method

//PORTAL_AUTENTIFICACION_OnValidate @3-B390F42E
function PORTAL_AUTENTIFICACION_OnValidate(& $sender)
{
    $PORTAL_AUTENTIFICACION_OnValidate = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $PORTAL_AUTENTIFICACION; //Compatibility
//End PORTAL_AUTENTIFICACION_OnValidate

//Custom Code @10-2A29BDB7
// -------------------------

	/*
	Validacion datos ingresados
	*/
 
	//>> Respuesta
	$errores = 0;
	$continuar = 1;
	$respuesta = $PORTAL_AUTENTIFICACION->AUTE_respuesta->GetText();

	if (strlen($respuesta) == 0)
		{
			$errores = 1;
			$continuar = 0;
			$PORTAL_AUTENTIFICACION->Errors->addError("Debes escribir la respuesta para cambiar tu clave.");
		}

	//<<

	//>> Claves
	$clave1 = $PORTAL_AUTENTIFICACION->AUTE_pass_creada->GetText();
	$clave2 = $PORTAL_AUTENTIFICACION->txt_clave_nueva->GetText();

	if (strlen($clave1) == 0 || strlen($clave2) == 0 )
		{
			$errores = 1;
			$PORTAL_AUTENTIFICACION->Errors->addError("Debes ingresar tu nueva clave 2 veces.");
			$continuar = 0;
		}

	if (strlen($clave1) < 5 || strlen($clave1) > 10 )
		{
			$errores = 1;
			$PORTAL_AUTENTIFICACION->Errors->addError("Escribe una clave de al menos 5 caracteres y máximo 10 caracteres.");
			$continuar = 0;
		
		}

	if ($clave1 != $clave2)
				{
					$errores = 1;
					$PORTAL_AUTENTIFICACION->Errors->addError("Las claves escritas son distintas.");
					$continuar = 0;
				}
		
		

	/*
	<<<      Validacion de datos
	*/

		
	//>> Comprobacion de datos
	if ($continuar && $errores == 0)
		{

			$rut = CCGetSession("q_rut");
			if($rut == ""){
				$rut = CCGetParam("nRut");
				CCSetSession("q_rut",$rut);
			}

			$coneccion = new clsDBusuarios_extranet();


			// Respuesta correcta
				
				$respuesta_correcta = CCDLookUP("aute_respuesta","portal_autentificacion","aute_rut=".$rut,$coneccion);
				$respuesta_correcta =  str_replace(" ","",strtoupper ($respuesta_correcta));			
				$respuesta =  str_replace(" ","",strtoupper ($respuesta));


				if (strcmp($respuesta,$respuesta_correcta) != 0)
					{
							$continuar= 0;
							$errores = 1;
							$PORTAL_AUTENTIFICACION->Errors->addError("La respuesta ingresada es incorrecta.");
					}
				else
					{
						//Envio de mail
											$existe_email = CCDLookUP("aute_email","portal_autentificacion","aute_rut=".$rut,$coneccion);
											$numero_rut = CCGetSession("q_rut");

										//Parametros para envío de mail
													$params_email[0] = $numero_rut;
													$params_email[1] = $clave1;												
											
											// Envío email
											generar_mail($existe_email,0,$params_email);
											//							

											//global $Redirect;
											//$Redirect = "auth_recordar_conf.php";


						//Redirect
					
					}

		
			// Clave  
		
		}
	//<< Comprobacion de datos

// -------------------------
//End Custom Code

//Close PORTAL_AUTENTIFICACION_OnValidate @3-240D21F5
    return $PORTAL_AUTENTIFICACION_OnValidate;
}
//End Close PORTAL_AUTENTIFICACION_OnValidate

//PORTAL_AUTENTIFICACION_BeforeShow @3-20893B75
function PORTAL_AUTENTIFICACION_BeforeShow(& $sender)
{
    $PORTAL_AUTENTIFICACION_BeforeShow = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $PORTAL_AUTENTIFICACION; //Compatibility
//End PORTAL_AUTENTIFICACION_BeforeShow

//Custom Code @11-2A29BDB7
// -------------------------
	global $nRutSesion;
	global $Tpl;
	$nRutSesion	= CCGetSession("q_rut");

	$Tpl->setvar("sRut",$nRutSesion);

	CCSetSession("q_rut",$nRutSesion);
// -------------------------
//End Custom Code

//Close PORTAL_AUTENTIFICACION_BeforeShow @3-1BF6457C
    return $PORTAL_AUTENTIFICACION_BeforeShow;
}
//End Close PORTAL_AUTENTIFICACION_BeforeShow

//PORTAL_AUTENTIFICACION_AfterUpdate @3-237A542F
function PORTAL_AUTENTIFICACION_AfterUpdate(& $sender)
{
    $PORTAL_AUTENTIFICACION_AfterUpdate = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $PORTAL_AUTENTIFICACION; //Compatibility
//End PORTAL_AUTENTIFICACION_AfterUpdate

//Custom Code @12-2A29BDB7
// -------------------------
    CCSetSession("q_rut",0);				

	// Actualizar clave en sistema Contingencia
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




	// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// -------------------------
//End Custom Code

//Close PORTAL_AUTENTIFICACION_AfterUpdate @3-EF2C3012
    return $PORTAL_AUTENTIFICACION_AfterUpdate;
}
//End Close PORTAL_AUTENTIFICACION_AfterUpdate


?>
