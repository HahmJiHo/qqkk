$("#addBtn").click(function(e) { 
	var replyContent = {
		groupNo : $("#group-reply-btn").attr('data-no'),
		content : $("#content").val(),
		name : $("#userName").html()
	}
	ajaxAddReplyContent(replyContent)
	
});



$('.group-reply-more').on('click', '#group-reply-btn',function(e) {
	$('#reply-modal').modal();
	$("#board-Table > ul").on('click', '#deleteBtn', function(e) {   
		var no = $(this).parent().prevAll("#no").text()
		ajaxDeleteReply(no)
		
	});
	
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

