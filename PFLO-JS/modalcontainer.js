$(function(){
	function check1024(){
		if(window.matchMedia("(max-width:1024px)").matches){
			$(".item5").html('<i class="material-icons">contact_mail</i>');
			$(".item4").html('<i class="material-icons">face</i>');
			$(".item2").html('<i class="material-icons">event_note</i>');
			$(".item1").html('<i class="material-icons">home</i>');
		} else{
			$(".item5").html('Contact');
			$(".item4").html('AboutMe');
			$(".item2").html('Project');
			$(".item1").html('ThinhBui94');
		}
	}

	function check700(){
		if(window.matchMedia("(max-width:700px)").matches){
			$(".item1, .item2, .item4, .item5").css("display", "none");
		} else{
			$(".item1, .item2, .item4, .item5").css("display", "flex");
		}
	}

	$(window).on('resize', check1024);
	$(window).on('resize', check700);

	$("#main-Container").css("display", "none");

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
		}, 600);
		check1024();
		check700();
	})

	$("#leave").on("click", function(){
		window.location = "https://www.google.com";
	})

	$("#myButton").on("click", function(){
		$("#myButton").toggleClass("change");
	})
	
})