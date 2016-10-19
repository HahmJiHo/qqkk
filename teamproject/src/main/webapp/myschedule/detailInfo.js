$("#loginBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

$("#logoutBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});


function ajaxMyScheduleList() {
	$.getJSON(serverAddr + "/myschedule/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
		var contents = ""
		var arr = result.data
		console.log(arr)
		console.log($("#user").text())
		var template = Handlebars.compile($('#divTemplateText').html())
	    for (var i in arr) {
	    	if ($("#user").attr('data-value') == arr[i].no){
	    		contents += template(arr[i])
	    	}
	    }
	    
	    $("#schedule").html(contents)
	    
	    $(".titleLink").click(function(event) {
		    window.location.href = "MySchedule.html?no=" + $(this).attr("data-no")
	    })
    })
}


function ajaxLoginUser() {
	   $.getJSON(serverAddr +"/auth/loginUser.json", function(obj) {
	      var result = obj.jsonResult
	      if (result.state != "success") {
	         $(".my-login").css("display", "none")
	         return
	      }    
	      //$("#userEmail").text(result.data.email);
	      $(".my-logout").css("display", "none")
	      $("#user").text(result.data.name)
	      $("#user").attr('data-value', result.data.no)
	      $("#userSc").attr('data-value', result.data.no)
	   })
	}
