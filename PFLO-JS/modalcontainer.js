$(function(){
/// khai báo hàm đôi layout navbar khi xuống dưới 1024px ///
	function check1024(){
		if(window.matchMedia("(max-width:1024px)").matches){
			$(".item5").html('<a href="#myCarousel" data-slide-to="3"><i class="material-icons">contact_mail</i></a>');
			$(".item4").html('<a href="#myCarousel" data-slide-to="2"><i class="material-icons">face</i></a>');
			$(".item2").html('<a href="#myCarousel" data-slide-to="1"><i class="material-icons">event_note</i></a>');
			$(".item1").html('<a href="#myCarousel" data-slide-to="0"><i class="material-icons">home</i></a>');
			$("#responsive-Menu .item1, #responsive-Menu .item2, #responsive-Menu .item4, #responsive-Menu .item5").remove();
			$(".navBar .item1, .navBar .item2, .navBar .item4, .navBar .item5").css("display", "flex");
		} else{
			$(".item5").html('<a href="#myCarousel" data-slide-to="3">Contact</a>');
			$(".item4").html('<a href="#myCarousel" data-slide-to="2">AboutMe</a>');
			$(".item2").html('<a href="#myCarousel" data-slide-to="1">Project</a>');
			$(".item1").html('<a href="#myCarousel" data-slide-to="0">ThinhBui94</a>');
		}
	}

/// khai báo hàm đổi layout navbar khi xuống dưới 700px ///
	function check700(){
		if(window.matchMedia("(max-width:700px)").matches){
			$(".item1, .item2, .item4, .item5").clone().appendTo("#responsive-Menu");
			$(".item5").append("<p>Contact</p>");
			$(".item4").append("<p>AboutMe</p>");
			$(".item2").append("<p>Project</p>");
			$(".item1").append("<p>ThinhBui94</p>");
			$(".navBar .item1, .navBar .item2, .navBar .item4, .navBar .item5").css("display", "none");
		} else{
			$(".item1, .item2, .item4, .item5").css("display", "flex");
		}
	}

	$(window).on('resize', check1024);
	$(window).on('resize', check700);


///--- Hiệu ứng ở modal enter trang ---///
	$("#enter").mouseenter(function(){
		$("#enter").addClass("animated tada");
	});

	$("#enter").mouseleave(function(){
		$("#enter").removeClass("animated tada");
	});

	$("#leave").mouseenter(function(){
		$("#leave").addClass("animated shake");
	});

	$("#leave").mouseleave(function(){
		$("#leave").removeClass("animated shake");
	});
///--- Hết modal ---///


	$("#enter").on("click", function(){
		$(".modal-Enter").addClass("animated bounceOutRight");
		setTimeout(function(){
			$("#modal-Container").css("display", "none");
			$(".modal-Enter").css("display", "none");
			$("#main-Container").css("display", "flex");
			$("#main-Container").addClass("animated bounceInLeft");
		}, 500);
		check1024();
		check700();
	})

	$("#leave").on("click", function(){
		window.location = "https://www.google.com";
	})


/// Ấn nút menu ///
	$("#myButton").on("click", function(){
		$("#myButton").toggleClass("change");
		$("#responsive-Menu").toggleClass("extend");
		$("nav.navBar").toggleClass("extend");
		$("section").toggleClass("extend");
		$("footer").toggleClass("extend");
	})
})