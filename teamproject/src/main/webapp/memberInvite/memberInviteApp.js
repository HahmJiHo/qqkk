$("#loginBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})

$("#logoutBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})

function ajaxMemberInviteList() {
	$.getJSON(serverAddr +"/memberInvite/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.-2")
			return
		} 

		var contents = ""
		var arr = result.data
		var template = Handlebars.compile($('#groupliTemplateText').html())
		

		for (var i in arr) {		
			if (location.search.startsWith("?")) {
				var no = location.search.split("=")[1];
				if (arr[i].groupNo == no) {					
					contents += template(arr[i])				 			 				 
				}
			}
		 }
		$(".group-member-list").html(contents)

		// 태그 를 추가한후 제목에 대해 click 리스너를 추가한다.
	})
}

function ajaxMemberGroupInviteList() {
	$.getJSON(serverAddr +"/memberInvite/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.")
			return
		} 
		var contents = ""
		var arr = result.data
	    var template = Handlebars.compile($('#liTemplateText').html())
		
		for (var i in arr) {
			if ($("#userName").attr('data-value') == arr[i].memberNo) {
				contents += template(arr[i])				
			 }			
	    }
		$("#member").html(contents)

		// 태그 를 추가한후 제목에 대해 click 리스너를 추가한다.
		/*$(".groupTitleLink > a").click(function (e) {
			window.location.href = "../group/makeSc.html?no=" + $(this).attr("data-no")
		})        */   
	})
}
