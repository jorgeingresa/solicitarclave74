var xhrs = new Array();
     $.ajaxSetup({
        beforeSend: function(xhr){ 
				xhrs.push(xhr);   
			},
        error:function(x,e){
            //setErrors(e);
        }
    });

var x = $.ajax; 
var y = $.ajax; 

function killRequests() {
    for (var i = 0, len = xhrs.length; i < len; ++i) {
        var request = xhrs;
        request[i].onreadystatechange = function() {};
        request[i].abort();
        jQuery.event.trigger("ajaxStop");

    }
    return 0
}

function traeCorreo(nRut,tDV){
	//nAccion 0: insertar - 1:editar
    killRequests();
    parametros = {};
    var errores = "";
    var nRut 	= nRut;
    var tDV 	= tDV;
	
    if(nRut == ""){
    	errores = errores + "Debe ingresar un rut.<br>";
    }

    if(errores != ""){
        jQuery("#mensajes").html(errores);
    }
    else{
        parametros["rut"] = nRut;
        parametros["dv"] = tDV;
         x({
            url: 'procesarCorreo.php',
            type: 'POST',
            data: parametros,
            success: function(datos) {
                jQuery("#tCorreo").html(datos);
            }
        });
    }
}

function cambiarCorreo(){
    killRequests();
    parametros = {};
    var errores = 0;
    var errorRut = "";
    var errorDV = "";
    var errorFecha = "";
    var errorCorreo = "";
    var errorCorreoC = "";
    var errorPregunta = "";
    var errorRespuesta = "";
    
    jQuery("#mensajesTotal").html("");
    jQuery("#errorRut").html("");
    jQuery("#errorDV").html("");
    jQuery("#errorFecha").html("");
    jQuery("#errorCorreo").html("");
    jQuery("#errorCorreoC").html("");
    jQuery("#errorPregunta").html("");
    jQuery("#errorRespuesta").html("");
    jQuery("#errorAcepto").html("");
    jQuery("#errorCaptcha").html("");
   
    var nRut 		= jQuery("#portal_autentificacionaute_rut").val();
    var tDV 		= jQuery("#portal_autentificaciontxt_dv").val();
    var nDia		= jQuery("#portal_autentificacionlb_dia").val();
    var nMes		= jQuery("#portal_autentificacionlb_mes").val();
    var nAnio		= jQuery("#portal_autentificacionlb_ano").val();
    var tCorreo		= jQuery("#portal_autentificacionaute_email").val();
    var tCorreoC	= jQuery("#portal_autentificaciontxt_email_conf").val();
    var nPregunta	= jQuery("#portal_autentificacionaute_pregunta").val();
    var tRespuesta	= jQuery("#portal_autentificacionaute_respuesta").val();
    var nAcepto		= jQuery("#portal_autentificacionchk_acepto").prop("checked");
    var nValorAcepto= jQuery("#portal_autentificacionchk_acepto").val();
    var tCaptcha	= jQuery("#g-recaptcha-response").val();
    var correoRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
    if(nRut == ""){
    	errores = errores + 1;
    	errorRut = "Debes ingresar un RUT";
    }
    if(tDV == ""){
    	errores = errores + 1;
    	errorDV = "Debes ingresar un DV";
    }
    if(nDia == "" || nMes == "" || nAnio == ""){
    	errores = errores + 1;
    	errorFecha = "Debes ingresar una Fecha de Nacimiento";
    }
    if(tCorreo == ""){
    	errores = errores + 1;
    	errorCorreo = "Debes ingresar un E-mail";
    }

    if(!correoRegex.test(tCorreo)){
    	errores = errores + 1;
    	errorCorreo = "Formato de E-mail incorrecto";
    }

    if(!correoRegex.test(tCorreoC)){
    	errores = errores + 1;
    	errorCorreoC = "Formato de E-mail de confirmación incorrecto";
    }


    if(tCorreoC == ""){
    	errores = errores + 1;
    	errorCorreoC = "Debes ingresar un E-mail de confirmación";
    }

    if(tCorreoC != tCorreo){
    	errores = errores + 1;
    	errorCorreo = "Los E-mail ingresados son distintos.";
    }

    if(nPregunta == ""){
    	errores = errores + 1;
    	errorPregunta = "Debes seleccionar una Pregunta";
    }

    if(tRespuesta == ""){
    	errores = errores + 1;
    	errorRespuesta = "Debes ingresar una Respuesta";
    }
    if(!nAcepto){
    	errores = errores + 1;
    	errorAcepto = "Debes aceptar las condiciones";
    }

    if(tCaptcha == ""){
    	errores = errores + 1;
    	errorCaptcha = "Debes indicar que no eres un robot";
    }
    


    if(errores > 0){
        jQuery("#mensajesTotal").html("Existen errores en el formulario, por favor revisa los datos ingresados");
        jQuery("#errorRut").html(errorRut);
        jQuery("#errorDV").html(errorDV);
        jQuery("#errorFecha").html(errorFecha);
        jQuery("#errorCorreo").html(errorCorreo);
        jQuery("#errorCorreoC").html(errorCorreoC);
        jQuery("#errorPregunta").html(errorPregunta);
        jQuery("#errorRespuesta").html(errorRespuesta);
        jQuery("#errorAcepto").html(errorAcepto);
        jQuery("#errorCaptcha").html(errorCaptcha);
        
    }
    else{
        parametros["aute_rut"] = nRut;
        parametros["txt_dv"] = tDV;
        parametros["aute_email"] = tCorreo;
        parametros["txt_email_conf"] = tCorreoC;
        parametros["aute_pregunta"] = nPregunta;
        parametros["aute_respuesta"] = tRespuesta;
        parametros["chk_acepto"] = nValorAcepto;
        parametros["g-recaptcha-response"] = tCaptcha;
        parametros["lb_dia"] = nDia;
        parametros["lb_mes"] = nMes;
        parametros["lb_ano"] = nAnio;

        x({
            url: 'procesarCambiarCorreo.php',
            type: 'POST',
            data: parametros,
            success: function(datos) {
                jQuery("#mensajesTotal").html(datos);
            }
        });
    }
}

