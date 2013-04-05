
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Alta_Usuario = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Alta_Usuario.click = function Alta_Usuario_click (event)// @startlock
	{// @endlock
		$('#frame1').toggle('slow');
		$$('frame1').load('/user/index-tablet.html');
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Alta_Usuario", "click", Alta_Usuario.click, "WAF");
// @endregion
};// @endlock
