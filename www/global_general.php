<?php

define("titlePagina", "Sistema Postulación");


//Variables Globales
/*
$prevision_social = array(
	1 => 'AFP', 
	2 => 'INP (Caja E.E. Part., Públicos, Municipal, etc.)', 
	3 => 'CAPREDENA', 
	4 => 'DIPRECA', 
	5 => 'Otra Previsión', 
	6 => 'Sin Previsión'
);

$dependencia_laboral = array(
	1 => 'Dependiente', 
	2 => 'Independiente', 
	3 => 'Ambos'
);

$comuna = array(
	1101 => 'IQUIQUE',
	1102 => 'CAMIÑA',
	1103 => 'COLCHANE',
	1104 => 'HUARA',
	1105 => 'PICA',
	1106 => 'POZO ALMONTE',
	1107 => 'ALTO HOSPICIO',
	2101 => 'ANTOFAGASTA',
	2102 => 'MEJILLONES',
	2103 => 'SIERRA GORDA',
	2104 => 'TALTAL',
	2201 => 'CALAMA',
	2202 => 'OLLAGÜE',
	2203 => 'SAN PEDRO DE ATACAMA',
	2301 => 'TOCOPILLA',
	2302 => 'MARIA ELENA',
	3101 => 'COPIAPO',
	3102 => 'CALDERA',
	3103 => 'TIERRA AMARILLA',
	3201 => 'CHAÑARAL',
	3202 => 'DIEGO DE ALMAGRO',
	3301 => 'VALLENAR',
	3302 => 'ALTO DEL CARMEN',
	3303 => 'FREIRINA',
	3304 => 'HUASCO',
	4101 => 'LA SERENA',
	4102 => 'COQUIMBO',
	4103 => 'ANDACOLLO',
	4104 => 'LA HIGUERA',
	4105 => 'PAIGUANO',
	4106 => 'VICUÑA',
	4201 => 'ILLAPEL',
	4202 => 'CANELA',
	4203 => 'LOS VILOS',
	4204 => 'SALAMANCA',
	4301 => 'OVALLE',
	4302 => 'COMBARBALA',
	4303 => 'MONTE PATRIA',
	4304 => 'PUNITAQUI',
	4305 => 'RIO HURTADO',
	5101 => 'VALPARAISO',
	5102 => 'CASABLANCA',
	5103 => 'CONCON',
	5104 => 'JUAN FERNANDEZ',
	5105 => 'PUCHUNCAVI',
	5106 => 'QUILPUE',
	5107 => 'QUINTERO',
	5108 => 'VILLA ALEMANA',
	5109 => 'VIÑA DEL MAR',
	5201 => 'ISLA DE PASCUA',
	5301 => 'LOS ANDES',
	5302 => 'CALLE LARGA',
	5303 => 'RINCONADA',
	5304 => 'SAN ESTEBAN',
	5401 => 'LA LIGUA',
	5402 => 'CABILDO',
	5403 => 'PAPUDO',
	5404 => 'PETORCA',
	5405 => 'ZAPALLAR',
	5501 => 'QUILLOTA',
	5502 => 'CALERA',
	5503 => 'HIJUELAS',
	5504 => 'LA CRUZ',
	5505 => 'LIMACHE',
	5506 => 'NOGALES',
	5507 => 'OLMUE',
	5601 => 'SAN ANTONIO',
	5602 => 'ALGARROBO',
	5603 => 'CARTAGENA',
	5604 => 'EL QUISCO',
	5605 => 'EL TABO',
	5606 => 'SANTO DOMINGO',
	5701 => 'SAN FELIPE',
	5702 => 'CATEMU',
	5703 => 'LLAILLAY',
	5704 => 'PANQUEHUE',
	5705 => 'PUTAENDO',
	5706 => 'SANTA MARIA',
	6101 => 'RANCAGUA',
	6102 => 'CODEGUA',
	6103 => 'COINCO',
	6104 => 'COLTAUCO',
	6105 => 'DOÑIHUE',
	6106 => 'GRANEROS',
	6107 => 'LAS CABRAS',
	6108 => 'MACHALI',
	6109 => 'MALLOA',
	6110 => 'MOSTAZAL',
	6111 => 'OLIVAR',
	6112 => 'PEUMO',
	6113 => 'PICHIDEGUA',
	6114 => 'QUINTA DE TILCOCO',
	6115 => 'RENGO',
	6116 => 'REQUINOA',
	6117 => 'SAN VICENTE',
	6201 => 'PICHILEMU',
	6202 => 'LA ESTRELLA',
	6203 => 'LITUECHE',
	6204 => 'MARCHIHUE',
	6205 => 'NAVIDAD',
	6206 => 'PAREDONES',
	6301 => 'SAN FERNANDO',
	6302 => 'CHEPICA',
	6303 => 'CHIMBARONGO',
	6304 => 'LOLOL',
	6305 => 'NANCAGUA',
	6306 => 'PALMILLA',
	6307 => 'PERALILLO',
	6308 => 'PLACILLA',
	6309 => 'PUMANQUE',
	6310 => 'SANTA CRUZ',
	7101 => 'TALCA',
	7102 => 'CONSTITUCION',
	7103 => 'CUREPTO',
	7104 => 'EMPEDRADO',
	7105 => 'MAULE',
	7106 => 'PELARCO',
	7107 => 'PENCAHUE',
	7108 => 'RIO CLARO',
	7109 => 'SAN CLEMENTE',
	7110 => 'SAN RAFAEL',
	7201 => 'CAUQUENES',
	7202 => 'CHANCO',
	7203 => 'PELLUHUE',
	7301 => 'CURICO',
	7302 => 'HUALAÑE',
	7303 => 'LICANTEN',
	7304 => 'MOLINA',
	7305 => 'RAUCO',
	7306 => 'ROMERAL',
	7307 => 'SAGRADA FAMILIA',
	7308 => 'TENO',
	7309 => 'VICHUQUEN',
	7401 => 'LINARES',
	7402 => 'COLBUN',
	7403 => 'LONGAVI',
	7404 => 'PARRAL',
	7405 => 'RETIRO',
	7406 => 'SAN JAVIER',
	7407 => 'VILLA ALEGRE',
	7408 => 'YERBAS BUENAS',
	8101 => 'CONCEPCION',
	8102 => 'CORONEL',
	8103 => 'CHIGUAYANTE',
	8104 => 'FLORIDA',
	8105 => 'HUALQUI',
	8106 => 'LOTA',
	8107 => 'PENCO',
	8108 => 'SAN PEDRO DE LA PAZ',
	8109 => 'SANTA JUANA',
	8110 => 'TALCAHUANO',
	8111 => 'TOME',
	8112 => 'HUALPEN',
	8201 => 'LEBU',
	8202 => 'ARAUCO',
	8203 => 'CAÑETE',
	8204 => 'CONTULMO',
	8205 => 'CURANILAHUE',
	8206 => 'LOS ALAMOS',
	8207 => 'TIRUA',
	8301 => 'LOS ANGELES',
	8302 => 'ANTUCO',
	8303 => 'CABRERO',
	8304 => 'LAJA',
	8305 => 'MULCHEN',
	8306 => 'NACIMIENTO',
	8307 => 'NEGRETE',
	8308 => 'QUILACO',
	8309 => 'QUILLECO',
	8310 => 'SAN ROSENDO',
	8311 => 'SANTA BARBARA',
	8312 => 'TUCAPEL',
	8313 => 'YUMBEL',
	8314 => 'ALTO BIOBIO',
	8401 => 'CHILLAN',
	8402 => 'BULNES',
	8403 => 'COBQUECURA',
	8404 => 'COELEMU',
	8405 => 'COIHUECO',
	8406 => 'CHILLAN VIEJO',
	8407 => 'EL CARMEN',
	8408 => 'NINHUE',
	8409 => 'ÑIQUEN',
	8410 => 'PEMUCO',
	8411 => 'PINTO',
	8412 => 'PORTEZUELO',
	8413 => 'QUILLON',
	8414 => 'QUIRIHUE',
	8415 => 'RANQUIL',
	8416 => 'SAN CARLOS',
	8417 => 'SAN FABIAN',
	8418 => 'SAN IGNACIO',
	8419 => 'SAN NICOLAS',
	8420 => 'TREGUACO',
	8421 => 'YUNGAY',
	9101 => 'TEMUCO',
	9102 => 'CARAHUE',
	9103 => 'CUNCO',
	9104 => 'CURARREHUE',
	9105 => 'FREIRE',
	9106 => 'GALVARINO',
	9107 => 'GORBEA',
	9108 => 'LAUTARO',
	9109 => 'LONCOCHE',
	9110 => 'MELIPEUCO',
	9111 => 'NUEVA IMPERIAL',
	9112 => 'PADRE LAS CASAS',
	9113 => 'PERQUENCO',
	9114 => 'PITRUFQUEN',
	9115 => 'PUCON',
	9116 => 'SAAVEDRA',
	9117 => 'TEODORO SCHMIDT',
	9118 => 'TOLTEN',
	9119 => 'VILCUN',
	9120 => 'VILLARRICA',
	9121 => 'CHOLCHOL',
	9201 => 'ANGOL',
	9202 => 'COLLIPULLI',
	9203 => 'CURACAUTIN',
	9204 => 'ERCILLA',
	9205 => 'LONQUIMAY',
	9206 => 'LOS SAUCES',
	9207 => 'LUMACO',
	9209 => 'RENAICO',
	9211 => 'VICTORIA',
	9212 => 'PUREN',
	9213 => 'TRAIGUEN',
	10101 => 'PUERTO MONTT',
	10102 => 'CALBUCO',
	10103 => 'COCHAMO',
	10104 => 'FRESIA',
	10105 => 'FRUTILLAR',
	10106 => 'LOS MUERMOS',
	10107 => 'LLANQUIHUE',
	10108 => 'MAULLIN',
	10109 => 'PUERTO VARAS',
	10201 => 'CASTRO',
	10202 => 'ANCUD',
	10203 => 'CHONCHI',
	10204 => 'CURACO DE VELEZ',
	10205 => 'DALCAHUE',
	10206 => 'PUQUELDON',
	10207 => 'QUEILEN',
	10208 => 'QUELLON',
	10209 => 'QUEMCHI',
	10210 => 'QUINCHAO',
	10301 => 'OSORNO',
	10302 => 'PUERTO OCTAY',
	10303 => 'PURRANQUE',
	10304 => 'PUYEHUE',
	10305 => 'RIO NEGRO',
	10306 => 'SAN JUAN DE LA COSTA',
	10307 => 'SAN PABLO',
	10401 => 'CHAITEN',
	10402 => 'FUTALEUFU',
	10403 => 'HUALAIHUE',
	10404 => 'PALENA',
	11101 => 'COYHAIQUE',
	11102 => 'LAGO VERDE',
	11201 => 'AYSEN',
	11202 => 'CISNES',
	11203 => 'GUAITECAS',
	11301 => 'COCHRANE',
	11302 => 'OHIGGINS',
	11303 => 'TORTEL',
	11401 => 'CHILE CHICO',
	11402 => 'RIO IBAÑEZ',
	12101 => 'PUNTA ARENAS',
	12102 => 'LAGUNA BLANCA',
	12103 => 'RIO VERDE',
	12104 => 'SAN GREGORIO',
	12201 => 'CABO DE HORNOS',
	12202 => 'ANTARTICA',
	12301 => 'PORVENIR',
	12302 => 'PRIMAVERA',
	12303 => 'TIMAUKEL',
	12401 => 'NATALES',
	12402 => 'TORRES DE PAINE',
	13101 => 'SANTIAGO',
	13102 => 'CERRILLOS',
	13103 => 'CERRO NAVIA',
	13104 => 'CONCHALI',
	13105 => 'EL BOSQUE',
	13106 => 'ESTACION CENTRAL',
	13107 => 'HUECHURABA',
	13108 => 'INDEPENDENCIA',
	13109 => 'LA CISTERNA',
	13110 => 'LA FLORIDA',
	13111 => 'LA GRANJA',
	13112 => 'LA PINTANA',
	13113 => 'LA REINA',
	13114 => 'LAS CONDES',
	13115 => 'LO BARNECHEA',
	13116 => 'LO ESPEJO',
	13117 => 'LO PRADO',
	13118 => 'MACUL',
	13119 => 'MAIPU',
	13120 => 'ÑUÑOA',
	13121 => 'PEDRO AGUIRRE CERDA',
	13122 => 'PEÑALOLEN',
	13123 => 'PROVIDENCIA',
	13124 => 'PUDAHUEL',
	13125 => 'QUILICURA',
	13126 => 'QUINTA NORMAL',
	13127 => 'RECOLETA',
	13128 => 'RENCA',
	13129 => 'SAN JOAQUIN',
	13130 => 'SAN MIGUEL',
	13131 => 'SAN RAMON',
	13132 => 'VITACURA',
	13201 => 'PUENTE ALTO',
	13202 => 'PIRQUE',
	13203 => 'SAN JOSE DE MAIPO',
	13301 => 'COLINA',
	13302 => 'LAMPA',
	13303 => 'TILTIL',
	13401 => 'SAN BERNARDO',
	13402 => 'BUIN',
	13403 => 'CALERA DE TANGO',
	13404 => 'PAINE',
	13501 => 'MELIPILLA',
	13502 => 'ALHUE',
	13503 => 'CURACAVI',
	13504 => 'MARIA PINTO',
	13505 => 'SAN PEDRO',
	13601 => 'TALAGANTE',
	13602 => 'EL MONTE',
	13603 => 'ISLA DE MAIPO',
	13604 => 'PADRE HURTADO',
	13605 => 'PEÑAFLOR',
	14101 => 'VALDIVIA',
	14102 => 'CORRAL',
	14103 => 'LANCO',
	14104 => 'LOS LAGOS',
	14105 => 'MAFIL',
	14106 => 'MARIQUINA',
	14107 => 'PAILLACO',
	14108 => 'PANGUIPULLI',
	14201 => 'FUTRONO',
	14202 => 'LA UNION',
	14203 => 'LAGO RANCO',
	14204 => 'RIO BUENO',
	15101 => 'ARICA',
	15102 => 'CAMARONES',
	15201 => 'PUTRE',
	15202 => 'GENERAL LAGOS'
);

$ciudad = array(
	1001 => 'IQUIQUE',
	1002 => 'CAMIÑA',
	1003 => 'COLCHANE',
	1004 => 'HUARA',
	1005 => 'COLLAGUASI',
	1006 => 'PICA',
	1007 => 'LA TIRANA',
	1008 => 'POZO ALMONTE',
	1009 => 'ALTO HOSPICIO',
	2001 => 'ANTOFAGASTA',
	2002 => 'CERRO MORENO',
	2003 => 'ESTACION ZALDIVAR',
	2004 => 'JUAN LOPEZ',
	2005 => 'HORNITOS',
	2006 => 'MEJILLONES',
	2007 => 'SIERRA GORDA',
	2008 => 'TALTAL',
	2009 => 'CALAMA',
	2010 => 'CHUQUICAMATA',
	2011 => 'OLLAGUE',
	2012 => 'SAN PEDRO DE ATACAMA',
	2013 => 'TOCOPILLA',
	2014 => 'MARIA ELENA',
	3001 => 'COPIAPO',
	3002 => 'BAHIA INGLESA',
	3003 => 'CALDERA',
	3004 => 'LORETO',
	3005 => 'PUERTO VIEJO',
	3006 => 'TIERRA AMARILLA',
	3007 => 'CHAÑARAL',
	3008 => 'EL SALADO',
	3009 => 'FLAMENCO',
	3010 => 'DIEGO DE ALMAGRO',
	3011 => 'EL SALVADOR',
	3012 => 'PORTAL DEL INCA',
	3013 => 'VALLENAR',
	3014 => 'ALTO DEL CARMEN',
	3015 => 'FREIRINA',
	3016 => 'HUASCO',
	4001 => 'LA SERENA',
	4002 => 'COQUIMBO',
	4003 => 'GUANAQUEROS',
	4004 => 'LAS TACAS',
	4005 => 'PUERTO VELERO',
	4006 => 'TONGOY',
	4007 => 'ANDACOLLO',
	4008 => 'LA HIGUERA',
	4009 => 'PAIGUANO',
	4010 => 'VICUÑA',
	4011 => 'ILLAPEL',
	4012 => 'CANELA BAJA',
	4013 => 'LOS VILOS',
	4014 => 'PICHIDANGUI',
	4015 => 'QUILIMARI ALTO',
	4016 => 'CHILLEPIN',
	4017 => 'SALAMANCA',
	4018 => 'GUAMALATA',
	4019 => 'LA CHIMBA',
	4020 => 'OVALLE',
	4021 => 'SOTAQUI',
	4022 => 'COMBARBALA',
	4023 => 'CHAÑARAL ALTO',
	4024 => 'EL PALQUI',
	4025 => 'MONTE PATRIA',
	4026 => 'PUNITAQUI',
	4027 => 'RIO HURTADO',
	5001 => 'LAGUNA VERDE',
	5002 => 'PLACILLA DE PEÑUELAS',
	5003 => 'VALPARAISO',
	5004 => 'CASABLANCA',
	5005 => 'QUINTA',
	5006 => 'CONCON',
	5007 => 'SAN JUAN BAUTISTA',
	5008 => 'LAS VENTANAS',
	5009 => 'MAITENCILLO',
	5010 => 'PUCHUNCAVI',
	5011 => 'QUILPUE',
	5012 => 'QUINTERO',
	5013 => 'VILLA ALEMANA',
	5014 => 'VIÑA DEL MAR',
	5015 => 'HANGA ROA',
	5016 => 'LOS ANDES',
	5017 => 'SAN RAFAEL',
	5018 => 'CALLE LARGA',
	5019 => 'SEÑOR POBRE BEJARES',
	5020 => 'RINCONADA',
	5021 => 'SAN ESTEBAN',
	5022 => 'LA LIGUA',
	5023 => 'LOS MOLLES',
	5024 => 'LOS QUINQUELLES',
	5025 => 'PICHICUY',
	5026 => 'PLACILLA',
	5027 => 'VALLE HERMOSO',
	5028 => 'ARTIFICIO',
	5029 => 'CABILDO',
	5030 => 'PAPUDO',
	5031 => 'PULLALLI',
	5032 => 'CHINCOLCO',
	5033 => 'PETORCA',
	5034 => 'CATAPILCO',
	5035 => 'LA LAGUNA DE ZAPALLAR',
	5036 => 'ZAPALLAR',
	5037 => 'QUILLOTA',
	5038 => 'SAN PEDRO',
	5039 => 'LA CALERA',
	5040 => 'HIJUELAS',
	5041 => 'LA CRUZ',
	5042 => 'LIMACHE',
	5043 => 'EL MELON',
	5044 => 'NOGALES',
	5045 => 'OLMUE',
	5046 => 'SAN ANTONIO',
	5047 => 'ALGARROBO',
	5048 => 'EL YECO',
	5049 => 'MIRASOL',
	5050 => 'CARTAGENA',
	5051 => 'EL QUISCO',
	5052 => 'EL TABO',
	5053 => 'LAS CRUCES',
	5054 => 'LAS BRISAS',
	5055 => 'SANTO DOMINGO',
	5056 => 'ALGARROBAL-PUNTA EL OLIVO',
	5057 => 'CURIMON',
	5058 => 'SAN FELIPE',
	5059 => 'SAN RAFAEL',
	5060 => 'CATEMU',
	5061 => 'LLAILLAY',
	5062 => 'PANQUEHUE',
	5063 => 'PUTAENDO',
	5064 => 'SANTA MARIA',
	6001 => 'RANCAGUA',
	6002 => 'CODEGUA',
	6003 => 'LA COMPAÑIA',
	6004 => 'COINCO',
	6005 => 'COLTAUCO',
	6006 => 'LORETO-MOLINO',
	6007 => 'PARRAL DE PUREN',
	6008 => 'DOÑIHUE',
	6009 => 'LO MIRADA',
	6010 => 'GRANEROS',
	6011 => 'LA COMPAÑIA',
	6012 => 'EL MANZANO',
	6013 => 'LAS CABRAS',
	6014 => 'COYA',
	6015 => 'MACHALI',
	6016 => 'SEWELL',
	6017 => 'MALLOA',
	6018 => 'PELEQUEN',
	6019 => 'ANGOSTURA',
	6020 => 'LA PUNTA',
	6021 => 'SAN FRANCISCO DE MOSTAZAL',
	6022 => 'GULTRO',
	6023 => 'OLIVAR ALTO',
	6024 => 'PEUMO',
	6025 => 'PUNTA DIAMANTE',
	6026 => 'PICHIDEGUA',
	6027 => 'QUINTA DE TILCOCO',
	6028 => 'ESMERALDA',
	6029 => 'RENGO',
	6030 => 'ROSARIO',
	6031 => 'LOS LIRIOS',
	6032 => 'REQUINOA',
	6033 => 'EL TAMBO',
	6034 => 'RASTROJOS',
	6035 => 'SAN VICENTE DE TAGUATAGUA',
	6036 => 'CAHUIL',
	6037 => 'PICHILEMU',
	6038 => 'COSTA DEL SOL',
	6039 => 'LA ESTRELLA',
	6040 => 'LITUECHE',
	6041 => 'MARCHIHUE',
	6042 => 'LA BOCA',
	6043 => 'LA VEGA DE PURPUYA',
	6044 => 'BUCALEMU',
	6045 => 'PAREDONES',
	6046 => 'ANGOSTURA',
	6047 => 'SAN FERNANDO',
	6048 => 'AUQUINCO',
	6049 => 'CHEPICA',
	6050 => 'CHIMBARONGO',
	6051 => 'SAN ENRIQUE DE ROMERAL',
	6052 => 'TINGUIRIRICA',
	6053 => 'LOLOL',
	6054 => 'CUNACO',
	6055 => 'NANCAGUA',
	6056 => 'PALMILLA',
	6057 => 'PERALILLO',
	6058 => 'POBLACION',
	6059 => 'PLACILLA',
	6060 => 'PUMANQUE',
	6061 => 'SANTA CRUZ',
	7001 => 'HUILQUILEMU',
	7002 => 'PANGUILEMO',
	7003 => 'TALCA',
	7004 => 'CONSTITUCION',
	7005 => 'LOS PELLINES',
	7006 => 'SAN OLGA',
	7007 => 'CUREPTO',
	7008 => 'EMPREDADO',
	7009 => 'CHACARILLAS',
	7010 => 'CULENAR',
	7011 => 'MAULE',
	7012 => 'VILLA FRANCIA',
	7013 => 'PELARCO',
	7014 => 'PENCAHUE',
	7015 => 'CUMPEO',
	7016 => 'SAN CLEMENTE',
	7017 => 'SAN RAFAEL',
	7018 => 'CAUQUENES',
	7019 => 'CHANCO',
	7020 => 'PELLUHUE',
	7021 => 'QUILICURA',
	7022 => 'SAN ALBERTO',
	7023 => 'SARMIENTO',
	7024 => 'VILLA LOS NICHES',
	7025 => 'HUALAÑE',
	7026 => 'ILOCA',
	7027 => 'LICANTEN',
	7028 => 'ITAHUE UNO',
	7029 => 'MOLINA',
	7030 => 'RAUCO',
	7031 => 'ROMERAL',
	7032 => 'SAGRADA FAMILIA',
	7033 => 'VILLA PRAT',
	7034 => 'TENO',
	7035 => 'LAGO VICHUQUEN',
	7036 => 'LLICO',
	7037 => 'LAS OBRAS',
	7038 => 'LINARES',
	7039 => 'VARA GRUESA',
	7040 => 'COLBUN',
	7041 => 'PANIMAVIDA',
	7042 => 'LONGAVI',
	7043 => 'PARRAL',
	7044 => 'COPIHUE',
	7045 => 'RETIRO',
	7046 => 'BOBADILLA',
	7047 => 'SAN JAVIER',
	7048 => 'VILLA ALEGRE',
	7049 => 'YERBAS BUENAS',
	7050 => 'CURICO',
	8001 => 'CONCEPCION',
	8002 => 'CORONEL',
	8003 => 'CHIGUAYANTE',
	8004 => 'FLORIDA',
	8005 => 'HUALQUI',
	8006 => 'TALCAMAVIDA',
	8007 => 'LOTA',
	8008 => 'PENCO',
	8009 => 'SAN PEDRO DE LA PAZ',
	8010 => 'SANTA JUANA',
	8011 => 'CALETA TUMBES',
	8012 => 'TALCAHUANO',
	8013 => 'DICHATO',
	8014 => 'RAFAEL',
	8015 => 'TOME',
	8016 => 'HUALPEN',
	8017 => 'LEBU',
	8018 => 'SANTA ROSA',
	8019 => 'ARAUCO',
	8020 => 'CARAMPANGUE',
	8021 => 'LARAQUETE',
	8022 => 'CAÑETE',
	8023 => 'CONTULMO',
	8024 => 'CURANILAHUE',
	8025 => 'ANTIGUALA',
	8026 => 'LOS ALAMOS',
	8027 => 'TIRUA',
	8028 => 'LOS ANGELES',
	8029 => 'MILLANTU',
	8030 => 'SAN CARLOS DE PUREN',
	8031 => 'SANTA FE',
	8032 => 'VILLA GENESIS',
	8033 => 'ANTUCO',
	8034 => 'CABRERO',
	8035 => 'MONTE AGUILA',
	8036 => 'LA LAJA',
	8037 => 'MULCHEN',
	8038 => 'NACIMIENTO',
	8039 => 'COIHUE',
	8040 => 'NEGRETE',
	8041 => 'QUILACO',
	8042 => 'LAS CANTERAS',
	8043 => 'QUILLECO',
	8044 => 'VILLA MERCEDES',
	8045 => 'SAN ROSENDO',
	8046 => 'SANTA BARBARA',
	8047 => 'HUEPIL',
	8048 => 'TUCAPEL',
	8049 => 'ESTACION YUMBEL',
	8050 => 'YUMBEL',
	8051 => 'RALCO',
	8052 => 'CHILLAN',
	8053 => 'QUINCHAMALI',
	8054 => 'BULNES',
	8055 => 'SANTA ROSA',
	8056 => 'COBQUECURA',
	8057 => 'COELEMU',
	8058 => 'COIHUECO',
	8059 => 'CHILLAN VIEJO',
	8060 => 'EL CARMEN',
	8061 => 'NINHUE',
	8062 => 'SAN GREGORIO',
	8063 => 'PEMUCO',
	8064 => 'PINTO',
	8065 => 'RECINTO-LOS LLEUQUES',
	8066 => 'PORTEZUELO',
	8067 => 'QUILLON',
	8068 => 'VILLA LAS MERCEDES',
	8069 => 'QUIRIHUE',
	8070 => 'ÑIPAS',
	8071 => 'CACHAPOAL',
	8072 => 'SAN CARLOS',
	8073 => 'VILLA ILLONOIS',
	8074 => 'SAN FABIAN DE ALICO',
	8075 => 'PUEBLO SECO',
	8076 => 'SAN IGNACIO',
	8077 => 'PUENTE ÑUBLE',
	8078 => 'SAN NICOLAS',
	8079 => 'TREGUACO',
	8080 => 'CAMPANARIO',
	8081 => 'YUNGAY',
	9001 => 'LABRANZA',
	9002 => 'TEMUCO',
	9003 => 'CARAHUE',
	9004 => 'TROVOLHUE',
	9005 => 'CUNCO',
	9006 => 'LOS LAURELES',
	9007 => 'CURARREHUE',
	9008 => 'FREIRE',
	9009 => 'QUEPE',
	9010 => 'GALVARINO',
	9011 => 'GORBEA',
	9012 => 'LASTARRIA',
	9013 => 'LAUTARO',
	9014 => 'PILLANLELBUN',
	9015 => 'HUISCAPI',
	9016 => 'LONCOCHE',
	9017 => 'MELIPEUCO',
	9018 => 'NUEVA IMPERIAL',
	9019 => 'PADRE LAS CASAS',
	9020 => 'PERQUENCO',
	9021 => 'PITRUFQUEN',
	9022 => 'PLAYA NEGRA',
	9023 => 'PUCON',
	9024 => 'PUREN',
	9025 => 'PUERTO SAAVEDRA',
	9026 => 'BARRAS ARANA',
	9027 => 'GUALPIN',
	9028 => 'TEODORO SCHMIDT',
	9029 => 'NUEVA TOLTEN',
	9030 => 'QUEULE',
	9031 => 'TRAIGUEN',
	9032 => 'CAJON',
	9033 => 'CHERQUENCO',
	9034 => 'VILCUN',
	9035 => 'ÑANCUL',
	9036 => 'LICAN RAY',
	9037 => 'VILLARICA',
	9038 => 'CHOLCHOL',
	9039 => 'ANGOL',
	9040 => 'COLLIPULLI',
	9041 => 'CURACAUTIN',
	9042 => 'ERCILLA',
	9043 => 'PAILAHUEQUE',
	9044 => 'LONQUIMAY',
	9045 => 'LOS SAUCES',
	9046 => 'CAPITAN PASTENE',
	9047 => 'LUMACO',
	9048 => 'RENAICO',
	9049 => 'TIJERAL',
	9050 => 'VICTORIA',
	9051 => 'PUREN',
	9052 => 'MALLECO',
	10001 => 'ALERCE',
	10002 => 'PUERTO MONTT',
	10003 => 'CALBUCO',
	10004 => 'COCHAMO',
	10005 => 'FRESIA',
	10006 => 'FRUTILLAR',
	10007 => 'LOS MUERMOS',
	10008 => 'LANQUIHUE',
	10009 => 'LOS PELLINES',
	10010 => 'CARELMAPU',
	10011 => 'MAULLIN',
	10012 => 'ALERCE 2',
	10013 => 'NAUEVA BRAUNAU',
	10014 => 'PUERTO VARAS',
	10015 => 'CASTRO',
	10016 => 'ANCUD',
	10017 => 'CHONCHI',
	10018 => 'CURACO DE VELEZ',
	10019 => 'DALCAHUE',
	10020 => 'PUQUELDON',
	10021 => 'QUEILEN',
	10022 => 'QUELLON',
	10023 => 'QUEMCHI',
	10024 => 'ACHAO',
	10025 => 'OSORNO',
	10026 => 'LAS CASCADAS',
	10027 => 'PUERTO OCTAY',
	10028 => 'CORTE ALTO',
	10029 => 'PURRANQUE',
	10030 => 'ENTRE LAGOS',
	10031 => 'RIO NEGRO',
	10032 => 'BAHIA MANSA-MUICOLPUE',
	10033 => 'SAN PABLO',
	10034 => 'CHAITEN',
	10035 => 'FUTALEUFU',
	10036 => 'RIO NEGRO',
	10037 => 'PALENA',
	11001 => 'COIHAIQUE',
	11002 => 'LAGO VERDE',
	11003 => 'PUERTO AISEN',
	11004 => 'PUERTO CHACABUCO',
	11005 => 'VILLA MAÑIGUALES',
	11006 => 'PUERTO CISNES',
	11007 => 'MELINKA',
	11008 => 'COCHRANE',
	11009 => 'OHIGGINS',
	11010 => 'TORTEL',
	11011 => 'CHILE CHICO',
	11012 => 'RIO IBAÑEZ',
	12001 => 'PUNTA ARENAS',
	12002 => 'LAGUNA BLANCA',
	12003 => 'RIO VERDE',
	12004 => 'SAN GREGORIO',
	12005 => 'PUERTO WILLIAMS',
	12006 => 'ANTARTICA',
	12007 => 'PORVENIR',
	12008 => 'PRIMAVERA',
	12009 => 'TIMAUKEL',
	12010 => 'PUERTO NATALES',
	12011 => 'TORRES DEL PAINE',
	13001 => 'SANTIAGO',
	13002 => 'CERRILLOS',
	13003 => 'CERRO NAVIA',
	13004 => 'CONCHALI',
	13005 => 'EL BOSQUE',
	13006 => 'ESTACION CENTRAL',
	13007 => 'HUECHURABA',
	13008 => 'INDEPENDENCIA',
	13009 => 'LA CISTERNA',
	13010 => 'LA FLORIDA',
	13011 => 'LA GRANJA',
	13012 => 'LA PINTANA',
	13013 => 'LA REINA',
	13014 => 'LAS CONDES',
	13015 => 'EL COLORADO',
	13016 => 'LA PARVA',
	13017 => 'LO BARNECHEA',
	13018 => 'LO ESPEJO',
	13019 => 'LO PRADO',
	13020 => 'MACUL',
	13021 => 'EL MAITEN',
	13022 => 'MAIPU',
	13023 => 'ÑUÑOA',
	13024 => 'PEDRO AGUIRRE CERDA',
	13025 => 'PEÑALOLEN',
	13026 => 'PROVIDENCIA',
	13027 => 'PUDAHUEL',
	13028 => 'QUILICURA',
	13029 => 'QUINTA NORMAL',
	13030 => 'RECOLETA',
	13031 => 'RENCA',
	13032 => 'SAN JOAQUIN',
	13033 => 'SAN MIGUEL',
	13034 => 'SAN RAMON',
	13035 => 'VITACURA',
	13036 => 'PUENTE ALTO',
	13037 => 'EL PRINCIPAL',
	13038 => 'PIRQUE',
	13039 => 'EL INGENIO',
	13040 => 'LA OBRA-LAS VERTIENTES',
	13041 => 'SAN ALFONSO',
	13042 => 'SAN JOSE DE MAIPO',
	13043 => 'CHICUREO',
	13044 => 'COLINA',
	13045 => 'LAS CANTERAS',
	13046 => 'SANTA MARTA DE LIRAY',
	13047 => 'BATUCO',
	13048 => 'ESTACION COLINA',
	13049 => 'LAMPA',
	13050 => 'SANTA SARA',
	13051 => 'HUERTOS FAMILIARES',
	13052 => 'TIL TIL',
	13053 => 'LO HERRERA',
	13054 => 'SAN BERNARDO',
	13055 => 'ALTO JAHUEL',
	13056 => 'BUIN',
	13057 => 'EL RULO',
	13058 => 'VALDIVIA DE PAINE',
	13059 => 'VILUCO',
	13060 => 'BAJOS DE SAN AGUSTIN',
	13061 => 'SAN IGNACIO',
	13062 => 'CHAMPA',
	13063 => 'HOSPITAL',
	13064 => 'HUELQUEN',
	13065 => 'PAINE',
	13066 => 'PINTUE-LA GUACHERA',
	13067 => 'BOLLENAR',
	13068 => 'MELIPILLA',
	13069 => 'POMAIRE',
	13070 => 'VILLA ALHUE',
	13071 => 'CURACAVI',
	13072 => 'MARIA PINTO',
	13073 => 'SAN PEDRO',
	13074 => 'TALAGANTE',
	13075 => 'EL MONTE',
	13076 => 'ISLA DE MAIPO',
	13077 => 'LA ISLITA',
	13078 => 'PADRE HURTADO',
	13079 => 'PEÑAFLOR',
	14001 => 'NIEBLA',
	14002 => 'VALDIVIA',
	14003 => 'CORRAL',
	14004 => 'LANCO',
	14005 => 'MALALHUE',
	14006 => 'LOS LAGOS',
	14007 => 'MAFIL',
	14008 => 'MEHUIN',
	14009 => 'SAN JOSE DE LA MARIQUINA',
	14010 => 'PAILLACO',
	14011 => 'COÑARIPE',
	14012 => 'LIQUIÑE',
	14013 => 'NELTUME',
	14014 => 'PNAGUIPULLI',
	14015 => 'FRUTONO',
	14016 => 'LLIFEN',
	14017 => 'NONTUELA',
	14018 => 'LA UNION',
	14019 => 'LAGO RANCO',
	14020 => 'RIO BUENO',
	15001 => 'ARICA',
	15002 => 'CAMARONES',
	15003 => 'PUTRE',
	15004 => 'GENERAL LAGOS'
);
*/
//Funciones Globales

