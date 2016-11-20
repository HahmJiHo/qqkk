$("#addBtn").click(function(e) { 
	var replyContent = {
		memberNo : $("#userName").attr('data-value'),
		groupNo : $("#groupName").attr('data-value'),
		content : $("#content").val(),
		name : $("#userName").html()
	}
	ajaxAddReplyContent(replyContent)
	
	$("#content").val('')
});

$('.group-reply-more').on('click', '#group-reply-btn',function(e) {
	$('#reply-modal').modal();	
})


function ajaxAddReplyContent(replyContent) {
	$.post(serverAddr +"/replyContent/add.json", replyContent,  function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			console.log(result.data)
			alert("등록 실패 입니다.re-con")       
			return
		}
		ajaxReplyList()
	}, "json" )	
}


