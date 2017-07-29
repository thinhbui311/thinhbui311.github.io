$(function(){	
/// Hàm tạo bộ đếm countdown ///
	$('.card').css('pointer-events', 'none');
	var start = 50;
	var count;
	$("#start-button").click(function(){
		$('.card').css('pointer-events', 'auto');
		$("#start-box").addClass("slide-up");
		$("#display").html(start);
		var count = setInterval(function(){
			if(start == 0){
				$('.card').css('pointer-events', 'none');
			}
			$("#display").html(start);
			if(start == 0 && score != 8){
				clearInterval(count);
				$('.card').css('pointer-events', 'none');
				document.getElementById("lose").play();
				$("#popup-box").css("display", "block");
			}
			if(score == 8){
				clearInterval(count);
			}
			start -= 1;
		},1000);
	});
	

	$("#ok").click(function(){
		window.location.reload();
	});

	$("#cancel").click(function(){
		$("#popup-box").css("display", "none");
		$('.card').css('pointer-events', 'none');
	});

	$("#victory-button").click(function(){
		window.location.reload();
	});

/// Biến lưu attr src của ảnh ///
	var current = null;
	var currentfrontIndex = null;
	var currentbackIndex = null;
	var index = 0, temp;
	var score = 0;

/// Hàm click vào sẽ lật card /////
	$(".card").on( "click",function(){
		index = $(".card").index(this);
		document.getElementById("click").play();
		$('.card').css('pointer-events', 'none');
		$($(".front")[index]).addClass("rotate0");
		$($(".back")[index]).addClass("rotate180");
		if(current == null){
			setTimeout(function(){
			if(start < 1) {
					$('.card').css('pointer-events', 'none');
				} else {
					$('.card').css('pointer-events', 'auto');
				}
			},200);
		} else {
			setTimeout(function(){
				if(start < 1) {
					$('.card').css('pointer-events', 'none');
				} else {
					$('.card').css('pointer-events', 'auto');
				}
			},800);
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
					score += 1;
					setTimeout(function(){
					document.getElementById("right").play();
					currentfrontIndex.parent().css("visibility", "hidden");
					$($(".front")[index]).parent().css("visibility", "hidden");
					current = null;
					currentfrontIndex = null;
					currentbackIndex = null;
					index = 0;
					if(score == 8){
						document.getElementById("win").play();
						$("#victory-box").css("display", "block");
					};
					},400);	
				
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
				}, 600)
				
			}	
		}
		
	});

/// mảng lưu tên ảnh ///
	var imgarr = ["Image/9.jpg", "Image/9.jpg", "Image/7.jpg", "Image/7.jpg", "Image/1.jpg", "Image/2.jpg", "Image/3.jpg", "Image/4.jpg", "Image/5.jpg", "Image/8.jpg", "Image/1.jpg", "Image/2.jpg", "Image/3.jpg", "Image/4.jpg", "Image/5.jpg", "Image/8.jpg"];

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



