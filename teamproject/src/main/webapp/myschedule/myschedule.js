
$("#loginBtn").click(function(event) {
	location.href = "../index.html"
});

$("#logoutBtn").click(function(event) {
	location.href = "../index.html"
});

function computeDday(start) {
	var now = new Date();
	var then = new Date(start);
	gap = now.getTime() - then.getTime();
	gap = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
	if (gap < 0) {
		return "이미 지난 스케줄입니다."
	} else {
		return gap
	}
}

function ajaxMygroupList() {
	$.getJSON(serverAddr + "/myschedule/list.json", function(obj) {
		var result = obj.jsonResult
		console.log(result.data.list)
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}

		var contents = ""
		var arr = result.data.list
		var groupscCount;
		var countArr = [];

		var template = Handlebars.compile($('#divTemplateText').html())
		for (var i in arr) {
			$("#group-Info").attr('data-value', arr[i].groupNo)
			if (countArr[i] == arr[i].groupNo) {
				countArr[i]++;
				console.log(countArr[i])
			}
			console.log(countArr[i])
			arr[i].dday = computeDday(arr[i].start)
			if (arr[i].dday > 0) {				
				if ($("#user").attr('data-value') == arr[i].no
						&& $("#group-Info").attr('data-value') == arr[i].groupNo){
					groupscCount += 1
					arr[i].groupscCount = groupscCount
					console.log(arr[i].groupscCount)
					contents += template(arr[i])
				}
			}
		}
		console.log(contents)
		$("#group-Info").html(contents)
	})
}

/*
function ajaxMyScheduleList() {
	$.getJSON(serverAddr + "/myschedule/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		$("#group-Info").attr('data-value', result.data.groupNo)

		var contents = ""
			var contents2 = ""
				var arr = result.data.list
				console.log(arr)
				console.log($("#user").text())
				var template = Handlebars.compile($('#divTemplateText').html())
				//var ddayTemplate = Handlebars.compile($('#spanTemplateText').html())
				//console.log("template" + template)
				var template2 = Handlebars.compile($('#div2TemplateText').html())
				//console.log("template2" + template2)
				for (var i in arr) {
					if ($("#user").attr('data-value') == arr[i].no){

						if ($("#group-Info").attr('data-value') == arr[i].groupNo) {
							arr[i].dday = computeDday(arr[i].start) 				
							console.log(arr[i].dday)
							if (arr[i].dday > 0) {
								contents += template(arr[i].groupName)
								contents2 += template2(arr[i])
							}
						}
					}
				}
		$("#group-Info").html(contents)
		$("#schedule-Info").html(contents2)
	})
}
 */




function ajaxLoginUser() {
	$.getJSON(serverAddr +"/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			$(".my-login").css("display", "none")
			return
		}    
		//$("#userEmail").text(result.data.email);
		$(".my-logout").css("display", "none")
		$("#user").text(result.data.name)
		$("#user").attr('data-value', result.data.no)
		$("#userSc").attr('data-value', result.data.no)
	})
}
