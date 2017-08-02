$(function(){
	$("form").on("submit", function(){
		var isValid = true;
		///------ Kiểm tra tên ko đc trống và ngắn dưới 8 ký tự ------///
		if($("#name").val() == ""){
			$("#spanName").text("(Không được để trống)");
			isValid = false;
		} else {
			if($("#name").val().length <= 8){
				$("#spanName").text("(Tên phải dài tối thiểu 8 ký tự)");
				isValid = false;
			} else {
				$("#spanName").text("");
			}
		};


		///--- Ngày sinh không được để trống ---///
		if($("#birth").val() == ""){
			$("#spanBirth").text("(Không được để trống)");
			isValid = false;
		} else {
			$("#spanBirth").text("");
		};


		///---Giới tính không được để trống ---///
		if($("#Sex").val() == ""){
			$("#spanSex").text("(Không được để trống)");
			isValid = false;
		} else {
			$("#spanSex").text("");
		};


		///--- Địa chỉ không được để trống ---///
		if($("#add").val() == ""){
			$("#spanAdd").text("(Không được để trống)");
			isValid = false;
		} else {
			$("#spanAdd").text("");
		};


		///---Số điện thoại ko đc trống, phải là định đạng số, dài tối thiểu 10 số ---///
		if($("#tel").val() == ""){
			$("#spanTel").text("(Không được để trống)");
			isValid = false;
		} else {
			if($("#tel").val().match(/[a-z]/ig)){
				$("#spanTel").text("(Không được chứa ký tự là chữ)");
				isValid = false;
			} else {
				if($("#tel").val().match(/[^0-9]/ig)){
					$("#spanTel").text("(Không được chứa ký tự đặc biệt)");
					isValid = false;
				} else {
					if($("#tel").val().length < 9){
						$("#spanTel").text("(Cần có ít nhất 9 số)");
						isValid = false;
					} else {
						$("#spanTel").text("");
					}
				}
			}
		}


		///--- Email hợp lệ ---///
		if($("#mail").val() == ""){
			$("#spanMail").text("(Không được để trống)");
			isValid = false;
		} else {
			if($("#mail").val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g)){
				$("#spanMail").text("");
			} else {
				$("#spanMail").text("(Email không hợp lệ)");
				isValid = false;
			}
		}
		

		///--- Địa chỉ facebook hợp lệ ---///
		if($("#face").val() == ""){
			$("#spanFace").text("(Không được để trống)");
			isValid = false;
		} else {
			if($("#face").val().match(/(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/g)){
				$("#spanFace").text("");
			} else {
				$("#spanFace").text("(Địa chỉ FB không hợp lệ)");
				isValid = false;
			}
		}


		///--- Mật khẩu hợp lệ ---///
		if($("#pass").val() == ""){
			$("#spanPass").text("(Không được để trống)");
			isValid = false;
		} else {
			if($("#pass").val().match(/^(?=.*\d).{4,15}$/g)){
				$("#spanPass").text("");
			} else {
				$("#spanPass").text("(4-15 ký tự, ít nhất 1 ký tự số)");
				isValid = false;
			}
		}


		return isValid;
	});
})

	