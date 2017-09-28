$(function(){

	//======= Shuffle ảnh mỗi lần reload =======//
	var onPageImage = [];
	var notOnPageImage = [];
	var imgShowIndex, temp;
	for(i=1; i<=29; i++){
		imgShowIndex = Math.floor((Math.random() * 58) + 1);
		if(onPageImage.indexOf(imgShowIndex) == -1){
			onPageImage.push(imgShowIndex);
			$("#shuffleImage").append('<div class="myThumbnail fadeIn place'+i+'"><img src="Image/img'+imgShowIndex+'.jpg" width="100%"></div>');
		} else{
			i = i -1;
		}
	}


	//====== Mảng lưu các ảnh không đc show ======//
	for(i = 1; i <= 58; i++){
		if(onPageImage.indexOf(i) == -1){
			notOnPageImage.push(i)
		}
	}


	//======= Hay thay ảnh ở vị trí bất kì =======//
	function randImg(ind){
		$(".place"+ind).addClass("toClear")
		$(".place"+ind).animate({opacity:0}, 2200, function(){
			$(".toClear").remove();
		});
		$("#shuffleImage").append('<div class="myThumbnail fadeIn place'+ind+'"><img src="Image/img'+notOnPageImage[ind-1]+'.jpg" width="100%"></div>');
		temp = notOnPageImage[ind-1];
		notOnPageImage[ind-1] = onPageImage[ind-1];
		onPageImage[ind-1] = temp;
	}


	//======= Hàm auto reload random ảnh =======//
	setInterval(function(){
		var imgRandomIndex, imgRandomIndex1, imgRandomIndex2;
		imgShowIndex = Math.floor((Math.random() * 58) + 1);
		imgRandomIndex  = Math.floor((Math.random() * 29) + 1);
		imgRandomIndex1 = Math.floor((Math.random() * 29) + 1);
		imgRandomIndex2 = Math.floor((Math.random() * 29) + 1);
		imgRandomIndex3 = Math.floor((Math.random() * 29) + 1);

		while(imgRandomIndex1 == imgRandomIndex){
			imgRandomIndex1 = Math.floor((Math.random() * 29) + 1);
		}

		while(imgRandomIndex2 == imgRandomIndex && imgRandomIndex2 == imgRandomIndex1){
			imgRandomIndex1 = Math.floor((Math.random() * 29) + 1);
		} 

		while(imgRandomIndex3 == imgRandomIndex && imgRandomIndex3 == imgRandomIndex1 && imgRandomIndex3 == imgRandomIndex2){
			imgRandomIndex1 = Math.floor((Math.random() * 29) + 1);
		} 

		randImg(imgRandomIndex);
		randImg(imgRandomIndex1);
		randImg(imgRandomIndex2);
		randImg(imgRandomIndex3);

	},2500)

})