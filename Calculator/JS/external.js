///////////// Toggle ////////////
function mini(){
	var x = document.getElementById("excontent");
	var y = document.getElementById("exbt");
	var z = document.getElementById("main");

	x.style.transition = "all 0.35s ease-in-out";
	y.style.transition = "all 0.35s ease-in-out";
	z.style.transition = "all 0.3s ease-in-out";
	if(x.style.left == "0px"){
		x.style.left = "-100px";
		x.style.opacity = "0";
		y.style.left = "-100px";
		z.style.left = " 100px";	
		} else {
			x.style.left = "0px";
			x.style.opacity = "1";
			y.style.left = "0px";
			z.style.left = "0px";
		}
	}


////////////Sin, Cos, Tan, Cotg ////////
function luonggiac(lgiacbt){
	if(document.getElementById("show").innerHTML == "DONE"){
		document.getElementById("show").innerHTML = "";
		document.getElementById("display").value = "";
	}
	document.getElementById("show").innerHTML ="." + lgiacbt.innerHTML.slice(0,4);
	b = lgiacbt.value;
}

//////Binh Phuong ///////
function mu(bphuong){
	if(document.getElementById("show").innerHTML == "DONE"){
		document.getElementById("show").innerHTML = "";
		document.getElementById("display").value = "";
	}
	document.getElementById("display").value = Math.pow(document.getElementById("display").value, bphuong.value);
	document.getElementById("show").innerHTML = "DONE";
}

/////// Căn bậc 2 /////////
function can2(){
	if(document.getElementById("show").innerHTML == "DONE"){
		document.getElementById("show").innerHTML = "";
		document.getElementById("display").value = "";
	}
	document.getElementById("display").value = Math.sqrt(document.getElementById("display").value);
	document.getElementById("show").innerHTML = "DONE";
}

/////// Căn bậc 3 /////////
function can3(){
	if(document.getElementById("show").innerHTML == "DONE"){
		document.getElementById("show").innerHTML = "";
		document.getElementById("display").value = "";
	}
	document.getElementById("display").value = Math.cbrt(document.getElementById("display").value);
	document.getElementById("show").innerHTML = "DONE";
}

/////////// giai thừa /////////////

 function giaithua(n){  
 	    n = document.getElementById("display").value ;
        var i, d;
        d = 1;
        for (i = 1; i <= n; i++ ) {
            d = d*i;
        }
        document.getElementById("display").value = d;
        document.getElementById("show").innerHTML = "DONE";
    }