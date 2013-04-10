
WAF.onAfterInit = function onAfterInit() {// @lock

$$('textField1').setValue("Nombre");
$$('textField2').setValue("Primer Apellido");
$$('textField3').setValue("Segundo Apellido");
$$('textField4').setValue("Email");
$$('textField5').setValue("Password");
$$('textField6').setValue("Confirmar Password");


// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var textField6 = {};	// @textField
	var textField5 = {};	// @textField
	var textField4 = {};	// @textField
	var textField3 = {};	// @textField
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		history.back(1);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField1","richText2","Nombre");
		cambiarOnFocus("textField2","richText3","Primer Apellido");
		cambiarOnFocus("textField3","richText4","Segundo Apellido");
		cambiarOnFocus("textField4","richText5","Email");
		cambiarOnFocus("textField5","richText6","Password");
		cambiarOnFocus("textField6","","Confirmar Password");
		if(comprobarFormulario()){
			
			
			var newUsuario = source.objUser;
			
			ds.Usuarios.insertarUsuario(newUsuario.NombreAcceso,newUsuario.Password);
			
			ds.Entidades.insertarEntidad(newUsuario.Nombre,newUsuario.Apellido1,newUsuario.Apellido2);
			
			alert("Guardado con éxito");
			$(location).attr("href","/index/");
			
		} else {
			alert("Revisa los campos del formularios");
			
		} 
	};// @lock

	textField6.focus = function textField6_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField6","","Confirmar Password");
		document.getElementById("textField6").type = "password";
	};// @lock

	textField5.focus = function textField5_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField5","richText6","Password");
		document.getElementById("textField5").type = "password";
	};// @lock

	textField4.focus = function textField4_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField4","richText5","Email");
	};// @lock

	textField3.focus = function textField3_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField3","richText4","Segundo Apellido");
	};// @lock

	textField2.focus = function textField2_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField2","richText3","Primer Apellido");
	};// @lock

	textField1.focus = function textField1_focus (event)// @startlock
	{// @endlock
		cambiarOnFocus("textField1","richText2","Nombre");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("textField6", "focus", textField6.focus, "WAF");
	WAF.addListener("textField5", "focus", textField5.focus, "WAF");
	WAF.addListener("textField4", "focus", textField4.focus, "WAF");
	WAF.addListener("textField3", "focus", textField3.focus, "WAF");
	WAF.addListener("textField2", "focus", textField2.focus, "WAF");
	WAF.addListener("textField1", "focus", textField1.focus, "WAF");
// @endregion
};// @endlock
