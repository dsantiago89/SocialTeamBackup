
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bEliminarRegistro = {};	// @button
	var button9 = {};	// @button
	var documentEvent = {};	// @document
	var button8 = {};	// @button
	var button6 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button5 = {};	// @button
	var button4 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	bEliminarRegistro.click = function bEliminarRegistro_click (event)// @startlock
	{// @endlock
		
		var r=confirm('¿Estás Seguro?');
		if (r==true){
			sources.usuarios.removeCurrent();
		}
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock

		$('#component1').fadeTo("slow",1);
		$$('component1').loadComponent('/components/NavBar2.waComponent');
		//$$('component1').setBackground("#650092");
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var informacion;
		if(sessionStorage.usuario){
		vUsuarioSesion = sessionStorage.usuario;
		var informacion= '<p>Usuario sessión: '+ vUsuarioSesion+'</p>';   

		}
		
		if(localStorage.usuario){
		vUsuarioLocal = localStorage.usuario;
		informacion+= '<p>Usuario Local: '+ vUsuarioLocal+'</p>';   

		}
		sources.vAction2.sync();
		if(vAction2){
		vAction2 = vAction2;
		informacion+= '<p>Usuario Global: '+ vAction2+'</p>';   

		}
		
		$('#errorDiv1').html(informacion);	
		
 //Cargo los componenetes.
 
 $$('component3').loadComponent('/components/Footer.waComponent/');    
     	
     	
 //Para que el ENTER confirme el formulario
 
$('#dialog1').live('keypress',function(e){
	if(e.keyCode == 13) {
		saveUser();
	
}
});

 
    	
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		
	    var user = 'pedro'; //gets the user running the session   
		
		
			sessionStorage.usuario = 'Manolo Sesión';
			vUsuarioSesion = sessionStorage.usuario;
		
		
		
			localStorage.usuario = 'Pepe Local';
			vUsuarioLocal = localStorage.usuario;
			
			vAction2='Jose Luis Global';
			sources.vAction2.sync();
		
		informacion = '<p>Usuario Función: '+ user+'</p>';   
		informacion+= '<p>Usuario sessión: '+ vUsuarioSesion+'</p>';   
		informacion+= '<p>Usuario Local: '+ vUsuarioLocal+'</p>';   
		informacion+= '<p>Usuario Global: '+ vAction2+'</p>';   
		$('#errorDiv1').html(informacion);
		
		
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$$('dialog1').displayDialog();
		sources.usuarios.newEntity(); 
	
	vAction2 = 'n';
	sessionStorage.vAction2 = vAction2;
	localStorage.vAction2 = vAction2;
    sources.vAction2.sync(); // we must notify the datasource so that it can be updated
 
   	console.log('Acción = ' + vAction2)

// create a blank entity outside of the current entity collection
            // which, in turn, becomes the current entity
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		vAction2 = 'm';
		sessionStorage.vAction2 = vAction2;
		localStorage.vAction2 = vAction2;
//		alert(sessionStorage.vAction2);
//		alert(localStorage.vAction2);
		sources.vAction2.sync();
		$('#container4').fadeIn();//Pongo un contenedor por delante para que no se pueda hacer click en el grid mientras se modifica un registro
		$$('dialog1').displayDialog();
		console.log('vAction2 = '+ vAction2);
		$('#textField7').focus();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		//función saveUser en commonjs
		saveUser();

	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		cancelUser();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("bEliminarRegistro", "click", bEliminarRegistro.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
// @endregion
};// @endlock
