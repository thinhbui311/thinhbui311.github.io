$(function(){
	var attName;
	$(".pr").on("click", function(){
		attName = $(this).attr("data-name");
		switch(attName){
			case "1":
				console.log(attName);
				window.location.href = "https://thinhbui94.github.io/QuizjQuery/";
				break;
			case "2":
				console.log(attName);
				window.location.href = "https://thinhbui94.github.io/Table/index.html";
				break;
			case "3":
				console.log(attName);
				window.location.href = "https://thinhbui94.github.io/MemoryCard3/";
				break;
			case "4":
				console.log(attName);
				window.location.href = "https://thinhbui94.github.io/ValidateForm/index.html";
				break;
			case "5":
				console.log(attName);
				window.location.href = "https://thinhbui94.github.io/Calculator/index.html";
				break;
			case "6":
				console.log(attName);
				window.location.href = "https://thinhbui94.github.io/BigProject/index.html";
				break;
			case "7":
				console.log(attName);
				window.location.href = "https://github.com/ThinhBui94/";
				break;
		}
	});

	var desArr = ["Quiz Game", "Sort Table", "Memory Card Game", "Validate Form dùng JS", "Calculator", "Website tổng hợp sự kiện ( chưa hoàn thiện)", "Coming Soon"];

	$(".pr").hover(function(){
		var attName1 = $(this).attr("data-name");
		switch(attName1){
			case "1":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break;
			case "2":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break;
			case "3":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break;
			case "4":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break;
			case "5":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break;
			case "6":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break; 
			case "7":
				$("#item2-Detail").append("<p class='animated fadeIn projectDes'>"+desArr[attName1 -1 ]+"</p>");
				break; 
		}
		$(".projectDes").addClass("flag");
	}, function(){
		$(".flag").remove();
	});

})