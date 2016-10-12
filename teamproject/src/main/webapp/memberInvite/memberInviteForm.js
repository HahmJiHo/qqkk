$("#addMember").click(function(e) { 
	
	var getGroupNo = $(location).attr('search')	
	var groupNo = getGroupNo.split("=")[1]
	groupNo = parseInt(groupNo)
	var memberInvite = {
		groupNo : groupNo,
		inviteEmail : $("#email").val()
	}
	ajaxAddMemberInvite(memberInvite)
	
});
$(".add-member-btn").click(function (e){
	$('#member-invite').modal();
	
})

$("#updateBtn").click(function(e) {  
	var member = {
			name : $("#name").val(),
			nicknm : $("#nicknm").val(),
			email : $("#email").val(),
			password : $("#password").val(),
			no : $("#no").val()
	}
	ajaxUpdateMemberInvite(memberInvite)
});

$("#deleteBtn").click(function(e) {   
	ajaxDeleteMember($("#no").val(), $("#password").val())
});



function ajaxAddMemberInvite(memberInvite) {
	$.post(serverAddr +"/memberInvite/add.json", memberInvite, function(obj) {
		var result = obj.jsonResult	
		if (result.state != "success") {
			console.log(result.data)
			alert("등록 실패 입니다.")       
			return
		}
		ajaxMemberInviteList()
	}, "json" )	
}

function ajaxLoadMemberInvite(no) {
	$.getJSON(serverAddr +"/memberInvite/detail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패 입니다.-2")       
			return
		} 
		// 서버에서 받은 데이터로 폼을 채운다
		$("#no").val(result.data.no);
		$("#name").val(result.data.name);
		$("#nicknm").val(result.data.nicknm);
		$("#email").val(result.data.email);

	})
}

function ajaxUpdateMemberInvite(memberInvite) {	
	$.post(serverAddr +"/memberInvite/update.json", memberInvite, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("변경 실패입니다.")
			return
		}
		window.location.href = "memberApp.html"
	}, "json")
}

function ajaxDeleteMemberInvite(no, password) {
	$.getJSON(serverAddr +"/memberInvite/delete.json",{
		no: no,
		password : password
	}, function(result){
		if (result.state != "success") {
			alert("삭제 실패 입니다.")       
			return
		} 
		location.href = "memberApp.html"    		
	})		
}