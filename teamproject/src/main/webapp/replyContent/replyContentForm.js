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

$('body').on('click', '#g-r-box',function(e) {
	$('#origin-reply-box').css({"display" : "block"})		
})
$('body').on('click', '.g-r-x', function(e) {
	$('#origin-reply-box').css({"display" : "none"})		
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


