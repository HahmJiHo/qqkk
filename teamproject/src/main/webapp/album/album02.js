var getGroupNo = $(location).attr('search')	
var memberNo = getGroupNo.split("=")[1]
var no = parseInt(memberNo)
console.log("no ; " + no)
var groupNo = getGroupNo.split("=")[2]
var gno = parseInt(groupNo)
console.log("gno ; " + gno)
var groupScNo = getGroupNo.split("=")[3]
var gsno = parseInt(groupScNo)
console.log("gsno ; " + gsno)
function ajaxGroupName() { // gno , gsno 불러오는 function
	$.getJSON(serverAddr +"/album/list.json",  function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = "";
		var contents2 = "";	
		var photoContents = "";	
		var arr = result.data.list
		var template = Handlebars.compile($('#groupNameTemplateText').html())			
		var template2 = Handlebars.compile($('#groupNameTemplateText2').html())
		var template3 = Handlebars.compile($('#photoTemplate').html())
		for (var i in arr) {
			if (no == arr[i].memberNo) {
				var sch = arr[i].scheduleList
				$("#groupinfo").attr('data-value', arr[i].groupNo)								
				contents += "<div class='tttt' data-value=" + arr[i].groupNo + ">" +
				"<p id='groupinfo' style='font-size:15;' data-value=" + arr[i].groupNo+ ">" + arr[i].groupName + "</p>" +
				"</div>";
				for (var j = 0; j < arr[i].scheduleList.length; j++) {
					if (arr[i].groupNo == arr[i].scheduleList[j].groupNo) {						
						$("#scheduleList").attr('data-gsno', arr[i].scheduleList[j].groupscNo)							
						contents += template(arr[i].scheduleList[j]) 						
						if (gsno == arr[i].scheduleList[j].groupscNo) {							
							$(".sc-title").html(arr[i].scheduleList[j].title + " 일정 입니다.")	
						}
					}				
				}
			}		
			if (gno == arr[i].groupNo) {
				contents2 = template2(arr[i])
			}

		}
		
		$('#albumlist').html(contents)	
		$('#groupNa').html(contents2)
	
		$('.tttt').each(function(i, obj) {
			var vv = $(this).attr("data-value")
			var vvv = $(this)
			$('.asdf').each(function(i, obj) {
				var asd = $(this).attr("data-vo")
				var asdd =$(this)
				if (vv == asd) {
					vvv.append(asdd)
				}
			})

		});
		
		$('body').on('click', '#groupinfo', function (e) {
			window.location.href = "../album/album02.html?no=" + no + "&gno=" + $(this).attr("data-value")			
		})	
		$('body').on('click', '#scheduleList', function (e) {
			var ggno = $(this).parent().parent().parent().attr('data-vo')
			window.location.href = "../album/album02.html?no=" + no + "&gno=" + ggno + "&gsno=" + $(this).attr("data-gsno")	
		})	

	});
}

function ajaxGroupPhoto() {
	$.getJSON(serverAddr +"/album/listAl.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var arr = result.data
		var contents =""
		var template = Handlebars.compile($('#photoTemplate').html())
		for (var i in arr) {
			if ((gno == arr[i].groupNo) && (gsno == arr[i].groupScheduleNo)) {
				console.log(arr[i])
				contents += template(arr[i]) 	
			}
		}
		$('.aaaaa').html(contents)
	})
}


$(".al-btn").click(function(e) { 		
	var formData = new FormData();
	formData.append("memberNo", $("#userName").attr('data-value'));
	formData.append("groupNo", $("#groupinfo2").attr('data-value'));
	formData.append("groupScheduleNo", gsno);	
	console.log(gsno)
	console.log($("#multiFile")[0].files)
	$($("#multiFile")[0].files).each(function(index, file) {
		console.log(file)
		formData.append("file1", file)
	})

	$.ajax({
		url: serverAddr + '/album/add.json',
		processData: false,
		contentType: false,
		data: formData,
		type: 'POST',
		success: function(result){

		}
	});
	window.location.reload();
});



/*function ajaxImagesLoad() {
	$.getJSON(serverAddr +"/album/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
			var arr = result.data.list
			var template = Handlebars.compile($('#albumTemplateText').html())

			for (var i in arr) {		

				contents += template(arr[i])
			}
		$("#imagesContainer").html(contents)

	})
}*/




function ajaxLoginUser() {
	$.getJSON(serverAddr +"/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			$(".my-login").css("display", "none")
			return
		} 	
		//$("#userEmail").text(result.data.email);
		$(".my-logout").css("display", "none")
		$("#groupName").text(result.data.name)
		$("#userName").attr('data-value', result.data.no)		
		$("#userName").text(result.data.name)		
	})
}

function w3_open() {
	document.getElementById("mySidenav").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
	document.getElementById("mySidenav").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}





/*
function ajaxGroupName() {
	$.getJSON(serverAddr +"/memberInvite/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
			var arr = result.data
			//console.log(arr)
			var template = Handlebars.compile($('#groupNameTemplateText').html())
			for (var i in arr) {
				//	console.log(arr[i].memberNo)  => 5
				if ($("#userName").attr('data-value') == arr[i].memberNo && arr[i].status == true ) {
					//	console.log($("#userName").attr('data-value'))   => 5
					$("#groupinfo").attr('data-value', arr[i].groupNo)
					//	console.log($("#groupinfo").attr('data-value'))  
					//	var x = arr[i].groupName
					contents += template(arr[i])
				} 	
			}
		$("#albumlist").html(contents)

	})
}

*/

