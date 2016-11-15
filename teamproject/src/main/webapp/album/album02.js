var getGroupNo = $(location).attr('search')	
var groupNo = getGroupNo.split("=")[1]
groupNo = parseInt(groupNo)

$(".al-btn").click(function(e) { 
	/*ajaxAddGroup(makegroup)*/
	console.log("111")

	ajaxAddGroupPhoto()

});
function ajaxGroupName() { // gno , gsno 불러오는 function
	$.getJSON(serverAddr +"/album/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
			var arr = result.data.list
			//	console.log(arr)
			var template = Handlebars.compile($('#groupNameTemplateText').html())
			
			
			/*for (var i in arr) {
				$("#groupinfo").attr('data-value', arr[i].groupNo)
				var sch = arr[i].scheduleList
				console.log(sch)
				console.log(sch[i].groupscNo)
				$("#albumgroupSchedule").attr('data-gsno', sch[i].groupscNo)
			}*/
			
			for (var i in arr) {
				var sch = arr[i].scheduleList
				$("#groupinfo").attr('data-value', arr[i].groupNo)
				contents +=  "<a onclick='myAccFunc()' href='javascript:void(0)' class='w3-text-black' id='groupinfo' data-value='{{"+ arr[i].groupNo +"}}'>" + arr[i].groupName + "<i class='fa fa-caret-down'></i>" + "</a>";
				for (var x in sch) {					
					console.log(" 번호 : " + x + " 스케쥴번호 : " + sch[x].groupscNo)
					$("#scheduleList").attr('data-gsno', sch[x].groupscNo)	
					contents += template(sch[x])
					
				}
			}
		console.log(arr)
		$("#albumlist").html(contents)
		     
	})
}

function ajaxAddGroupPhoto() {
	var formData = new FormData();
	formData.append("memberNo", $("#userName").attr('data-value'));
	formData.append("groupNo", $("#groupinfo").attr('data-value'));
	formData.append("groupscNo", $("#showList").attr('data-gsno'));
	formData.append("file1", $("#file-0a")[0].files[0]);
	console.log(formData)
	console.log($("#file-0a")[0].files[0])
	console.log($("#userName").attr('data-value'))
	console.log($("#albumgroup").attr('data-no'))
	console.log($("#albumgsno").attr('data-no'))

	$.ajax({
		url: serverAddr + '/album/add.json',
		processData: false,
		contentType: false,
		data: formData,
		type: 'POST',
		success: function(result){
			console.log(result)
		}
	});

};

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
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
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


function ajaxSchedule() {
	$.getJSON(serverAddr +"/album/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
		var arr = result.data.list;
		console.log(arr)
		var template = Handlebars.compile($('#scheduleNameTemplateText').html())
		
		for (var i in arr) {
			$("#albumgroupSchedule").attr('data-value', arr[i].groupNo)
			console.log($("#albumgroupSchedule").attr('data-value'))
			if (arr[i].groupNo == $("#albumgroupSchedule").attr('data-value')) {
				console.log(arr[i])
				contents += template(arr[i])
				console.log(contents)
			}
		
		}
		$("#albumgroupSchedule").html(contents)
		/*$('.test-al > #groupinfo').each(function(i, e) {
			for (var i in arr) {								
				if (arr[i].groupNo == $(this).attr('data-value')) {					
					$(this).append(template(arr[i]))						
				} 
		})

}
*/
/*
	$.getJSON(serverAddr +"/album/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
			var arr = result.data.list
			var template = Handlebars.compile($('#groupNameTemplateText').html())

			for (var i in arr) {	

				contents += template(arr[i])
function ajaxAlbumSc() {
			}
			var scheduleNo = $('.scno').attr('data-scno')
$('.scno').each(function() {
		/*console.log(arr)*/



/*$('body').on('click',"#addBtn", function(){

})*/

