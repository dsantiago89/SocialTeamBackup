
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btn_save = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	btn_save.click = function btn_save_click (event)// @startlock
	{// @endlock
		var usuario = $$('txt_user').getValue();
		var fullname = $$('txt_fullname').getValue();
		var password = $$('txt_pass').getValue();
		var grupo = $$('sl.group').getValue();
		
		directoryComponent.addUser
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btn_save", "click", btn_save.click, "WAF");
// @endregion
};// @endlock
