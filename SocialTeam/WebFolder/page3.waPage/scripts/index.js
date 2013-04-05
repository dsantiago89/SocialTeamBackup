
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var wysiwyg2 = {};	// @wysiwyg
	var textField22 = {};	// @textField
	var textField7 = {};	// @textField
	var button6 = {};	// @button
	var imageButton1 = {};	// @buttonImage
	var button5 = {};	// @button
	var button23 = {};	// @button
	var button22 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var menuItem1 = {};	// @menuItem
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	wysiwyg2.onSetContent = function wysiwyg2_onSetContent (event)// @startlock
	{// @endlock
				$$('richText29').setValue($$('wysiwyg2').getValue());

	};// @lock

	wysiwyg2.onInit = function wysiwyg2_onInit (event)// @startlock
	{// @endlock
				$$('richText29').setValue($$('wysiwyg2').getValue());

	};// @lock

	wysiwyg2.onKeyPress = function wysiwyg2_onKeyPress (event)// @startlock
	{// @endlock
		//$$('plainTextPreview').setValue($$('editor').getWysiwygInstance().getBody().textContent);
		$$('richText29').setValue($$('wysiwyg2').getValue());
		
	};// @lock

	textField22.change = function textField22_change (event)// @startlock
	{// @endlock
		 vAction2 = 'hola'; // we perform a calculation that we assign to the global taxes variable
        sources.vAction2.sync(); // we must notify the datasource so that it can be updated
   		alert (sources.tablaDatos1.vAction);
	};// @lock

	textField7.change = function textField7_change (event)// @startlock
	{// @endlock
		vAction2 = 'hola'; // we perform a calculation that we assign to the global taxes variable
        sources.vAction2.sync(); // we must notify the datasource so that it can be updated
   		alert (sources.tablaDatos1.vAction);
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$('#autoForm1').fadeOut();
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		$$('autoForm1').toggle();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
	$('#dialog4').fadeIn('slow');
	$('#dataGrid1').removeClass('waf-state-active'); 
	sources.tablaDatos1.newEntity(); 
	
	vAction2 = 'n'; // we perform a calculation that we assign to the global taxes variable
    sources.vAction2.sync(); // we must notify the datasource so that it can be updated
   	console.log('Acción = ' + vAction2)
	

// create a blank entity outside of the current entity collection
            // which, in turn, becomes the current entity


	};// @lock

	button23.click = function button23_click (event)// @startlock
	{// @endlock
//Save User
	//vAction2 = sources.tablaDatos1.vAction; // La sincronización desde el datasource hasta el local source es automática... en vAction2 he puesto que su "source" es vAction
  //debugger;
  	console.log('Acción = ' + vAction2)
   		
if (vAction2 == 'n'){ //Ejecuto el guardado sólo si estoy creando uno nuevo. Al pulsa "nuevo" le pongo la variable vAction2='n'

   	sources.tablaDatos1.save({
        onSuccess: function(event) {
        			console.log('Acción = ' + vAction2)

                // displays success message in a DisplayError area
                $("#errorText").show();
				$("#errorText").html("El registro ha sido guardado");
                $("#errorText").fadeOut(2000);
                // put the current entity in the datasource's entity collection
               // sources.tablaDatos1.serverRefresh();
                vAction2 = ''; //Quito el Valor a la variable	
  	 			sources.vAction2.sync(); // Sincronizo con la varible en el servidor
				console.log('Borrado = ' + vAction2)
				sources.tablaDatos1.addEntity(sources.tablaDatos1.getCurrentElement()); 

        },
        onError: function(error) {
                // displays error message in a DisplayError area
            $("#errorText").html(error['error'][0].message);
        }
    });
	}else{
		//sources.tablaDatos1.save();
		 vAction2 = ''; //Quito el Valor a la variable	
		 sources.vAction2.sync(); // Sincronizo con la varible en el servidor

		console.log('Borrado = ' + vAction2)
		sources.tablaDatos1.save();
	}

  $$('dialog4').closeDialog(); //cancel button
 

	};// @lock

	button22.click = function button22_click (event)// @startlock
	{// @endlock
		$$('dialog4').closeDialog(); //cancel button
		$("#errorText").show();
		$("#errorText").html("Los cambios se han Cancelado");
		$("#errorText").fadeOut(2000);

	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
				
		//		$$('richText29').setValue($$('wysiwyg2').getValue());//Actualizado para mostrar las observaciones del registro

	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		vAction2='m'; //Pongo la variable en 'm' para indicar que voy a "modificar" un registro
		sources.vAction2.sync(); //Sincronizo el valor con el datasource
	console.log('Acción = ' + vAction2)
	$('#dialog4').fadeIn('fast');

	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
	$$('contentPrincipal').hide();
	$('#contentPrincipal').load('/contenido/button.html');
	$('#contentPrincipal').toggle('slow');	
	$('#contentSecundario').hide();
	$('#contentSecundario').load('/contenido/content2.html');
	$('#contentSecundario').toggle('slow');	
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
	$('#contentPrincipal').hide();
	$('#contentPrincipal').load('/contenido/button.html');
	$('#contentPrincipal').toggle('slow');	
	$('#contentSecundario').hide();
	$('#contentSecundario').load('/contenido/content2.html');
$('#contentSecundario').toggle('slow');	
//$('#content2').load('contenido/content2.html').show();	
	
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//$('body').load('../pagina1.waPage/');
		window.location.href='/pagina1.waPage';
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("wysiwyg2", "onSetContent", wysiwyg2.onSetContent, "WAF");
	WAF.addListener("wysiwyg2", "onInit", wysiwyg2.onInit, "WAF");
	WAF.addListener("wysiwyg2", "onKeyPress", wysiwyg2.onKeyPress, "WAF");
	WAF.addListener("textField22", "change", textField22.change, "WAF");
	WAF.addListener("textField7", "change", textField7.change, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button23", "click", button23.click, "WAF");
	WAF.addListener("button22", "click", button22.click, "WAF");
	WAF.addListener("dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
