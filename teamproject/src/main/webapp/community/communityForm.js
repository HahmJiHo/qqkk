$("#loginBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

$("#logoutBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

$("#addBtn").click(function(event) {
	var community = {
	  userNo: $("#userName").attr('data-value'),
	  title: $("#title").val(),
	  contents: $("#contents").val(),
	  address: $("#address").val()
	}
	ajaxAddCommunity(community)
});

$("#updateBtn").click(function(event) {
  var community = {
    title: $("#title").val(),
    contents: $("#contents").val(),
    address: $("#address").val(),
    no: $("#no").val()
  }
  ajaxUpdateCommunity(community)
});


$("#deleteBtn").click(function(event) {
  ajaxDeleteCommunity($("#no").val())
});




/*댓글 버튼*/

$("#addCommentBtn").click(function(event) {
	var community = {
			commentUserNicName: $("#commentUserNicName").val(),
			comment: $("#comment").val(),
			commentRegisterDate: $("#commentRegisterDate").val()
	}
	ajaxAddCommunity(community)
});

$("#updateCommentBtn").click(function(event) {
  var community = {
			commentUserNicName: $("#commentUserNicName").val(),
			comment: $("#comment").val(),
			commentRegisterDate: $("#commentRegisterDate").val(),
            commentNo: $("#commentNo").val()
  }
  ajaxUpdateCommunity(community)
});

$("#deleteCommentBtn").click(function(event) {
  ajaxDeleteCommunity($("#commentNo").val())
});




$("#likeBtn").click(function(event) {
  var count = 0;
	  function button_onclick() {
		  count++;
		  ajaxAddLike($("#boardLike").val())
		  alert()
	  }
	});





function ajaxAddCommunity(community) {
	$.post(serverAddr + "/community/add.json", community, function(obj) {
		console.log(obj)
		var result = obj.jsonResult
		console.log(result)
		if (result.state != "success") {
	    	 alert("등록 실패입니다.")
	    	 return
	    } 
	    window.location.href = "communityApp.html"
	}, "json")
}

function ajaxLoadCommunity(no) {
	$.getJSON(serverAddr + "/community/detail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
		$("#no").val(result.data.no);
		$("#userNicName").val(result.data.userNicName);
		$("#title").val(result.data.title);
		$("#contents").val(result.data.contents);
		$("#address").val(result.data.address);
		$("#registerDate").text(result.data.registerDate2);
		$("#viewCount").text(result.data.viewCount);
	})
}

function ajaxUpdateCommunity(community) {
	$.post(serverAddr + "/community/update.json", community, function(obj) {
		var result = obj.jsonResult
		console.log(result)
		if (result.state != "success") {
			alert("변경 실패입니다.")
			return
		} 
		window.location.href = "communityApp.html"
	}, "json")
}

function ajaxDeleteCommunity() {
	$.getJSON(serverAddr + "/community/delete.json", {
		no: no,
	}, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("삭제 실패입니다.")
			return
		}
		location.href = "communityApp.html"
	})
}





















//_______________________________________________[댓글]기능_____________________________________________________//



function ajaxCommentCommunityList() {
	$.getJSON(serverAddr + "/communityComment/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var contents = ""
	    var arr = result.data
	    if (location.search.startsWith("?")) { // 예) ?no=xxx
	        var no = location.search.split("=")[1];
	      
        for (var i in arr) {
          if (no == arr[i].commentNo) {
        	contents += "<tr>" +
          	"<td>" + arr[i].commentUserNicName + "</td>" + 
            "<td>" + arr[i].comment + "</td>" +
            "<td>" + arr[i].commentRegisterDate + "</td>" + 
            "<td>" + arr[i].commentRegisterDate + "</td>" + 
            ""
            "</tr>"		
        	}		
        }
	    }
    
	    $("#CommunityCommentTable tbody").html(contents)
	   
    })
}  

/*
function ajaxCommentCommunityList2() {
	$.getJSON(serverAddr + "/commnetCommunity/list.json", function(obj) {
		var result = obj.jsonResult
		console.log(result)
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    	 
	    }
	    var template = Handlebars.compile($('#tdTemplateText2').html())
	    $("#CommunityCommentTable2 tbody").html(template(result))
	    
    })
}
*/


//_______________________________________________[로그인]기능_____________________________________________________//


function ajaxLoginUser() {
	$.getJSON(serverAddr + "/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
	    if (result.state != "success") { // 로그아웃 상태일 경우 로그인 상태와 관련된 태그를 감춘다.
	         $('.my-login').css("display", "none")
	         return
	    }
	      
	    $('.my-logout').css("display", "none")
	      
	    $("#userName").text(result.data.name);
    })
}





