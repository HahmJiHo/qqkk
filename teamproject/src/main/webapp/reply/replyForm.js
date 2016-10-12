/*$("#addBtn").click(function(e) { 
	var reply = {
			contents : $("#contents").val(),
			nicknm : $("#nicknm").html()
	}
	ajaxAddReply(reply)
});
*/
$("#addMember").click(function(e) { 	
	var getGroupNo = $(location).attr('search')	
	var groupNo = getGroupNo.split("=")[1]
	groupNo = parseInt(groupNo)
	var reply = {
		groupNo : groupNo,
		//inviteEmail : $("#email").val(),
		name : $("#name").val()
	}
	ajaxAddReply(reply)	
	var replyContent = {
		groupNo : groupNo,
		content : "그룹에 참가하였습니다",
		name : $("#name").val()
	}
	ajaxAddReplyContent(replyContent)
	
	
});

$('#group-reply-btn').on('click', function(e) {
	ajaxReplyList()
	$('#reply-modal').modal();
	$("#board-Table > ul").on('click', '#deleteBtn', function(e) {   
		var no = $(this).parent().prevAll("#no").text()
		ajaxDeleteReply(no)
		
	});
	
})

function ajaxAddReply(reply) {
	$.post(serverAddr +"/reply/add.json", reply,  function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			console.log(result.data)
			alert("등록 실패 입니다.")       
			return
		}
	}, "json" )	
}

function ajaxAddReplyContent(replyContent) {
	$.post(serverAddr +"/replyContent/add.json", replyContent,  function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			console.log(result.data)
			alert("등록 실패 입니다.")       
			return
		}
	}, "json" )	
}
