jQuery(document).ready(function() { 

	jQuery('#ayuda_columna1').attr('title','Descripción de Sueldo y Pensiones. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna2').attr('title','Descripción de Honorarios. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna3').attr('title','Descripción de Retiro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna4').attr('title','Descripción de Dividendos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna5').attr('title','Descripción de Intereses Mobiliarios. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna6').attr('title','Descripción de Ganancias de Capital. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna7').attr('title','Descripción de Pensión alimenticia y aportes de parientes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');
	jQuery('#ayuda_columna8').attr('title','Descripción de Actividades Independientes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit ipsum, fringilla et laoreet sed, pellentesque quis orci.');

	jQuery('#BtnCarga1').attr('title','Debe subir archivo con la Declaración Jurada. El archivo es requerido.');
	jQuery('#BtnCarga2').attr('title','Debe subir archivo con el Certificado de Afiliación Superintendencia de AFP. El archivo es requerido.');
	jQuery('#BtnCarga3').attr('title','Debe subir archivo con el Certificado Cotizaciones Previsionales Últimos 12 meses.');
	jQuery('#BtnCarga4').attr('title','Debe subir archivo con el Certificado Sueldos.');
	jQuery('#BtnCarga5').attr('title','Debe subir archivo con el Certificado Boletas Emitidas.');
	jQuery('#BtnCarga1').tooltip();
	jQuery('#BtnCarga2').tooltip();
	jQuery('#BtnCarga3').tooltip();
	jQuery('#BtnCarga4').tooltip();
	jQuery('#BtnCarga5').tooltip();

	jQuery('#ayuda_columna1').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna2').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna3').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna4').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna5').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna6').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna7').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#ayuda_columna8').balloon({
		tipSize: 24,
		position: 'right',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#info_enviada').balloon({
		tipSize: 24,
		position: 'left',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery('#info_no_enviada').balloon({
		tipSize: 24,
		position: 'left',
		css: {
			border: 'solid 4px #5baec0',
			padding: '5px',
			fontSize: '12px',
			fontWeight: 'bold',
			lineHeight: '2',
			backgroundColor: '#666',
			color: '#fff',
			width : '300px'
		}
	}).toggle(function() { jQuery(this).hideBalloon(); },function() { jQuery(this).showBalloon(); });

	jQuery("#formulario2for_l1_dp_direccion_txt").autocomplete("obtener_lista_direcciones.php", {
		width: 260,
		matchContains: true,
		extraParams: { id_comuna: function() { return document.forms["formulario2"].for_l1_dp_comuna_txt.value; } },
		max: 15,
		cacheLength: 1,
		//mustMatch: true,
		//minChars: 0,
		//multiple: true,
		//highlight: false,
		//multipleSeparator: ",",
		selectFirst: false
	});

	jQuery("#formulario2for_l1_dc_direccion_txt").autocomplete("obtener_lista_direcciones.php", {
		width: 260,
		matchContains: true,
		extraParams: { id_comuna: function() { return document.forms["formulario2"].for_l1_dc_comuna_txt.value; } },
		max: 15,
		cacheLength: 1,
		//mustMatch: true,
		//minChars: 0,
		//multiple: true,
		//highlight: false,
		//multipleSeparator: ",",
		selectFirst: false
	});

	var $tabs = jQuery("#pestanas").tabs();                  
              
	jQuery('#pestanas > ul > li > a').each(function (index, element) {
		jQuery(element).click(function () {         

			location.hash = jQuery(this).attr('href');

			jQuery("div[id^='id_dvk_']").each(function(id) { 
				jQuery("#"+this.id).css("display", "none");
			});
		});
	});
 
    //Extiendo por jQuery los mensajes del plugin validador 
    //(sobre-escribo los ya existentes)
    $.extend($.validator.messages, {
        required: "",
        date: "Fecha no valida",
        email: "",
		codigoArea: "",
		telefonoFijo: "",
		telefonoMovil: "",
		digitoVerificador: "",
        url: "URL incorrecta"
    });

	jQuery("#link_pestana1").click(function(){
		xajax_opc_pestagna('1');
		if (jQuery('#pestana1').is(':visible'))
		{
			validaLenguetaFormulario();
		}
	});

	jQuery("#link_pestana2").click(function(){
		xajax_opc_pestagna('2');
		if (jQuery('#pestana2').is(':visible'))
		{
			validaLenguetaFormulario();
		}
	});

	jQuery("#link_pestana3").click(function(){
		xajax_opc_pestagna('3');
		if (jQuery('#pestana3').is(':visible'))
		{
			validaLenguetaFormulario();
		}
	});

	jQuery("#link_pestana4").click(function(){
		xajax_opc_pestagna('4');
		if (jQuery('#pestana4').is(':visible'))
		{
			validaLenguetaFormulario();
		}
	});

	//////////////////////////////
	//   P E S T A Ñ A   N° 1   //
	//////////////////////////////

	// VALIDO DIRECCION DP
	jQuery('#formulario2for_l1_dp_direccion_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dp_direccion_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_direccion_txt').attr('title','Ingrese Dirección.');
			jQuery('#formulario2for_l1_dp_direccion_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_direccion_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_direccion_txt').tooltip();
		}
	});

	// VALIDO NUMERO DP
	jQuery('#formulario2for_l1_dp_numero_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dp_numero_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_numero_txt').attr('title','Ingrese Número.');
			jQuery('#formulario2for_l1_dp_numero_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_numero_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_numero_txt').tooltip();
		}
	});

	// VALIDO REGION DP
	jQuery('#formulario2for_l1_dp_region_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dp_region_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_region_txt').attr('title','Ingrese Región.');
			jQuery('#formulario2for_l1_dp_region_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_region_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_region_txt').tooltip();
		}
	});

	// VALIDO COMUNA DP
	jQuery('#formulario2for_l1_dp_comuna_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dp_comuna_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_comuna_txt').attr('title','Ingrese Comuna.');
			jQuery('#formulario2for_l1_dp_comuna_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_comuna_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_comuna_txt').tooltip();
		}
	});

	// VALIDO CIUDAD DP
	jQuery('#formulario2for_l1_dp_ciudad_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dp_ciudad_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_ciudad_txt').attr('title','Ingrese Ciudad.');
			jQuery('#formulario2for_l1_dp_ciudad_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_ciudad_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_ciudad_txt').tooltip();
		}
	});

	// VALIDO CODIGO AREA DP, Y VERIFICO VALORES DE TELEFONO FIJO DP
	jQuery('#formulario2for_l1_dp_cod_area_txt').keyup(function(){

		// INICIALIZO CAMPOS REQUERIDOS
		jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt, #formulario2for_l1_dp_fono_movil_txt').removeClass('required');

		if(!jQuery('#formulario2for_l1_dp_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dp_fono_movil_txt').addClass('required');
			}
		}

		// VALIDACION CODIGO AREA
		if(!jQuery('#formulario2for_l1_dp_cod_area_txt').valid())
		{
			// VALIDACION INVALIDA
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == "" && jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() == "" && jQuery('#formulario2for_l1_dp_fono_movil_txt').val() == "")
			{
				// TODOS LOS CAMPOS SON VACIOS (AREA, FONO FIJO, FONO MOVIL)
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();

				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
			else
			{
				// AL MENOS UN CAMPO TIENE VALOR (AREA, FONO FIJO, FONO MOVIL)
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();

				jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// VALIDACION CORRECTA
			jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','');
			jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();

			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
			{
				if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
			{
				if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
			{
				if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
		}
	});

	// VALIDO TELEFONO FIJO DP, Y VERIFICO VALORES DE CODIGO AREA DP
	jQuery('#formulario2for_l1_dp_fono_fijo_txt').keyup(function(){
		
		// INICIALIZO CAMPOS REQUERIDOS
		jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt, #formulario2for_l1_dp_fono_movil_txt').removeClass('required');

		if(!jQuery('#formulario2for_l1_dp_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dp_fono_movil_txt').addClass('required');
			}
		}

		// VALIDO FONO FIJO
		if(!jQuery('#formulario2for_l1_dp_fono_fijo_txt').valid())
		{
			// VALIDACION INVALIDA
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == "" && jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() == "" && jQuery('#formulario2for_l1_dp_fono_movil_txt').val() == "")
			{
				// TODOS SON VACIOS (AREA, FONO FIJO Y FONO MOVIL)
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();

				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
			else
			{
				// AL MENOS UNO TIENE VALOR (AREA, FONO FIJO Y FONO MOVIL)
				if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
				{
					// VIENE CODIGO AREA
					if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
					{
						if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
					{
						if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
					{
						if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE CODIGO AREA
					if(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "")
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
			}
		}
		else
		{
			// VALIDACION CORRECTA
			jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
			jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
		}
	});

	// VALIDO TELEFONO MOVIL DP, Y VERIFICO VALORES DE CODIGO AREA DP Y TELEFONO FIJO DP
	jQuery('#formulario2for_l1_dp_fono_movil_txt').keyup(function(){
		
		// INICIALIZO CAMPOS REQUERIDOS
		jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt, #formulario2for_l1_dp_fono_movil_txt').removeClass('required');

		if(!jQuery('#formulario2for_l1_dp_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dp_fono_movil_txt').addClass('required');
			}
		}

		if(!jQuery('#formulario2for_l1_dp_fono_movil_txt').valid())
		{
			// FONO MOVIL INVALIDO Y VALIDO CODIGO AREA Y FONO FIJO
			jQuery('#formulario2for_l1_dp_fono_movil_txt.telefonoMovil').attr('title','Ingrese Teléfono Móvil. Debe ingresar número de 8 dígitos comenzando con 6,7,8 ó 9.');
			jQuery('#formulario2for_l1_dp_fono_movil_txt').tooltip();

			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
			{
				// VIENE CODIGO AREA
				if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
				{
					if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
				{
					if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
					jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
					jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
					jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
					jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
					jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
				{
					if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
					jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE CODIGO AREA
				jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// FONO MOVIL VALIDO
			jQuery('#formulario2for_l1_dp_fono_movil_txt.telefonoMovil').attr('title','');
			jQuery('#formulario2for_l1_dp_fono_movil_txt').tooltip();

			if(jQuery('#formulario2for_l1_dp_fono_movil_txt').val() != "")
			{
				// VIENE TELEFONO MOVIL
				if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "")
				{
					//VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
					{
						// VIENE CODIGO AREA
						if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
						{
							if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
						{
							if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
						{
							if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
						}
						else
						{
							jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
							jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						// NO VIENE CODIGO AREA
						jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','');
					jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE TELEFONO MOVIL
				if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "")
				{
					// VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
					{
						// VIENE CODIGO AREA
						if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
						{
							if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
						{
							if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
							jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
						{
							if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
							}
						}
						else
						{
							jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
							jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						// NO VIENE CODIGO AREA
						jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
					jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
		}
	});

	// VALIDO EMAIL DP
	jQuery('#formulario2for_l1_dp_email_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dp_email_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_email_txt.email').attr('title','Ingrese Email válido.');
			jQuery('#formulario2for_l1_dp_email_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_email_txt.email').attr('title','');
			jQuery('#formulario2for_l1_dp_email_txt').tooltip();
		}
	});

	// VALIDO PREVISION SALUD DP
	jQuery('#formulario2for_l1_dp_prevision_salud_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dp_prevision_salud_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_prevision_salud_txt').attr('title','Ingrese Previsión Salud.');
			jQuery('#formulario2for_l1_dp_prevision_salud_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_prevision_salud_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_prevision_salud_txt').tooltip();
		}
	});

	// VALIDO PREVISION SOCIAL DP
	jQuery('#formulario2for_l1_dp_prevision_social_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dp_prevision_social_txt').valid())
		{
			jQuery('#formulario2for_l1_dp_prevision_social_txt').attr('title','Ingrese Previsión Social.');
			jQuery('#formulario2for_l1_dp_prevision_social_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dp_prevision_social_txt').attr('title','');
			jQuery('#formulario2for_l1_dp_prevision_social_txt').tooltip();
		}
	});

	// VALIDO DEPENDENCIA LABORAL DC
	jQuery("input[type='radio']").change(function(){
		var selection = jQuery(this).val();
		//alert("Radio button selection changed. Selected: "+selection);
		//alert('test:'+jQuery('input[name="for_l1_dc_dependencia_laboral_txt"]:checked').val());
		//alert('gender:'+jQuery("input:radio[name='for_l1_dc_dependencia_laboral_txt']:checked'").val());

		if(selection == 2)
		{
			// INDEPENDIENTE
			jQuery('#formulario2for_l1_dc_rut_empleador_txt, #formulario2for_l1_dc_dv_rut_empleador_txt, #formulario2for_l1_dc_razon_social_txt, #formulario2for_l1_dc_direccion_txt, #formulario2for_l1_dc_numero_txt, #formulario2for_l1_dc_region_txt, #formulario2for_l1_dc_comuna_txt, #formulario2for_l1_dc_ciudad_txt, #formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_movil_txt, #formulario2for_l1_dc_email_txt').removeClass('error');
	
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();

			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();

			jQuery('#formulario2for_l1_dc_razon_social_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_razon_social_txt').tooltip();

			jQuery('#formulario2for_l1_dc_direccion_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_direccion_txt').tooltip();

			jQuery('#formulario2for_l1_dc_numero_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_numero_txt').tooltip();

			jQuery('#formulario2for_l1_dc_region_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_region_txt').tooltip();

			jQuery('#formulario2for_l1_dc_comuna_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_comuna_txt').tooltip();

			jQuery('#formulario2for_l1_dc_ciudad_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_ciudad_txt').tooltip();

			jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','');
			jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();

			jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
			jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();

			jQuery('#formulario2for_l1_dc_fono_movil_txt.telefonoMovil').attr('title','');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').tooltip();

			jQuery('#formulario2for_l1_dc_email_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_email_txt').tooltip();
			
			
			// DESHABILITAR CAMPOS
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_razon_social_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_direccion_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_numero_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_departamento_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_poblacion_villa_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_region_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_comuna_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_ciudad_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_cod_area_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_fono_fijo_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').attr('disabled','true');
			jQuery('#formulario2for_l1_dc_email_txt').attr('disabled','true');

			// VACIAR CAMPOS
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').val('');
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').val('');
			jQuery('#formulario2for_l1_dc_razon_social_txt').val('');
			jQuery('#formulario2for_l1_dc_direccion_txt').val('');
			jQuery('#formulario2for_l1_dc_numero_txt').val('');
			jQuery('#formulario2for_l1_dc_departamento_txt').val('');
			jQuery('#formulario2for_l1_dc_poblacion_villa_txt').val('');
			jQuery('#formulario2for_l1_dc_region_txt').val('');
			jQuery('#formulario2for_l1_dc_comuna_txt').val('');
			jQuery('#formulario2for_l1_dc_ciudad_txt').val('');
			jQuery('#formulario2for_l1_dc_cod_area_txt').val('');
			jQuery('#formulario2for_l1_dc_fono_fijo_txt').val('');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').val('');
			jQuery('#formulario2for_l1_dc_email_txt').val('');
		}
		else
		{
			// DEPENDIENTE O AMBOS

			// HABILITAR CAMPOS
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_razon_social_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_direccion_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_numero_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_departamento_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_poblacion_villa_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_region_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_comuna_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_ciudad_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_cod_area_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').removeAttr('disabled');
			jQuery('#formulario2for_l1_dc_email_txt').removeAttr('disabled');
		}
	});

	// VALIDO RUT EMPLEADOR
	jQuery('#formulario2for_l1_dc_rut_empleador_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dc_rut_empleador_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('title','Ingrese RUT Empleador válido.');
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();

			// VALIDO VALOR DE DV RUT
			if(!jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').valid())
			{
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','Ingrese Dígito Verificador válido dependiendo del RUT.');
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
			}
		}
	});

	// VALIDO DV RUT EMPLEADOR
	jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').valid())
		{
			if(jQuery('#formulario2for_l1_dc_rut_empleador_txt').val() == "")
			{
				// NO VIENE VALOR DE RUT
				jQuery('#formulario2for_l1_dc_rut_empleador_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('title','Ingrese RUT Empleador válido.');
				jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','Ingrese Dígito Verificador válido dependiendo del RUT.');
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
			}
			else
			{
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','Ingrese Dígito Verificador válido dependiendo del RUT.');
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
			}
		}
		else
		{
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
		}
	});

	// VALIDO RAZON SOCIAL EMPLEADOR DC
	jQuery('#formulario2for_l1_dc_razon_social_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dc_razon_social_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_razon_social_txt').attr('title','Ingrese Razón Social Empleador.');
			jQuery('#formulario2for_l1_dc_razon_social_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_razon_social_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_razon_social_txt').tooltip();
		}
	});

	// VALIDO DIRECCION DC
	jQuery('#formulario2for_l1_dc_direccion_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dc_direccion_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_direccion_txt').attr('title','Ingrese Dirección.');
			jQuery('#formulario2for_l1_dc_direccion_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_direccion_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_direccion_txt').tooltip();
		}
	});

	// VALIDO NUMERO DC
	jQuery('#formulario2for_l1_dc_numero_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dc_numero_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_numero_txt').attr('title','Ingrese Número.');
			jQuery('#formulario2for_l1_dc_numero_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_numero_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_numero_txt').tooltip();
		}
	});

	// VALIDO REGION DC
	jQuery('#formulario2for_l1_dc_region_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dc_region_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_region_txt').attr('title','Ingrese Región.');
			jQuery('#formulario2for_l1_dc_region_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_region_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_region_txt').tooltip();
		}
	});

	// VALIDO COMUNA DC
	jQuery('#formulario2for_l1_dc_comuna_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dc_comuna_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_comuna_txt').attr('title','Ingrese Comuna.');
			jQuery('#formulario2for_l1_dc_comuna_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_comuna_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_comuna_txt').tooltip();
		}
	});

	// VALIDO CIUDAD DC
	jQuery('#formulario2for_l1_dc_ciudad_txt').change(function(){
		if(!jQuery('#formulario2for_l1_dc_ciudad_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_ciudad_txt').attr('title','Ingrese Ciudad.');
			jQuery('#formulario2for_l1_dc_ciudad_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_ciudad_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_ciudad_txt').tooltip();
		}
	});

	// VALIDO CODIGO AREA DC, Y VERIFICO VALORES DE TELEFONO FIJO DC
	jQuery('#formulario2for_l1_dc_cod_area_txt').keyup(function(){

		// INICIALIZO CAMPOS REQUERIDOS
		jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_movil_txt').removeClass('required');

		if(!jQuery('#formulario2for_l1_dc_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dc_fono_movil_txt').addClass('required');
			}
		}

		// VALIDACION CODIGO AREA
		if(!jQuery('#formulario2for_l1_dc_cod_area_txt').valid())
		{
			// VALIDACION INVALIDA
			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == "" && jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() == "" && jQuery('#formulario2for_l1_dc_fono_movil_txt').val() == "")
			{
				// TODOS LOS CAMPOS SON VACIOS (AREA, FONO FIJO, FONO MOVIL)
				jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();

				jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
			}
			else
			{
				// AL MENOS UN CAMPO TIENE VALOR (AREA, FONO FIJO, FONO MOVIL)
				jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
				jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();

				jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// VALIDACION CORRECTA
			jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','');
			jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();

			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
			{
				if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
			
			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
			{
				if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
			
			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
				jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
				jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
				jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
				jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
				jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
			{
				if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
		}
	});

	// VALIDO TELEFONO FIJO DC, Y VERIFICO VALORES DE CODIGO AREA DC
	jQuery('#formulario2for_l1_dc_fono_fijo_txt').keyup(function(){
		
		// INICIALIZO CAMPOS REQUERIDOS
		jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_movil_txt').removeClass('required');

		if(!jQuery('#formulario2for_l1_dc_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dc_fono_movil_txt').addClass('required');
			}
		}

		// VALIDO FONO FIJO
		if(!jQuery('#formulario2for_l1_dc_fono_fijo_txt').valid())
		{
			// VALIDACION INVALIDA
			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == "" && jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() == "" && jQuery('#formulario2for_l1_dc_fono_movil_txt').val() == "")
			{
				// TODOS SON VACIOS (AREA, FONO FIJO Y FONO MOVIL)
				jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();

				jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
			}
			else
			{
				// AL MENOS UNO TIENE VALOR (AREA, FONO FIJO Y FONO MOVIL)
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
				{
					// VIENE CODIGO AREA
					if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
					{
						if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
					{
						if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
						jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
						jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
						jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
						jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
						jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
					{
						if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE CODIGO AREA
					if(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "")
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
			}
		}
		else
		{
			// VALIDACION CORRECTA
			jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
			jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
		}
	});

	// VALIDO TELEFONO MOVIL DC, Y VERIFICO VALORES DE CODIGO AREA DC Y TELEFONO FIJO DC
	jQuery('#formulario2for_l1_dc_fono_movil_txt').keyup(function(){
		
		// INICIALIZO CAMPOS REQUERIDOS
		jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_movil_txt').removeClass('required');

		if(!jQuery('#formulario2for_l1_dc_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dc_fono_movil_txt').addClass('required');
			}
		}

		if(!jQuery('#formulario2for_l1_dc_fono_movil_txt').valid())
		{
			// FONO MOVIL INVALIDO Y VALIDO CODIGO AREA Y FONO FIJO
			jQuery('#formulario2for_l1_dc_fono_movil_txt.telefonoMovil').attr('title','Ingrese Teléfono Móvil. Debe ingresar número de 8 dígitos comenzando con 6,7,8 ó 9.');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').tooltip();

			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
			{
				// VIENE CODIGO AREA
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
				{
					if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
				{
					if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
				{
					if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
					jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE CODIGO AREA
				jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
				jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// FONO MOVIL VALIDO
			jQuery('#formulario2for_l1_dc_fono_movil_txt.telefonoMovil').attr('title','');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').tooltip();

			if(jQuery('#formulario2for_l1_dc_fono_movil_txt').val() != "")
			{
				// VIENE TELEFONO MOVIL
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "")
				{
					//VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
					{
						// VIENE CODIGO AREA
						if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
						{
							if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
						{
							if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
						{
							if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else
						{
							jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
							jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						// NO VIENE CODIGO AREA
						jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').removeClass('error');
					jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','');
					jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE TELEFONO MOVIL
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "")
				{
					// VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
					{
						// VIENE CODIGO AREA
						if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
						{
							if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
						{
							if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
						{
							if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else
						{
							jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
							jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						// NO VIENE CODIGO AREA
						jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
					jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
		}
	});

	// VALIDO EMAIL DC
	jQuery('#formulario2for_l1_dc_email_txt').keyup(function(){
		if(!jQuery('#formulario2for_l1_dc_email_txt').valid())
		{
			jQuery('#formulario2for_l1_dc_email_txt.email').attr('title','Ingrese Email Laboral válido.');
			jQuery('#formulario2for_l1_dc_email_txt').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l1_dc_email_txt.email').attr('title','');
			jQuery('#formulario2for_l1_dc_email_txt').tooltip();
		}
	});

	//////////////////////////////
	//   P E S T A Ñ A   N° 2   //
	//////////////////////////////

	//**********   F I L A   N° 01   **********//

	// VALIDO FILA 1 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno01_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno01_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno01_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno01_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno01_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno01_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno01_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 1 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno01_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno01_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno01_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno01_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno01_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno01_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 02   **********//

	// VALIDO FILA 2 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno02_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno02_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno02_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno02_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno02_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno02_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno02_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 2 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno02_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno02_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno02_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno02_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno02_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno02_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 03   **********//

	// VALIDO FILA 3 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno03_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno03_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno03_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno03_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno03_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno03_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno03_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 3 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno03_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno03_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno03_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno03_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno03_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno03_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 04   **********//

	// VALIDO FILA 4 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno04_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno04_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno04_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno04_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno04_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno04_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno04_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 4 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno04_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno04_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno04_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno04_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno04_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno04_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 05   **********//

	// VALIDO FILA 5 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno05_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno05_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno05_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno05_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno05_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno05_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno05_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 5 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno05_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno05_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno05_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno05_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno05_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno05_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 06   **********//

	// VALIDO FILA 6 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno06_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno06_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno06_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno06_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno06_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno06_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno06_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 6 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno06_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno06_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno06_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno06_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno06_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno06_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 07   **********//

	// VALIDO FILA 7 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno07_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno07_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno07_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno07_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno07_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno07_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno07_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 7 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno07_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno07_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno07_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno07_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno07_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno07_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 08   **********//

	// VALIDO FILA 8 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno08_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno08_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno08_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno08_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno08_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno08_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno08_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 8 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno08_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno08_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno08_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno08_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno08_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno08_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 09   **********//

	// VALIDO FILA 9 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno09_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno09_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno09_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno09_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno09_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno09_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno09_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 9 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno09_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno09_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno09_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno09_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno09_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno09_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 10   **********//

	// VALIDO FILA 10 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno10_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno10_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno10_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno10_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno10_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno10_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno10_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 10 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno10_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno10_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno10_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno10_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno10_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno10_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 11   **********//

	// VALIDO FILA 11 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno11_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno11_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno11_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno11_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno11_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno11_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno11_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 11 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno11_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno11_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno11_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno11_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno11_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno11_columna8_num').tooltip();
		}
	});

	//**********   F I L A   N° 12   **********//

	// VALIDO FILA 12 COLUMNA 1
	jQuery('#formulario2for_l2_mes_agno12_columna1_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna1_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna1_num').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna1_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna1_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna1_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 2
	jQuery('#formulario2for_l2_mes_agno12_columna2_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna2_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna2_num').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna2_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna2_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna2_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 3
	jQuery('#formulario2for_l2_mes_agno12_columna3_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna3_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna3_num').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna3_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna3_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna3_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 4
	jQuery('#formulario2for_l2_mes_agno12_columna4_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna4_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna4_num').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna4_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna4_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna4_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 5
	jQuery('#formulario2for_l2_mes_agno12_columna5_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna5_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna5_num').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna5_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna5_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna5_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 6
	jQuery('#formulario2for_l2_mes_agno12_columna6_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna6_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna6_num').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna6_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna6_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna6_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 7
	jQuery('#formulario2for_l2_mes_agno12_columna7_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna7_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna7_num').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna7_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna7_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna7_num').tooltip();
		}
	});

	// VALIDO FILA 12 COLUMNA 8
	jQuery('#formulario2for_l2_mes_agno12_columna8_num').keyup(function(){
		if(!jQuery('#formulario2for_l2_mes_agno12_columna8_num').valid())
		{
			jQuery('#formulario2for_l2_mes_agno12_columna8_num').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
			jQuery('#formulario2for_l2_mes_agno12_columna8_num').tooltip();
		}
		else
		{
			jQuery('#formulario2for_l2_mes_agno12_columna8_num').attr('title','');
			jQuery('#formulario2for_l2_mes_agno12_columna8_num').tooltip();
		}
	});


	//////////////////////////////
	//   P E S T A Ñ A   N° 4   //
	//////////////////////////////

	new AjaxUpload('#BtnCarga1', {
        action: 'sube_archivo.php',
		name: 'userfile1',
		data: {
			id_boton : '1'
		},
		onSubmit : function(file , ext){
			if (!(ext && /^(jpg|jpeg|pdf)$/.test(ext)))
			{
				// extensiones permitidas
				jAlert('<p align="left">Ha ocurrido un error, sólo se permiten archivos con extension:\n jpg, jpeg, pdf.</p>','Subir Archivo');
				// cancela upload
				return false;
			}
			else
			{
				jQuery('#loaderAjax1').show();
				return true;
			}		
		},
		onComplete: function(file, response){
			xajax_revisa_respuesta_carga_archivo(1);
			var respuesta_archivo1 = document.getElementById("responseFileUpload1").innerHTML;
			jQuery('#loaderAjax1').hide();
			jAlert('<p align="left">'+respuesta_archivo1+'.</p>','Subir Archivo');
			xajax_borrar_sesion();
		}	
	});

	new AjaxUpload('#BtnCarga2', {
        action: 'sube_archivo.php',
		name: 'userfile2',
		data: {
			id_boton : '2'
		},
		onSubmit : function(file , ext){
			if (!(ext && /^(jpg|jpeg|pdf)$/.test(ext)))
			{
				// extensiones permitidas
				jAlert('<p align="left">Ha ocurrido un error, sólo se permiten archivos con extension:\n jpg, jpeg, pdf.</p>','Subir Archivo');		
				// cancela upload
				return false;
			}
			else
			{
				jQuery('#loaderAjax2').show();
				return true;
			}
		},
		onComplete: function(file, response){
			xajax_revisa_respuesta_carga_archivo(2);
			var respuesta_archivo2 = document.getElementById("responseFileUpload2").innerHTML;
			jQuery('#loaderAjax2').hide();
			jAlert('<p align="left">'+respuesta_archivo2+'.</p>','Subir Archivo');
			xajax_borrar_sesion();
		}
	});

	new AjaxUpload('#BtnCarga3', {
        action: 'sube_archivo.php',
		name: 'userfile3',
		data: {
			id_boton : '3'
		},
		onSubmit : function(file , ext){
			if (!(ext && /^(jpg|jpeg|pdf)$/.test(ext)))
			{
				// extensiones permitidas
				jAlert('<p align="left">Ha ocurrido un error, sólo se permiten archivos con extension:\n jpg, jpeg, pdf.</p>','Subir Archivo');		
				// cancela upload
				return false;
			}
			else
			{
				jQuery('#loaderAjax3').show();
				return true;
			}
		},
		onComplete: function(file, response){
			xajax_revisa_respuesta_carga_archivo(3);
			var respuesta_archivo3 = document.getElementById("responseFileUpload3").innerHTML;
			jQuery('#loaderAjax3').hide();
			jAlert('<p align="left">'+respuesta_archivo3+'.</p>','Subir Archivo');
			xajax_borrar_sesion();
		}
	});

	new AjaxUpload('#BtnCarga4', {
        action: 'sube_archivo.php',
		name: 'userfile4',
		data: {
			id_boton : '4'
		},
		onSubmit : function(file , ext){
			if (!(ext && /^(jpg|jpeg|pdf)$/.test(ext)))
			{
				// extensiones permitidas
				jAlert('<p align="left">Ha ocurrido un error, sólo se permiten archivos con extension:\n jpg, jpeg, pdf.</p>','Subir Archivo');		
				// cancela upload
				return false;
			}
			else
			{
				jQuery('#loaderAjax4').show();
				return true;
			}
		},
		onComplete: function(file, response){
			xajax_revisa_respuesta_carga_archivo(4);
			var respuesta_archivo4 = document.getElementById("responseFileUpload4").innerHTML;
			jQuery('#loaderAjax4').hide();
			jAlert('<p align="left">'+respuesta_archivo4+'.</p>','Subir Archivo');
			xajax_borrar_sesion();
		}
	});

	new AjaxUpload('#BtnCarga5', {
        action: 'sube_archivo.php',
		name: 'userfile5',
		data: {
			id_boton : '5'
		},
		onSubmit : function(file , ext){
			if (!(ext && /^(jpg|jpeg|pdf)$/.test(ext)))
			{
				// extensiones permitidas
				jAlert('<p align="left">Ha ocurrido un error, sólo se permiten archivos con extension:\n jpg, jpeg, pdf.</p>','Subir Archivo');		
				// cancela upload
				return false;
			}
			else
			{
				jQuery('#loaderAjax5').show();
				return true;
			}
		},
		onComplete: function(file, response){
			xajax_revisa_respuesta_carga_archivo(5);
			var respuesta_archivo5 = document.getElementById("responseFileUpload5").innerHTML;
			jQuery('#loaderAjax5').hide();
			jAlert('<p align="left">'+respuesta_archivo5+'.</p>','Subir Archivo');
			xajax_borrar_sesion();
		}
	});


	///////////////////////////////
	//   O P E R A C I O N E S   //
	///////////////////////////////

	jQuery("#formulario2").validate();

	jQuery('#formulario2Button_Insert_Guardar1, #formulario2Button_Update_Guardar1, #formulario2Button_Insert_Guardar2, #formulario2Button_Update_Guardar2').click(function() {
    	// GUARDAR INFO
		document.forms["formulario2"].opc_boton.value = 1;
		xajax_opc_mensaje_info(1);
		guardarFormulario();
	});

	jQuery('#formulario2Button_Insert_Enviar4, #formulario2Button_Update_Enviar4').click(function() {
		// ENVIAR POSTULACION
		document.forms["formulario2"].opc_boton.value = 2;
		
		validarFormulario();
	});

	jQuery('#formulario2Button_Insert_Guardar3, #formulario2Button_Update_Guardar3').click(function() {
		// OBTENER DECLARACION JURADA
		document.forms["formulario2"].opc_boton.value = 3;
		
		obtenerDeclaracionJurada();
	});

	jQuery('#formulario2Button_Cancel_Guardar1, #formulario2Button_Cancel_Guardar2').click(function() {
		// CANCELAR INFO
		document.forms["formulario2"].opc_boton.value = 4;
		
		location.reload();
	});

});

function remueve_clases_campos_requeridos()
{
	// SECCION CAMPOS NO REQUERIDOS y SIN ERROR
	////////////////////////////////////////////

	// PESTAÑA N°1
	jQuery('#formulario2for_l1_dp_direccion_txt, #formulario2for_l1_dp_numero_txt, #formulario2for_l1_dp_region_txt, #formulario2for_l1_dp_comuna_txt, #formulario2for_l1_dp_ciudad_txt, #formulario2for_l1_dp_cod_area_txt, #formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_fono_movil_txt, #formulario2for_l1_dp_email_txt, #formulario2for_l1_dp_prevision_salud_txt, #formulario2for_l1_dp_prevision_social_txt').removeClass('required error');
	jQuery('#formulario2for_l1_dc_rut_empleador_txt, #formulario2for_l1_dc_dv_rut_empleador_txt, #formulario2for_l1_dc_razon_social_txt, #formulario2for_l1_dc_direccion_txt, #formulario2for_l1_dc_numero_txt, #formulario2for_l1_dc_region_txt, #formulario2for_l1_dc_comuna_txt, #formulario2for_l1_dc_ciudad_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_fono_movil_txt, #formulario2for_l1_dc_email_txt').removeClass('required error');
	// PESTAÑA N°2
	jQuery('#formulario2for_l2_mes_agno01_columna1_num, #formulario2for_l2_mes_agno01_columna2_num, #formulario2for_l2_mes_agno01_columna3_num, #formulario2for_l2_mes_agno01_columna4_num, #formulario2for_l2_mes_agno01_columna5_num, #formulario2for_l2_mes_agno01_columna6_num, #formulario2for_l2_mes_agno01_columna7_num, #formulario2for_l2_mes_agno01_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno02_columna1_num, #formulario2for_l2_mes_agno02_columna2_num, #formulario2for_l2_mes_agno02_columna3_num, #formulario2for_l2_mes_agno02_columna4_num, #formulario2for_l2_mes_agno02_columna5_num, #formulario2for_l2_mes_agno02_columna6_num, #formulario2for_l2_mes_agno02_columna7_num, #formulario2for_l2_mes_agno02_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno03_columna1_num, #formulario2for_l2_mes_agno03_columna2_num, #formulario2for_l2_mes_agno03_columna3_num, #formulario2for_l2_mes_agno03_columna4_num, #formulario2for_l2_mes_agno03_columna5_num, #formulario2for_l2_mes_agno03_columna6_num, #formulario2for_l2_mes_agno03_columna7_num, #formulario2for_l2_mes_agno03_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno04_columna1_num, #formulario2for_l2_mes_agno04_columna2_num, #formulario2for_l2_mes_agno04_columna3_num, #formulario2for_l2_mes_agno04_columna4_num, #formulario2for_l2_mes_agno04_columna5_num, #formulario2for_l2_mes_agno04_columna6_num, #formulario2for_l2_mes_agno04_columna7_num, #formulario2for_l2_mes_agno04_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno05_columna1_num, #formulario2for_l2_mes_agno05_columna2_num, #formulario2for_l2_mes_agno05_columna3_num, #formulario2for_l2_mes_agno05_columna4_num, #formulario2for_l2_mes_agno05_columna5_num, #formulario2for_l2_mes_agno05_columna6_num, #formulario2for_l2_mes_agno05_columna7_num, #formulario2for_l2_mes_agno05_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno06_columna1_num, #formulario2for_l2_mes_agno06_columna2_num, #formulario2for_l2_mes_agno06_columna3_num, #formulario2for_l2_mes_agno06_columna4_num, #formulario2for_l2_mes_agno06_columna5_num, #formulario2for_l2_mes_agno06_columna6_num, #formulario2for_l2_mes_agno06_columna7_num, #formulario2for_l2_mes_agno06_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno07_columna1_num, #formulario2for_l2_mes_agno07_columna2_num, #formulario2for_l2_mes_agno07_columna3_num, #formulario2for_l2_mes_agno07_columna4_num, #formulario2for_l2_mes_agno07_columna5_num, #formulario2for_l2_mes_agno07_columna6_num, #formulario2for_l2_mes_agno07_columna7_num, #formulario2for_l2_mes_agno07_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno08_columna1_num, #formulario2for_l2_mes_agno08_columna2_num, #formulario2for_l2_mes_agno08_columna3_num, #formulario2for_l2_mes_agno08_columna4_num, #formulario2for_l2_mes_agno08_columna5_num, #formulario2for_l2_mes_agno08_columna6_num, #formulario2for_l2_mes_agno08_columna7_num, #formulario2for_l2_mes_agno08_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno09_columna1_num, #formulario2for_l2_mes_agno09_columna2_num, #formulario2for_l2_mes_agno09_columna3_num, #formulario2for_l2_mes_agno09_columna4_num, #formulario2for_l2_mes_agno09_columna5_num, #formulario2for_l2_mes_agno09_columna6_num, #formulario2for_l2_mes_agno09_columna7_num, #formulario2for_l2_mes_agno09_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno10_columna1_num, #formulario2for_l2_mes_agno10_columna2_num, #formulario2for_l2_mes_agno10_columna3_num, #formulario2for_l2_mes_agno10_columna4_num, #formulario2for_l2_mes_agno10_columna5_num, #formulario2for_l2_mes_agno10_columna6_num, #formulario2for_l2_mes_agno10_columna7_num, #formulario2for_l2_mes_agno10_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno11_columna1_num, #formulario2for_l2_mes_agno11_columna2_num, #formulario2for_l2_mes_agno11_columna3_num, #formulario2for_l2_mes_agno11_columna4_num, #formulario2for_l2_mes_agno11_columna5_num, #formulario2for_l2_mes_agno11_columna6_num, #formulario2for_l2_mes_agno11_columna7_num, #formulario2for_l2_mes_agno11_columna8_num').removeClass('required error');
	jQuery('#formulario2for_l2_mes_agno12_columna1_num, #formulario2for_l2_mes_agno12_columna2_num, #formulario2for_l2_mes_agno12_columna3_num, #formulario2for_l2_mes_agno12_columna4_num, #formulario2for_l2_mes_agno12_columna5_num, #formulario2for_l2_mes_agno12_columna6_num, #formulario2for_l2_mes_agno12_columna7_num, #formulario2for_l2_mes_agno12_columna8_num').removeClass('required error');
	// PESTAÑA N°4
	jQuery('#BtnCarga1, #BtnCarga2, #formulario2for_l4_archivo1_txt, #formulario2for_l4_archivo2_txt').removeClass('required error');
	// GENERAL
	jQuery('#formulario2error_lengueta1, #formulario2error_lengueta2, #formulario2error_lengueta4').removeClass('required error');
	document.forms["formulario2"].error_lengueta1.value = 0;
	document.forms["formulario2"].error_lengueta2.value = 0;
	document.forms["formulario2"].error_lengueta4.value = 0;
}

function guardarFormulario()
{
	// SECCION REMUEVE CLASES REQUERIDAS
	remueve_clases_campos_requeridos();

	// ENVIA FORMULARIO
	jQuery("#formulario2").submit();
}

function validarFormulario()
{
	// SECCION REMUEVE CLASES REQUERIDAS
	remueve_clases_campos_requeridos();

	// SECCION CAMPOS REQUERIDOS
	setea_campos_requeridos();

	// SECCION VALIDACIONES COMPLEJAS
	pone_mensajes_a_campos_requeridos_complejos();

	// PESTAÑA N°1
	if(jQuery("input:radio[name='for_l1_dc_dependencia_laboral_txt']:checked'").val() != 2)
	{
		// DEPENDENCIA LABORAL NO ES INDEPENDIENTE
		if(!jQuery('#formulario2for_l1_dp_direccion_txt').valid() || !jQuery('#formulario2for_l1_dp_numero_txt').valid() || !jQuery('#formulario2for_l1_dp_region_txt').valid() || !jQuery('#formulario2for_l1_dp_comuna_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_ciudad_txt').valid() || !jQuery('#formulario2for_l1_dp_cod_area_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_fijo_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_movil_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_email_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_salud_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_social_txt').valid() || !jQuery('#formulario2for_l1_dc_rut_empleador_txt').valid() || 
			!jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').valid() || !jQuery('#formulario2for_l1_dc_razon_social_txt').valid() || !jQuery('#formulario2for_l1_dc_direccion_txt').valid() || !jQuery('#formulario2for_l1_dc_numero_txt').valid() || 
			!jQuery('#formulario2for_l1_dc_region_txt').valid() || !jQuery('#formulario2for_l1_dc_comuna_txt').valid() || !jQuery('#formulario2for_l1_dc_ciudad_txt').valid() || !jQuery('#formulario2for_l1_dc_cod_area_txt').valid() || 
			!jQuery('#formulario2for_l1_dc_fono_fijo_txt').valid() || !jQuery('#formulario2for_l1_dc_fono_movil_txt').valid() || !jQuery('#formulario2for_l1_dc_email_txt').valid())
		{
			document.forms["formulario2"].error_lengueta1.value = 1;
		}
		else
		{
			document.forms["formulario2"].error_lengueta1.value = 0;
		}
	}
	else
	{
		// DEPENDENCIA LABORAL ES INDEPENDIENTE
		if(!jQuery('#formulario2for_l1_dp_direccion_txt').valid() || !jQuery('#formulario2for_l1_dp_numero_txt').valid() || !jQuery('#formulario2for_l1_dp_region_txt').valid() || !jQuery('#formulario2for_l1_dp_comuna_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_ciudad_txt').valid() || !jQuery('#formulario2for_l1_dp_cod_area_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_fijo_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_movil_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_email_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_salud_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_social_txt').valid())
		{
			document.forms["formulario2"].error_lengueta1.value = 1;
		}
		else
		{
			document.forms["formulario2"].error_lengueta1.value = 0;
		}
	}

	// PESTAÑA N°2
	if(!jQuery('#formulario2for_l2_mes_agno01_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno02_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno03_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno04_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno05_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno06_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno07_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno08_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno09_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno10_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno11_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno12_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna8_num').valid())
	{
		document.forms["formulario2"].error_lengueta2.value = 1;
	}
	else
	{
		document.forms["formulario2"].error_lengueta2.value = 0;
	}
	
	// PESTAÑA N°4
	if(!jQuery('#formulario2for_l4_archivo1_txt').valid() || !jQuery('#formulario2for_l4_archivo2_txt').valid())
	{
		document.forms["formulario2"].error_lengueta4.value = 1;
	}
	else
	{
		document.forms["formulario2"].error_lengueta4.value = 0;
	}

	// SECCION VALIDACION FORMULARIO
	/////////////////////////////////
	if(jQuery("#formulario2").valid())
	{
		if(!jQuery('#formulario2error_lengueta1').valid() || !jQuery('#formulario2error_lengueta2').valid() || !jQuery('#formulario2error_lengueta4').valid())
		{
			var mensaje = "";

			if(!jQuery('#formulario2error_lengueta1').valid() && !jQuery('#formulario2error_lengueta2').valid() && !jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'las pestañas "Información General", "Declaración de Ingresos" y "Documentación Adjunta"';
			}

			if(!jQuery('#formulario2error_lengueta1').valid() && !jQuery('#formulario2error_lengueta2').valid() && jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'las pestañas "Información General" y "Declaración de Ingresos"';
			}

			if(!jQuery('#formulario2error_lengueta1').valid() && jQuery('#formulario2error_lengueta2').valid() && !jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'las pestañas "Información General" y "Documentación Adjunta"';
			}

			if(!jQuery('#formulario2error_lengueta1').valid() && jQuery('#formulario2error_lengueta2').valid() && jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'la pestaña "Información General"';
			}

			if(jQuery('#formulario2error_lengueta1').valid() && !jQuery('#formulario2error_lengueta2').valid() && !jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'las pestañas "Declaración de Ingresos" y "Documentación Adjunta"';
			}

			if(jQuery('#formulario2error_lengueta1').valid() && !jQuery('#formulario2error_lengueta2').valid() && jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'la pestaña "Declaración de Ingresos"';
			}

			if(jQuery('#formulario2error_lengueta1').valid() && jQuery('#formulario2error_lengueta2').valid() && !jQuery('#formulario2error_lengueta4').valid())
			{
				mensaje += 'la pestaña "Documentación Adjunta"';
			}

			jAlert('<p align="left">Para Enviar Postulación debe completar la información solicitada en '+mensaje+'.</p>','Error de Validación');

			// SECCION VALIDACIONES SIMPLES
			pone_mensajes_a_campos_requeridos_simples();
		}
		else
		{
			var total_total = parseInt(document.forms["formulario2"].for_l2_total_total_num.value);
			var texto_extra = "";

			if(total_total == 0)
			{
				texto_extra = "Si estás cesante infórmate del beneficio de cesantía o recuerda que tus ingresos serán revisados con SII.";
			}

			jConfirm("<p align='left'>Su postulación será enviada.\n"+texto_extra+"</p>\n¿Está seguro que desea continuar?", "Enviar Postulación", function(r) {
				if(r) 
				{
					// SE ENVIARA LA POSTULACION

					// MENSAJE INFO
					xajax_opc_mensaje_info(2);

					// SETEA OPCION PARA IR A PAGINA DE ENVIO EXITOSO
					xajax_opc_envio_exitoso();

					// ENVIA FORMULARIO
					jQuery("#formulario2").submit();
				}
				else
				{
					// NO SE ENVIARA LA POSTULACION
				}
			});
		}
	}
	else
	{
		// SECCION VALIDACIONES SIMPLES
		pone_mensajes_a_campos_requeridos_simples();
	}
}

function obtenerDeclaracionJurada()
{
	// SECCION REMUEVE CLASES REQUERIDAS
	remueve_clases_campos_requeridos();

	// SECCION CAMPOS REQUERIDOS
	setea_campos_requeridos();

	// SECCION VALIDACIONES COMPLEJAS
	pone_mensajes_a_campos_requeridos_complejos();

	// PESTAÑA N°1
	if(jQuery("input:radio[name='for_l1_dc_dependencia_laboral_txt']:checked'").val() != 2)
	{
		// DEPENDENCIA LABORAL NO ES INDEPENDIENTE
		if(!jQuery('#formulario2for_l1_dp_direccion_txt').valid() || !jQuery('#formulario2for_l1_dp_numero_txt').valid() || !jQuery('#formulario2for_l1_dp_region_txt').valid() || !jQuery('#formulario2for_l1_dp_comuna_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_ciudad_txt').valid() || !jQuery('#formulario2for_l1_dp_cod_area_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_fijo_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_movil_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_email_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_salud_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_social_txt').valid() || !jQuery('#formulario2for_l1_dc_rut_empleador_txt').valid() || 
			!jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').valid() || !jQuery('#formulario2for_l1_dc_razon_social_txt').valid() || !jQuery('#formulario2for_l1_dc_direccion_txt').valid() || !jQuery('#formulario2for_l1_dc_numero_txt').valid() || 
			!jQuery('#formulario2for_l1_dc_region_txt').valid() || !jQuery('#formulario2for_l1_dc_comuna_txt').valid() || !jQuery('#formulario2for_l1_dc_ciudad_txt').valid() || !jQuery('#formulario2for_l1_dc_cod_area_txt').valid() || 
			!jQuery('#formulario2for_l1_dc_fono_fijo_txt').valid() || !jQuery('#formulario2for_l1_dc_fono_movil_txt').valid() || !jQuery('#formulario2for_l1_dc_email_txt').valid())
		{
			document.forms["formulario2"].error_lengueta1.value = 1;
		}
		else
		{
			document.forms["formulario2"].error_lengueta1.value = 0;
		}
	}
	else
	{
		// DEPENDENCIA LABORAL ES INDEPENDIENTE
		if(!jQuery('#formulario2for_l1_dp_direccion_txt').valid() || !jQuery('#formulario2for_l1_dp_numero_txt').valid() || !jQuery('#formulario2for_l1_dp_region_txt').valid() || !jQuery('#formulario2for_l1_dp_comuna_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_ciudad_txt').valid() || !jQuery('#formulario2for_l1_dp_cod_area_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_fijo_txt').valid() || !jQuery('#formulario2for_l1_dp_fono_movil_txt').valid() || 
			!jQuery('#formulario2for_l1_dp_email_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_salud_txt').valid() || !jQuery('#formulario2for_l1_dp_prevision_social_txt').valid())
		{
			document.forms["formulario2"].error_lengueta1.value = 1;
		}
		else
		{
			document.forms["formulario2"].error_lengueta1.value = 0;
		}
	}

	// PESTAÑA N°2
	if(!jQuery('#formulario2for_l2_mes_agno01_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno01_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno02_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno02_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno03_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno03_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno04_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno04_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno05_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno05_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno06_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno06_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno07_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno07_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno08_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno08_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno09_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno09_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno10_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno10_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno11_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno11_columna8_num').valid() || 
		!jQuery('#formulario2for_l2_mes_agno12_columna1_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna2_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna3_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna4_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna5_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna6_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna7_num').valid() || !jQuery('#formulario2for_l2_mes_agno12_columna8_num').valid())
	{
		document.forms["formulario2"].error_lengueta2.value = 1;
	}
	else
	{
		document.forms["formulario2"].error_lengueta2.value = 0;
	}

	// SECCION VALIDACION FORMULARIO
	/////////////////////////////////
	if(jQuery("#formulario2").valid())
	{
		if(!jQuery('#formulario2error_lengueta1').valid() || !jQuery('#formulario2error_lengueta2').valid())
		{
			var mensaje = "";

			if(!jQuery('#formulario2error_lengueta1').valid() && !jQuery('#formulario2error_lengueta2').valid())
			{
				mensaje += 'las pestañas "Información General" y "Declaración de Ingresos"';
			}

			if(!jQuery('#formulario2error_lengueta1').valid() && jQuery('#formulario2error_lengueta2').valid())
			{
				mensaje += 'la pestaña "Información General"';
			}

			if(jQuery('#formulario2error_lengueta1').valid() && !jQuery('#formulario2error_lengueta2').valid())
			{
				mensaje += 'la pestaña "Declaración de Ingresos"';
			}

			jAlert('<p align="left">Para Enviar Postulación debe completar la información solicitada en '+mensaje+'.</p>','Error de Validación');
		}
		else
		{
			// SE ENVIARA FORMULARIO

			// SETEA OPCION PARA DESCARGAR ARCHIVO PDF
			xajax_opc_declaracion_jurada();

			// ENVIA FORMULARIO
			jQuery("#formulario2").submit();
		}
	}
	else
	{
		// SECCION VALIDACIONES SIMPLES
		pone_mensajes_a_campos_requeridos_simples();
	}
}

function validaLenguetaFormulario()
{
	var opc_boton = jQuery('#formulario2opc_boton').val();

	if(opc_boton == 2 || opc_boton == 3)
	{
		// BOTÓN ENVIAR POSTULACIÓN Y/O BOTÓN OBTENER DECLARACIÓN JURADA
		/////////////////////////////////////////////////////////////////

		// SECCION CAMPOS REQUERIDOS
		setea_campos_requeridos();

		// SECCION VALIDACIONES COMPLEJAS
		pone_mensajes_a_campos_requeridos_complejos();

		// SECCION VALIDACION FORMULARIO
		/////////////////////////////////
		if(!jQuery("#formulario2").valid() || !jQuery('#formulario2error_lengueta1').valid() || !jQuery('#formulario2error_lengueta2').valid() || !jQuery('#formulario2error_lengueta4').valid())
		{
			// SECCION VALIDACIONES SIMPLES
			pone_mensajes_a_campos_requeridos_simples();
		}
	}
}

// Funciones jfuentes

String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };

function pasarMayusculas(cadena)
{
    var result="";
    var str = cadena.split('');

    for(i=0; i<=str.length-1; i++)
        {
        str[i] = str[i].toUpperCase();
        result+=str[i];
    }
 
    return(result);
}

function solo_numeros(e)
{ 
    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla==8) 
		return true;

    patron = /\d/;
    te = String.fromCharCode(tecla);

    return patron.test(te);
}

function setea_campos_requeridos()
{
	var opc_boton = jQuery('#formulario2opc_boton').val();

	// SECCION CAMPOS REQUERIDOS SIMPLES
	/////////////////////////////////////

	// PESTAÑA N°1
	jQuery('#formulario2for_l1_dp_direccion_txt, #formulario2for_l1_dp_numero_txt, #formulario2for_l1_dp_region_txt, #formulario2for_l1_dp_comuna_txt, #formulario2for_l1_dp_ciudad_txt, #formulario2for_l1_dp_email_txt, #formulario2for_l1_dp_prevision_salud_txt, #formulario2for_l1_dp_prevision_social_txt').addClass('required');
	jQuery('#formulario2for_l1_dc_rut_empleador_txt, #formulario2for_l1_dc_dv_rut_empleador_txt, #formulario2for_l1_dc_razon_social_txt, #formulario2for_l1_dc_direccion_txt, #formulario2for_l1_dc_numero_txt, #formulario2for_l1_dc_region_txt, #formulario2for_l1_dc_comuna_txt, #formulario2for_l1_dc_ciudad_txt, #formulario2for_l1_dc_email_txt').addClass('required');
	// PESTAÑA N°2
	jQuery('#formulario2for_l2_mes_agno01_columna1_num, #formulario2for_l2_mes_agno01_columna2_num, #formulario2for_l2_mes_agno01_columna3_num, #formulario2for_l2_mes_agno01_columna4_num, #formulario2for_l2_mes_agno01_columna5_num, #formulario2for_l2_mes_agno01_columna6_num, #formulario2for_l2_mes_agno01_columna7_num, #formulario2for_l2_mes_agno01_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno02_columna1_num, #formulario2for_l2_mes_agno02_columna2_num, #formulario2for_l2_mes_agno02_columna3_num, #formulario2for_l2_mes_agno02_columna4_num, #formulario2for_l2_mes_agno02_columna5_num, #formulario2for_l2_mes_agno02_columna6_num, #formulario2for_l2_mes_agno02_columna7_num, #formulario2for_l2_mes_agno02_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno03_columna1_num, #formulario2for_l2_mes_agno03_columna2_num, #formulario2for_l2_mes_agno03_columna3_num, #formulario2for_l2_mes_agno03_columna4_num, #formulario2for_l2_mes_agno03_columna5_num, #formulario2for_l2_mes_agno03_columna6_num, #formulario2for_l2_mes_agno03_columna7_num, #formulario2for_l2_mes_agno03_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno04_columna1_num, #formulario2for_l2_mes_agno04_columna2_num, #formulario2for_l2_mes_agno04_columna3_num, #formulario2for_l2_mes_agno04_columna4_num, #formulario2for_l2_mes_agno04_columna5_num, #formulario2for_l2_mes_agno04_columna6_num, #formulario2for_l2_mes_agno04_columna7_num, #formulario2for_l2_mes_agno04_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno05_columna1_num, #formulario2for_l2_mes_agno05_columna2_num, #formulario2for_l2_mes_agno05_columna3_num, #formulario2for_l2_mes_agno05_columna4_num, #formulario2for_l2_mes_agno05_columna5_num, #formulario2for_l2_mes_agno05_columna6_num, #formulario2for_l2_mes_agno05_columna7_num, #formulario2for_l2_mes_agno05_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno06_columna1_num, #formulario2for_l2_mes_agno06_columna2_num, #formulario2for_l2_mes_agno06_columna3_num, #formulario2for_l2_mes_agno06_columna4_num, #formulario2for_l2_mes_agno06_columna5_num, #formulario2for_l2_mes_agno06_columna6_num, #formulario2for_l2_mes_agno06_columna7_num, #formulario2for_l2_mes_agno06_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno07_columna1_num, #formulario2for_l2_mes_agno07_columna2_num, #formulario2for_l2_mes_agno07_columna3_num, #formulario2for_l2_mes_agno07_columna4_num, #formulario2for_l2_mes_agno07_columna5_num, #formulario2for_l2_mes_agno07_columna6_num, #formulario2for_l2_mes_agno07_columna7_num, #formulario2for_l2_mes_agno07_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno08_columna1_num, #formulario2for_l2_mes_agno08_columna2_num, #formulario2for_l2_mes_agno08_columna3_num, #formulario2for_l2_mes_agno08_columna4_num, #formulario2for_l2_mes_agno08_columna5_num, #formulario2for_l2_mes_agno08_columna6_num, #formulario2for_l2_mes_agno08_columna7_num, #formulario2for_l2_mes_agno08_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno09_columna1_num, #formulario2for_l2_mes_agno09_columna2_num, #formulario2for_l2_mes_agno09_columna3_num, #formulario2for_l2_mes_agno09_columna4_num, #formulario2for_l2_mes_agno09_columna5_num, #formulario2for_l2_mes_agno09_columna6_num, #formulario2for_l2_mes_agno09_columna7_num, #formulario2for_l2_mes_agno09_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno10_columna1_num, #formulario2for_l2_mes_agno10_columna2_num, #formulario2for_l2_mes_agno10_columna3_num, #formulario2for_l2_mes_agno10_columna4_num, #formulario2for_l2_mes_agno10_columna5_num, #formulario2for_l2_mes_agno10_columna6_num, #formulario2for_l2_mes_agno10_columna7_num, #formulario2for_l2_mes_agno10_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno11_columna1_num, #formulario2for_l2_mes_agno11_columna2_num, #formulario2for_l2_mes_agno11_columna3_num, #formulario2for_l2_mes_agno11_columna4_num, #formulario2for_l2_mes_agno11_columna5_num, #formulario2for_l2_mes_agno11_columna6_num, #formulario2for_l2_mes_agno11_columna7_num, #formulario2for_l2_mes_agno11_columna8_num').addClass('required');
	jQuery('#formulario2for_l2_mes_agno12_columna1_num, #formulario2for_l2_mes_agno12_columna2_num, #formulario2for_l2_mes_agno12_columna3_num, #formulario2for_l2_mes_agno12_columna4_num, #formulario2for_l2_mes_agno12_columna5_num, #formulario2for_l2_mes_agno12_columna6_num, #formulario2for_l2_mes_agno12_columna7_num, #formulario2for_l2_mes_agno12_columna8_num').addClass('required');

	if(opc_boton == 2)
	{
		// OPCION "ENVIAR POSTULACIÓN"
		///////////////////////////////

		// PESTAÑA N°4
		jQuery('#BtnCarga1, #BtnCarga2, #formulario2for_l4_archivo1_txt, #formulario2for_l4_archivo2_txt').addClass('required');
	}

	// SECCION CAMPOS REQUERIDOS COMPLEJOS
	///////////////////////////////////////

	jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt, #formulario2for_l1_dp_fono_movil_txt').removeClass('required');
	jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_movil_txt').removeClass('required');

	// CODIGO AREA, FONO FIJO Y/O FONO MOVIL DP
	if(!jQuery('#formulario2for_l1_dp_fono_movil_txt').val())
	{
		jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');		
	}
	else
	{
		if(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
		{
			jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').addClass('required');
		}
		else
		{
			jQuery('#formulario2for_l1_dp_fono_movil_txt').addClass('required');
		}
	}

	if(jQuery("input:radio[name='for_l1_dc_dependencia_laboral_txt']:checked'").val() != 2)
	{
		// DEPENDENCIA LABORAL NO ES INDEPENDIENTE

		// CODIGO AREA, FONO FIJO Y/O FONO MOVIL DC
		if(!jQuery('#formulario2for_l1_dc_fono_movil_txt').val())
		{
			jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');		
		}
		else
		{
			if(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "" || jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
			{
				jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').addClass('required');
			}
			else
			{
				jQuery('#formulario2for_l1_dc_fono_movil_txt').addClass('required');
			}
		}
	}
}

function pone_mensajes_a_campos_requeridos_complejos()
{
	// SECCION VALIDACIONES COMPLEJAS
	//////////////////////////////////

	// COD. AREA, TELEFONO FIJO Y/O TELEFONO MOVIL DP
	if(!jQuery('#formulario2for_l1_dp_fono_movil_txt').valid())
	{
		// FONO MOVIL INVALIDO Y VALIDO CODIGO AREA Y FONO FIJO
		jQuery('#formulario2for_l1_dp_fono_movil_txt.telefonoMovil').attr('title','Ingrese Teléfono Móvil. Debe ingresar número de 8 dígitos comenzando con 6,7,8 ó 9.');
		jQuery('#formulario2for_l1_dp_fono_movil_txt').tooltip();

		if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
		{
			// VIENE CODIGO AREA
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
			{
				if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
			{
				if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
				jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
			{
				if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
				else
				{
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// NO VIENE CODIGO AREA
			jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
			jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
			jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
			jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
			jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
			jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
		}
	}
	else
	{
		// FONO MOVIL VALIDO
		jQuery('#formulario2for_l1_dp_fono_movil_txt.telefonoMovil').attr('title','');
		jQuery('#formulario2for_l1_dp_fono_movil_txt').tooltip();

		if(jQuery('#formulario2for_l1_dp_fono_movil_txt').val() != "")
		{
			// VIENE TELEFONO MOVIL
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "")
			{
				//VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
				if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
				{
					// VIENE CODIGO AREA
					if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
					{
						if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
						else
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
					{
						if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
						else
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
					{
						if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
						else
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE CODIGO AREA
					jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
					jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
				jQuery('#formulario2for_l1_dp_fono_fijo_txt, #formulario2for_l1_dp_cod_area_txt').removeClass('error');
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// NO VIENE TELEFONO MOVIL
			if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dp_fono_fijo_txt').val() != "")
			{
				// VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
				if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() != "")
				{
					// VIENE CODIGO AREA
					if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '41')
					{
						if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
						else
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '2')
					{
						if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
						else
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else if(jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '52'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '34'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '71'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '45'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '67'|| 
						jQuery('#formulario2for_l1_dp_cod_area_txt').val() == '61')
					{
						if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dp_fono_fijo_txt').val())))
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
						else
						{
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').removeClass('error');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','');
							jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE CODIGO AREA
					jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
					jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
					jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
				jQuery('#formulario2for_l1_dp_cod_area_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dp_cod_area_txt').tooltip();
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
				jQuery('#formulario2for_l1_dp_fono_fijo_txt').tooltip();
			}
		}
	}

	if(jQuery("input:radio[name='for_l1_dc_dependencia_laboral_txt']:checked'").val() != 2)
	{
		// DEPENDENCIA LABORAL NO ES INDEPENDIENTE

		// RUT Y DV RUT DC
		if(!jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').valid())
		{
			if(jQuery('#formulario2for_l1_dc_rut_empleador_txt').val() == "")
			{
				// NO VIENE VALOR DE RUT
				jQuery('#formulario2for_l1_dc_rut_empleador_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('title','Ingrese RUT Empleador válido.');
				jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','Ingrese Dígito Verificador válido dependiendo del RUT.');
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
			}
			else
			{
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','Ingrese Dígito Verificador válido dependiendo del RUT.');
				jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
			}
		}
		else
		{
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','');
			jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();
		}

		// COD. AREA, TELEFONO FIJO Y TELEFONO MOVIL DC
		if(!jQuery('#formulario2for_l1_dc_fono_movil_txt').valid())
		{
			// FONO MOVIL INVALIDO Y VALIDO CODIGO AREA Y FONO FIJO
			jQuery('#formulario2for_l1_dc_fono_movil_txt.telefonoMovil').attr('title','Ingrese Teléfono Móvil. Debe ingresar número de 8 dígitos comenzando con 6,7,8 ó 9.');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').tooltip();

			if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
			{
				// VIENE CODIGO AREA
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
				{
					if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
				{
					if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
					jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
				{
					if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
					else
					{
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
					jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE CODIGO AREA
				jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
				jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
				jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
			}
		}
		else
		{
			// FONO MOVIL VALIDO
			jQuery('#formulario2for_l1_dc_fono_movil_txt.telefonoMovil').attr('title','');
			jQuery('#formulario2for_l1_dc_fono_movil_txt').tooltip();

			if(jQuery('#formulario2for_l1_dc_fono_movil_txt').val() != "")
			{
				// VIENE TELEFONO MOVIL
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "")
				{
					//VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
					{
						// VIENE CODIGO AREA
						if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
						{
							if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
						{
							if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
						{
							if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else
						{
							jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
							jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						// NO VIENE CODIGO AREA
						jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					jQuery('#formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt').removeClass('error');
					jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','');
					jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
			else
			{
				// NO VIENE TELEFONO MOVIL
				if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "" || jQuery('#formulario2for_l1_dc_fono_fijo_txt').val() != "")
				{
					// VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() != "")
					{
						// VIENE CODIGO AREA
						if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '32' || jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '41')
						{
							if(!(/^\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 7 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '2')
						{
							if(!(/^[2]\d{7}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 8 dígitos comenzando con 2.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else if(jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '58'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '57'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '55'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '52'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '51'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '53'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '33'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '34'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '35'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '72'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '75'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '71'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '73'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '42'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '43'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '45'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '63'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '64'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '65'|| jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '67'|| 
							jQuery('#formulario2for_l1_dc_cod_area_txt').val() == '61')
						{
							if(!(/^\d{6}$/.test(jQuery('#formulario2for_l1_dc_fono_fijo_txt').val())))
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número de 6 dígitos.');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
							else
							{
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').removeClass('error');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
								jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
							}
						}
						else
						{
							jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
							jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
							jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
						}
					}
					else
					{
						// NO VIENE CODIGO AREA
						jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área. Debe ingresar formato válido.');
						jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Teléfono Fijo. Debe ingresar número dependiendo de Código Área.');
						jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
					}
				}
				else
				{
					// NO VIENE AL MENOS UN CODIGO AREA Y FONO FIJO
					jQuery('#formulario2for_l1_dc_cod_area_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
					jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').addClass('error');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','Ingrese Código Área y Teléfono Fijo y/o Teléfono Móvil.');
					jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
				}
			}
		}
	}
	else
	{
		// DEPENDENCIA LABORAL ES INDEPENDIENTE

		jQuery('#formulario2for_l1_dc_rut_empleador_txt, #formulario2for_l1_dc_dv_rut_empleador_txt, #formulario2for_l1_dc_razon_social_txt, #formulario2for_l1_dc_direccion_txt, #formulario2for_l1_dc_numero_txt, #formulario2for_l1_dc_region_txt, #formulario2for_l1_dc_comuna_txt, #formulario2for_l1_dc_ciudad_txt, #formulario2for_l1_dc_fono_fijo_txt, #formulario2for_l1_dc_cod_area_txt, #formulario2for_l1_dc_fono_movil_txt, #formulario2for_l1_dc_email_txt').removeClass('error');

		// RUT Y DV RUT DC
		jQuery('#formulario2for_l1_dc_rut_empleador_txt').attr('title','');
		jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();
		jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').attr('title','');
		jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();

		// COD. AREA,  TELEFONO FIJO Y TELEFONO MOVIL DC
		jQuery('#formulario2for_l1_dc_cod_area_txt.codigoArea').attr('title','');
		jQuery('#formulario2for_l1_dc_cod_area_txt').tooltip();
		jQuery('#formulario2for_l1_dc_fono_fijo_txt.telefonoFijo').attr('title','');
		jQuery('#formulario2for_l1_dc_fono_fijo_txt').tooltip();
		jQuery('#formulario2for_l1_dc_fono_movil_txt.telefonoMovil').attr('title','');
		jQuery('#formulario2for_l1_dc_fono_movil_txt').tooltip();
	}
}

function pone_mensajes_a_campos_requeridos_simples()
{
	var opc_boton = jQuery('#formulario2opc_boton').val();

	// SECCION VALIDACIONES SIMPLES
	////////////////////////////////

	//   P E S T A Ñ A   N° 1   //
	pone_mensajes_a_campos_requeridos_simples_pestagna1();

	//   P E S T A Ñ A   N° 2   //
	pone_mensajes_a_campos_requeridos_simples_pestagna2();

	if(opc_boton == 2)
	{
		// OPCION "ENVIAR POSTULACIÓN"
		///////////////////////////////
		
		jQuery('#BtnCarga1, #BtnCarga2').removeClass('valid');
		jQuery('#BtnCarga1, #BtnCarga2').addClass('error');
	}
}

function pone_mensajes_a_campos_requeridos_simples_pestagna1()
{
	//////////////////////////////
	//   P E S T A Ñ A   N° 1   //
	//////////////////////////////

	jQuery('#formulario2for_l1_dp_direccion_txt.required.error').attr('title','Ingrese Dirección.');
	jQuery('#formulario2for_l1_dp_direccion_txt').tooltip();

	jQuery('#formulario2for_l1_dp_numero_txt.required.error').attr('title','Ingrese Número.');
	jQuery('#formulario2for_l1_dp_numero_txt').tooltip();

	jQuery('#formulario2for_l1_dp_region_txt.required.error').attr('title','Ingrese Región.');
	jQuery('#formulario2for_l1_dp_region_txt').tooltip();

	jQuery('#formulario2for_l1_dp_comuna_txt.required.error').attr('title','Ingrese Comuna.');
	jQuery('#formulario2for_l1_dp_comuna_txt').tooltip();

	jQuery('#formulario2for_l1_dp_ciudad_txt.required.error').attr('title','Ingrese Ciudad.');
	jQuery('#formulario2for_l1_dp_ciudad_txt').tooltip();

	jQuery('#formulario2for_l1_dp_email_txt.required.error').attr('title','Ingrese Email válido.');
	jQuery('#formulario2for_l1_dp_email_txt').tooltip();

	jQuery('#formulario2for_l1_dp_prevision_salud_txt.required.error').attr('title','Ingrese Previsión Salud.');
	jQuery('#formulario2for_l1_dp_prevision_salud_txt').tooltip();

	jQuery('#formulario2for_l1_dp_prevision_social_txt.required.error').attr('title','Ingrese Previsión Social.');
	jQuery('#formulario2for_l1_dp_prevision_social_txt').tooltip();

	if(jQuery("input:radio[name='for_l1_dc_dependencia_laboral_txt']:checked'").val() != 2)
	{
		jQuery('#formulario2for_l1_dc_rut_empleador_txt.required.error').attr('title','Ingrese RUT Empleador válido.');
		jQuery('#formulario2for_l1_dc_rut_empleador_txt').tooltip();

		jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt.required.error').attr('title','Ingrese Dígito Verificador válido dependiendo del RUT.');
		jQuery('#formulario2for_l1_dc_dv_rut_empleador_txt').tooltip();

		jQuery('#formulario2for_l1_dc_razon_social_txt.required.error').attr('title','Ingrese Razón Social Empleador.');
		jQuery('#formulario2for_l1_dc_razon_social_txt').tooltip();

		jQuery('#formulario2for_l1_dc_direccion_txt.required.error').attr('title','Ingrese Dirección.');
		jQuery('#formulario2for_l1_dc_direccion_txt').tooltip();

		jQuery('#formulario2for_l1_dc_numero_txt.required.error').attr('title','Ingrese Número.');
		jQuery('#formulario2for_l1_dc_numero_txt').tooltip();

		jQuery('#formulario2for_l1_dc_region_txt.required.error').attr('title','Ingrese Región.');
		jQuery('#formulario2for_l1_dc_region_txt').tooltip();

		jQuery('#formulario2for_l1_dc_comuna_txt.required.error').attr('title','Ingrese Comuna.');
		jQuery('#formulario2for_l1_dc_comuna_txt').tooltip();

		jQuery('#formulario2for_l1_dc_ciudad_txt.required.error').attr('title','Ingrese Ciudad.');
		jQuery('#formulario2for_l1_dc_ciudad_txt').tooltip();

		jQuery('#formulario2for_l1_dc_email_txt.required.error').attr('title','Ingrese Email Laboral válido.');
		jQuery('#formulario2for_l1_dc_email_txt').tooltip();
	}
}

function pone_mensajes_a_campos_requeridos_simples_pestagna2()
{
	//////////////////////////////
	//   P E S T A Ñ A   N° 2   //
	//////////////////////////////

	//**********   F I L A   N° 01   **********//
	jQuery('#formulario2for_l2_mes_agno01_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno01_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno01_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno01_columna8_num').tooltip();

	//**********   F I L A   N° 02   **********//
	jQuery('#formulario2for_l2_mes_agno02_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno02_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno02_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno02_columna8_num').tooltip();

	//**********   F I L A   N° 03   **********//
	jQuery('#formulario2for_l2_mes_agno03_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno03_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno03_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno03_columna8_num').tooltip();

	//**********   F I L A   N° 04   **********//
	jQuery('#formulario2for_l2_mes_agno04_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno04_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno04_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno04_columna8_num').tooltip();

	//**********   F I L A   N° 05   **********//
	jQuery('#formulario2for_l2_mes_agno05_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno05_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno05_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno05_columna8_num').tooltip();

	//**********   F I L A   N° 06   **********//
	jQuery('#formulario2for_l2_mes_agno06_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno06_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno06_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno06_columna8_num').tooltip();

	//**********   F I L A   N° 07   **********//
	jQuery('#formulario2for_l2_mes_agno07_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno07_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno07_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno07_columna8_num').tooltip();

	//**********   F I L A   N° 08   **********//
	jQuery('#formulario2for_l2_mes_agno08_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno08_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno08_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno08_columna8_num').tooltip();

	//**********   F I L A   N° 09   **********//
	jQuery('#formulario2for_l2_mes_agno09_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno09_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno09_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno09_columna8_num').tooltip();

	//**********   F I L A   N° 10   **********//
	jQuery('#formulario2for_l2_mes_agno10_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno10_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno10_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno10_columna8_num').tooltip();

	//**********   F I L A   N° 11   **********//
	jQuery('#formulario2for_l2_mes_agno11_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno11_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno11_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno11_columna8_num').tooltip();

	//**********   F I L A   N° 12   **********//
	jQuery('#formulario2for_l2_mes_agno12_columna1_num.required.error').attr('title','Ingrese Sueldo y Pensiones en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna1_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna2_num.required.error').attr('title','Ingrese Honorarios en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna2_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna3_num.required.error').attr('title','Ingrese Retiro en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna3_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna4_num.required.error').attr('title','Ingrese Dividendos en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna4_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna5_num.required.error').attr('title','Ingrese Intereses Mobiliarios en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna5_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna6_num.required.error').attr('title','Ingrese Ganancias de Capital en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna6_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna7_num.required.error').attr('title','Ingrese Pensión alimenticia y aportes de parientes en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna7_num').tooltip();

	jQuery('#formulario2for_l2_mes_agno12_columna8_num.required.error').attr('title','Ingrese Actividades Independientes en '+jQuery('#formulario2for_l2_mes_agno12_descripcion_txt').val()+'.');
	jQuery('#formulario2for_l2_mes_agno12_columna8_num').tooltip();
}

function muestra_totales()
{
	// INICIO FILAS
	if(isNaN(document.forms["formulario2"].for_l2_mes_agno01_total_num.value))
		document.getElementById("TotalMesAgno01").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno01").innerHTML = document.forms["formulario2"].for_l2_mes_agno01_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno02_total_num.value))
		document.getElementById("TotalMesAgno02").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno02").innerHTML = document.forms["formulario2"].for_l2_mes_agno02_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno03_total_num.value))
		document.getElementById("TotalMesAgno03").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno03").innerHTML = document.forms["formulario2"].for_l2_mes_agno03_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno04_total_num.value))
		document.getElementById("TotalMesAgno04").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno04").innerHTML = document.forms["formulario2"].for_l2_mes_agno04_total_num.value;
		
	if(isNaN(document.forms["formulario2"].for_l2_mes_agno05_total_num.value))
		document.getElementById("TotalMesAgno05").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno05").innerHTML = document.forms["formulario2"].for_l2_mes_agno05_total_num.value;
		
	if(isNaN(document.forms["formulario2"].for_l2_mes_agno06_total_num.value))
		document.getElementById("TotalMesAgno06").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno06").innerHTML = document.forms["formulario2"].for_l2_mes_agno06_total_num.value;
		
	if(isNaN(document.forms["formulario2"].for_l2_mes_agno07_total_num.value))
		document.getElementById("TotalMesAgno07").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno07").innerHTML = document.forms["formulario2"].for_l2_mes_agno07_total_num.value;
		
	if(isNaN(document.forms["formulario2"].for_l2_mes_agno08_total_num.value))
		document.getElementById("TotalMesAgno08").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno08").innerHTML = document.forms["formulario2"].for_l2_mes_agno08_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno09_total_num.value))
		document.getElementById("TotalMesAgno09").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno09").innerHTML = document.forms["formulario2"].for_l2_mes_agno09_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno10_total_num.value))
		document.getElementById("TotalMesAgno10").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno10").innerHTML = document.forms["formulario2"].for_l2_mes_agno10_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno11_total_num.value))
		document.getElementById("TotalMesAgno11").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno11").innerHTML = document.forms["formulario2"].for_l2_mes_agno11_total_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_mes_agno12_total_num.value))
		document.getElementById("TotalMesAgno12").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalMesAgno12").innerHTML = document.forms["formulario2"].for_l2_mes_agno12_total_num.value;
	// FIN FILAS

	// INICIO COLUMNAS
	if(isNaN(document.forms["formulario2"].for_l2_total_columna1_num.value))
		document.getElementById("TotalColumna1").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna1").innerHTML = document.forms["formulario2"].for_l2_total_columna1_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_columna2_num.value))
		document.getElementById("TotalColumna2").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna2").innerHTML = document.forms["formulario2"].for_l2_total_columna2_num.value;
		
	if(isNaN(document.forms["formulario2"].for_l2_total_columna3_num.value))
		document.getElementById("TotalColumna3").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna3").innerHTML = document.forms["formulario2"].for_l2_total_columna3_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_columna4_num.value))
		document.getElementById("TotalColumna4").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna4").innerHTML = document.forms["formulario2"].for_l2_total_columna4_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_columna5_num.value))
		document.getElementById("TotalColumna5").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna5").innerHTML = document.forms["formulario2"].for_l2_total_columna5_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_columna6_num.value))
		document.getElementById("TotalColumna6").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna6").innerHTML = document.forms["formulario2"].for_l2_total_columna6_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_columna7_num.value))
		document.getElementById("TotalColumna7").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna7").innerHTML = document.forms["formulario2"].for_l2_total_columna7_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_columna8_num.value))
		document.getElementById("TotalColumna8").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalColumna8").innerHTML = document.forms["formulario2"].for_l2_total_columna8_num.value;

	if(isNaN(document.forms["formulario2"].for_l2_total_total_num.value))
		document.getElementById("TotalTotal").innerHTML = "&nbsp;";
	else
		document.getElementById("TotalTotal").innerHTML = document.forms["formulario2"].for_l2_total_total_num.value;
	// FIN COLUMNAS
}

function calcula_totales(valor, fila, columna)
{
	var suma_total = 0;

	if(fila == '01' || fila == '02' || fila == '03' || fila == '04' || fila == '05' || fila == '06' || fila == '07' || fila == '08' || fila == '09' || fila == '10' || fila == '11' || fila == '12')
	{
		var columna1 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna1_num.value");
		var columna2 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna2_num.value");
		var columna3 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna3_num.value");
		var columna4 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna4_num.value");
		var columna5 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna5_num.value");
		var columna6 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna6_num.value");
		var columna7 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna7_num.value");
		var columna8 = eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_columna8_num.value");

		var total_fila = parseInt(columna1)+parseInt(columna2)+parseInt(columna3)+parseInt(columna4)+parseInt(columna5)+parseInt(columna6)+parseInt(columna7)+parseInt(columna8);

		eval("document.forms['formulario2'].for_l2_mes_agno"+fila+"_total_num.value = "+total_fila+";");
	}

	if(columna == 1 || columna == 2 || columna == 3 || columna == 4 || columna == 5 || columna == 6 || columna == 7 || columna == 8)
	{
		var fila01 = eval("document.forms['formulario2'].for_l2_mes_agno01_columna"+columna+"_num.value");
		var fila02 = eval("document.forms['formulario2'].for_l2_mes_agno02_columna"+columna+"_num.value");
		var fila03 = eval("document.forms['formulario2'].for_l2_mes_agno03_columna"+columna+"_num.value");
		var fila04 = eval("document.forms['formulario2'].for_l2_mes_agno04_columna"+columna+"_num.value");
		var fila05 = eval("document.forms['formulario2'].for_l2_mes_agno05_columna"+columna+"_num.value");
		var fila06 = eval("document.forms['formulario2'].for_l2_mes_agno06_columna"+columna+"_num.value");
		var fila07 = eval("document.forms['formulario2'].for_l2_mes_agno07_columna"+columna+"_num.value");
		var fila08 = eval("document.forms['formulario2'].for_l2_mes_agno08_columna"+columna+"_num.value");
		var fila09 = eval("document.forms['formulario2'].for_l2_mes_agno09_columna"+columna+"_num.value");
		var fila10 = eval("document.forms['formulario2'].for_l2_mes_agno10_columna"+columna+"_num.value");
		var fila11 = eval("document.forms['formulario2'].for_l2_mes_agno11_columna"+columna+"_num.value");
		var fila12 = eval("document.forms['formulario2'].for_l2_mes_agno12_columna"+columna+"_num.value");

		var total_columna = parseInt(fila01)+parseInt(fila02)+parseInt(fila03)+parseInt(fila04)+parseInt(fila05)+parseInt(fila06)+parseInt(fila07)+parseInt(fila08)+parseInt(fila09)+parseInt(fila10)+parseInt(fila11)+parseInt(fila12);

		eval("document.forms['formulario2'].for_l2_total_columna"+columna+"_num.value = "+total_columna+";");
	}

	// TOTAL TOTAL
	for(i = 1; i <= 8; i++)
	{
		var total_columna = eval("document.forms['formulario2'].for_l2_total_columna"+i+"_num.value");

		suma_total = suma_total + parseInt(total_columna);
	}
	document.forms["formulario2"].for_l2_total_total_num.value = parseInt(suma_total);

	muestra_totales();
}

function vtn_abrir_archivo(sURL, sNombreVtna)
{
	window.open(sURL, sNombreVtna, 'width=600,height=600,resizable=yes,scrollbars=yes');
}

function confirm_eliminar_archivo1()
{
	var nombre_archivo = document.forms["formulario2"].for_l4_archivo1_txt.value;	

	jQuery('#loaderAjax1').show();
	jConfirm("La Declaración Jurada será eliminada.\n\n¿Está seguro que desea continuar?", "Eliminar Archivo", function(r) {
		if(r) 
		{
			// SE ELIMINARA EL ARCHIVO
			//xajax_borrar_archivo_provisoriamente(nombre_archivo, 1);
			xajax_borrar_archivo(nombre_archivo, 1);
		}
		else
		{
			// NO SE ELIMINARA EL ARCHIVO
			jQuery('#loaderAjax1').hide();
		}
	});
}

function confirm_eliminar_archivo2()
{
	var nombre_archivo = document.forms["formulario2"].for_l4_archivo2_txt.value;

	jQuery('#loaderAjax2').show();
	jConfirm("El Certificado de Afiliación Superintendencia de AFP será eliminado.\n\n¿Está seguro que desea continuar?", "Eliminar Archivo", function(r) {
		if(r) 
		{
			// SE ELIMINARA EL ARCHIVO
			//xajax_borrar_archivo_provisoriamente(nombre_archivo, 2);
			xajax_borrar_archivo(nombre_archivo, 2);
		}
		else
		{
			// NO SE ELIMINARA EL ARCHIVO
			jQuery('#loaderAjax2').hide();
		}
	});
}

function confirm_eliminar_archivo3()
{
	var nombre_archivo = document.forms["formulario2"].for_l4_archivo3_txt.value;

	jQuery('#loaderAjax3').show();
	jConfirm("El Certificado Cotizaciones Previsionales Últimos 12 meses será eliminado.\n\n¿Está seguro que desea continuar?", "Eliminar Archivo", function(r) {
		if(r) 
		{
			// SE ELIMINARA EL ARCHIVO
			//xajax_borrar_archivo_provisoriamente(nombre_archivo, 3);
			xajax_borrar_archivo(nombre_archivo, 3);
		}
		else
		{
			// NO SE ELIMINARA EL ARCHIVO
			jQuery('#loaderAjax3').hide();
		}
	});
}

function confirm_eliminar_archivo4()
{
	var nombre_archivo = document.forms["formulario2"].for_l4_archivo4_txt.value;

	jQuery('#loaderAjax4').show();
	jConfirm("El Certificado Sueldos será eliminado.\n\n¿Está seguro que desea continuar?", "Eliminar Archivo", function(r) {
		if(r) 
		{
			// SE ELIMINARA EL ARCHIVO
			//xajax_borrar_archivo_provisoriamente(nombre_archivo, 4);
			xajax_borrar_archivo(nombre_archivo, 4);
		}
		else
		{
			// NO SE ELIMINARA EL ARCHIVO
			jQuery('#loaderAjax4').hide();
		}
	});
}

function confirm_eliminar_archivo5()
{
	var nombre_archivo = document.forms["formulario2"].for_l4_archivo5_txt.value;

	jQuery('#loaderAjax5').show();
	jConfirm("El Certificado Boletas Emitidas será eliminado.\n\n¿Está seguro que desea continuar?", "Eliminar Archivo", function(r) {
		if(r) 
		{
			// SE ELIMINARA EL ARCHIVO
			//xajax_borrar_archivo_provisoriamente(nombre_archivo, 5);
			xajax_borrar_archivo(nombre_archivo, 5);
		}
		else
		{
			// NO SE ELIMINARA EL ARCHIVO
			jQuery('#loaderAjax5').hide();
		}
	});
}

function cjto_archivos_para_eliminar(lista_archivos)
{
	var nroArchivos = lista_archivos.length;

	for (i=0; i<nroArchivos; i++)
	{
		xajax_borrar_archivo(lista_archivos[i]);
	}
}

function mousemove_btn_archivo(id_archivo)
{
	switch (id_archivo)
	{
		case 'userfile1':
			texto='Debe subir archivo con la Declaración Jurada. El archivo es requerido.';
			break;
		case 'userfile2':
			texto='Debe subir archivo con el Certificado de Afiliación Superintendencia de AFP. El archivo es requerido.';
			break;
		case 'userfile3':
			texto='Debe subir archivo con el Certificado Cotizaciones Previsionales Últimos 12 meses.';
			break;
		case 'userfile4':
			texto='Debe subir archivo con el Certificado Sueldos.';
			break;
		case 'userfile5':
			texto='Debe subir archivo con el Certificado Boletas Emitidas.';
			break;
	}

	jQuery('#'+id_archivo).attr('title',texto);
	jQuery('#'+id_archivo).tooltip();
}