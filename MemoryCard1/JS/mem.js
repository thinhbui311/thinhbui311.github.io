$(function(){
/// Hàm click vào sẽ lật card /////
	$(".card").on( "click",function(){
		var index = $(".card").index(this);
		$($(".front")[index]).addClass("rotate0");
		$($(".back")[index]).addClass("rotate180");
	});

/// mảng lưu tên ảnh ///
	var imgarr = ["Image/1.jpg", "Image/2.jpg", "Image/3.jpg", "Image/4.jpg", "Image/5.jpg", "Image/8.jpg", "Image/1.jpg", "Image/2.jpg", "Image/3.jpg", "Image/4.jpg", "Image/5.jpg", "Image/8.jpg"];

/// Hàm random thứ tự ảnh trong mảng///
	function rand(){
		var nowIndex = imgarr.length;
		var temp;
		var randIndex;
		while(0 !==nowIndex){
			randIndex = Math.floor(Math.random() * nowIndex);
			nowIndex -= 1;
			temp = imgarr[nowIndex];
			imgarr[nowIndex] = imgarr[randIndex];
			imgarr[randIndex] = temp;
		}
	}
	rand();

/// hàm auto fill ảnh vào các element ///
	function fill(){
		for(i = 0; i < $(".front").length; i++){
			$($(".front")[i]).attr("src", imgarr[i]);
		}
	}
	fill();
});



