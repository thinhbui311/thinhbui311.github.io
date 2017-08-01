$(function(){
	var a = 0;
	var b = -1;
	var current = location.search.slice(1);
	var currentUrl = current.replace(/\+/g, '&nbsp');
	for(i = 0; i < currentUrl.length; i++){
		if(currentUrl[i] === "="){
			a = i+1;
			b +=1;
		};
		if(currentUrl[i] === "&"){
			$($("span")[b]).html(decodeURIComponent(currentUrl.slice(a,i)));
		};
		if(i == currentUrl.length - 1){
			$($("span")[b]).html(decodeURIComponent(currentUrl.slice(a,currentUrl.length)));
		}

	};
})



	