function calculate(){

	var n1 = parseFloat(document.getElementById("n1").value);
	var n2 = parseFloat(document.getElementById("n2").value);
	var option = document.getElementById("option").value;
	var result;

	if(!isNaN(n1) && !isNaN(n2)){
	switch(option){
		case '+':
		result = n1 + n2;
		break;
		case '-':
		result = n1 - n2;
		break
		case '*':
		result = n1 * n2;
		break
		case '/':
		result = n1 / n2;
		break
	}
	document.write(n1+" "+option+" "+n2+" = "+result);
}else{
	alert("Please insert both numbers to calculate!");
}
}