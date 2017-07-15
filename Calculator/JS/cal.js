var x,y,z,t;

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

///////////////Dấu bằng//////////////////
function bang(){
	z = document.getElementById("display").value;
	document.getElementById("display").value = "";
	document.getElementById("display").value = eval(y + z);
	document.getElementById("show").innerHTML = "DONE";

}

/////////////Clear///////////////
function xoa(){
	document.getElementById("display").value = "";
	document.getElementById("show").innerHTML = "";
}