var y = 0;
var	x = 0;
var	z = 0;
var	t = 0;
var b = 0;

////////////////Phím số//////////////////
function num(numbt){
	if(document.getElementById("show").innerHTML == "DONE"){
		document.getElementById("show").innerHTML = "";
		document.getElementById("display").value = "";
	}
	document.getElementById("display").value = document.getElementById("display").value + numbt.innerHTML;
}

////////////////Phím chức năng phổ thông //////////////////
function operator(bt){
	x = bt.innerHTML;
	t = bt.value;
	document.getElementById("show").innerHTML = document.getElementById("display").value + x;
	y = document.getElementById("display").value + t;
	document.getElementById("display").value = "";
}

function negative(){
	n = document.getElementById("display").value.search("-");
	y = 0;
	x = 0;
	z = 0;
	t = 0;
	if(n + 1 != 0){
		document.getElementById("display").value = document.getElementById("display").value.slice(1);
	} else {
	document.getElementById("display").value = "-" + document.getElementById("display").value;
	}
}


///////////////Dấu bằng//////////////////
function bang(){
	z = document.getElementById("display").value;
	a = document.getElementById("display").value + ")";
	document.getElementById("display").value = "";
	k = document.getElementById("show").innerHTML.indexOf(".");
	if(k != 0){
		document.getElementById("display").value = eval(y + z);
		document.getElementById("show").innerHTML = "DONE";
	} else {
		document.getElementById("display").value = eval(b + a);
		document.getElementById("show").innerHTML = "DONE" ;
	}
}

/////////////Clear///////////////
function xoa(){
	document.getElementById("display").value = "";
	document.getElementById("show").innerHTML = "";
	x = 0;
	y = 0;
	z = 0;
	n = 0;
	k = 0;
	t = 0;
	a = 0;
	b = 0;
	
}



