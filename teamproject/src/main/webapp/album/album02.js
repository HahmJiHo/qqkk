var getGroupNo = $(location).attr('search')	
var groupNo = getGroupNo.split("=")[1]
groupNo = parseInt(groupNo)

$(".al-btn").click(function(e) { 
	/*ajaxAddGroup(makegroup)*/
	console.log("111")

	ajaxAddGroupPhoto()
	
});
function ajaxLoadGroup(no) {
	$.getJSON(serverAddr +"/album/detail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		console.log(result)
		if (result.state != "success") {
			alert("조회 실패 입니다.")       
			return
		} 

	})
}

function ajaxGroupName() {
	$.getJSON(serverAddr +"/album/list.json", function(obj) {
		var result = obj.jsonResult
		console.log(result)
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
		var arr = result.data.list
		console.log(arr)	
		var template = Handlebars.compile($('#groupNameTemplateText').html())
		
		for (var i in arr) {		
			
					contents += template(arr[i])
				}
		$("#albumlist").html(contents)

	})
}

/*$('body').on('click',"#addBtn", function(){
	
})*/
function ajaxAddGroupPhoto() {
	var formData = new FormData();
	formData.append("memberNo", $("#userName").attr('data-value'));
	formData.append("groupNo", $("#albumgroup").attr('data-no'));
	formData.append("groupScheduleNo", $("#albumgroup").attr('data-no'));
	formData.append("file1", $("#file-input")[0].files[0]);
	console.log(formData)
	$.ajax({
		url: serverAddr + '/album/add.json',
		processData: false,
		contentType: false,
		data: formData,
		type: 'POST',
		success: function(result){
		}
	});

};


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
