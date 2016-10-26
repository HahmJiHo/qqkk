var eventLocationList;
var mySchedulList;

$("#loginBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

$("#logoutBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});


function ajaxgetAreaCode() {
	$.getJSON(areaCodeAddr, function(obj) {
		var result = obj.response.body.items
		var arr = result.item
		console.log(arr)
	})
}


function computeDday(start) {
	 var now = new Date();
	 var then = new Date(start);
	 gap = now.getTime() - then.getTime();
	 gap = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
	 if (gap < 0) {
		 return "이미 지난 스케줄입니다."
	 } else {
		 return gap
	 }
}

function ajaxMyScheduleLoad(no) {
	$.getJSON(serverAddr + "/myschedule/detailsc?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		}
		
		$("#no").val(result.data.no);
		$("#title").val(result.data.title);
		$("#contents").val(result.data.contents);
		$("#createdDate").text(result.data.createdDate2);
		$("#viewCount").text(result.data.viewCount);
	})
}

function ajaxWeather(lat, lon) {
	console.log(lat, lon);
	$.getJSON(skPlanetWeather, {
		"lat": lat,
		"lon": lon,
		"version": "1",
		"appKey": "6e62a500-8f2f-36d6-ac6d-2fcc4b4a5a23"
	}, function(data) {
		var arr = data.result
		if (arr.message != "성공") {
				alert("서버에서 데이터를 가져오는데 실패했습니다.")
				return
			
		}
		var calendarWeather = data.weather
		console.log(calendarWeather.minutely[0])
		$(".weather-humidity").html(calendarWeather.minutely[0].humidity)
		$(".weather-windspeed").html(calendarWeather.minutely[0].wind.wspd)
		$(".weather-sky").html(calendarWeather.minutely[0].sky.name)
		$(".weather-temperature-tc").html(calendarWeather.minutely[0].temperature.tc)
		//$(".temperature-tmax").html(calendarWeather.minutely[0].temperature.tmax)
		//$(".temperature-tmin").html(calendarWeather.minutely[0].temperature.tmin)
		$(".timeObservation").html(calendarWeather.minutely[0].timeObservation)
		
		/*
		for (var i in arr) {
			if (arr[i].weather)
				contents += arr[i]
		}*/
	})
}

function ajaxEventLocationList() {
	$.getJSON(serverAddr + '/myschedule/listWeather.json', function(obj){
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		
		eventLocationList = result.data;
		console.log(eventLocationList)
		
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