# Función creada por Jorge Fuentes
#
# DESCRIPCIÓN:
# Revisa si un usuario esta registrado en el sistema, en caso de no estarlo lo lanza al login para que se autentifique.
#
#
# PARAMETROS:
# $sRuta - Indica los desplazamientos necesarios para llegar al index.php, es decir, es el RelativePath. (Constante generada en CCS).
#
#
# EJEMPLO:
#   if(esta_registrado(RelativePath))
#      print "Usuario registrado";
#   else
#      print "Usuario no registrado";
#
function esta_registrado($sRuta)
{
	// Ej: $sRuta = RelativePath . "/";
	$valor = false;
	if(!session_is_registered ("UserID")){
		header("Location: " . $sRuta . "/index.php");
		exit;
	}
	else
	{
		$valor = true;
	}

	return $valor;
}

/* Funciones proporcionadas por Francisco Andrade Fecha 17/04/2013 */
function generar_pass()
{
	global $pass_generada;
	$pass_generada = substr(md5(rand(0,200)),0,rand(4,6)).rand(0,99);
	return $pass_generada;
}

function titulo_ventana()
{
	global $Tpl;
	$Tpl->setvar("vent_title","CREDITO CON GARANTIA DEL ESTADO - PORTAL DEL BENEFICIARIO");
}

