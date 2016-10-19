var getGroupNo = $(location).attr('search')	
var groupNo = getGroupNo.split("=")[1]
groupNo = parseInt(groupNo)
$("#addMember").click(function(e) { 
	var memberInvite = {
		name : $("#userName").html(),
		inviteName :  $("#name").val(),
		groupNo : groupNo,
		inviteEmail : $("#email").val()
	}
	console.log(memberInvite)
	ajaxAddMemberInvite(memberInvite)
	
});
$(".add-member-btn").click(function (e){
	$('#member-invite').modal();
})

$("#color-btn").click(function(e) {  
	var memberInvite = {	
			groupNo : groupNo,
			no : $(this).attr('data-no'),
			color : $("#hidden-input").val()
	}	
	console.log(memberInvite)
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
			alert("이미 초대된 회원입니다.")       
			return
		}
		ajaxMemberInviteList()
	}, "json" )	
}

function ajaxUpdateMemberInvite(memberInvite) {	
	$.post(serverAddr +"/memberInvite/update.json", memberInvite, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("변경 실패입니다.-color")
			return
		}
		//window.location.href = "memberApp.html"
		window.location.reload();
	}, "json")
}
