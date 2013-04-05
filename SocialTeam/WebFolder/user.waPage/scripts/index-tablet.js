
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var objUser  = source.objUser;
		ds.Usuarios.insertarUsuario(objUser.NombreAcceso, objUser.Password);
		
		var objEntidad = source.objEntidad;
		ds.Entidades.insertarEntidad(objEntidad.Nombre, objEntidad.Apellido1);
		
		alert("usuario: "+objEntidad.Nombre+" registrado");
		
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
