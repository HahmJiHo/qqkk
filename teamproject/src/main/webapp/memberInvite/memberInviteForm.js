var getGroupNo = $(location).attr('search')	
var groupNo = getGroupNo.split("=")[1]
groupNo = parseInt(groupNo)
$("#addMember").click(function(e) { 
	var memberInvite = {
		groupNo : groupNo,
		inviteEmail : $("#email").val()
	}
	ajaxAddMemberInvite(memberInvite)
	
});
$(".add-member-btn").click(function (e){
	$('#member-invite').modal();
})

$("#color-btn").click(function(e) {  
	var memberInvite = {
			groupNo : groupNo,
			no : $("#userName").attr('data-no'),
			color : $("#hidden-input").val()
	}	
	ajaxUpdateMemberInvite(memberInvite)	
});

$("#deleteBtn").click(function(e) {   
	ajaxDeleteMember($("#no").val(), $("#password").val())
});

$("header").on('click','.addTrue',function(e){
	var memberInvite = {
			no : $(".member-name").attr('data-value'),
			groupNo : groupNo,
			status : "1"
	}
	ajaxMemberInvite(memberInvite)
	console.log(memberInvite)
});
$(".addTrue").click(function(e) { 
	
});


function ajaxAddMemberInvite(memberInvite) {
	$.post(serverAddr +"/memberInvite/add.json", memberInvite, function(obj) {
		var result = obj.jsonResult	
		if (result.state != "success") {
			console.log(result.data)
			alert("등록 실패 입니다.-멤버초대")       
			return
		}
		ajaxMemberInviteList()
	}, "json" )	
}

function ajaxUpdateMemberInvite(memberInvite) {	
	$.post(serverAddr +"/memberInvite/update.json", memberInvite, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("변경 실패입니다.")
			return
		}
		//window.location.href = "memberApp.html"
		window.location.reload();
	}, "json")
}

function ajaxMemberInvite(memberInvite) {	
	$.post(serverAddr +"/memberInvite/update2.json", memberInvite, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("변경 실패입니다.-수락실패")
			return
		}
		//window.location.href = "memberApp.html"
		window.location.reload();
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