$(function(){
	var arrData = [
		{image : "Image/1.jpg",  name : "Biostar H110MD Pro DVI-D", code : "H110MD",    cost : "1399000", amount : "1"},
		{image : "Image/2.jpg",  name : "Asrock H110M-DVS R2.0",    code : "H110M-DVS", cost : "1459000", amount : "2"},
		{image : "Image/3.png",  name : "MSI B250 BAZOOKA",         code : "H110MD",    cost : "2369000", amount : "4"},
		{image : "Image/4.png",  name : "RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4",  code : "Vengeance-LPX-16GB", cost : "3999000",  amount : "2"},
		{image : "Image/5.jpg",  name : "Vga Card ASUS STRIX GTX1080 - 08G - 11GBPS",   code : "GTX1080-08G-11GBPS", cost : "20899000", amount : "7"},
		{image : "Image/6.png",  name : "Intel Core i7-7700 3.6 GHz",  code : "Core i7 7700", cost : "7599000", amount : "5"},
		{image : "Image/7.png",  name : "AMD Ryzen 5 1600X  3.6 GHz",  code : "RYZEN 5 1600X ",    cost : "6249000", amount : "5"},
		{image : "Image/8.png",  name : "SSD Samsung 850 EVO 250GB",   code : "Samsung 850 EVO",    cost : "2799000", amount : "15"},
		{image : "Image/9.jpeg", name : "Seasonic 520W M12II Bronze Evo Edition", code : "M12II",    cost : "1839000", amount : "12"},
		{image : "Image/10.png", name : "Monitor Dell 27 U2715H Ultrasharp", code : "U2715H",    cost : "10369000", amount : "9"},
		{image : "Image/11.jpg", name : "HDD Western Caviar Blue 4TB/5400 Sata3 64M", code : "WDBlue",    cost : "3479000", amount : "6"},
		{image : "Image/12.png", name : "Mouse Razer Mamba Tournament Edition", code : "RZ01-01370100-R3A1",    cost : "2219000", amount : "13"},
		{image : "Image/13.png", name : "Case Corsair Graphite Series 780T White", code : "780T",    cost : "4299000", amount : "11"},
		{image : "Image/14.jpg", name : "Edifier R1600TIII 2.0", code : "R1600TIII",    cost : "3489000", amount : "18"},
		{image : "Image/15.jpg", name : "LG 34inch 34UC79G-B Curved LED IPS", code : "34UC79G-B",    cost : "13999000", amount : "10"},
	];

	function clearAndreplace(){
		$("td").remove();
		for(i = 0; i< arrData.length; i++){
			$("tbody").append("<tr>"+"<td>"+"<img src="+arrData[i].image+">"+"</td>"+"<td>"+arrData[i].name+"</td>"+"<td>"+arrData[i].code+"</td>"+"<td>"+Number(arrData[i].cost).toLocaleString()+"</td>"+"<td>"+arrData[i].amount+"</td>"+"</tr>");
		};
	};

///--- Gọi hàm clearAndreplace lần đàu để đổ dữ liệu vào bảng lần đầu ---///
	clearAndreplace();


	var current = true;
///---- Hàm sort theo name ----///
	$("th:nth-child(2)").on("click", function(){
		$("span:not('th:nth-child(2) span')").html("<i class='fa fa-sort' aria-hidden='true'></i>");
		$("span:not('th:nth-child(2) span')").css("opacity", "0.4");
		$("th:nth-child(2) span").css("opacity", "1");
		if(current == true){
			$("th:nth-child(2) span").html("<i class='fa fa-sort-asc' aria-hidden='true'</i>");
			arrData.sort(function(a,b){
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				if(nameA < nameB){
					return -1;
				}
				if(nameA > nameB){
					return 1;
				}
				return 0;
			});
			current = false;
		} else {
			$("th:nth-child(2) span").html("<i class='fa fa-sort-desc' aria-hidden='true'></i>");
			arrData.sort(function(a,b){
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				if(nameA < nameB){
					return 1;
				}
				if(nameA > nameB){
					return -1;
				}
				return 0;
			});
			current = true;
		};
		clearAndreplace();
	});



///--- Hàm sort theo Mã ---///
	$("th:nth-child(3)").on("click", function(){
		$("span:not('th:nth-child(3) span')").html("<i class='fa fa-sort' aria-hidden='true'></i>");
		$("span:not('th:nth-child(3) span')").css("opacity", "0.4");
		$("th:nth-child(3) span").css("opacity", "1");
		if(current == true){
			$("th:nth-child(3) span").html("<i class='fa fa-sort-asc' aria-hidden='true'</i>");
			arrData.sort(function(a,b){
				var codeA = a.code.toUpperCase();
				var codeB = b.code.toUpperCase();
				if(codeA < codeB){
					return -1;
				}
				if(codeA > codeB){
					return 1;
				}
				return 0;
			});
			current = false;
		} else {
			$("th:nth-child(3) span").html("<i class='fa fa-sort-desc' aria-hidden='true'></i>");
			arrData.sort(function(a,b){
				var codeA = a.code.toUpperCase();
				var codeB = b.code.toUpperCase();
				if(codeA < codeB){
					return 1;
				}
				if(codeA > codeB){
					return -1;
				}
				return 0;
			});
			current = true;
		};
		clearAndreplace();
	});



///--- Hàm sort theo giá tiền ---///	
	$("th:nth-child(4)").on("click", function(){
		$("span:not('th:nth-child(4) span')").html("<i class='fa fa-sort' aria-hidden='true'></i>");
		$("span:not('th:nth-child(4) span')").css("opacity", "0.4");
		$("th:nth-child(4) span").css("opacity", "1");
		if(current == true){
			current = false;
			$("th:nth-child(4) span").html("<i class='fa fa-sort-asc' aria-hidden='true'</i>");
			arrData.sort(function(a,b){
				return a.cost - b.cost;
			});
		} else {
			current = true;
			$("th:nth-child(4) span").html("<i class='fa fa-sort-desc' aria-hidden='true'></i>");
			arrData.sort(function(a,b){
				return b.cost - a.cost;
			});
		};
		clearAndreplace();
	});



///--- Hàm sort theo số lượng ---///
	$("th:nth-child(5)").on("click", function(){
		$("span:not('th:nth-child(5) span')").html("<i class='fa fa-sort' aria-hidden='true'></i>");
		$("span:not('th:nth-child(5) span')").css("opacity", "0.4");
		$("th:nth-child(5) span").css("opacity", "1");
		if(current == true){
			current = false;
			$("th:nth-child(5) span").html("<i class='fa fa-sort-asc' aria-hidden='true'</i>");
			arrData.sort(function(a,b){
				return a.amount - b.amount;
			});
		} else {
			current = true;
			$("th:nth-child(5) span").html("<i class='fa fa-sort-desc' aria-hidden='true'></i>");
			arrData.sort(function(a,b){
				return b.amount - a.amount;
			});
		};
		clearAndreplace();
	});
});



		