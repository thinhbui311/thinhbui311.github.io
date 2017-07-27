$(function(){	
/// Biến lưu attr src của ảnh ///
	var current = null;
	var currentfrontIndex = null;
	var currentbackIndex = null;
	var index = 0, temp;

/// Hàm click vào sẽ lật card /////
	$(".card").on( "click",function(){
		index = $(".card").index(this);
		document.getElementById("click").play();
		$('.card').css('pointer-events', 'none');
		$($(".front")[index]).addClass("rotate0");
		$($(".back")[index]).addClass("rotate180");
		if(current == null){
			setTimeout(function(){
			$('.card').css('pointer-events', 'auto');
			},250);
		} else {
			setTimeout(function(){
			$('.card').css('pointer-events', 'auto');
			},950);
		}
		
		
/// logic kiểm tra 2 card có giống nhay ko///
		if(current == null){
			current = $($(".front")[index]).attr("src");
			currentfrontIndex = $($(".front")[index]);
			currentbackIndex = $($(".back")[index]);
			temp = index;
			index = 0;

		} else {
			if( $($(".front")[index]).attr("src") == current && temp != index ) {
					setTimeout(function(){
					document.getElementById("right").play();
					currentfrontIndex.parent().css("visibility", "hidden");
					$($(".front")[index]).parent().css("visibility", "hidden");
					current = null;
					currentfrontIndex = null;
					currentbackIndex = null;
					index = 0;
					},600)
				
			} else {
				console.log("khac nhau");
				setTimeout(function(){
					document.getElementById("fail").play();
					currentfrontIndex.removeClass("rotate0");
					currentbackIndex.removeClass("rotate180");
					$($(".front")[index]).removeClass("rotate0");
					$($(".back")[index]).removeClass("rotate180");
					current = null;
					currentfrontIndex = null;
					currentbackIndex = null;
				}, 650)
				
			}	
		}
		
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
		return imgarr;
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



