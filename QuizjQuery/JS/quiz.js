function quest(question, answer1, answer2, answer3){
	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
};

var question1 = new quest (
	"What colour is a NYC taxi?",
	"A . Green",
	"B . Blue",
	"C . Yellow"
	);

var question2 = new quest (
	"What falling object is said to have inspired Isaac Newton's theories about gravity?",
	"A . Orange",
	"B . Apple",
	"C . Plum"
	);

var question3 = new quest (
	"What does the 'e' of e-mail stand for?",
	"A . Efficient",
	"B . Electronic",
	"C . Easy"
	);

var question4 = new quest (
	"How many roses and of which colour is the traditional romantic gift?",
	"A . Red",
	"B . White",
	"C . Pink"
	);

var question5 = new quest (
	"What is it, if it's a Canon, Nikon or Olympus?",
	"A . Mobile Phone",
	"B . TV",
	"C . Camera"
	); 

var question6 = new quest (
	"Which software company produces Windows '98?",
	"A . Microsoft",
	"B . IBM",
	"C . Apple"
	);

var question7 = new quest (
	"In which country do the famous pyramids of Giza stand?",
	"A . Lebanon",
	"B . Libya",
	"C . Egypt"
	);

var question8 = new quest (
	"What does the Dell company make?",
	"A . Drinks",
	"B . Computers",
	"C . Cars"
	);

var question9 = new quest (
	"Which logo on a flag identifies a ship's crew as pirates?",
	"A . Bull",
	"B . Hammer and sickle",
	"C . Skull and Crossbones"
	);

var question10 = new quest (
	"Which logo on a flag identifies a ship's crew as pirates?",
	"A . Mary Mouse",
	"B . Minnie Mouse",
	"C . Maude Mouse"
	);

var arr = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var answerkey = ["C", "B", "B", "A", "C", "A", "C", "B", "C", "B" ];
var b = 0;
var i = 1;
var count = 0;

//// Hiển thị lần đầu ////
$("#question").html(arr[0].question);
$($(".answer")[0]).html(arr[0].answer1);
$($(".answer")[1]).html(arr[0].answer2);
$($(".answer")[2]).html(arr[0].answer3);

////Báo câu trả lời đúng sai ////
$(document).ready(function(){
	$(".answer").click(function(){
		if ($(this).html().indexOf(answerkey[b]) == 0){
			$(this).css("color", "#aced3b");
			count = count + 1;
		} else {
			$(this).css("color", "#ed3d07");
		}

/// hiển thị câu tiếp theo ///
		setTimeout(function(){
			$("#question").html(arr[i].question);
			for(a=0; a <3; a++){
				if(a == 0){
					$($(".answer")[a]).html(arr[i].answer1);	
				} else {
					if (a == 1){
						$($(".answer")[a]).html(arr[i].answer2);
					} else {
						if (a == 2){
							$($(".answer")[a]).html(arr[i].answer3);		
						}
					}
				}
			}
		i = i+1;
		$(".answer").css("color", "white");	
		}, 200);
		b= b+1;
		if (b == 10){
			if (count == 10){
				window.location.href = "congrat.html";
			} else {
				if (confirm("Bạn đã trả lời đúng " + count + " câu, bạn có muốn chơi lại không???") == true) {
			    window.location.reload();
				}
			}
		}
	});

//// Nút đổi màu ////
var a = 0;
var bodycolor =    ["linear-gradient(#f6a6ff, #a79aff )", "linear-gradient(#40bbfd, #5b597c)", "linear-gradient(#fcb96f, #7437a6)", "linear-gradient(#0b8aab, #6422a6)"];
var containcolor = ["linear-gradient(#f6a6ff, #a79aff )", "linear-gradient(#40bbfd, #5b597c)", "linear-gradient(#fcb96f, #7437a6)","linear-gradient(#0ab1d3, #a02cff)"];
	$("#button").click(function(){
		$("body").css("background", bodycolor[a]);
		$("#container").css("background", containcolor[a]);
		a=a+1;
		if(a == 4){
			a = 0;
		}
	});
});