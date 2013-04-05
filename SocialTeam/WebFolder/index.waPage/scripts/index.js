
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
	var button6 = {};	// @button
	var button5 = {};	// @button
	var image2 = {};	// @image
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
	//	$('#dialog1').fadeIn('slow');
		$$('dialog1').displayDialog(); 
		$('#dialog1').attr('data-load','/user/index-tablet.html');
		
		
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
	$('#frame1').fadeOut('slow');
	$('#image2').fadeOut('slow');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$('#frame1').fadeIn('slow');
		$$('frame1').load('/user/index-tablet.html');
		$('#image2').fadeIn('slow');
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
