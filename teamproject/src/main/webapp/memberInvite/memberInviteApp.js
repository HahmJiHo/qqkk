

$('.wrap').removeClass('display-none');
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
				var no = location.search.split("=")[1];
		for (var i in arr) {					
			if (location.search.startsWith("?")) {
				if (arr[i].groupNo == no && arr[i].status == true) {					
					contents += template(arr[i])
					console.log(arr)
					if ($('#userName').text() == arr[i].inviteName) {
						$('#color-btn').attr('data-no', arr[i].no)				
					}
					$('.group-member-list').html(contents)
				} else if (arr[i].groupNo == no && arr[i].status == false){
					waitContents += template(arr[i])
					$(".group-member-waitlist").html(waitContents)
				}
			}			
		}
	    $('.wrap').addClass('display-none');
	})
}
$('.wrap').removeClass('display-none');
function ajaxMemberGroupInviteList() {
	$.getJSON(serverAddr +"/memberInvite/list.json",function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.ddd")
			return
		} 
		var contents = ""
		var inviteContents = ""
		var arr = result.data
		var count = 0;
		var template = Handlebars.compile($('#liTemplateText').html())
		for (var i in arr) {
			if ($("#userName").attr('data-value') == arr[i].memberNo && arr[i].status == true ) {															  
				contents += template(arr[i])				
			} 	
		}
		$("#member").html(contents)	
		ajaxmyScheduleIng()	
		$(".groupMore").click(function (e) {
			window.location.href = "../group/makeSc.html?no=" + $(this).attr("data-no")
		}) 	
		$('.wrap').addClass('display-none');
	})	
}