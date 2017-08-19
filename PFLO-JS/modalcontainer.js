$(function(){
	function check1024(){
		if(window.matchMedia("(max-width:1024px)").matches){
			$(".item5").html('<i class="material-icons">contact_mail</i>');
			$(".item4").html('<i class="material-icons">face</i>');
			$(".item2").html('<i class="material-icons">event_note</i>');
			$(".item1").html('<i class="material-icons">home</i>');
			$("#responsive-Menu .item1, #responsive-Menu .item2, #responsive-Menu .item4, #responsive-Menu .item5").remove();
			$(".navBar .item1, .navBar .item2, .navBar .item4, .navBar .item5").css("display", "flex");
		} else{
			$(".item5").html('Contact');
			$(".item4").html('AboutMe');
			$(".item2").html('Project');
			$(".item1").html('ThinhBui94');
		}
		
	}

	function check700(){
		if(window.matchMedia("(max-width:700px)").matches){
			$(".item1, .item2, .item4, .item5").clone().appendTo("#responsive-Menu");
			$(".item5").append("<p>Contact</p>");
			$(".item4").append("<p>Project</p>");
			$(".item2").append("<p>AboutMe</p>");
			$(".item1").append("<p>ThinhBui94</p>");
			$(".navBar .item1, .navBar .item2, .navBar .item4, .navBar .item5").css("display", "none");
		} else{
			$(".item1, .item2, .item4, .item5").css("display", "flex");
		}
	}

	$(window).on('resize', check1024);
	$(window).on('resize', check700);


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

	$("#enter").on("click", function(){
		$(".modal-Enter").addClass("animated bounceOutRight");
		setTimeout(function(){
			$("#modal-Container").css("display", "none");
			$(".modal-Enter").css("display", "none");
			$("#main-Container").css("display", "block");
			$("#main-Container").addClass("animated bounceInLeft");
		}, 500);
		check1024();
		check700();
	})

	$("#leave").on("click", function(){
		window.location = "https://www.google.com";
	})

	$("#myButton").on("click", function(){
		$("#myButton").toggleClass("change");
		$("#responsive-Menu").toggleClass("extend");
		$("nav.navBar").toggleClass("extend");
	})
	
})