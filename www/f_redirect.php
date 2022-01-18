<?php

/*
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
*/

function f_redirect_url($pnum_codigo_sitio,$db)
{
	
	if ($pnum_codigo_sitio == 0 || strlen($pnum_codigo_sitio) == 0 ) 	
		$pnum_codigo_sitio = 4;
	
	if ( !is_numeric($pnum_codigo_sitio) )
		$pnum_codigo_sitio = 4;
		
	$csql_count_sitio = CCDLookUP('count(*)','portal_sitios_redireccion'
		,'sitn_cod = ' . $pnum_codigo_sitio,$db);	
		
	if ( $csql_count_sitio == 0 )
		$pnum_codigo_sitio = 4;
		
	$csql_url_get = CCDLookUP('sitt_url','portal_sitios_redireccion'
		,'sitn_cod = ' . $pnum_codigo_sitio,$db);
		
	
	return $csql_url_get;
	
	}


function f_redirect_get_param()
{
	$vnum_param_get = CCGetParam("ref",0);
	
	if ( !is_numeric($vnum_param_get) )
		$vnum_param_get = 0;
		
	return $vnum_param_get;	
	
	}
	
function f_redirect_get_href($p_db)
{
	
	$vnum_codigo_sitio = f_redirect_get_param();
	$vtxt_href = f_redirect_url($vnum_codigo_sitio,$p_db);
	
	$vhtml_link = '<a href="' . $vtxt_href . '"> Volver </a>' ;
	
	
	return $vhtml_link;

	}
	
	?>
