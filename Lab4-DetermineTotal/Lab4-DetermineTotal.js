//Devon Sihra
function btnTotal_onclick()
{
	// assign textbox elements to variables for easier access
	var beforeTaxTextbox = document.getElementById("txtBefore");
	var taxTextbox = document.getElementById("txtTax");
	var seniorDiscountCheckbox = document.getElementById("chkSenior");
	var afterTaxTextbox = document.getElementById("txtTotal");
	
	var tax = parseInt(beforeTaxTextbox.value);
	
	var ttax = parseInt(taxTextbox.value); 
	
	
	ttax = ttax / 100; 
	
	if (seniorDiscountCheckbox.checked)
	{
		tax = tax - (tax*0.05);
		
	}
	afterTaxTextbox.value =tax*(1+ttax);
	
}