$(function(){
	var indexEqual = 0;
	var indexSpan = -1;
	var url = location.search.slice(1);
	var currentUrl = url.replace(/\+/g, '&nbsp');

	for(i = 0; i < currentUrl.length; i++){
		if(currentUrl[i] === "="){
			indexEqual = i+1;
			indexSpan +=1;
		};
		
		if(currentUrl[i] === "&"){
			$($("span")[indexSpan]).html(decodeURIComponent(currentUrl.slice(indexEqual,i)));
		};

		if(i == currentUrl.length - 1){
			$($("span")[indexSpan]).html(decodeURIComponent(currentUrl.slice(indexEqual,currentUrl.length)));
		};
	};

})


