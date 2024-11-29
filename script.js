	
getvalue = function() {
	number1 = document.getElementById('number1');
	number2 = document.getElementById('number2');

	 resultobject = {
	 	"number1": number1,
	 	"number2": number2
	 }
	 return resultobject;
}



	//plusoperation
	plusbutton = document.getElementById('plusbutton');
	plusoperation = function() {
	
numbervalue = getvalue();
	sum = parseInt(numbervalue.number1) + parseInt(numbervalue.number2);
	
	var resultin = document.getElementById(result);
	result.innerText = sum;
}
	

plusbutton.addEventListener("click", plusoperation);


//minus operation
