<?php
// //Events @1-F81417CB


//lenguetas_lbInicio_BeforeShow @126-4E9C21E5
function lenguetas_lbInicio_BeforeShow(& $sender)
{
    $lenguetas_lbInicio_BeforeShow = true;
    $Component = & $sender;
    $Container = & CCGetParentContainer($sender);
    global $lenguetas; //Compatibility
//End lenguetas_lbInicio_BeforeShow

//Custom Code @127-2A29BDB7
// -------------------------
	/*$lenguetas->lbInicio->SetValue(" ");

	if(CCGetParam("id_seccion",0)==0)
		$lenguetas->lbInicio->SetValue(" class=\"menu_activo\" ");
*/
// -------------------------
//End Custom Code

//Close lenguetas_lbInicio_BeforeShow @126-49331E33
    return $lenguetas_lbInicio_BeforeShow;
}
//End Close lenguetas_lbInicio_BeforeShow


?>