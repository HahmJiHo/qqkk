$("#loginBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})

$("#logoutBtn").click(function (e) {
	location.href = "../index_h.html"
})



/*
function ajaxGroupList() {
	$.getJSON(serverAddr +"/group/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.")
			return
		} 

		// 태그 를 추가한후 제목에 대해 click 리스너를 추가한다.
		$(".groupTitleLink > a").click(function (e) {
			window.location.href = "../group/makeSc.html?no=" + $(this).attr("data-no")
		})           
	})
}
 */

function ajaxGroupName() {
	$('.wrap').removeClass('display-none');
	$('body').css({"background" : "#0d8aa5", "z-index" : "99999"})
	$.getJSON(serverAddr +"/group/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = ""
			var arr = result.data
			var template = Handlebars.compile($('#groupNameTemplateText').html())

			for (var i in arr) {		

				if (location.search.startsWith("?")) {
					var no = location.search.split("=")[1];
					if (arr[i].no == no) {
						contents = template(arr[i])
					}
				}

			}
		$(".make-text").append(contents)
		$('.wrap').addClass('display-none');	    
	    $('body').css({"background" : "" ,"z-index" : "0"})
	})
}
function ajaxmyScheduleIng() {
	$.getJSON(serverAddr +"/group/list.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.1111")
			return
		} 
		var contents = "";
		var arr = result.data;
		function getFormatDate(date){
			var year = date.getFullYear();                                 
			var month = (1 + date.getMonth());                    
			month = month >= 10 ? month : '0' + month;  
			var day = date.getDate();                                       
			day = day >= 10 ? day : '0' + day;                           
			return  year + '-' + month + '-' + day;
		}
		var date = new Date();
		date = getFormatDate(date);
		
		var template = Handlebars.compile($('#myScheduleList').html());
		$('.my-schedhule-List').each(function(i, e){			
			for (var i in arr) {	
				if (arr[i].no == $(this).attr('data-no')) {			
					if (arr[i].start > date) {
						$(this).append(template(arr[i]))
					}
				}
			}
				
		});
	})
}

