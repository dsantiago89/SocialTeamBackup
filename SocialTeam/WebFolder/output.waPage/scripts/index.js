
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button5 = {};	// @button
	var button4 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$('#dialog1').fadeIn('slow');
	sources.usuarios.newEntity(); 
	
	vAction2 = 'n'; // we perform a calculation that we assign to the global taxes variable
    sources.vAction2.sync(); // we must notify the datasource so that it can be updated
   	console.log('Acción = ' + vAction2)
	

// create a blank entity outside of the current entity collection
            // which, in turn, becomes the current entity
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		vAction2 = 'm';
		sources.vAction2.sync();
		$$('dialog1').displayDialog();
		console.log('vAction2 = '+ vAction2);
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		//Save User
	//vAction2 = 'n'; // La sincronización desde el datasource hasta el local source es automática... en vAction2 he puesto que su "source" es vAction
 sources.vAction2.sync();
  	console.log('Acción = ' + vAction2)
   		
if (vAction2 == 'n'){ //Ejecuto el guardado sólo si estoy creando uno nuevo. Al pulsa "nuevo" le pongo la variable vAction2='n'

   	sources.usuarios.save({
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
				sources.usuarios.addEntity(sources.usuarios.getCurrentElement()); 
			vAction2 = '';
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
		sources.usuarios.save();
	}

  $$('dialog1').closeDialog(); //cancel button
 

	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
// @endregion
};// @endlock
