function ajaxMemberInviteList() {
	$.getJSON(serverAddr +"/memberInvite/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.-2")
			return
		} 

		var contents = ""
		var waitContents = ""	
		var arr = result.data
		var template = Handlebars.compile($('#groupli').html())	
		for (var i in arr) {					
			if (location.search.startsWith("?")) {
				var no = location.search.split("=")[1];
				if (arr[i].groupNo == no && arr[i].status == true) {					
					contents += template(arr[i])
					if ($('#userName').text() == arr[i].name) {
						$('#userName').attr('data-no', arr[i].no)
						$('.group-member-list').html(contents)
					}	
				} else if (arr[i].groupNo == no && arr[i].status == false){
					waitContents += template(arr[i])
					$(".group-member-waitlist").html(waitContents)
				}				
			}
			
						
		 }
		
		

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
		var inviteContents = ""
		var arr = result.data
	    var template = Handlebars.compile($('#liTemplateText').html())
	    var template2 = Handlebars.compile($('#inviteMessage').html())										
		for (var i in arr) {
			if ($("#userName").attr('data-value') == arr[i].memberNo && arr[i].status == true) {
				contents += template(arr[i])				
			 }  
			if (($("#userName").attr('data-value') == arr[i].memberNo) && (arr[i].status == false) && (arr[i].groupNo == arr[i].groupGroupNo)) {				 
				console.log(arr[i])
				inviteContents += template2(arr[i])
				 
			 }		
	    }
		
		 //console.log(inviteContents)
		$("#member").html(contents)
		$('.test').html(inviteContents)
		// 태그 를 추가한후 제목에 대해 click 리스너를 추가한다.
		/*$(".groupTitleLink > a").click(function (e) {
			window.location.href = "../group/makeSc.html?no=" + $(this).attr("data-no")
		})        */   
	})
	
}

