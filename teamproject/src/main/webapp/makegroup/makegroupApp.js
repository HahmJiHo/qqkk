$("#loginBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})

$("#logoutBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})




function ajaxGroupList() {
	$.getJSON(serverAddr +"/group/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.")
			return
		} 
		var contents = ""
		var arr = result.data
	   // var template = Handlebars.compile($('#liTemplateText2').html())
	    var len = $('.groupMore').length;
		for (var a = 0; a < len; a++) {
		    for (var i in arr) {
				if ($('.groupMore').eq(a).attr('data-no') == arr[i].no) {																				
					$(".groupTitleLink").eq(a).append("<span class='groupNum'>"+ arr[i].groupName+"</span>");					
				}	
			}
		}
		// 태그 를 추가한후 제목에 대해 click 리스너를 추가한다.
		$(".groupTitleLink > a").click(function (e) {
			window.location.href = "../group/makeSc.html?no=" + $(this).attr("data-no")
		})           
	})
}


function ajaxGroupName() {
	$.getJSON(serverAddr +"/group/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.")
			return
		} 
		var contents = ""
		var arr = result.data
		var template = Handlebars.compile($('#groupNameTemplateText').html())
			
		for (var i in arr) {		
			if (location.search.startsWith("?")) {
				var no = location.search.split("=")[1];
				if (arr[i].no == no) {
					contents += template(arr[i])
				}
			}
		 }
		$(".make-text").append(contents)

	})
}