function arreglar_fecha($pFecha)
{
	$partes = explode("/",$pFecha);

	if (strlen($partes[0]) == 1)
	{
		$partes[0] = "0".$partes[0];
	}

	if (strlen($partes[1]) == 1)
	{
		$partes[1] = "0".$partes[1];
	}

	return implode($partes,"/");
}

function validaRut($r)
{
	$r=strtoupper(ereg_replace('\.|,|-','',$r));
	$sub_rut=substr($r,0,strlen($r)-1);
	$sub_dv=substr($r,-1);
	$x=2;
	$s=0;
	for ( $i=strlen($sub_rut)-1;$i>=0;$i-- )
	{
		if ( $x >7 )
		{
			$x=2;
		}
		$s += $sub_rut[$i]*$x;
		$x++;
	}
	$dv=11-($s%11);
	if ( $dv==10 )
	{
		$dv='K';
	}
	if ( $dv==11 )
	{
		$dv='0';
	}
	if ($dv==strtoupper($sub_dv ))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function obtener_dv($pRut)
{
	$tur = strrev($pRut);
	$mult = 2;

	for ($i = 0; $i <= strlen($tur); $i++)
	{ 
		if ($mult > 7) $mult = 2; 

		$suma = $mult * substr($tur, $i, 1) + $suma;
		$mult = $mult + 1;
	}

	$valor = 11 - ($suma % 11);

	if ($valor == 11)
	{ 
		$codigo_veri = "0";
	}
	elseif ($valor == 10)
	{
		$codigo_veri = "k";
	}
	else{ 
		$codigo_veri = $valor;
	}

	return $codigo_veri; 
}

function procesar_sql($pString)
{
	if ($pString == "")
		$pString = "NULL";
	else
	{
		$pString = str_replace("'", " ", $pString); 
		$pString = str_replace('"', ' ', $pString); 
	}

	return $pString;
}

function Validar_numero($pNumber,$pRangomin,$pRangomax)
{
	return false;
}

function procesar_link($pLink)
{
	$rut = CCGetUserID();

	// rut
   $pLink =	str_replace("TPL_RUT", $rut, $pLink);

	//dv
	$pLink =	str_replace("TPL_DV", obtener_dv($rut), $pLink);

	return $pLink;
}

function existe_resultado($param)
{
	if (sizeof($param) == 0 || $param == false)
		return false;
	else
		return true;
}

function estados_restringidos_10($estado,$contador_cambios)
{
	$estados_restringidos = array(7,4,14,10,11,98,99);
	if (in_array($estado,$estados_restringidos))
	{
		if ($estado == 10 && $contador_cambios == 0)
			return false;
		else
			return true;
	}
	else
		return false;
}

/*
Funcion para dar el formato solicitado por Ingresa 
usar 4 decimales,
- usar caracter punto (".") como separador de miles, y
- usar caracter coma (",") como separador de decimales. 
*/

function formato_numero($Pnumero)
{
	//string number_format ( float $number , int $decimals = 0 , string $dec_point = '.' , string $thousands_sep = ',' )
	$tmp =  number_format($Pnumero,4,',','.');
	return $tmp;
}

/* funciones para envio de email proporcionados por Francisco Andrade Fecha 17/04/2013 */

global $dominio_ingresa;
global $email_remitente;

$dominio_ingresa = "beneficiario.ingresa.cl";
$email_remitente =  '"Portal del Beneficiario INGRESA" <portal_beneficiario@ingresa.cl>';

/*
>> Configuracion de mensajes enviados
Tipo
	0  : Mensaje de creación de contraseña


Params  parametros esperados por tipo de email
	0 : 0 rut , 1 clave

*/
function generar_mail( $para , $tipo , $params)
{
	global $dominio_ingresa;


	// Titulo del mensaje
	switch($tipo)
	{
		case 0: 
			$titulo = "Clave de acceso para ".$dominio_ingresa;
		break;
	}

	//Mensaje
	switch($tipo)
	{
		case 0: 
			$mensaje = "Estimado Usuario:\n\n Tus datos para ingresar al Portal del Beneficiario son: ";
			$mensaje .= "\n\n RUT: ".$params[0]."\n\n Clave: ";											
			$mensaje .= $params[1];
			$mensaje .= "\n\n\n";
			$mensaje .= "Accede al Portal del Beneficiario en :". $dominio_ingresa; 
			$mensaje .= "\n\n\n";
			$mensaje .= "Atentamente,\n Comisión Ingresa";

			$mensaje = "Estimado/a usuario/a:<br/><br/>Tus datos para acceder a las plataformas del Crédito con Garantía Estatal (Crédito CAE), son: ";
			$mensaje .= "<br/><br/> RUT: ".$params[0]."-".$params[2]."<br/><br/> Clave: ";											
			$mensaje .= $params[1];
			$mensaje .= "<br/><br/><br/>";
			//$mensaje .= "Accede al Portal del Beneficiario en :". $dominio_ingresa; 
			//$mensaje .= "<br/><br/><br/>";
			$mensaje .= "Atentamente,<br/> Comisi&oacute;n Ingresa";

		break;
	}

	//Envío
	switch($tipo)
	{
		case 0: 
			//enviar_mail($para,$mensaje,$titulo);
	
			require_once ("PHPMailerPHP5/PHPMailerAutoload.php");
			$phpmailer = new PHPMailer(true);
			$phpmailer->isSMTP(); // telling the class to use SMTP
			$phpmailer->Host       = "ssl://smtp.gmail.com"; // SMTP server
			$phpmailer->SMTPAuth   = true;                  // enable SMTP authentication
			$phpmailer->Port       = 465;          // set the SMTP port for the GMAIL server; 465 for ssl and 587 for tls
			$phpmailer->Username   = " portal_beneficiario@ingresa.cl"; // Gmail account username
			$phpmailer->Password   = "Ingr3s@$2o2o";        // Gmail account password
			$phpmailer->FromName = 'Comision Ingresa';
			$phpmailer->Subject = $titulo;
			//$phpmailer->SMTPDebug = 3;

			$phpmailer->isHTML(true);  
			$phpmailer->MsgHTML($mensaje);
			
			$phpmailer->AddAddress($para);

			if($phpmailer->Send()){
				//Historial
				$phpmailer->ClearAllRecipients();
				
			}
			else{
				$phpmailer->ClearAllRecipients();				
			}

		break;
	}

}

function enviar_mail( $para , $mensaje , $titulo)
{
	global $dominio_ingresa;
	global $email_remitente;

	$headers = 'From:'.$email_remitente."\r\n" .'X-Mailer: PHP/' . phpversion();
	mail($para,$titulo,$mensaje,$headers);
}


function pagina_mensaje ( $mensaje , $subnivel ) 
{
	for ( $p = 0 ; $p < $subnivel ; $p++ )
	{
		$sb = $sb."../";
	}

	echo '<link rel="stylesheet" type="text/css" href="'.$sb.'Styles/estilo-inicio-ingresa.css">';
	echo '<link rel="stylesheet" type="text/css" href="'.$sb.'Styles/Basic/Style.css">';
	echo '<div class="centrado"><div id="header"><div id="logo">
			<a target="_blank" href="http://www.ingresa.cl"><img height="110" border="0" width="230" src="'.$sb.'img/logo-ingresa.png" alt="Logo"></a> 
			</div></div><div class="centrado">';
	echo $mensaje;
	echo '</div> <br> <form action="'.$sb.'index.php"><input class="Button" type="submit" value="Ir a p&aacute;gina de Inicio" ></form></div>';
	exit();
}

// Agregue aqui funciones globales

//Fin Funciones Globales

?>
